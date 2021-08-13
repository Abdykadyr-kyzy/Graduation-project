import React from "react";
import './Second.css';
import SubwayIcon from '@material-ui/icons/Subway';
import {useSelector} from 'react-redux'

export const Second = () => {
    const store = useSelector((state) => state.auth.data)

   return (
        <div className="container second">
            <div className="nav">
                <h1>{store.theme}</h1>
                <p>{store.theme1}</p>
            </div> 
             <div className="avtos">
                 <div className="avto">
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>{store.text1}</h3>
                         <p>{store.text2}</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>{store.text3}</h3>
                         <p>{store.text4}</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>{store.text5}</h3>
                         <p>{store.text6}</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>{store.text7}</h3>
                         <p>{store.text8}</p>
                     </div>
                 </div>
                 <div className="avto">
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>{store.text9}</h3>
                        <p>{store.text10}</p>
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>{store.text11}</h3>
                        <p>{store.text12}</p> 
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>{store.text13}</h3>
                        <p>{store.text14}</p>
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>{store.text15}</h3>
                        <p>{store.text16}</p>
                    </div>
                 </div>
             </div>
        </div>
    )
}