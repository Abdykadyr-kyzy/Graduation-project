import React from "react";
import './Home.css';
import {useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {Carousel,Modal,Button } from "antd"
import { useState } from 'react';

export const Home = () => {

    const store = useSelector(state => state.data)
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
        <div className="container home">
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
                    <div className="uch">
                      <h1 style={{color: 'orange'}}>Kyrgyzstan</h1>
                    </div>
                </Carousel>
            </div>
            <div>
                <h1>Туры по Bishkek</h1>
                <div className="fotos">
                    <div>
                        <h1>Kashka suu</h1>
                        <img src="https://kashka-suu.kg/wp-content/uploads/2019/12/cropped-Image-1-at-frame-4.jpg" />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>Ala archa</h1>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/3c/f7/80.jpg"/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>Chunkur chack</h1>
                        <img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRtOEaEHp-k0jPeRu6aKunmA"/> 
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>fly jump</h1>
                        <img src="https://svetofor.info/images/newsfeed/19.04.2019/flejump.jpg"/> 
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                </div>
                <Link to="/first"><Button>See all programs</Button></Link>
            </div>
            <div className="fotos">
                    <div>
                        <h1>Kashka suu</h1>
                        <img src="https://centralasiagb.com/wp-content/uploads/2019/09/Kashka-Suu-ski-resort-24-sbkg0002.jpg" />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>Apshyr Ata</h1>
                        <img src="https://www.triptokyrgyzstan.com/sites/default/files/images/2019-03/12373264_1686498211565300_5837650685050943349_n.jpg" />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>Cary chelek</h1>
                        <img src="https://i.pinimg.com/originals/8f/17/cf/8f17cfb221c44389292911f5b02731e9.jpg"/> 
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <h1>Son kol</h1>
                        <img src="https://www.baibol.kg/img/attraction_gallery/152413595171158.jpg"/> 
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary">Buy</Button>
                            <h2>100$ 6 day</h2>
                            <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                </div>
                <Link to="/three"><Button>See all programs</Button></Link>
        </div>
    )
}