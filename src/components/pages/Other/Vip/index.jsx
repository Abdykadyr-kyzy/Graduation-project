import React from 'react'
import {Button,Carousel} from "antd"
import './Vip.css';
import { useSelector } from 'react-redux';


export const Vip = () => {

    const store = useSelector((state) => state.auth.data)

    return (
        <div style={{height:800,width:1450,display: 'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor:'cornsilk'}}>
            <div className="title_vip">
                <h1>{store.vip1}</h1>
                <p>{store.vip2}</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
                <h2>{store.vip3}</h2>
                    <Carousel effect="fade">
                        <div style={{width:300,height:200,textAlign:'center',alignItems:'center'}}>
                            <img  src="https://vip-zal.ru/uploads/431/289dbf165b-manas-9.jpg" alt="" />
                        </div>
                        <div style={{width:300,height:200,textAlign:'center',alignItems:'center'}}>
                            <img src="https://glavtour.kg/wp-content/uploads/2017/06/vip.png" alt="" />
                        </div>
                        <div style={{width:300,height:200,textAlign:'center',alignItems:'center'}}>
                            <img src="https://airfresh.kg/templates/g5_helium/custom/images/viplounge/manas1.png" alt=""  />
                        </div>
                    </Carousel>
                <p>{store.vip4}</p>
            </div>
        </div>
    )
}
