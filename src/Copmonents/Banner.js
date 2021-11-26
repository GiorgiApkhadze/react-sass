import React from 'react'
import '../Styles/Banner.css'
import Logo from "../img/banner.png"
function Banner() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 d-center">
                    <h2> can cool down when <br/> made wet and wringed out.</h2>
                    <button className="btn">Find your type</button>
                    </div>
                <div className="col-6 d-center"><img src={Logo} alt="Logo" /></div>
            </div>
        </div>
    )
}

export default Banner
