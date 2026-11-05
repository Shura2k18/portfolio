'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/constants/projects';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-white">
          {lang === 'ua' ? 'Проєкт не знайдено' : 'Project not found'}
        </h1>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          {lang === 'ua' ? 'На головну' : 'Back to home'}
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* Кнопка "Назад" */}
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
      >
        ← {lang === 'ua' ? 'Назад до проєктів' : 'Back to projects'}
      </Link>

      {/* Заголовок та шапка проєкту */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge variant="accent">{project.category}</Badge>
          <span className="font-mono text-xs text-zinc-500">{project.id}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">{project.title[lang]}</h1>
        <p className="text-lg text-zinc-400">{project.description[lang]}</p>
      </div>

      {/* Кнопки дій */}
      <div className="mt-6 flex flex-wrap gap-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-700"
          >
            GitHub Repository ↗
          </a>
        )}
      </div>

      {/* БЛОК 1: ГОЛОВНА ДЕМОНСТРАЦІЯ ( Hero Video / Image ) */}
      <div className="mt-10 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 sm:p-3">
        {project.videoUrl ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-950">
            <video
              src={project.videoUrl}
              poster={project.coverImage}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
        ) : project.coverImage ? (
          <div
            className="relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(project.coverImage || null)}
          >
            <Image
              src={project.coverImage}
              alt={project.title[lang]}
              width={1200}
              height={630}
              unoptimized={project.coverImage.endsWith('.gif')}
              className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.01]"
              priority
            />
          </div>
        ) : (
          /* ПЛЕЙСХОЛДЕР */
          <div className="flex h-72 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-800 bg-zinc-950/50 p-6 text-center sm:h-96">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              🎬
            </div>
            <p className="text-sm font-semibold text-zinc-300">
              {lang === 'ua' ? 'Головне демо запис інтерфейсу' : 'Main Interface Demo'}
            </p>
          </div>
        )}
      </div>

      {/* Ключові фічі */}
      <div className="mt-12 rounded-xl border border-zinc-900 bg-zinc-900/30 p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          {lang === 'ua' ? 'Ключові можливості' : 'Key Features'}
        </h2>
        <ul className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{feature[lang]}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* БЛОК 2: ГАЛЕРЕЯ СКРІНШОТІВ ТА МЕХАНІК */}
      <div className="mt-12 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            {lang === 'ua' ? 'Огляд інтерфейсу та механік' : 'Interface & Gameplay Showcase'}
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            {lang === 'ua'
              ? 'Натисніть на зображення, щоб збільшити'
              : 'Click any image to enlarge view'}
          </p>
        </div>

        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(imgSrc)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 p-1.5 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-950">
                  <Image
                    src={imgSrc}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={imgSrc.endsWith('.gif')}
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between px-1 text-xs text-zinc-400">
                  <span className="font-mono text-[11px] text-zinc-500">
                    {imgSrc.endsWith('.gif') ? '⚡ Live Demo' : `📷 Frame ${idx + 1}`}
                  </span>
                  <span className="text-zinc-500 transition-colors group-hover:text-emerald-400">
                    {lang === 'ua' ? 'Збільшити ↗' : 'Enlarge ↗'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* БЛОК 3: МОБІЛЬНА АДАПТИВНІСТЬ */}
      {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
        <div className="mt-14 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📱</span>
              <h2 className="text-xl font-bold text-white">
                {lang === 'ua' ? 'Мобільна адаптивність' : 'Mobile & Responsive Experience'}
              </h2>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {lang === 'ua'
                ? 'Адаптація інтерфейсу під компактні екрани смартфонів'
                : 'Fully responsive UI tailored for mobile screens'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
            {project.mobileScreenshots.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(imgSrc)}
                className="group relative w-full max-w-[240px] cursor-pointer overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-950 p-2 shadow-xl transition-all hover:border-emerald-500/50 hover:shadow-emerald-500/10"
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src={imgSrc}
                    alt={`Mobile screenshot ${idx + 1}`}
                    fill
                    sizes="240px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-center text-xs text-zinc-400 transition-colors group-hover:text-emerald-400">
                  {lang === 'ua' ? 'Мобільний вигляд ↗' : 'Mobile View ↗'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Стек технологій */}
      <div className="mt-14 border-t border-zinc-900 pt-6">
        <h3 className="mb-3 font-mono text-xs tracking-wider text-zinc-500 uppercase">
          {lang === 'ua' ? 'Використаний стек' : 'Technologies Used'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/80 text-lg text-white hover:bg-zinc-800"
            >
              ✕
            </button>
            <div className="relative max-h-[85vh] max-w-full overflow-auto">
              <Image
                src={selectedImage}
                alt="Enlarged screenshot"
                width={1440}
                height={900}
                unoptimized={selectedImage.endsWith('.gif')}
                className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
