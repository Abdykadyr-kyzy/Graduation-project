import React,{useState} from "react";
import './Three.css';
import {Carousel} from "antd"
import Button from "@material-ui/core/Button"
import { all,alls,aalls} from "../../../store/order"
import { add_order } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';

export const Three = () => {

    const store = useSelector((state) => state.auth.data)
    const dispatch = useDispatch()

    const mostrarAlerta = () =>{
        swal({
                title: store.alert1,
                text: store.alert2,
                icon: "success",
                button: store.alert3,
           })
        }

   return (
        <div className="three">
            <div className="title_thre">
                 <Carousel autoplay>
                    <img className="one_three" src="https://media-cdn.tripadvisor.com/media/photo-s/14/aa/22/fe/museum-sulaiman-too.jpg"  alt=""/>
                    <img className="one_three" src="https://www.centralasia-travel.com/uploads/gallery/1440/abshir-ata-07.jpg" alt="" />
                    <img className="one_three" src="https://strannik.kg/assets/cache_image/assets/lib/2020/03/20/sarychekek_01_1600x0_9ab.webp" alt="" />                   
                    <img className="one_three" src="https://asiamountains.net//assets/cache_image/assets/lib/resized/407/1280x648_0x0_d0b.jpg" alt="" />                      
                    <img className="one_three" src="https://sputnik.kg/images/102414/12/1024141270.jpg" alt="" />                  
                 </Carousel>
            </div>
            <div className="cards">
                <div className="word">
                    <h1>{store.three2} </h1>
                </div>
                <div className="three_render" >
                        {
                            all.map((el, id) => {
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
            <div className="cards_all">
                 <div className="word">
                    <h1>{store.three12}</h1>
                 </div>
                 <div className="three_render" >
                        {
                            alls.map((el, id) => {
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
                 <div className="three_render" >
                        {
                            aalls.map((el, id) => {
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
            <div className="card_three" >
                <h1>{store.threeh1}</h1>
                 <h1>{store.threep}</h1>
            </div>
        </div>
    )
}
