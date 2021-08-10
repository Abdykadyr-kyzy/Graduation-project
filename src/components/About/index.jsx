import React from "react" 
import one from "./one.JPG"
import two from "./two.JPG"

export const About = () => {
    return( 
            <div>
                <div lassName="kanzada">
                    <img style={{width:180,height:240}}  src={one} alt="" /> 
                </div>
                <div className="nurai">
                    <img style={{width:200,height:240,}} src={two} alt="" />
                </div>
               
                <div style={{display: 'flex', alignItems: 'center'}}>
                        <a href="https://www.instagram.com/numai_09/?hl=ru" >@numai</a>
                        <br/>
                        <a href="https://www.instagram.com/berdalieva_2001/?hl=ru">@berdalieva_2001</a>
                        </div>
            </div>
    )
}