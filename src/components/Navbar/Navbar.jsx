import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import React from "react";

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tools", href: "#tools" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
  ];
  return (
    <header className="container font-monsterate">
      <nav className="my-10 flex flex-row items-center">
        <section className="flex-1">
          <a
            className="text-3xl hover:text-primary transition-all duration-500"
            href="#"
          >
            Kyle Myre
          </a>
        </section>
        <section className="flex-2 lg:flex hidden">
          {links.map((link, key) => (
            <a
              className="mx-4 text-xl hover:text-primary transition-all duration-500"
              key={key}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </section>

        <section className="flex align-center gap-1">
          <button className="lg:hidden" onClick={() => setVisible(!visible)}>
            {!visible ? <FaBars className="size-7" /> : <RxCross2 className="size-8" />}
          </button>
          
        </section>

      </nav>
      {visible ? (
        <section className="flex flex-col justify-center lg:hidden">
          {links.map((link, key) => (
            <a
              className="text-xl hover:text-primary transition-all duration-500 mb-3"
              key={key}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </section>
      ) : null}
    </header>
  );
}
