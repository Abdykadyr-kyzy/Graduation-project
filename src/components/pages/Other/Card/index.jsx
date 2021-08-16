import React from 'react'
import "./Card.css"
import { useSelector } from 'react-redux'

export const Card = () => {
    const store = useSelector((state) => state.auth.data)
    return (
        <div className="card_card">
            <div className="title_card">
                <h1 className="card_title" >{store.carta1}{store.carta2}</h1>
            </div>
            <div>
                <h1>{store.carta3}</h1>
                <div className="estetic">
                    <img src="https://i.pinimg.com/originals/13/7f/ab/137fabf692046dd0b0b194c81b08c3f1.jpg" alt="" />
                    <img style={{height: 250,width:160}} src="https://www.open.kg/uploads/posts/2014-10/1414495587_11.jpg" alt="" />
                    <img src="https://elet.media/wp-content/uploads/2019/07/komuz-e1564391215133.jpg" alt="" />
                </div>
            </div>
            <div>
                {/* <h1>{store.carta4}</h1> */}
                <h2>{store.carta5}</h2><br/>
            </div>
            <div>
                <div className="carta" >
                    <div>
                        <img src="https://www.akchabar.kg/media/news/25c8cb5e-b618-4248-a093-bf9e04426267.jpg" alt="" />
                        <h2>{store.carta6}</h2>
                        <a href="https://concept.kg/media/guests/maps-guides/%D0%9A%D0%B0%D1%80%D1%82%D0%B0_2016.jpg">{store.carta9}</a>
                    </div>
                    <div>
                        <img src="https://live.kg/wp-content/uploads/2021/04/105449-847942-4106-958424623791-8683909764066171125703-32286707071841874299.png" alt="" />
                        <h2>{store.carta7}</h2>
                        <a href="https://concept.kg/media/guests/maps-guides/map_KG_%D0%BB%D0%B8%D1%86%D0%BE.jpg">{store.carta9}</a>
                    </div>
                    <div>
                        <img src="https://www.akchabar.kg/media/news/31b497db-79dd-45d0-a47d-54bec95955ac.jpg.850x445_q82_crop.jpg" alt="" />
                        <h2>{store.carta8}</h2>
                        <a href="https://concept.kg/media/guests/maps-guides/MAP_IK_2016-NEW-01.jpg">{store.carta9}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
