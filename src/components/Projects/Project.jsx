/**
 * @function Project
 * @description A function that renders a Project component.
 * @param {Object} props The props object.
 * @prop {String} title The title of the project.
 * @prop {String} description The description of the project.
 * @prop {String} type The type of the project.
 * @prop {Array<String>} technologies The technologies used in the project.
 * @prop {String} link The link to the project.
 * @returns {JSX.Element} A JSX element representing the component.
 * @example
 * <Project
 *   title="Pole-IT"
 *   description="E-Commerce Web Application Using Filament and Laravel Framework"
 *   type="E-Commerce App & Admin App"
 *   technologies={["Filament", "Php", "Laravel", "Html", "Sass", "Javascript", "JQuery"]}
 *   link="https://github.com/Kyle-Myre/Pole-IT"
 * />
 */
export default function Project({
  title,
  description,
  type,
  technologies,
  link,
}) {
  return (
    <div className="w-full border-dashed border-2 border-primary p-4">
      <a
        className="lg:text-3xl text-xl text-start mb-4 font-inconsolata text-primary btn"
        href={link}
      >
        {title}
      </a>
      <p className="text-xl">{description}</p>
      <p className="mb-4 lg:text-xl text-sm">
        <span className="text-primary font-semibold font-monsterate">
          Type:
        </span>{" "}
        {type}
      </p>{" "}
      <ul className="">
        {technologies.map((item, index) => (
          <li
            key={index}
            className="badge badge-primary text-white lg:text-xl text-sm font-inconsolata mx-1"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
