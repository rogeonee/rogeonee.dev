import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight } from "./icons/arr-right";
import { ArrowLeft } from "./icons/arr-left";

const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of Project 1",
        coverImage: {
            src: "/projects/flop1.jpg",
        },
        slug: "project-1"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of Project 2",
        coverImage: {
            src: "/projects/flop2.jpg",
        },
        slug: "project-2"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of Project 3",
        coverImage: {
            src: "/projects/flop3.jpg",
        },
        slug: "project-3"
    },
];

function ProjectsCarousel() {
    const [current, setCurrent] = useState(0);

    const nextProject = () => {
        setCurrent((current + 1) % projectData.length); // Loop back to the first project
    };

    const prevProject = () => {
        setCurrent((current - 1 + projectData.length) % projectData.length); // Loop to the last project
    };

    const project = projectData[current];

    return (
        <section className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0 overflow-x-hidden">
            <header className="flex flex-col gap-y-5 sm:flex-row sm:items-center justify-between">
                <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
                    Projects<span className="text-accent">.</span>
                </h2>

                <a
                    href="/projects"
                    className="px-4 py-1.5 rounded-2xl border-2 border-gray-light text-secondary 
                            hover:border-accent focus-visible:border-accent flex items-center gap-2 pr-2.5"
                >
                    Explore more lame projects
                    <ArrowRight className="ml-1.5" width={20} height={20} />
                </a>
            </header>
        
            <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth">
                <article className="mt-20 flex-none snap-start flex w-full flex-col md:flex-row gap-10 items-center px-3">
                    <img
                        width={500}
                        height={350}
                        alt={project.title}
                        draggable={false}
                        className="rounded-2xl shadow-md w-full md:max-w-[50%] md:h-80 object-cover"
                        src={project.coverImage.src}
                    />

                    <div className="flex flex-col w-full text-left">
                        <header className="flex flex-col-reverse">
                            <h3 className="font-bold font-poppins text-4xl">{project.title}</h3>
                            <h4 className="font-semibold text-2xl">0{current + 1} —</h4>
                        </header>

                        <p className="mt-5 text-lg text-gray-light h-[150px]">{project.description}</p>

                        <hr className="border-gray-light border w-full my-10" />

                        <div className="flex gap-3 items-center justify-between">
                            <a 
                                href={`/projects/${project.slug}`}
                                className="px-4 py-1.5 rounded-2xl border-2 border-gray-light text-secondary 
                                        hover:border-accent focus-visible:border-accent flex items-center gap-2 pr-2.5"
                            >
                                View full project
                                <ArrowRight width={20} height={20} />
                            </a>

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

export default ProjectsCarousel;
