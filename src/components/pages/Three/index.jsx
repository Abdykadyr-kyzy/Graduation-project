import React,{useState} from "react";
import './Three.css';
import {Carousel, Modal,Button} from "antd"

export const Three = () => {

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
                <div className="fotos">
                    <div>
                        <h1>Kashka suu</h1>
                        <img src="https://centralasiagb.com/wp-content/uploads/2019/09/Kashka-Suu-ski-resort-24-sbkg0002.jpg" alt="" />
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
                        <img src="https://www.triptokyrgyzstan.com/sites/default/files/images/2019-03/12373264_1686498211565300_5837650685050943349_n.jpg" alt="" />
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
                        <img src="https://i.pinimg.com/originals/8f/17/cf/8f17cfb221c44389292911f5b02731e9.jpg" alt="" /> 
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
                        <img src="https://www.baibol.kg/img/attraction_gallery/152413595171158.jpg" alt=""/> 
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
                            <img src="https://triptokyrgyzstan.com/sites/default/files/media/image/c_sergey_kalachov_9.jpg" alt="" />
                            <img src="http://novosti.kg/wp-content/uploads/2020/04/ajgul.jpg" alt="" />
                            <img src="https://concept.kg/media/cache/f1/19/f119656253f77337c00c74a5e10c950d.jpg" alt="" /> 
                            <img src="https://www.open.kg/uploads/posts/2014-07/1405169362_elechek3.jpg" alt="" />
                        </div>
                        <div className="fotos" >
                            <img src="https://triptokyrgyzstan.com/sites/default/files/media/image/gallery_126_3945_166624.jpg" alt="" />
                            <img src="https://cacdn.araratour.com/file_manager/images/Kyrgyzstan/Sights/ala-kul-lakeo.jpg" alt="" />
                            <img src="https://asiamountains.net/assets/cache_image/assets/lib/resized/370/1600x1063_0x0_d0b.jpg" alt="" /> 
                            <img src="https://upload.wikimedia.org/wikipedia/ky/b/b5/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81_%D1%87%D0%BE%D0%BA%D1%83%D1%81%D1%83.jpg" alt="" />
                        </div>
                    </div>
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