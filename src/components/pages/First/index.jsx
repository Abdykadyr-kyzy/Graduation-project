import React from "react";
import './First.css';
import {Carousel, Modal,Button} from "antd"
import { useState } from 'react';
import {Link} from "react-router-dom"

export const First = () => {

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
        <div style={{height: 1900,backgroundColor:'cornsilk',width: 1450,display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between' }}>
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
                <div className="fotos">
                    <div>
                        <h1>Kashka suu</h1>
                        <img src="https://kashka-suu.kg/wp-content/uploads/2019/12/cropped-Image-1-at-frame-4.jpg" alt="" />
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
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/3c/f7/80.jpg" alt="" />
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
                        <img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRtOEaEHp-k0jPeRu6aKunmA" alt="" /> 
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
                        <img src="https://svetofor.info/images/newsfeed/19.04.2019/flejump.jpg" alt="" /> 
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
             </div>
             <div className="cards_all">
                 <div className="word">
                    <h1>Все туры</h1>
                </div>
                <div className="fotos">
                    <div>
                        <h1>Osh bazar</h1>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/4b/87/f2/img-20180824-175736-814.jpg" alt="" />
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
                        <h1>Arashan</h1>
                        <img src="https://planetaduha.com/wp-content/uploads/2014/06/14-altyn-arashan-013.jpg" alt="" />
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
                        <h1>Ata beyit</h1>
                        <img src="http://1.bp.blogspot.com/-X1vprd-f-eA/VSJoIefNccI/AAAAAAAAA4M/xgE6vu8Jcz8/s1600/DSC_4568.JPG" alt="" /> 
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
                        <h1>Ploshad</h1>
                        <img src="https://www.baibol.kg/img/attraction_gallery/152413810420654.jpg" alt="" /> 
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
                <div className="fotos">
                    <div>
                        <h1>Filormaniya</h1>
                        <img src="https://koom.press/wp-content/uploads/2021/04/707571.323461abc113998bb8085e59b4ff8ab3.jpg" alt="" />
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
                        <h1>Arka</h1>
                        <img src="https://edem-v-gosti.ru/upload/iblock/ad7/115390_603x354.jpg" alt="" />
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
                        <h1>Meriya</h1>
                        <img src="https://sputnik.kg/images/104881/28/1048812800.jpg" alt="" /> 
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
                        <h1>Dordoi bazar</h1>
                        <img src="https://img.itinari.com/pages/images/original/0bf023fd-56c7-4eb7-b5d5-bdf489351b1f-istock-820873180.jpg?ch=DPR&dpr=1&w=1600&s=b5f717523c556bf502422d854a030883" alt="" />
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
            </div>
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