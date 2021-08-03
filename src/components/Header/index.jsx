import React from "react";
import Button from '@material-ui/core/Button';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import Search from "@material-ui/icons/Search"
import { switch_language } from "../../store/actions";
import { useDispatch,useSelector } from "react-redux";
import {RU,EN} from "../../store/actions"
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import SubwayIcon from '@material-ui/icons/Subway';
import SchoolIcon from '@material-ui/icons/School';
import {Link} from "react-router-dom";

export const Header = () => {

    const dispatch= useDispatch()
    const store = useSelector(state => state.data)

   return (
        <div className="container header">
            <nav>
                <ul>
                    <li>{store.home}</li>
                    <li>{store.course}</li>
                    <li>{store.about}</li>
                    <li>{store.vacansiec}</li>
                    <li>{store.review}</li>
                    <li>{store.contacts}</li>
                </ul>
                <div>
                    <span>
                       <LanguageIcon style={{paddingTop: 10}} />
                    </span>
                    <Button onClick={() => dispatch(switch_language(RU))} color="white">RU</Button>
                    <Button onClick={() => dispatch(switch_language(EN))} color="white">EN</Button>
                </div>
            </nav>
            <div className="contain" >
                <div>
                    <AirplanemodeActiveIcon/>
                    <p>Aвиабилеты</p>
                </div>
                <div>
                     <SubwayIcon/>
                     {/* <Link to='./first'> */}
                         <p>Туры за рубеж</p>
                    {/* </Link> */}
                </div>
                <div>
                    <SubwayIcon/>
                    <p>Tранспорт</p>
                </div>
                <div>
                    <SubwayIcon/>
                    <p>Туры по центральной Азии</p>
                </div>
                <div>
                    <div className="kyrgyz">
                        KYRGYZ CONCEPT
                    </div>
                    <p> One stop travel shop</p>
                </div>
                <div>
                    <SubwayIcon/>
                    <p>Организация конференций</p>
                </div>
                <div>
                    <SchoolIcon/>
                    <p>Академия</p>
                </div>
                <div>
                    <SubwayIcon/>
                    <p>Другие услуги</p>
                </div>
                <div>
                    <Search/>
                    <p>Поиск</p>
                </div>
            </div>
        </div>
    )
}