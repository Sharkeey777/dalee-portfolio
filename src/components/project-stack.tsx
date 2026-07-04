"use client";

import Image from "next/image";
import { cloneElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactElement } from "react";
import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { VideoModal } from "@/components/video-modal";
import type { Project, ProjectVideo } from "@/content/site";
import { assetPath } from "@/lib/asset-path";
import { posterPath, previewPath } from "@/lib/media-path";

type ProjectStackProps = {
  projects: Project[];
};

type ActiveVideoState = {
  projectSlug: string;
  videoIndex: number;
};

function PreviewVideo({ video }: { video: ProjectVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!element.src) {
            element.src = assetPath(previewPath(video.file));
            element.load();
          }
          void element.play().catch(() => undefined);
        } else {
          element.pause();
        }
      },
      { rootMargin: "80px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [video.file]);

  return <video ref={videoRef} muted loop playsInline preload="none" poster={assetPath(posterPath(video.file))} />;
}

type VideoCardProps = {
  video: ProjectVideo;
  onOpen: () => void;
  forceLandscape?: boolean;
  badge?: string;
  preview?: boolean;
};

function VideoCard({
  video,
  onOpen,
  forceLandscape = false,
  badge,
  preview = true,
}: VideoCardProps) {
  const isLandscape = forceLandscape || video.orientation === "landscape";

  return (
    <button type="button" className={`reel-card ${isLandscape ? "is-landscape" : "is-portrait"}`} onClick={onOpen}>
      <div className="reel-card-media">
        {preview ? (
          <PreviewVideo video={video} />
        ) : (
          <Image
            src={assetPath(posterPath(video.file))}
            alt=""
            fill
            sizes="(max-width: 767px) 78vw, 23rem"
            loading="lazy"
            unoptimized
          />
        )}
        <div className="reel-card-overlay" />
        {badge ? <span className="reel-card-badge">{badge}</span> : null}
      </div>

      <span className="reel-card-play reel-card-play-single">
        <Play size={18} weight="fill" />
      </span>
    </button>
  );
}

function ProjectHeader({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="project-heading-row">
      {logo ? (
        <div className="project-heading-logo">
          <Image src={assetPath(logo)} alt={name} fill sizes="72px" className="object-contain" />
        </div>
      ) : null}
      <h2 className="project-title">{name}</h2>
    </div>
  );
}

function ScrollRail({
  railId,
  direction,
  items,
}: {
  railId: string;
  direction: "left" | "right";
  items: ReactElement<VideoCardProps>[];
}) {
  const railStyle = { "--rail-duration": `${Math.max(42, items.length * 7)}s` } as CSSProperties;

  return (
    <div className="project-rail-manual">
      <div className="project-rail-controls">
        <button
          type="button"
          className="rail-control-button"
          onClick={() => document.getElementById(railId)?.scrollBy({ left: -420, behavior: "smooth" })}
          aria-label="Прокрутить влево"
        >
          <CaretLeft size={18} weight="bold" />
        </button>
        <button
          type="button"
          className="rail-control-button"
          onClick={() => document.getElementById(railId)?.scrollBy({ left: 420, behavior: "smooth" })}
          aria-label="Прокрутить вправо"
        >
          <CaretRight size={18} weight="bold" />
        </button>
      </div>

      <div id={railId} className="project-rail-window is-manual" style={{ scrollBehavior: "smooth" }}>
        <div className={`project-rail-track is-auto ${direction === "right" ? "is-reversed" : ""}`} style={railStyle}>
          <div className="project-rail-segment">{items}</div>
          <div className="project-rail-segment" aria-hidden="true">
            {items.map((item) => cloneElement(item, { preview: false }))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectStack({ projects }: ProjectStackProps) {
  const [activeVideo, setActiveVideo] = useState<ActiveVideoState | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeProject = activeVideo ? projects.find((project) => project.slug === activeVideo.projectSlug) ?? null : null;

  return (
    <>
      <div className="project-rail-shell">
        {projects.map((project) => {
          const flipVideo = project.slug === "studio-dalee" ? project.videos.find((video) => video.title === "Перевёртыш") ?? null : null;
          const forceLandscapeProject = project.slug === "domian";
          const portraitVideos = project.videos.filter(
            (video) => !forceLandscapeProject && video.orientation === "portrait" && video.title !== "Перевёртыш",
          );
          const landscapeVideos = project.videos.filter(
            (video) => forceLandscapeProject || (video.orientation === "landscape" && video.title !== "Перевёртыш"),
          );

          return (
            <motion.section
              key={project.slug}
              className="project-rail-block"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectHeader name={project.name} logo={project.logo} />

              {flipVideo ? (
                <div className="project-landscape-feature">
                  <VideoCard
                    video={flipVideo}
                    forceLandscape
                    badge="Видео перевертыш"
                    onOpen={() =>
                      setActiveVideo({
                        projectSlug: project.slug,
                        videoIndex: project.videos.findIndex((item) => item.file === flipVideo.file),
                      })
                    }
                  />
                </div>
              ) : null}

              {landscapeVideos.length > 0 ? (
                <div className={`project-landscape-grid ${project.slug === "domian" ? "is-domian" : ""}`}>
                  {landscapeVideos.map((video) => (
                    <VideoCard
                      key={`${project.slug}-${video.file}`}
                      video={video}
                      forceLandscape={forceLandscapeProject}
                      onOpen={() =>
                        setActiveVideo({
                          projectSlug: project.slug,
                          videoIndex: project.videos.findIndex((item) => item.file === video.file),
                        })
                      }
                    />
                  ))}
                </div>
              ) : null}

              {portraitVideos.length > 0 ? (
                <ScrollRail
                  railId={`rail-${project.slug}`}
                  direction={project.direction}
                  items={portraitVideos.map((video) => (
                    <VideoCard
                      key={`${project.slug}-${video.file}`}
                      video={video}
                      onOpen={() =>
                        setActiveVideo({
                          projectSlug: project.slug,
                          videoIndex: project.videos.findIndex((item) => item.file === video.file),
                        })
                      }
                    />
                  ))}
                />
              ) : null}
            </motion.section>
          );
        })}
      </div>

      {activeProject && activeVideo ? (
        <VideoModal
          project={activeProject}
          activeIndex={activeVideo.videoIndex}
          onClose={() => setActiveVideo(null)}
          onSelect={(index) => setActiveVideo({ projectSlug: activeProject.slug, videoIndex: index })}
        />
      ) : null}
    </>
  );
}
