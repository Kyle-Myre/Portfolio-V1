import { IoLogoHtml5 as Html } from "react-icons/io5";
import { IoLogoJavascript as Javascript } from "react-icons/io5";
import { IoLogoPython as Python } from "react-icons/io5";
import { FaLaravel as Laravel } from "react-icons/fa6";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { IoLogoDocker as Docker } from "react-icons/io5";
import { GrMysql as MySQL } from "react-icons/gr";
import { SiMongodb as MongoDB } from "react-icons/si";
import { IoLogoCss3 as Css } from "react-icons/io5";
import { FaPhp as Php } from "react-icons/fa";
import { TbApi as Rest } from "react-icons/tb";




import Skill from "./Skill";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <Html className="size-10" /> },
    { name: "Javascript", icon: <Javascript className="size-10" /> },
    { name: "Python", icon: <Python className="size-10" /> },
    { name: "Laravel", icon: <Laravel className="size-10" /> },
    { name: "React", icon: <ReactIcon className="size-10" /> },
    { name: "MySQL", icon: <MySQL className="size-10" /> },
    { name: "MongoDB", icon: <MongoDB className="size-10" /> },
    { name: "CSS", icon: <Css className="size-10" /> },
    { name: "PHP", icon: <Php className="size-10" /> },
    { name: "REST", icon: <Rest className="size-10" /> },
  ];
  return (
    <section className="container my-16 mb-20">
      <h1 className="text-4xl text-center font-monsterate">Skills</h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-2 mt-12 mb-12 font-inconsolata">
        {skills.map((skill, key) => {
          return <Skill key={key} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </section>
  );
}
