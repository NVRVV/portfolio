import React, { useState } from 'react'
import './Portfo.css'
import 'boxicons/css/boxicons.min.css'
import varma from  '../assets/varma.jpg' 

const Portfo = () => {

    const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div>
    <header className='header'>
        <a href="#home" class="logo"> Varma <span>Namepalli</span></a>

        <nav className="nav">
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
            <span></span>
            <span></span>
            <span></span>
        </div>

            <ul class={menuOpen ? "open" : ""}>
                <a href="#home" >Home</a>
                <a href="#education">Education</a>
                <a href="Varma_Resume (2).pdf">Resume</a>
                <a href="#contact">Contact Me</a>
            </ul>
        </nav>
    </header>
    <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, It's <span>Varma Namepalli</span></h1>
            <h3 className="text-animation">I'm <span></span></h3>
            <p> I am eager to contribute my skills in HTML, CSS, JavaScript to my development. My goal is leverage amy expertise in building responsive and intuitive webapplications to enhance user satisfaction and drive business sucess.</p>
            
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/venkata-ram-vishal-varma-namepalli">
                    <i className='bx bxl-linkedin' id="linkedin"></i>
                </a>
                <a href="https://github.com/NVRVV">
                    <i className='bx bxl-github' ></i>
                </a>
                <a href="https://www.instagram.com/mr.vv_003/">
                    <i className='bx bxl-instagram-alt' ></i>
                </a>
            </div>

            <div className="btn-group">
                <a href="#contact" class="btn">Contact</a>
            </div>
        </div>
            <div className="home-img">
                <img src={varma} alt=""/>
            </div>
        
    </section>

    <section className="education" id="education">
        <h2 className="heading">Education</h2>

        <div className="timeline-items">


            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">2017-18</div>
                    <div className="timeline-content">
                        <h3>high School</h3>
                        <p>I have completed my Srcondary education in Suresh School, Kakinada. In which I got my GPA of 9.2.I jave Graduated in the year of 2018
                        </p>
                    </div>
                
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">2018-21</div>
                    <div className="timeline-content">
                        <h3>Diploma</h3>
                        <p>
                            I have completed my Diploma course in the stream of Computer Engineering at Andhra Polytechnic College, Kakinada. My course duriation is from 2018 to 2021.
                        </p>
                    </div>
                
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">2021-24</div>
                    <div className="timeline-content">
                        <h3>Under Graduate</h3>
                        <p>
                            At, present I am studing 4 year in Aditya Engineering College, Surempalem in the stream of Computer Science and Engineering. My Course duriation is from 2021 to 2024.
                        </p>
                    </div>
                
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">2022</div>
                    <div className="timeline-content">
                        <h3>Internship - 1</h3>
                        <p>
                            In 2022, As per my college I have done an Internship in company called Brainovision Pvt Ltd in which I choosed AWS which is helped in learning new things on cloud computing.
                        </p>
                    </div>
                
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">2024</div>
                    <div className="timeline-content">
                        <h3>Internship - 2</h3>
                        <p>
                            In 2024, As per my college I have done an Internship in company called Skill Drize in which I choosed Java Full Stack  which is helped in learning new things on java new technologies.
                        </p>
                    </div>
                
            </div>
        </div>
    </section>

    
    </div>
  )
}

export default Portfo
