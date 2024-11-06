import About    from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills   from "../Skills/Skills.jsx";
import Timeline from "../Timeline/Timeline.jsx";
import Tools    from "../Tools/Tools.jsx";

export default function Main() {
  return (
    <main className="container">
      <About />
      <div className="divider divider-primary"></div>
      <Skills />
      <div className="divider divider-primary"></div>
      <Tools />
      <div className="divider divider-primary"></div>
      <Projects />
      <div className="divider divider-primary"></div>
      <Timeline />
    </main>
  );
}
