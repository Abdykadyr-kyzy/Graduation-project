import React from "react" 
import one from "./one.JPG"
import two from "./two.JPG"

export const About = () => {
    return( 
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} >
                <img style={{width:200,height:270}}  src={one} />
                <img style={{width:200,height:240,}} src={two} />
            </div>
    )
}