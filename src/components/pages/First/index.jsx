import React from "react";
import './First.css';
import {Carousel, Modal} from "antd"
import { useState } from 'react';
import { useEffect } from 'react'
import { data } from "../../../store/order"
import {region} from "../../../store/order"
import {regions} from "../../../store/order"
import { useSelector, useDispatch } from 'react-redux'
import { add_order, delete_order } from "../../../store/actions"
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"
// alert
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert"
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const First = () => {

    const orders = useSelector(state => state.order.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])
    // alert
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(!true);   
        }, 1000)
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  

    return(  
        <div style={{height: 2000,backgroundColor:'cornsilk',width: 1450,display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between' }}>
            <div className="title">
                <Carousel autoplay>
                    <div className="title_zero">
                        <h1>Туры в Бишкек.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
                    </div>
                    <div className="title_one">
                        <h1>Туры в Бишкек.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
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
                     <h1>Горящие туры </h1>
                </div>
                <div>
                    <MenuList style={styles.menuContainer} >
                        {
                            data.map((el, id) => {
                                return <Tooltip>
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
                                        handleClick()}} type="primary" >buy</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </MenuList>
                </div>
             </div>
            <div  className="cards_all" >
                <div className="word">
                    <h1>Все туры</h1>
                  </div>
                  <div style={styles.menuContainer} >
                      {
                        region.map((el, id) => {
                            return <Tooltip>
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
                                        handleClick()}} type="primary" >buy</Button>
                                </div>
                            </Tooltip>
                        })
                      }
                   </div>
                    <div style={styles.menuContainer} >
                        {
                            regions.map((el, id) => {
                                return <Tooltip>
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
                                        handleClick()}} type="primary" >buy</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div>
                </div>
            <Snackbar open={open} autoHideDuration={6000}>
                <Alert severity="success">
                    Заказ успешно добавлен!
                </Alert>
            </Snackbar>
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

const styles = {
    menuContainer: {
        width: 850,
        display:'flex',
        justifyContent:'space-around'
    },
}