import React from 'react'
import { FaLaptopCode  } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const AboutComponent = () => (
    <section class="about bg-light">
        <div class="container">
            <div class="grid-2">
                <div class="center">
                    <IconContext.Provider value={{ size: "10em" }}>
                        <div>
                            <FaLaptopCode />
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur
                        maiores ea magni exercitationem
                        similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur
                        consequatur non
                        nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.</p>
                </div>
            </div>
        </div>
    </section>
)


export default AboutComponent;
