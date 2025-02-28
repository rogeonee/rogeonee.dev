export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex flex-col justify-center gap-y-10 overflow-x-hidden md:pb-0">
      <div className="px-5 md:px-0 mb-0 flex flex-col md:flex-row w-full max-w-6xl mx-auto md:items-center gap-10 md:justify-between">
        <h1 className="text-[clamp(2rem,10vw,4.5rem)] font-bold leading-tight w-full md:min-w-[530px]">
          Frontend developer
          <br />
          by day,
          <br />
          space admirer
          <br />
          by night 🚀
        </h1>
        <div className="mt-8 md:mt-0 text-base sm:text-lg md:text-lg max-w-lg w-fit font-medium font-inter text-gray-light">
          <p>
            Aspiring developer with a robust background in web and native app
            development. Proficient in TypeScript and Python, and skilled at
            integrating frontend elegance with backend functionality.
            <br />
            <br />
            Interested in cutting-edge tech, and everything that goes fast,
            either on the ground, in the air, or in orbit. Hopefully, I will say
            'Thank you JS for a Lambo!' one day! 🐂
          </p>
        </div>
      </div>
    </section>
  );
}
