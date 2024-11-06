import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "Pole-IT",
      description:
        "E-Commerce Wep Application Using Filament and Laravel Framework",

      type: "E-Commerce App & Admin App",
      technologies: [
        "Filament",
        "Php",
        "Laravel",
        "Html",
        "Sass",
        "Javascript",
        "JQuery",
      ],
      link : "https://github.com/Kyle-Myre/Pole-IT",
    },
    {
      title: "TSMS",
      description:
        "A CRUD Web Application Using Filament and Laravel Framework",

      type: "Web Application & Admin App",
      technologies: ["Filament", "Laravel" , "Tailwind"],
      link : "https://github.com/Kyle-Myre/TSMS",
    },
    {
      title: "Inventory Managment System",
      description:
        "A CRUD Web Application Using Filament and Laravel Framework",

      type: "Web Application & Admin App",
      technologies: ["Laravel", "Filament", "Tailwind"],
      link : "https://github.com/Kyle-Myre/Inventory-Management-System",
    },
    {
      title: "Stable Diffusion UI",
      description:
        "A Python Web Application Using Hugging Face , Streamlit Library and Pytorch",

      type: "Web Application",
      technologies: ["Streamlit", "Hugging Face", "Pytorch"],
      link : "https://github.com/Kyle-Myre/StableDiffusionUI",
    },
  ];
  return (
    <section className="container my-16 mb-20">
      <h1 className="text-4xl text-center font-monsterate">Projects</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:grid-cols-1 mt-12 mb-12">
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </section>
  );
}
