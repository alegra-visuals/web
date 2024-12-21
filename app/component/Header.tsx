import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
function Header() {
  const [sideBarStatus,setSideBarStatus] = useState(true)
  const navigate = useNavigate();
  const hideSidebar = ()=>{
    setSideBarStatus(!sideBarStatus);
  }
  return (
    <>
      <nav>
        <div className="navbar flex justify-between items-center p-2">
          <div className="logo">
            <img
              src="/alegra-logo.jpeg"
              className="w-[120px]"
              alt="alegra-logo"
              onClick={()=>{navigate("/")}}
            />
          </div>
          <div className="menuBtn">
            <div className="hidden md:flex">
              <div className="mx-5">
                <ul className="relative group">
                  <li>
                    <NavLink to="/" className="py-2 pe-4 hover:text-primary">
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 inline-block "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <ul className="absolute hidden group-hover:block w-[150px]">
                    <li>
                      <NavLink
                        to="/alegra-intro"
                        className="my-1 block hover:text-primary"
                      >
                        Intro
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/mission-and-vision"
                        className="my-1 block hover:text-primary"
                      >
                        Mission & Vision
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/research-team"
                        className="my-1 block hover:text-primary"
                      >
                        Research Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="my-1 block hover:text-primary"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="mx-5">
                <ul className="relative group">
                  <li>
                    <NavLink
                      to="/visual-technology"
                      className="py-2 pe-4 hover:text-primary"
                    >
                      Visual Technology{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 inline-block "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <ul className="absolute hidden group-hover:block w-[150px]">
                    <li>
                      <NavLink
                        to="/visual-technology/what"
                        className="my-1 block hover:text-primary"
                      >
                        What
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/visual-technology/why"
                        className="my-1 block hover:text-primary"
                      >
                        Why
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/visual-technology/how"
                        className="my-1 block hover:text-primary"
                      >
                        How
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="mx-5">
                <ul className="relative group">
                  <li>
                    <NavLink
                      to="/our-offerings"
                      className="py-2 pe-4 hover:text-primary"
                    >
                      Our Offerings
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 inline-block "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <ul className="absolute hidden group-hover:block w-[200px]">
                    <li>
                      <NavLink
                        to="/our-offerings/affiliation-for-graduation"
                        className="my-1 block hover:text-primary"
                      >
                        Affiliation for Graduation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/affiliation-for-diploma"
                        className="my-1 block hover:text-primary"
                      >
                        Affiliation for Diploma
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/certification"
                        className="my-1 block hover:text-primary"
                      >
                        Certification
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/internship"
                        className="my-1 block hover:text-primary"
                      >
                        Internship
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/cross-curricular"
                        className="my-1 block hover:text-primary"
                      >
                        Cross Curricular
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/employment"
                        className="my-1 block hover:text-primary"
                      >
                        Employment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/our-offerings/entrepreneurship"
                        className="my-1 block hover:text-primary"
                      >
                        Entrepreneurship
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="mx-5">
                <ul>
                  <li>
                    <NavLink
                      to="/our-unique-features"
                      className="py-2 pe-4 hover:text-primary"
                    >
                      Our Unique Features
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mx-5">
                <ul>
                  <li>
                    <NavLink
                      to="/contact"
                      className="py-2 pe-4 hover:text-primary"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
          <div className={`mobileMenuBtn md:hidden w-screen h-screen fixed z-10 bg-white left-0 top-[0px] p-4 ${sideBarStatus?"hidden":"block"}`}>
            <div className="flex justify-between items-center">
                <div className="logo">
                  <img
                    src="/alegra-logo.jpeg"
                    className="w-[120px]"
                    alt="alegra-logo"
                    onClick={()=>{hideSidebar();navigate("/")}}

                  />
                </div>
                <div onClick={hideSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                </div>

            </div>
                  <div className="text-center mt-3">
                    <div >
                      <div className="my-3">
                     
                        <ul className="group">
                          <li>
                            <NavLink to="#" className="py-2 pe-4 hover:text-primary">
                              Home
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 inline-block "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </NavLink>
                          </li>
                          {/* className="hidden group-hover:block " */}
                          <ul className="hidden group-hover:block ">
                            {/* <li>
                              <NavLink
                                to="/"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Home
                              </NavLink>
                            </li> */}
                            <li>
                              <NavLink
                                to="/alegra-intro"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Intro
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/mission-and-vision"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Mission & Vision
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/research-team"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Research Team
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/contact"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Contact
                              </NavLink>
                            </li>
                          </ul>
                        </ul>
                      </div>
                      <div className="my-3">
                        <ul className="group">
                          <li>
                            <NavLink
                            // /visual-technology
                              to="#"
                              className="py-2 pe-4 hover:text-primary" 
                            >
                              Visual Technology
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 inline-block "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </NavLink>
                          </li>
                          <ul className="hidden group-hover:block">
                            <li>
                              <NavLink
                                to="/visual-technology/what"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                What
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/visual-technology/why"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Why
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/visual-technology/how"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                How
                              </NavLink>
                            </li>
                          </ul>
                        </ul>
                      </div>
                      <div className="my-3">
                        <ul className="group">
                          <li>
                            <NavLink
                            // /our-offerings
                              to="#"
                              className="py-2 pe-4 hover:text-primary"
                            >
                              Our Offerings
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 inline-block "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </NavLink>
                          </li>
                          <ul className="hidden group-hover:block">
                            <li>
                              <NavLink
                                to="/our-offerings/affiliation-for-graduation"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Affiliation for Graduation
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/affiliation-for-diploma"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Affiliation for Diploma
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/certification"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Certification
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/internship"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Internship
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/cross-curricular"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Cross Curricular
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/employment"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Employment
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/our-offerings/entrepreneurship"
                                className="my-1 block hover:text-primary" onClick={hideSidebar}
                              >
                                Entrepreneurship
                              </NavLink>
                            </li>
                          </ul>
                        </ul>
                      </div>
                      <div className="my-3">
                        <ul>
                          <li>
                            <NavLink
                              to="/our-unique-features"
                              className="py-2 pe-4 hover:text-primary" onClick={hideSidebar}
                            >
                              Our Unique Features
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="my-3">
                        <ul>
                          <li>
                            <NavLink
                              to="/contact"
                              className="py-2 pe-4 hover:text-primary" onClick={hideSidebar}
                            >
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

          </div>
          <div className="md:hidden" onClick={hideSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
