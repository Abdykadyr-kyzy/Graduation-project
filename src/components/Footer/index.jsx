import {InstagramOutlined,GoogleOutlined } from "@ant-design/icons"
import "./Footer.css"
import { Rate } from 'antd';


export const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="block" >
                    <div className=""style={{ marginTop:40}}>
                        <InstagramOutlined />
                    </div>
                    <div style={{ marginTop:60,}}>
                        <Rate />
                    </div>
                    <div style={{ marginTop:80,}} > 
                        <GoogleOutlined />
                    </div>
                    
                </div>
                <div className="block">
                    <ul>
                        <li className=""style={{ marginTop:40}}><a href="http://localhost:3000/vip">ВИП-зал аэропорта</a></li>
                        <li style={{ marginTop:60,}}><a href="http://localhost:3000/three">Туры за рубеж из Бишкека.</a></li>
                        <li style={{ marginTop:80,}}><a href="https://www.instagram.com/perspective_u.s.a/">Учеба за границей</a></li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li style={{ marginTop:40}}><a href="https://www.instagram.com/kettik.kg/?hl=ru">Туры по Кыргызстану</a></li>
                        <li style={{ marginTop:60}}><a href="https://wiki-turizm.ru/kyrgyzstan/55-kyrgyzstan-transport">Транспорт</a></li>
                        <li style={{ marginTop:80}}><a href="https://2gis.kg/bishkek/firm/70000001052986806">Академия</a></li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li className=""style={{ marginTop:40}}><a href="https://www.linkedin.com/in/nuraiym-erkinova-19a1ab219/">Оставить отзыв</a></li>
                        <li style={{ marginTop:60}}><a href="https://">Новости компании</a></li>
                        <li  style={{ marginTop:80}}><a  href="https://t.me/devkg" style={{display: 'flex',alignItems: 'center'}}>Вакансии</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}