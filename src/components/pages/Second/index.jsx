import React from "react";
import './Second.css';
import SubwayIcon from '@material-ui/icons/Subway';

export const Second = () => {

   return (
        <div className="container second">
            <div className="nav">
                <h1>Услуги при переезде по Кыргызстану</h1>
                <p>Надежно. Безопасно. Оперативно.</p>
            </div> 
             <div className="avtos">
                 <div className="avto">
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>Услуги хранения имущества в Бишкеке, Кыргызстане</h3>
                         <p>Обеспечиваем хранение офисной мебели, оборудования, архивов, рекламных материалов и выставочного оборудования в любом объеме и на любой срок, от 1 дня в Бишкеке, Кыргызстане. Надежно!</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>Услуги упаковки вещей и техники в Бишкеке, Кыргызстане</h3>
                         <p>Вся офисная техника, документация, канцелярские принадлежности и личные вещи сотрудников упаковываются и маркируются. Используются качественные упаковочные материалы, при упаковке имущества соблюдаются технологии проведения работ для обеспечения сохранности имущества при перемещении.</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>Перевозка имущества</h3>
                         <p>Имущество заказчика перевозится на оборудованных мебельных фургонах, имеющих внутреннюю обшивку и системы крепления фиксации груза в кузове. Для транспортировки могут быть привлечены автомобили различной грузоподъемности.</p>
                     </div>
                     <div>
                         <div><SubwayIcon/></div>
                         <h3>Услуги перестановки мебели в Бишкеке, Кыргызстане</h3>
                         <p>Осуществляем перестановку офисной мебели в пределах одного этажа и между этажами. Такая необходимость часто возникает при организации ремонта, при ротации персонала или изменении размеров офиса.</p>
                     </div>
                 </div>
                 <div className="avto">
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>Сборка/разборка мебели в Бишкеке, Кыргызстане</h3>
                        <p>Наши специалисты обладают многолетним опытом работы, что позволяет им максимально быстро и качественно собрать или разобрать любую офисную мебель. В работе используется профессиональный инструмент.</p>
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>Услуги погрузочных и разгрузочных работ в Бишкеке, Кыргызстане</h3>
                        <p>Погрузочно-разгрузочные работы выполняются в точном соответствии с требованиями безопасности, чтобы обеспечить сохранность имущества клиента и гарантировать максимальную оперативность переезда.</p> 
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>Грузоперевозки в Бишкеке, Кыргызстане</h3>
                        <p>При помощи специального оборудования и оснастки наши специалисты организуют перемещение и транспортировку любых тяжеловесных и негабаритных предметов, в т. ч. офисных сейфов, серверного оборудования, архивных систем и другого офисного оборудования.</p>
                    </div>
                    <div>
                        <div><SubwayIcon/></div>
                        <h3>Услуги обустройства в новых офисах в Бишкеке, Кыргызстане</h3>
                        <p>Чтобы вы смогли как можно быстрее возобновить работу компании в новом офисе, мы соберем и расставим мебель, разложим вещи сотрудников по местам, повесим жалюзи, вывезем образовавшийся мусор (использованный упаковочный материал).</p>
                    </div>
                 </div>
             </div>
        </div>
    )
}