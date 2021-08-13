import React from "react" 
import one from "./img/one.JPG"
import two from "./img/two.JPG"

export const About = () => {
    return( 
        <div className="team">
            <div className="kanzada"> 
                <img style={{width:180,height:240}}  src={one} alt="" /> 
                <img style={{width:200,height:240,}} src={two} alt="" />
            </div>
        </div>
    )
}