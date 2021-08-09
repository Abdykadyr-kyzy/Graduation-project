import React from "react";
import './Home.css';
import {Link} from "react-router-dom"
import {Carousel,Modal,Button } from "antd"
import { useState } from 'react';
import { useDispatch } from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';
import { add_order } from "../../store/actions";
import { data,all } from "../../store/order";

export const Home = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
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
    return (
        <div style={{width:1450,height:1800}}>
            <div className="big">
                <Carousel autoplay>
                    <div className="bir">
                       <h1 style={{color: 'orange'}} >Kyrgyzstan</h1>
                    </div>
                    <div className="eki">
                       <h1 style={{color: 'orange'}}>Kyrgyzstan</h1>
                    </div>
                    <div className="uch">
                      <h1 style={{color: 'orange'}}>Kyrgyzstan</h1>
                    </div>
                    <div className="four">
                      <h1 style={{color: 'orange'}}>Kyrgyzstan</h1>
                    </div>
                </Carousel>
            </div>
            <div className="home" >
                <div className="home_cards">
                    <div className="home_word">
                        <h1>Bishkek</h1>
                    </div>
                    <div>
                        <div style={styles.menuContainer} >
                            {
                                data.map((el, id) => {
                                    return <Tooltip>
                                        <div className="rendering"key={id} >
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
                    <Link to="/first"><Button>See all programs</Button></Link>
                </div>
                <div className="home_cards">
                    <div className="home_word">
                        <h1>Regions</h1>
                    </div>
                    <div style={styles.menuContainer} >
                        {
                            all.map((el, id) => {
                                return <Tooltip>
                                    <div className="rendering" key={id} >
                                        <h1>{el.title}:  {el.price} </h1> 
                                        <img src={el.img} />
                                        <Button onClick={() => {dispatch(add_order(el))
                                        handleClick()}} type="primary" >buy</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div>
                    <Link to="/three"><Button>See all programs</Button></Link>
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