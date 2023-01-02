import ReactLogoIcon from "./assets/react.svg";
import MenuButtonIcon from "./assets/menu.svg";

export default function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const menuList = document.getElementById("nav-menu-items");
    const buttonName = event.currentTarget.name;
    if (buttonName == "menu-open") {
      menuList?.classList.remove("top-[-400px]");
      menuList?.classList.add("top-[80px]");
      event.currentTarget.name = "menu-close";
    } else {
      menuList?.classList.remove("top-[80px]");
      menuList?.classList.add("top-[-400px]");
      event.currentTarget.name = "menu-open";
    }
  };

  return (
    <nav className="flex justify-between items-center bg-slate-800 text-slate-100 shadow-md shadow-slate-200">
      
      <ul className="p-5 z-10 w-full md:w-auto flex justify-between bg-slate-800">
        <li className="flex-1 inline-flex items-center gap-2 cursor-pointer select-none bg-slate-800">
          <img alt="site-logo" src={ReactLogoIcon} width={45} height={"45"} />
          <span className="hover:scale-105 hover:text-cyan-500 duration-500 antialiased tracking-wide text-2xl">
            NAVBAR
          </span>
        </li>

        <li className="flex items-center active:scale-90 duration-500 md:hidden z-20">
          <button name="menu-open" onClick={(e) => onClick(e)}>
            <img
              alt="menu-button"
              src={MenuButtonIcon}
              width={40}
              height={40}
            />
          </button>
        </li>
      </ul>

      <ul>
        <li
          id="nav-menu-items"
          className="flex flex-col md:flex-row md:items-center gap-5
            md:static absolute bg-slate-800 w-full left-0 top-[-400px]
            shadow-md shadow-slate-200 md:shadow-none
            md:w-auto p-7 md:py-0 transition-all ease-in-out duration-500
            "
        >
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>

          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </a>

          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>

          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            CONNECT
          </a>

          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            SUPPORT
          </a>

          <button className="bg-cyan-400 text-slate-100 font-medium duration-500 px-4 py-2 hover:bg-cyan-500 rounded-md">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}
