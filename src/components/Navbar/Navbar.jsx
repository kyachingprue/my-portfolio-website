

const Navbar = () => {

  const links = <div className="flex items-center">
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Experience">Experience</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Footer">Contact</a></li>
  </div>
  return (
    <div className="mx-auto w-11/12">
      <div className="navbar text-white rounded-xl shadow-blue-500 shadow-2xl relative top-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-72 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">KyachingStudio</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;