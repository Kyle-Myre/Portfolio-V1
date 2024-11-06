import { SiVisualstudiocode as Vsc } from "react-icons/si";
import { SiPostman as PostMan } from "react-icons/si";
import { SiGoogledocs as Docs } from "react-icons/si";
import { SiDatagrip as DataGrip } from "react-icons/si";
import { FaChrome as Chrome } from "react-icons/fa";
import { FaFigma as Figma } from "react-icons/fa";

import Tool from "./Tool";

/**
 * @function Tools
 * @description A function that renders a section with tools icons.
 * @param {Object} props The props object.
 * @returns {JSX.Element} A JSX element representing the component.
 * @example
 * <Tools />
 */
export default function Tools() {
  const tools = [
    { name: "Visual Studio Code", icon: <Vsc className="size-8" /> },
    { name: "Postman", icon: <PostMan className="size-8" /> },
    { name: "Google Docs", icon: <Docs className="size-8" /> },
    { name: "Chrome", icon: <Chrome className="size-8" /> },
    { name: "Data Grip", icon: <DataGrip className="size-8" /> },
    { name: "Figma", icon: <Figma className="size-8" /> },
  ];
  return (
    <section className="container my-16 mb-20">
      <h1 className="text-4xl text-center font-monsterate my-16 mb-16">
        Tools
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-12 mb-12 font-inconsolata">
        {tools.map((skill, key) => {
          return <Tool key={key} {...skill} />;
        })}
      </div>
    </section>
  );
}
