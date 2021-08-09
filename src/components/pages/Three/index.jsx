import React,{useState} from "react";
import './Three.css';
import {Carousel, Modal,Button} from "antd"
import { all,alls,aalls} from "../../../store/order"
import { Tooltip } from "antd";
import { add_order } from "../../../store/actions";
import { useDispatch } from "react-redux";
// for Alert
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert"
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Three = () => {

    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(!true);   
        }, 1000)
    };

   return (
        <div className="three">
            <div className="title_thre">
                 <Carousel autoplay>
                      <div className="one_three">
                         <h1>Туры по regionam</h1>
                      </div>
                      <div className="two_three">
                         <h1>Туры по regionam</h1>
                      </div>
                      <div className="thr_three">
                         <h1>Туры по regionam</h1>
                      </div>
                      <div className="four_three">
                         <h1>Туры по regionam</h1>
                      </div>
                      <div className="five_three">
                         <h1>Туры по regionam</h1>
                      </div>
                 </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                    <h1>Горящие туры </h1>
                </div>
                <div style={styles.menuContainer} >
                        {
                            all.map((el, id) => {
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
            <div className="cards_all">
                 <div className="word">
                    <h1>Все туры</h1>
                 </div>
                 <div style={styles.menuContainer} >
                        {
                            alls.map((el, id) => {
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
                            aalls.map((el, id) => {
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
            <div className="card_three" >
                <h1>Туры в Кыргызстан, Китай и страны Центральной Азии из Бишкека</h1>
                 <p>Компания Kyrgyz Travel в Кыргызстане предлагает соотечественникам и гостям из других стран эксклюзивные 
                    туры по Азии.Средняя Азия – это особое состояние души. Это любовь с первого взгляда и на всю жизнь! 
                    Красивая природа, сохранившая свой первозданный вид, древние города с богатой историей, таинственные  
                    легенды, памятники архитектуры, шум и ароматы специй восточного базара, самобытная культура и неповторимое 
                    гостеприимство и теплота души  местного населения… Все это и многое другое  не оставит вас равнодушными и вы 
                    захотите возвращаться сюда снова и снова!</p>
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