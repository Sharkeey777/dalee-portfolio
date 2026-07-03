"use client";

import Image from "next/image";
import { useState } from "react";
import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react";
import { VideoModal } from "@/components/video-modal";
import type { Project, ProjectVideo } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

type ProjectStackProps = {
  projects: Project[];
};

type ActiveVideoState = {
  projectSlug: string;
  videoIndex: number;
};

function VideoCard({
  video,
  onOpen,
  forceLandscape = false,
  badge,
}: {
  video: ProjectVideo;
  onOpen: () => void;
  forceLandscape?: boolean;
  badge?: string;
}) {
  const isLandscape = forceLandscape || video.orientation === "landscape";

  return (
    <button type="button" className={`reel-card ${isLandscape ? "is-landscape" : "is-portrait"}`} onClick={onOpen}>
      <div className="reel-card-media">
        <video autoPlay muted loop playsInline preload="metadata" poster={assetPath(video.poster)}>
          <source src={assetPath(video.file)} type="video/mp4" />
        </video>
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
  items: React.ReactNode[];
}) {
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
        <div className={`project-rail-track is-auto ${direction === "right" ? "is-reversed" : ""}`}>
          <div className="project-rail-segment">{items}</div>
          <div className="project-rail-segment" aria-hidden="true">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectStack({ projects }: ProjectStackProps) {
  const [activeVideo, setActiveVideo] = useState<ActiveVideoState | null>(null);

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
            <section key={project.slug} className="project-rail-block">
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
            </section>
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
