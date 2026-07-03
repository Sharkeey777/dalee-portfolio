"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowClockwise, ArrowCounterClockwise, X } from "@phosphor-icons/react";
import type { Project } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

type VideoModalProps = {
  project: Project;
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

export function VideoModal({ project, activeIndex, onClose, onSelect }: VideoModalProps) {
  const video = project.videos[activeIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="video-modal-backdrop" role="dialog" aria-modal="true" aria-label={`Просмотр кейса ${project.name}`} onClick={onClose}>
      <div className="video-modal-shell" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="video-modal-close" aria-label="Закрыть">
          <X size={20} weight="bold" />
        </button>

        <div className="video-modal-grid">
          <div className={`video-frame ${video.orientation}`}>
            <video
              key={video.file}
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={assetPath(video.poster)}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onContextMenu={(event) => event.preventDefault()}
            >
              <source src={assetPath(video.file)} type="video/mp4" />
            </video>
          </div>

          <aside className="video-sidebar">
            <div className="flex items-start justify-between gap-4">
              <h3 className="video-sidebar-title">{project.name}</h3>
              {project.logo ? (
                <div className="project-logo-thumb h-12 w-12 shrink-0">
                  <Image src={assetPath(project.logo)} alt={project.name} fill sizes="48px" className="object-contain" />
                </div>
              ) : null}
            </div>

            <div className="video-nav">
              {project.videos.map((item, index) => {
                const isActive = index === activeIndex;
                const itemLabel = index === 0 ? "01" : String(index + 1).padStart(2, "0");

                return (
                  <button key={item.file} type="button" onClick={() => onSelect(index)} className={isActive ? "is-active" : ""}>
                    <strong>{itemLabel}</strong>
                    {isActive ? <ArrowClockwise size={18} weight="bold" /> : <ArrowCounterClockwise size={18} />}
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
