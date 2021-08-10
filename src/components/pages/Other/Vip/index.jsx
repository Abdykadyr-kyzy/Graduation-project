import React from 'react'
import {Button,Carousel} from "antd"
import './Vip.css';

export const Vip = () => {
    return (
        <div style={{height:800,width:1450,display: 'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor:'cornsilk'}}>
            <div className="title_vip">
                <h1>VIP и Бизнес залы в аэропортах Бишкека, Оша и Алматы: бронь и другие услуги</h1>
                <p>Для особенных путешественников</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
                <h2>Вы не привыкли тратить драгоценное время на предполетные формальности и желаете особого комфорта?</h2>
                <h2>Предлагаем Вам услуги VIP и Бизнес залов</h2>
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
                <p>В международном аэропорту "Манас" круглосуточно работает VIP-зал. Это зона для деловых людей, ценящих свое время и комфорт.</p>
            </div>
        </div>
    )
}