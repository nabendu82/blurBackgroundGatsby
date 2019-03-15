import React from 'react'
import { FaYoutube, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ServiceComponent = () => (
    <section class="services">
        <div class="container grid-3 center">
            <div>
                <IconContext.Provider value={{ size: "3em" }}>
                    <div>
                        <FaYoutube />
                    </div>
                </IconContext.Provider>
                <h3>YouTube</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
            </div>
            <div>
                <IconContext.Provider value={{ size: "3em" }}>
                    <div>
                        <FaChalkboardTeacher />
                    </div>
                </IconContext.Provider>
                <h3>Courses</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
            </div>
            <div>
                <IconContext.Provider value={{ size: "3em" }}>
                    <div>
                        <FaBriefcase />
                    </div>
                </IconContext.Provider>
                <h3>Freelancing Projects</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
            </div>
        </div>
    </section>
)


export default ServiceComponent;
