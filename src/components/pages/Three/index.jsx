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
import {useSelector} from 'react-redux'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Three = () => {

    const store = useSelector((state) => state.auth.data)
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
                         <h1>{store.nav3}</h1>
                      </div>
                      <div className="two_three">
                         <h1>{store.nav3}</h1>
                      </div>
                      <div className="thr_three">
                         <h1>{store.nav3}</h1>
                      </div>
                      <div className="four_three">
                         <h1>{store.nav3}</h1>
                      </div>
                      <div className="five_three">
                         <h1>{store.nav3}</h1>
                      </div>
                 </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                    <h1>{store.three2} </h1>
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
                                        handleClick()}} type="primary" >{store.buy}</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                 </div>
            </div>
            <div className="cards_all">
                 <div className="word">
                    <h1>{store.three12}</h1>
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
                                        handleClick()}} type="primary" >{store.buy}</Button>
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
                                        handleClick()}} type="primary" >{store.buy}</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                 </div>
           </div>   
            <div className="card_three" >
                <h1>{store.threeh1}</h1>
                 <p>{store.threep}</p>
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