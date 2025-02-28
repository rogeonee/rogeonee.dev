import { OrigLink as Link } from '../layout/link';
import { experiences } from '@/content/experiences';

export default function Experience() {
  return (
    <section>
      <div className="mx-auto max-w-6xl w-full py-40 px-5 md:px-0">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Work Experience<span className="text-accent">.</span>
        </h2>

        <ul className="flex flex-col mt-5">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mt-5">
              <Link href={exp.link} override={true}>
                <div className="group flex flex-col sm:flex-row justify-between w-full">
                  <h3 className="font-poppins font-medium text-lg sm:text-xl font-semibold group-hover:underline">
                    {exp.company}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:gap-4 justify-between w-full sm:max-w-fit">
                    <h4 className="font-poppins font-medium text-lg sm:text-xl text-gray-dark mt-1 min-w-fit">
                      {exp.position}
                    </h4>
                    <h5 className="font-poppins font-medium text-lg sm:text-xl text-gray-light mt-1 min-w-fit">
                      {exp.timePeriod}
                    </h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
