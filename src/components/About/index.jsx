import React from "react" 
import one from "./one.JPG"
import two from "./two.JPG"

export const About = () => {
    return( 
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} >
                <img style={{width:180,height:240}}  src={one} alt="" />
                <img style={{width:200,height:240,}} src={two} alt="" />
            </div>
    )
}