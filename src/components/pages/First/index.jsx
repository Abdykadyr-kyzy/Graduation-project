import React,{ useState,useEffect } from "react";
import './First.css';
import {Carousel} from "antd"
import {regions,region,datas} from "../../../store/order"
import { useSelector, useDispatch } from 'react-redux'
import { add_order } from "../../../store/actions"
import Button from "@material-ui/core/Button"

//alert
import swal from 'sweetalert';
 

export const First = () => {

    //fot translate
    const store = useSelector((state) => state.auth.data)
    //for rendering
    const orders = useSelector(state => state.order.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])
  
        const mostrarAlerta = () =>{
            swal({
                    title: store.alert1,
                    text: store.alert2,
                    icon: "success",
                    button: store.alert3,
               })
        }

    return(  
        <div className="first_first">
            <div className="title">
                <Carousel autoplay>
                    <div className="title_zero">
                        <h1 className="title_title" >{store.car1}</h1>
                    </div>
                    <div className="title_one">
                        <h1 className="title_title">{store.car1}</h1>
                    </div>
                    <div className="title_two">
                        <h1 className="title_title">{store.car1}</h1>
                    </div>
                    <div className="title_three">
                        <h1 className="title_title">{store.car1}</h1>
                    </div>
                </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                     <h1>{store.tours}</h1>
                </div>
                <div>
                    <div className="first_render" >
                        {
                            datas.map((el, id) => {
                                return <div>
                                    <div
                                        style={{ display:'flex',flexDirection:'column',justifyContent:'space-between',cursor: 'pointer'}}
                                        key={id} >
                                        <div>   
                                            <h1>{el.title}:  {el.price} </h1> 
                                        </div>
                                        <div style={{padding: 10}} >
                                           <img src={el.img} />
                                        </div>
                                        <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
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
                  <div className="first_render">
                      {
                        region.map((el, id) => {
                            return <div>
                                <div
                                    style={{ display:'flex',flexDirection:'column',justifyContent:'space-between',cursor: 'pointer'}}
                                    key={id} >
                                    <div>
                                        <h1>{el.title}:  {el.price} </h1> 
                                    </div>
                                    <div style={{padding: 10}} >
                                        <img src={el.img} />
                                    </div>
                                      <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
                                </div>
                            </div>
                        })
                      }
                   </div>
                    <div className="first_render">
                        {
                            regions.map((el, id) => {
                                return <div>
                                    <div
                                        style={{ display:'flex',flexDirection:'column',justifyContent:'space-between',cursor: 'pointer'}}
                                        key={id} >
                                        <div>
                                            <h1>{el.title}:  {el.price} </h1> 
                                        </div>
                                        <div style={{padding: 10}} >
                                           <img src={el.img} />
                                        </div>
                                        <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="card">
                    <b>{store.firsth1}</b>
                    <b><p>{store.firstp}</p></b>
                </div>
        </div>
    )
}

