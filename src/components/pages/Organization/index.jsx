import React from "react";
import Button from '@material-ui/core/Button';
import './Fore.css';
import fore from "../../../images/six.jpg"
import SubwayIcon from '@material-ui/icons/Subway';
import Search from "@material-ui/icons/Search"
import SchoolIcon from "@material-ui/icons/School"

export const Organization = () => {

   return (
        <div className="container first">
             <div className="text">
                 <div>
                    <h1>MICE- организация конференций и любых мероприятий "под ключ"</h1>
                    <p>MICE это команда супергероев из 5 человек, более 1500 успешно организованных мероприятий и более 10 000 счастливых клиентов, которые знают, что сложные задачи мы решаем сразу, а невозможное чуть позже</p>
                 </div>
                 <div>
                        <div>
                            <SubwayIcon/>
                            <p>Курьерские услуги</p>
                        </div>
                        <div>
                            <SubwayIcon/>
                            <p>Курьерские услуги</p>
                        </div>
                        <div>
                            <SchoolIcon/>
                            <p>Грузоперевозки</p>
                        </div>
                        <div>
                            <SubwayIcon/>
                            <p>Джип туры</p>
                        </div>
                        <div>
                            <Search/>
                            <p>Переезд</p>
                        </div>
                 </div>
             </div>

        </div>
    )
}