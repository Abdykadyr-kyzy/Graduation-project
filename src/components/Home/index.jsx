import React from "react";
import './Home.css';
import {Link} from "react-router-dom"
import {Carousel,Modal,Button } from "antd"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add_order } from "../../store/actions";
import { datas,all } from "../../store/order";
import swal from 'sweetalert';

export const Home = () => {
    //fot translate
    const store = useSelector((state) => state.auth.data)

    const dispatch = useDispatch()
    const mostrarAlerta = () =>{
		swal({
            title: "succes!",
            text: "We will connect!",
            icon: "success",
            button: "ok",
          });
          
	}
    return (
        <div style={{width:1450,height:1800}}>
            <div className="big">
                <Carousel autoplay>
                    <div className="bir">
                       <h1 style={{color: 'orange'}} >{store.car}</h1>
                    </div>
                    <div className="eki">
                       <h1 style={{color: 'orange'}}>{store.car}</h1>
                    </div>
                    <div className="uch">
                      <h1 style={{color: 'orange'}}>{store.car}</h1>
                    </div>
                    <div className="four">
                      <h1 style={{color: 'orange'}}>{store.car}</h1>
                    </div>
                </Carousel>
            </div>
            <div className="home" >
                <div className="home_cards">
                    <div className="home_word">
                        <h1>{store.bish}</h1>
                    </div>
                    <div>
                        <div style={styles.menuContainer} >
                            {
                                datas.map((el, id) => {
                                    return <div>
                                        <div className="rendering"key={id} >
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
                    <Link to="/first"><Button>{store.see}</Button></Link>
                </div>
                <div className="home_cards">
                    <div className="home_word">
                        <h1>{store.reg}</h1>
                    </div>
                    <div style={styles.menuContainer} >
                        {
                            all.map((el, id) => {
                                return <div>
                                    <div className="rendering" key={id} >
                                        <h1>{el.title}:  {el.price} </h1> 
                                        <img src={el.img} />
                                        <Button onClick={() => {dispatch(add_order(el))
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <Link to="/three"><Button>{store.see}</Button></Link>
                </div>
            </div>
        </div>
    )
}

const styles = {
    menuContainer: {
        width: 850,
        display:'flex',
        justifyContent:'space-around'
    },
}