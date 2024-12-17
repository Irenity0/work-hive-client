import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/logo-49.png"

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
      signOutUser()
      .then(() => {
        console.log('successfully signed out');
      })
      .catch(error => {
        console.log(`failed to sign out, stay here. Don't leave me`)
      })
    }

    return (
        <div className="navbar bg-base text-primary">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/myApplications"}>My Applications</NavLink></li> 
                <li><NavLink to={"/addJob"}>Add a Job</NavLink></li> 
                <li><NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink></li>  
              </ul>
            </div>
            <div className="flex justify-between items-center flex-row">
              <div><img className="w-16 h-16 " src={logo} alt="" /></div>
              <Link to={"/"} className="btn btn-ghost text-2xl font-bold text-primary"> Work Hive</Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/myApplications"}>My Applications</NavLink></li> 
                <li><NavLink to={"/addJob"}>Add a Job</NavLink></li> 
                <li><NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink></li> 
            </ul>
          </div>
          <div className="navbar-end">
            <p className="text-primary mr-4 border-b-2 border-dashed border-primary">Welcome!</p>
            {
              user ? <>
                  <Link onClick={handleSignOut} className="btn border-2 border-primary text-primary">Log Out</Link>
              </> : <>
              <Link to={"/register"} className="btn border-2 border-primary text-primary mr-4">Register</Link>
              <Link to={"/login"} className="btn border-2 border-primary text-primary">Login</Link>
              </>
            }
            
          </div>
        </div>
    );
};

export default Navbar;