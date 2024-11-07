import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { IoIosSunny as Light } from "react-icons/io";
import { IoMdMoon as Dark } from "react-icons/io";

import { useState , useEffect } from "react";

export default function Navbar() {
  
  const [visible, setVisible] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lemonade"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("forest");
    } else {
      setTheme("lemonade");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      .setAttribute("data-theme", localTheme);
  }, [theme]);

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
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "lemonade" ? false : true}
              onChange={handleToggle}
            />
            <Dark className="size-7  swap-on" />
            <Light className="size-7 swap-off" />
          </label>
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
            {!visible ? (
              <FaBars className="size-7" />
            ) : (
              <RxCross2 className="size-8" />
            )}
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
