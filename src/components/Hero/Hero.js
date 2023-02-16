import React from 'react'
import './Hero.css';
import bg from '../../assets/bg.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 live_title d-flex justify-content-center flex-column">
                                <h1>Freelancing<br />
                                    Decentralized</h1>
                                <p className='my-2'>
                                    Skillstribe is the worlds first fully decentralized freelance marketplace. Find the best talent to hire for your project and find clients that are looking for your skillset.
                                    <br /> <br />
                                    Skillstribe operates fully off of the Alacrity blockchain with no central
                                    intermediary
                                </p>
{/* 
                                <div className="mt-3 hero_btn">
                                    <a href="/" className='btn-get-started'>Get Started</a>
                                </div> */}
                            </div>
                            <div className="col-lg-2 order-1 order-lg-2 header-img">
                               <img src={bg} alt="" height={450}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero