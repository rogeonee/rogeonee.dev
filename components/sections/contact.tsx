import { OrigLink as Link } from '../layout/link';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/rogeonee' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/egor-bezriadin/' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary text-primary">
      <div className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Let’s connect<span className="text-accent">.</span>
        </h2>

        <div className="flex flex-col md:flex-row mt-14 gap-12">
          <div className="w-full md:max-w-md">
            <p className="font-poppins font-medium text-lg text-inter">
              I’m always open to collaborating on new projects or helping with
              website redesigns. If you need any help within my expertise, I’m
              here for you. You can reach out to me through email or connect
              with me on LinkedIn to discuss what’s on your mind.
            </p>
            <p className="font-poppins font-medium text-lg text-inter mt-4">
              Let’s build something awesome together!
            </p>
          </div>

          <div className="w-full md:w-auto md:ml-auto text-center md:text-right">
            <div className="flex flex-col h-full items-center md:items-end">
              <ul className="flex flex-col gap-y-4 items-center md:items-end">
                {socialLinks.map((link, idx) => (
                  <li key={idx} className="group text-center md:text-right">
                    <Link
                      href={link.url}
                      override={true}
                      className="flex items-center justify-center md:justify-end gap-2 text-gray-extralight hover:text-primary font-medium text-lg"
                    >
                      {link.name}
                      <ArrowUpRight
                        className="group-hover:scale-110 origin-bottom-left transition"
                        width={16}
                        height={16}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 md:mt-auto">
                <p className="uppercase text-lg font-semibold mb-2 text-gray-extralight font-poppins">
                  email me directly
                </p>
                <Link
                  href="mailto:egor.bezriadin.01@gmail.com"
                  className="text-primary font-medium text-lg"
                  override={true}
                >
                  egor.bezriadin.01@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
