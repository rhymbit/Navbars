import ReactLogoIcon from "./assets/react.svg";
import MenuIcon from "./assets/menu.svg";
import CaretDownIcon from "./assets/caret-down.svg";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-800 text-slate-100 flex flex-col items-start gap-10 md:gap-0 md:flex-row md:justify-around md:items-center p-6">
      <Logo />

      {/* Desktop Nav Items */}
      <DesktopNavItems />

      <GetStartedButton />

      {/* Mobile Nav Items*/}
      <MobileNavItems />
    </nav>
  );
}

const Logo = () => {
  const onHamburgerClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const mobileNavItems = document.querySelector("#mobile-nav-items");

    if (mobileNavItems) {
      const buttonName = e.currentTarget.name;
      if (buttonName == "menu") {
        e.currentTarget.name = "close";
        mobileNavItems.classList.remove("left-[-100%]");
        mobileNavItems.classList.add("left-[-5%]");
      } else {
        e.currentTarget.name = "menu";
        mobileNavItems.classList.remove("left-[-5%]");
        mobileNavItems.classList.add("left-[-100%]");
      }
    }
  };

  return (
    <div className="flex justify-between items-center w-full md:w-auto">
      <div className="flex gap-2 md:cursor-pointer select-none">
        <img src={ReactLogoIcon} alt="React Logo" width={45} height={45} />
        <span className="text-3xl font-semibold tracking-wider hover:text-cyan-400 duration-500 active:scale-90">
          NAVBAR
        </span>
      </div>
      <button
        name="menu"
        className="md:hidden"
        onClick={(e) => onHamburgerClick(e)}
      >
        <img src={MenuIcon} alt="Menu Icon" width={30} height={30} />
      </button>
    </div>
  );
};

const GetStartedButton = () => {
  return (
    <button
      name="get-started"
      className="hidden md:block px-4 py-2 bg-sky-400 font-semibold text-md rounded-md active:scale-90 duration-500"
    >
      GET STARTED
    </button>
  );
};

const DesktopNavItems = () => {
  return (
    <ul className="hidden md:flex gap-10 relative">
      <li className="flex flex-col gap-4 group">
        <a
          href="#"
          className="flex gap-1 items-center text-xl font-semibold hover:text-cyan-400 duration-500"
        >
          HOME
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
        <div className="absolute w-[40%] bg-slate-800 p-5 top-[28px] left-[-9px] hidden group-hover:grid gap-5 text-slate-300 rounded-b-lg duration-500">
          <a href="#" className="hover:text-cyan-400 duration-500">
            Home 1
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Home 2
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Home 3
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Home 4
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Home 5
          </a>
        </div>
      </li>

      <li className="flex flex-col gap-4 group">
        <a
          href="#"
          className="flex gap-1 items-center text-xl font-semibold hover:text-cyan-400 duration-500"
        >
          ABOUT
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
        <div className="absolute w-[40%] bg-slate-800 p-5 top-[28px] left-[100px] hidden group-hover:grid gap-5 text-slate-300 rounded-b-lg duration-500">
          <a href="#" className="hover:text-cyan-400 duration-500">
            About 1
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            About 2
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            About 3
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            About 4
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            About 5
          </a>
        </div>
      </li>

      <li className="flex flex-col gap-4 group">
        <a
          href="#"
          className="flex gap-1 items-center text-xl font-semibold hover:text-cyan-400 duration-500"
        >
          SUPPORT
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
        <div className="absolute w-[40%] bg-slate-800 p-5 top-[28px] left-[240px] hidden group-hover:grid gap-5 text-slate-300 rounded-b-lg duration-500">
          <a href="#" className="hover:text-cyan-400 duration-500">
            Support 1
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Support 2
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Support 3
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Support 4
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Support 5
          </a>
        </div>
      </li>

      <li className="flex flex-col gap-4 group">
        <a
          href="#"
          className="flex gap-1 items-center text-xl font-semibold hover:text-cyan-400 duration-500"
        >
          BLOGS
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
        <div className="absolute w-[40%] bg-slate-800 p-5 top-[28px] left-[390px] hidden group-hover:grid gap-5 text-slate-300 rounded-b-lg duration-500">
          <a href="#" className="hover:text-cyan-400 duration-500">
            Blog 1
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Blog 2
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Blog 3
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Blog 4
          </a>
          <a href="#" className="hover:text-cyan-400 duration-500">
            Blog 5
          </a>
        </div>
      </li>
    </ul>
  );
};

const MobileNavItems = () => {
  return (
    <ul
      id="mobile-nav-items"
      className="md:hidden flex flex-col gap-y-10 absolute w-full h-full overflow-y-scroll bg-slate-800 top-[80px] left-[-100%] pl-20 py-12 transition-all duration-300"
    >
      <li>
        <a
          href="#"
          className="flex gap-1 text-xl font-semibold hover:text-cyan-400 duration-500"
          onClick={() => {
            const homeNavItems = document.getElementById("home-nav-items");
            if (homeNavItems.classList.contains("hidden")) {
              homeNavItems.classList.remove("hidden");
              homeNavItems.classList.add("grid");
            } else {
              homeNavItems.classList.remove("grid");
              homeNavItems.classList.add("hidden");
            }
          }}
        >
          HOME
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="mt-1"
          />
        </a>
        <div id="home-nav-items" className="hidden gap-5 p-6 text-lg">
          <a href="#">Home 1</a>
          <a href="#">Home 2</a>
          <a href="#">Home 3</a>
          <a href="#">Home 4</a>
          <a href="#">Home 5</a>
        </div>
      </li>

      <li>
        <a
          href="#"
          className="flex gap-1 text-xl font-semibold hover:text-cyan-400 duration-500"
          onClick={() => {
            const homeNavItems = document.getElementById("about-nav-items");
            if (homeNavItems.classList.contains("hidden")) {
              homeNavItems.classList.remove("hidden");
              homeNavItems.classList.add("grid");
            } else {
              homeNavItems.classList.remove("grid");
              homeNavItems.classList.add("hidden");
            }
          }}
        >
          ABOUT
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="mt-1"
          />
        </a>
        <div id="about-nav-items" className="hidden gap-5 p-6 text-lg">
          <a href="#">About 1</a>
          <a href="#">About 2</a>
          <a href="#">About 3</a>
          <a href="#">About 4</a>
          <a href="#">About 5</a>
        </div>
      </li>

      <li>
        <a
          href="#"
          className="flex gap-1 text-xl font-semibold hover:text-cyan-400 duration-500"
          onClick={() => {
            const homeNavItems = document.getElementById("support-nav-items");
            if (homeNavItems.classList.contains("hidden")) {
              homeNavItems.classList.remove("hidden");
              homeNavItems.classList.add("grid");
            } else {
              homeNavItems.classList.remove("grid");
              homeNavItems.classList.add("hidden");
            }
          }}
        >
          SUPPORT
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="mt-1"
          />
        </a>
        <div id="support-nav-items" className="hidden gap-5 p-6 text-lg">
          <a href="#">Support 1</a>
          <a href="#">Support 2</a>
          <a href="#">Support 3</a>
          <a href="#">Support 4</a>
          <a href="#">Support 5</a>
        </div>
      </li>

      <li>
        <a
          href="#"
          className="flex gap-1 text-xl font-semibold hover:text-cyan-400 duration-500"
          onClick={() => {
            const homeNavItems = document.getElementById("blog-nav-items");
            if (homeNavItems.classList.contains("hidden")) {
              homeNavItems.classList.remove("hidden");
              homeNavItems.classList.add("grid");
            } else {
              homeNavItems.classList.remove("grid");
              homeNavItems.classList.add("hidden");
            }
          }}
        >
          BLOGS
          <img
            src={CaretDownIcon}
            alt="Caret Down Icon"
            width={20}
            height={20}
            className="mt-1"
          />
        </a>
        <div id="blog-nav-items" className="hidden gap-5 p-6 text-lg">
          <a href="#">Blogs 1</a>
          <a href="#">Blogs 2</a>
          <a href="#">Blogs 3</a>
          <a href="#">Blogs 4</a>
          <a href="#">Blogs 5</a>
        </div>
      </li>

      <li>
        <GetStartedButton />
      </li>
    </ul>
  );
};

export default Navbar;
