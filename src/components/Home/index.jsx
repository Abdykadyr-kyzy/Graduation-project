import React,{useEffect} from "react";
import './Home.css';
import {Link} from "react-router-dom"
import {Carousel} from "antd"
import Button from "@material-ui/core/Button"
import { useDispatch, useSelector } from "react-redux";
import { add_order } from "../../store/actions";
import { datas,all } from "../../store/order";
import swal from 'sweetalert';
import { UserProfile } from "../foruser/UserProfile";


export const Home = () => {
    //fot translate
    const store = useSelector((state) => state.auth.data)
    const orders = useSelector(state => state.order.orders)
 
    const currentUser = useSelector((state) => state.user.currentUser)

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])

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
        <div className="home_home" >
            <div className="big">
                <Carousel autoplay>
                    <div className="bir">
                       <h1 style={{color: 'orange'}} >{store.car}</h1>
                       <img src="https://www.nomadasaurus.com/wp-content/uploads/2019/06/Photos-of-Kyrgyzstan.jpg" />
                    </div>
                    <div className="bir">
                       <h1 style={{color: 'orange'}}>{store.car}</h1>
                       <img src="https://wildrussia.travel/sites/default/files/images/tours/blog_gallery/Kirgizia_2020/6_reka_telety_1537365047123256586.jpg" />
                    </div>
                    <div className="bir">
                      <h1 style={{color: 'orange'}}>{store.car}</h1>
                      <img src="https://cs9.pikabu.ru/post_img/big/2020/04/09/7/1586429862152427975.jpg" />
                    </div>
                    <div className="bir">
                      <h1 style={{color: 'orange'}}>{store.car}</h1>
                      <img src="https://weproject.media/upload/medialibrary/b52/b523f1468d8ca02d3b7246bfaaba1204.jpg" />
                    </div>
                </Carousel>
            </div>
            <div className="home" >
                <div className="home_cards">
                    <div className="home_word">
                        <h1>{store.bish}</h1>
                    </div>
                    <div>
                         <div className="home_block" >
                            {
                                datas.map((el, id) => {
                                    return <div className="home_renderings" >
                                        <div className="rendering"key={id} >
                                            <div>
                                                <h1 style={{textTransform:'uppercase'}} >{el.title}:  {el.price} </h1> 
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
                        <h1>{store.regions}</h1>
                    </div>
                    <div className="home_block" >
                        {
                            all.map((el, id) => {
                                return <div className="home_renderings" >
                                    <div className="rendering" key={id} >
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
                    <Link to="/three"><Button>{store.see}</Button></Link>
                </div>
            </div>
        </div>
    )
}
