import React from 'react';

const skills = [
  {
    header: 'Frontend',
    list: 'TypeScript\nJavaScript\nReact\nReact Native\nNext.js\nTailwind CSS',
  },
  {
    header: 'Backend',
    list: 'Python\nDjango\nNode.js\nPostgreSQL\nFirebase\nREST APIs',
  },
  {
    header: 'Other',
    list: 'Git & GitHub\nExpo\nDocker\nC#\nFigma\nAgile',
  },
];

export default function Skills() {
  return (
    <section className="bg-secondary text-primary">
      <div className="mx-auto max-w-6xl w-full py-40 px-5 md:px-0">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          My skills<span className="text-accent">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32 w-full">
          {skills.map((item, idx) => {
            const allSkills = item.list.split('\n').filter(Boolean);

            return (
              <div key={idx}>
                <h3 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold lowercase md:h-40">
                  <span className="inline-block w-[50px] sm:w-[73px] text-start">
                    0{idx + 1}
                  </span>
                  — {item.header}
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 max-w-md">
                  {allSkills.map((skill, idx) => {
                    return (
                      <li
                        key={idx}
                        className="font-poppins font-medium text-lg sm:text-xl"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
