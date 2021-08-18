import React from "react" 
import one from "./img/one.JPG"
import two from "./img/two.JPG"
import "./About.css"

export const About = () => {
    return( 
        <div className="team">
            <div className="kanzada"> 
                <img style={{width:180,height:240, marginTop:40, borderRadius:10}}  src={one} alt="" /> 
                <h4>Aбдыкадыр кызы Канзада</h4>
                 <p>20 лет, Бишкек </p>
                <p>Frontend developer</p>
            </div>
            <div className="cardAbout">
                <h2 style={{ marginTop: 40, textAlign:'center',color:"red"}}>Our skills</h2>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>less</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Antd</li>
                    <li>material-ui</li>
                </ul>
            </div>
            <div className="nuraiym"> 
                <img style={{width:180,height:240,marginTop:40, borderRadius:10}}  src={two} alt="" /> 
                <h4>Нурайым Эркинова</h4>
                <p>20 лет, Бишкек </p>
                <p>Frontend developer</p>
            </div>
        </div>
    )
}