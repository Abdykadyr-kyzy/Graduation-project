import React from 'react'
import {Button,Carousel} from "antd"
import './Vip.css';

export const Vip = () => {
    return (
        <div style={{height:1000,width:1450,display: 'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor:'cornsilk'}}>
            <div className="title_vip">
                <h1>VIP и Бизнес залы в аэропортах Бишкека, Оша и Алматы: бронь и другие услуги</h1>
                <p>Для особенных путешественников</p>
            </div>
            <div>
                <Button type="primary" >Bishkek</Button>
                <Button type="primary" >Others</Button>
            </div>
            <div>
                <h2>Вы не привыкли тратить драгоценное время на предполетные формальности и желаете особого комфорта?</h2>
                <h2>Предлагаем Вам услуги VIP и Бизнес залов</h2>
                <div style={{width:400,height:400, display:'flex',justifyContent:'center'}} >
                    <Carousel autoplay>
                        <div>
                            <img src="https://vip-zal.ru/uploads/431/289dbf165b-manas-9.jpg" />
                        </div>
                        <div>
                            <img src="https://glavtour.kg/wp-content/uploads/2017/06/vip.png" />
                        </div>
                        <div>
                            <img src="https://airfresh.kg/templates/g5_helium/custom/images/viplounge/manas1.png" />
                        </div>
                    </Carousel>
                </div>
                <p>В международном аэропорту "Манас" круглосуточно работает VIP-зал. Это зона для деловых людей, ценящих свое время и комфорт.</p>
            </div>
        </div>
    )
}