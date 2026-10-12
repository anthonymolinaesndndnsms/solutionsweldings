"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project, ProjectPhoto } from "@/lib/projects";

function StageBadge({ stage }: { stage: string }) {
  const rendering = stage === "Design Rendering";
  return (
    <span
      className={`absolute top-3 left-3 px-2.5 py-1 rounded text-[10.5px] font-bold uppercase tracking-[0.14em] ${
        rendering ? "bg-amber-400 text-ink-900" : "bg-steel-950/80 text-chrome-100"
      }`}
    >
      {stage}
    </span>
  );
}

/**
 * One project: the finished photo large, the rest of the sequence beneath it,
 * and a lightbox so the photos can be seen at full size.
 */
export function ProjectGallery({ project }: { project: Project }) {
  const photos: ProjectPhoto[] = [project.featured, ...project.sequence];
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (by: number) => setOpen((i) => (i === null ? i : (i + by + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const featured = project.featured;
  const portrait = featured.height > featured.width;
  const current = open === null ? null : photos[open];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(0)}
        className="group relative block w-full aspect-[16/10] rounded-lg overflow-hidden bg-steel-900 cursor-zoom-in"
        aria-label={`View ${project.title} photos, ${featured.stage}`}
      >
        <Image
          src={featured.src}
          alt={`${project.title}, ${featured.stage.toLowerCase()}`}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          // Portrait photos are shown whole on the dark frame rather than
          // cropped to a sliver.
          className={`${portrait ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.015]`}
        />
        <StageBadge stage={featured.stage} />
      </button>

      {project.sequence.length > 0 && (
        <div className="mt-6">
          <h4 className="text-[10.5px] font-bold tracking-[0.2em] text-ink-400 uppercase mb-3">
            {project.sequence.some((p) => /before|during/i.test(p.stage))
              ? "Construction sequence"
              : "More photos"}
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.sequence.map((photo, i) => (
              <li key={photo.src}>
                <button
                  type="button"
                  onClick={() => setOpen(i + 1)}
                  className="group relative block w-full aspect-[4/3] rounded overflow-hidden bg-steel-800 cursor-zoom-in"
                  aria-label={`View ${project.title} photo, ${photo.stage}`}
                >
                  <Image
                    src={photo.src}
                    alt={`${project.title}, ${photo.stage.toLowerCase()}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <StageBadge stage={photo.stage} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Dialog.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/90" />
          <Dialog.Content className="fixed inset-0 z-[90] flex flex-col items-center justify-center p-4 sm:p-10 outline-none">
            <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
            <Dialog.Description className="sr-only">
              Photo {open === null ? 0 : open + 1} of {photos.length}
            </Dialog.Description>

            {current && (
              <div className="relative w-full h-full max-w-6xl">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={`${project.title}, ${current.stage.toLowerCase()}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            )}

            {current && (
              <p className="mt-4 text-center text-[13px] text-chrome-200">
                <span className="font-semibold text-white">{current.stage}</span>
                <span className="text-chrome-500"> · </span>
                {project.title}
                <span className="text-chrome-500">
                  {" "}
                  · {(open ?? 0) + 1} of {photos.length}
                </span>
              </p>
            )}

            <Dialog.Close
              className="absolute top-4 right-4 p-2 rounded text-chrome-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </Dialog.Close>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded text-chrome-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded text-chrome-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
