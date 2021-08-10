import React from "react";
import './First.css';
import {Carousel} from "antd"
import { useEffect } from 'react'
import {regions,region,datas} from "../../../store/order"
import { useSelector, useDispatch } from 'react-redux'
import { add_order} from "../../../store/actions"
import Button from "@material-ui/core/Button"
// alert
import swal from "sweetalert"
import { useState } from "react";

export const First = () => {


    const store = useSelector((state) => state.auth.data)
    const orders = useSelector(state => state.order.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])
    // alert
    const mostrarAlerta = () =>{ 
        swal({ 
                  title: "succes!", 
                  text: "You can see it on your profile!", 
                  icon: "success", 
                  button: "ok", 
                });          
    }
       
    return(  
        <div className="first">
            <div className="title">
                <Carousel autoplay>
                    <div className="title_zero">
                        <h1 className="title_title">Туры в Бишкек.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
                    </div>
                    <div className="title_one">
                        <h1>Туры в Бишкек.Горящие туры и лучшие предложения для вашего отдыха!</h1>
                    </div>
                    <div className="title_two">
                        <h1>Туры в Бишкек.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
                    </div>
                    <div className="title_three">
                        <h1>Туры в Бишкек.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
                    </div>
                </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                     <h1>{store.first} </h1>
                </div>
                <div>
                    <div style={{width:850,display:'flex',justifyContent:'space-around'}} >
                        {
                            datas.map((el, id) => {
                                return <div>
                                    <div className="rendering" >
                                        <div>
                                            <h1>{el.title}:  {el.price} </h1> 
                                        </div>
                                        <div style={{padding: 10}} >
                                           <img src={el.img} />
                                        </div>
                                        <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >buy</Button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
             </div>
            <div  className="cards_all" >
                <div className="word">
                    <h1>Все туры</h1>
                  </div>
                  <div style={{width:850,display:'flex',justifyContent:'space-around'}} >
                      {
                        region.map((el, id) => {
                            return <div className="rendering">
                                    <div>
                                        <h1>{el.title}:  {el.price} </h1> 
                                    </div>
                                    <div style={{padding: 10}} >
                                        <img src={el.img} />
                                    </div>
                                      <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >buy</Button>
                            </div>
                        })
                      }
                   </div>
                    <div style={{width:850,display:'flex',justifyContent:'space-around'}} >
                        {
                            regions.map((el, id) => {
                                return <div className="rendering" >
                                        <div>
                                            <h1>{el.title}:  {el.price} </h1> 
                                        </div>
                                        <div style={{padding: 10}} >
                                           <img src={el.img} />
                                        </div>
                                        <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >buy</Button>
                                </div>
                            })
                        }
                    </div>
                </div>
            <div className="card">
                <h1>Горящие туры в любую страну из Бишкека</h1>
                <p>Туры за границу из Бишкека придутся по душе
                     всем любителям ярких впечатлений. Романтические
                      туры в Париж, Рим и Неаполь. Незабываемый отдых 
                      в Таиланде, туры для парочек в райских уголках 
                      нашей планеты — живописные Бали и Гоа.  
                      Экскурсионные туры по магической Чехии, величественной Италии,
                       утонченной Франции, колоритной Грузии… Горящие
                        путевки в солнечную Анталию или роскошный Дубай. Любая из 
                        предложенных нами стран уникальна, интересна и необыкновенно красива.</p>
            </div>
        </div>
    )
}
