'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/orig-button';
import { OrigLink as Link } from '../layout/link';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/content/projects';

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0 overflow-x-hidden"
    >
      <header className="flex flex-col gap-y-5 sm:flex-row sm:items-center justify-between">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Projects<span className="text-accent">.</span>
        </h2>
        <Link
          className="max-w-fit"
          intent="secondary"
          extras="icon"
          href="https://github.com/rogeonee"
        >
          See more projects
          <ArrowRight className="ml-1.5" width={20} height={20} />
        </Link>
      </header>

      <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth">
        <article className="mt-20 flex-none snap-start flex w-full flex-col md:flex-row gap-10 items-center px-3">
          <Image
            width={500}
            height={350}
            alt={project.title}
            draggable={false}
            className="rounded-2xl shadow-md w-full md:max-w-[50%] md:h-80 object-cover"
            src={project.coverImage}
            loading="lazy"
          />

          <div className="flex flex-col w-full text-left">
            <header className="flex flex-col-reverse">
              <h3 className="font-bold font-poppins text-4xl">
                {project.title}
              </h3>
              <h4 className="font-semibold text-2xl">0{current + 1} —</h4>
            </header>

            <p className="mt-5 text-lg text-gray-light h-full md:h-[140px]">
              {project.description}
            </p>

            <hr className="border-gray-light border w-full my-10" />

            <div className="flex gap-3 items-center justify-between">
              <Link
                href={project.link}
                className="max-w-fit"
                extras="icon"
                intent="secondary"
              >
                View full project
                <ArrowRight width={20} height={20} />
              </Link>

              <div className="flex gap-x-1">
                <Button
                  aria-label="Previous Project"
                  onClick={prevProject}
                  intent="secondary"
                  size="square"
                >
                  <ArrowLeft width={20} height={20} />
                </Button>
                <Button
                  aria-label="Next Project"
                  onClick={nextProject}
                  size="square"
                >
                  <ArrowRight width={20} height={20} />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
