import TwitterIcon from '@material-ui/icons/Twitter';
import {FacebookOutlined,InstagramOutlined} from "@ant-design/icons"
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="container footer">
            <div className="block">
                <div className="kyrgyz">
                    KYRGYZ CONCEPT
                </div>
                <p>one stop travel shop</p>
                <div>
                    <TwitterIcon/>
                    <FacebookOutlined style={{ height:60,width: 60}} />
                    <InstagramOutlined />
                </div>
                <p>©Kyrgyz Concept 1990 — 2021 <br/>При воспроизведении материалов сайта<br/>
                обязательна установка активной гиперссылки на источник</p>
            </div>
            <div className="block">
                <ul>
                    <li>Авиабилеты</li>
                    <li>ВИП-зал аэропорта</li>
                    <li>Туры за рубеж из Бишкека.Горящие туры и лучшие предложения для вашего отдыха!</li>
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
                    <li>Кейтеринг от Kyrgyz Concept в Бишкеке, Кыргызстане</li>
                    <li>Аутстаффинг от Kyrgyz Concept в Бишкеке, Кыргызстане</li>
                    <li>Академия</li>
                    <li>Сделано в NambaMedia</li>
                </ul>
            </div>
            <div className="block">
                <ul>
                    <li>Оставить отзыв</li>
                    <li>Контакты офисов</li>
                    <li>Новости компании</li>
                    <li>Вакансии</li>
                    <li>Подписка на новости и спецпредложения</li>
                </ul>
                <b>Увидели ошибку на сайте? Выделите слово, нажмите Shift+Enter. И мы его исправим.</b>
            </div>
        </div>
    )
}