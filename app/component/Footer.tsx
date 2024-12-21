import React from 'react'
import { NavLink, useNavigate } from 'react-router'
function Footer() {
  const navigate =useNavigate();
  return (
    <>
         <footer >
      <div className="flex md:flex-row flex-col justify-around pt-2">
      <div className='flex justify-center items-center'>
        <div>

        <img src="/alegra-logo.jpeg" className="w-[120px]" alt="alegra-logo" onClick={()=>{navigate("/")}}/>
        </div>

      </div>
      <div className="">
          <div className="text-center">
            <div className="flex items-center justify-center ">

              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 size-6 fill-[#007dc5]" viewBox="0 0 24 24" fill="currentColor" >
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            
            <p>447/418, S G R Complex, 10th Main Road,<br/>
            4th Block, Jayanagar, Bengaluru - 560011</p>

            <div className="mt-2">
                <div className="flex items-center justify-center">
                  <a href="https://www.alegravisulas.com">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 size-6 inline-block fill-[#007dc5]" viewBox="0 0 24 24" fill="currentColor" >
                    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                  </svg>
                    &nbsp; www.alegravisulas.com
                  </a>
                </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-center">
                <a href="mailto:we@alegravisuals.com">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 size-6 inline-block fill-[#007dc5]" viewBox="0 0 24 24" fill="currentColor" >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  
                  &nbsp; we@alegravisuals.com
                </a>
              </div>
          </div>
          <div className="mt-2 ">
            <div className="flex items-center justify-center">
              <a href="tel: +91 9036231659">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 size-6 inline-block fill-[#007dc5]" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                
                &nbsp; +91 9036231659
              </a>
            </div>
        </div>
          </div>
      </div>
      <div>
      <ul className='text-center'>
     
        <h2 ><NavLink to="/" className='border-b-2 mb-2 inline-block hover:text-primary'>Home</NavLink></h2>
                            <li><NavLink to="/alegra-intro" className="hover:text-primary">Intro</NavLink></li>
                            <li><NavLink to="/mission-and-vision" className="hover:text-primary">Mission & Vision</NavLink></li>
                            <li><NavLink to="/research-team" className="hover:text-primary">Research Team</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-primary">Contact</NavLink></li>
                            <li><NavLink to="/our-unique-features" className="hover:text-primary">Our Unique Features</NavLink></li>
                    
                        </ul>
      </div>
      <div>
      <ul className='text-center'>
      <h2 ><NavLink to="/visual-technology" className='border-b-2 mb-2 inline-block hover:text-primary'>Visual Technology</NavLink></h2>
                              <li><NavLink to="/visual-technology/what" className="hover:text-primary">What</NavLink></li>
                              <li><NavLink to="/visual-technology/why" className="hover:text-primary">Why</NavLink></li>
                              <li><NavLink to="/visual-technology/how" className="hover:text-primary">How</NavLink></li>
                              
                          </ul>
      </div>
      <div>
      <ul className='text-center'>
      <h2 ><NavLink to="/our-offerings" className='border-b-2 mb-2 inline-block hover:text-primary'>Our Offerings</NavLink></h2>
      <li> <NavLink to="/our-offerings/affiliation-for-graduation" className="hover:text-primary">Affiliation for Graduation</NavLink></li>
      <li> <NavLink to="/our-offerings/affiliation-for-diploma" className="hover:text-primary">Affiliation for Diploma</NavLink></li>
      <li>  <NavLink to="/our-offerings/certification" className="hover:text-primary">Certification</NavLink></li>
      <li>  <NavLink to="/our-offerings/internship" className="hover:text-primary">Internship</NavLink></li>
      <li>  <NavLink to="/our-offerings/cross-curricular" className="hover:text-primary">Cross Curricular</NavLink></li>
      <li>  <NavLink to="/our-offerings/employment" className="hover:text-primary">Employment</NavLink></li>
      <li>  <NavLink to="/our-offerings/entrepreneurship" className="hover:text-primary">Entrepreneurship</NavLink></li>
                              
                          </ul>
      </div>
    </div>
      <p className="p-3 text-center">All rights reserved alegra visuals pvt ltd @ 2024</p>
      
    </footer>
    </>
  )
}

export default Footer