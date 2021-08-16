import {InstagramOutlined,GoogleOutlined } from "@ant-design/icons"
import "./Footer.css"
import { Rate } from 'antd';
import {useSelector} from 'react-redux'


export const Footer = () => {

    const store = useSelector((state) => state.auth.data)
    return (
        <div className="container">
            <div className="footer">
                <div className="block1" >
                    <div className="kyrgyz">
                        KYRGYZ<br/> TRAVEL
                    </div>
                    <div>
                        <InstagramOutlined />
                        <GoogleOutlined />
                    </div>
                </div>
                <div className="block">
                    <ul>
                        <li><a href="http://localhost:3000/vip">{store.li1}</a></li>
                        <li><a href="http://localhost:3000/three">{store.li2}</a></li>
                        <li><a href="https://www.instagram.com/perspective_u.s.a/">{store.li3}</a></li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li><a href="https://www.instagram.com/kettik.kg/?hl=ru">{store.li4}</a></li>
                        <li><a href="https://wiki-turizm.ru/kyrgyzstan/55-kyrgyzstan-transport">{store.li5}</a></li>
                        <li><a href="https://2gis.kg/bishkek/firm/70000001052986806">{store.li6}</a></li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/nuraiym-erkinova-19a1ab219/">{store.li7}</a></li>
                        <li><a href="https://">{store.li8}</a></li>
                        <li><a  href="https://t.me/devkg" style={{display: 'flex',alignItems: 'center'}}>{store.li9}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}