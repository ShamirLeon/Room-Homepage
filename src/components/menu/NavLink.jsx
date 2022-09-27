const NavLink = ({title}) => {
    return (
        <a href="#" className="relative ">
          <span className="peer">{title}</span>{" "}
          <span className="block absolute h-[3px] w-[50%] bg-white mx-auto mt-1 left-0 right-0 opacity-0 peer-hover:opacity-100 peer-hover:w-full transition-all"></span>
        </a>
    )
}

export default NavLink