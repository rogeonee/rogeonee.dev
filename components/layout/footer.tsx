import { OrigLink as Link } from './link';

export default function Footer() {
  return (
    <footer className="w-full px-5 sm:px-0 pt-8 pb-10 sm:pb-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-5 sm:mb-0 font-poppins text-gray-dark font-medium w-full sm:w-auto">
          <p>Created by Egor 🐦‍⬛</p>
          <p>
            Built with
            <Link
              href="https://astro.build"
              override={true}
              className="underline text-gray-dark hover:text-black transition-colors"
            >
              Astro 🚀
            </Link>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-5 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end">
          <Link
            href="https://github.com/rogeonee"
            override={true}
            className="underline text-gray-dark hover:text-black transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/egor-bezriadin/"
            override={true}
            className="underline text-gray-dark hover:text-black transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
