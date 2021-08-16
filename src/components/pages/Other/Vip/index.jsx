import React from 'react'
import {Button,Carousel} from "antd"
import './Vip.css';
import { useSelector } from 'react-redux';


export const Vip = () => {

    const store = useSelector((state) => state.auth.data)

    return (
        <div className="vip">
            <div className="title_vip">
                <h1 className="card_title" >{store.vip1}{store.vip2}</h1>
            </div>
            <div className="vip_foto" >
                <h2>{store.vip3}</h2>
                <Carousel autoplay>
                    <img className="img" src="https://vip-zal.ru/uploads/431/289dbf165b-manas-9.jpg" alt="" />
                    <img className="img" src="https://glavtour.kg/wp-content/uploads/2017/06/vip.png" alt="" />
                    <img className="img" src="https://airfresh.kg/templates/g5_helium/custom/images/viplounge/manas1.png" alt=""  />
                </Carousel>
                <h2>{store.vip4}</h2>
            </div>
        </div>
    )
}
