import { useState } from "react";
import { Button } from "../Button.tsx";
import { Link } from "../Link.tsx";
import { ArrowRight } from "../icons/arr-right.tsx";
import { ArrowLeft } from "../icons/arr-left.tsx";
import { getCollection } from "astro:content";

const projects = await getCollection("projects");

function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length); // Loop back to the first project
  };

  const prevProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length); // Loop to the last project
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

        <Link className="max-w-fit" intent="secondary" extras="icon" href="/projects">
          See more projects
          <ArrowRight className="ml-1.5" width={20} height={20} />
        </Link>
      </header>

      <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth">
        <article className="mt-20 flex-none snap-start flex w-full flex-col md:flex-row gap-10 items-center px-3">
          <img
            width={500}
            height={350}
            alt={project.data.title}
            draggable={false}
            className="rounded-2xl shadow-md w-full md:max-w-[50%] md:h-80 object-cover"
            src={project.data.coverImage}
          />

          <div className="flex flex-col w-full text-left">
            <header className="flex flex-col-reverse">
              <h3 className="font-bold font-poppins text-4xl">{project.data.title}</h3>
              <h4 className="font-semibold text-2xl">0{current + 1} —</h4>
            </header>

            <p className="mt-5 text-lg text-gray-light h-[80px] md:h-[140px]">
              {project.data.description}
            </p>

            <hr className="border-gray-light border w-full my-10" />

            <div className="flex gap-3 items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
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
                <Button aria-label="Next Project" onClick={nextProject} size="square">
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

export default ProjectsCarousel;
