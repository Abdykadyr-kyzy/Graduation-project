import {FacebookOutlined,InstagramOutlined,TwitterOutlined} from "@ant-design/icons"
import "./Footer.css"
import { Rate } from 'antd';


export const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}  className="block">
                    <div className="kyrgyz">
                        KYRGYZ <br/>TRAVEL
                    </div>
                    <p>one stop travel shop</p>
                    <div>
                        <TwitterOutlined />
                        <FacebookOutlined style={{ height:60,width: 60}} />
                        <InstagramOutlined />
                    </div>
                    <p>©Kyrgyz Concept 1990 — 2021 <br/>При воспроизведении материалов сайта<br/>
                    обязательна установка активной гиперссылки на источник</p>
                </div>
                <div className="block">
                    <ul>
                        {/* <li>Авиабилеты</li> */}
                        <li><a href="http://localhost:3000/vip">ВИП-зал аэропорта</a></li>
                        <li><a href="http://localhost:3000/three">Туры за рубеж из Бишкека.Горящие туры и лучшие предложения для вашего отдыха!</a></li>
                        <li>Учеба за границей</li>
                        <li>TravelSim</li>
                        <li>Визы</li>
                        <li>Страхование</li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li>Отели</li>
                        <li>Туры по Кыргызстану и Центральной Азии</li>
                        <li>Транспорт</li>
                        <li>Организация конференций</li>
                        <li>Академия</li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li>Оставить отзыв</li>
                        <li>Контакты офисов</li>
                        <li>Новости компании</li>
                        <li>Вакансии</li>
                    </ul>
                    <Rate />
                </div>
            </div>
        </div>
    )
}