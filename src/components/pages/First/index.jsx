import React,{ useState,useEffect } from "react";
import './First.css';
import {Carousel} from "antd"
import {regions,region,datas} from "../../../store/order"
import {data} from "../../../store/enru"
import { useSelector, useDispatch } from 'react-redux'
import { add_order } from "../../../store/actions"
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
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
            title: "succes!",
            text: "You can see it on your profile!",
            icon: "success",
            button: "ok",
          });
          
	}
   

    return(  
        <div style={{height: 2000,backgroundColor:'cornsilk',width: 1450,display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between' }}>
            <div className="title">
                <Carousel autoplay>
                    <div className="title_zero">
                        <h1>{store.car1}<br/> {store.car2} <br/>{store.car3}</h1>
                    </div>
                    <div className="title_one">
                        <h1>{store.car1}<br/> {store.car2} <br/>{store.car3}</h1>
                    </div>
                    <div className="title_two">
                        <h1>{store.car1}<br/> {store.car2} <br/>{store.car3}</h1>
                    </div>
                    <div className="title_three">
                        <h1>{store.car1}<br/> {store.car2} <br/>{store.car3}</h1>
                    </div>
                </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                     <h1>{store.tours}</h1>
                </div>
                <div>
                    <MenuList style={styles.menuContainer} >
                        {
                            datas.map((el, id) => {
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
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
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
                                        mostrarAlerta()}} type="primary" >{store.buy}</Button>
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
                                       mostrarAlerta()}} type="primary" >{store.buy}</Button>
                                    </div>
                                </Tooltip>
                            })
                        }
                    </div>
                </div>
            <div className="card">
                <h1>{store.firsth1}</h1>
                <p>{store.firstp}</p>
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