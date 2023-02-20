import React from 'react'
import GigsCart from './GigsCart'
import './Gigs.css'
const Gigs = () => {
    return (
        <div>
            <div className="gigs mt-5">
                <div className="gigs_heading ">                    
                    <div className="gigs_category">
                        <div className="category">
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <p>|</p>
                        <div className="category_search">
                            <input type="search" placeholder='Marketing' />
                        </div>
                        <div className="category_right">
                            <p>|</p>
                            <h4>Filter</h4>
                            <p>|</p>
                            <h4>Budget</h4>
                        </div>
                    </div>
                        <h1 className="text-left">Posted Gigs</h1>
                </div>
                <div className="gigs_detail">
                    <GigsCart/>
                </div>
            </div>


        </div>
    )
}

export default Gigs