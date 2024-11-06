import {
  IoLogoGithub as Github,
  IoLogoLinkedin as Linkedin,
  IoMailSharp as Mail,
} from "react-icons/io5";

export default function About() {
  return (
    <section className="my-28 mb-20" id="about">
      <section className="flex flex-col gap-6">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl text-center font-monsterate">
          Hi I&apos;am <span className="text-primary">Kyle Myre</span>
        </h1>
        <p className="lg:text-center text-justify lg:text-xl text-xl sm: font-inconsolata">
          Good day. I am Mohamed Lafrouh, also known as Kyle Myre. I am 20 years
          of age and I am a full stack web developer/software developer. I have
          studied web development for a number of years and have made a few
          contacts in my development career.
        </p>
        <div className="flex lg:flex-row flex-col gap-2 justify-center font-inconsolata text-2xl font-semibold">
          <a className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all">
            <Linkedin  className="size-7" /> <span>Linkedin</span>
          </a>
          <a
            className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all"
            href="https://github.com/Kyle-Myre"
          >
            <Github className="size-7" />
            <span>Github</span>
          </a>
          <a
            className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all"
            href="mailto:simoarmymen9@hotmail.com"
          >
            <Mail className="size-7" /> <span>Mail</span>
          </a>

        </div>
      </section>
    </section>
  );
}
