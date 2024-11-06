/**
 * @function Skill
 * @description A function that renders a Skill component.
 * @param {Object} props The props object.
 * @prop {String} name The name of the skill.
 * @prop {JSX.Element} icon The icon of the skill.
 * @returns {JSX.Element} A JSX element representing the component.
 * @example
 * <Skill name="HTML" icon={<Html />} />
 */
export default function Skill({ name, icon }) {
  return (
    <div className="bg-primary text-white h-52 flex flex-col justify-center items-center align-middle gap-1 transition-all duration-300 hover:opacity-80 shadow-md">
      {icon}
      <h4 className="text-2xl font-nunito">{name}</h4>
    </div>
  );
}
