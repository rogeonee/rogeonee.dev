export default function About() {
  return (
    <section id="about" className="bg-secondary text-primary">
      <div className="mx-auto max-w-6xl w-full py-40 px-5 md:px-0">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          About me<span className="text-accent">.</span>
        </h2>

        <div className="max-w-xl font-medium">
          <p className="font-poppins font-medium text-lg sm:text-xl mt-10">
            Hey, I'm Egor! A software developer, and a student in Kelowna, BC at
            UBC Okanagan. I moved here almost 4 years ago from Russia, and I've
            been studying computer science ever since. Now it's my final year
            here, and I'm rapidly expanding my skillset within web and mobile
            development leveraging React and React Native.
          </p>
        </div>
      </div>
    </section>
  );
}
