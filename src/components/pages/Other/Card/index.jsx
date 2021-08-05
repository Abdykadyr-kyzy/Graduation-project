import React from 'react'
import {Button} from "antd"
import "./Card.css"

export const Card = () => {
    return (
        <div style={{width:1450,height:1200,display:'flex',flexDirection:'column',backgroundColor:'cornsilk',alignItems:'center',justifyContent:'space-between'}}>
            <div className="title_card">
                <h1>Добро пожаловать в Кыргызстан!</h1>
                <p>Страна заснеженных гор, зеркальных озер и гостеприимства - лучшее для наших гостей</p>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <img/>
                    <p></p>
                </div>
                <div>
                    <img/>
                    <p></p>
                </div>
                <div>
                    <img/>
                    <p></p>
                </div>
                <Button></Button>
            </div>
            <div>
                <h2>Туристические карты</h2>
                <p>Для удобства путешественников мы выпускаем карты и гиды. Вы можете получить их бесплатно во всех наших офисах, а также в некоторых отелях и кафе города Бишкек. Ниже прикреплены карты, которые Вы можете скачать в электронном виде.</p>
                <div style={{display:'flex'}}>
                    <div>
                        <img/>
                        <p>Бесплатный туристический путеводитель по Бишкеку</p>
                        <a href="https://concept.kg/media/guests/maps-guides/%D0%9A%D0%B0%D1%80%D1%82%D0%B0_2016.jpg">Скачать</a>
                    </div>
                    <div>
                        <img/>
                        <p>Бесплатный туристический путеводитель по Алмате</p>
                        <a href="https://concept.kg/media/guests/maps-guides/MapAlmaty_1.jpg">Скачать</a>
                    </div>
                    <div>
                        <img/>
                        <p>Бесплатный туристический путеводитель по Астане</p>
                        <a href="https://concept.kg/media/guests/maps-guides/AstanaMapPRINT_1.jpg">Скачать</a>
                    </div>
                    <div>
                        <img/>
                        <p>Бесплатный туристический путеводитель по Кыргызстану</p>
                        <a href="https://concept.kg/media/guests/maps-guides/map_KG_%D0%BB%D0%B8%D1%86%D0%BE.jpg">Скачать</a>
                    </div>
                    <div>
                        <img/>
                        <p>Расписание Игр</p>
                        <a href="https://concept.kg/media/guests/maps-guides/MAP_IK_2016-NEW-01.jpg">Скачать</a>
                    </div>
                </div>
            </div>
        </div>
    )
}