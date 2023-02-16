import React from 'react'
import './Feature.css'
const Feature = () => {
    return (
        <div className="feature">
            <div className="feature_title justify-content-centeralign-content-center text-center">
                <h1>The Future is Decentralized, <br />
                    So is Your Work</h1>
                <p>With Skillstribe you can directly connect with a broad network of talent and  <br /> companies. All payments are settled directly
                    <br /> via on-chain transactions and without centralised payment processors and <br /> platforms taking a large cut of your earning!</p>
            </div>

            <div className="feature_details align-items-center">
                <div className="feature_btn">
                    <button><a href="/">What</a></button>
                    <button><a href="/">Why</a></button>
                    <button><a href="/">How</a></button>
                </div>
            </div>
        </div>
    )
}

export default Feature