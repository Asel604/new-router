import React from 'react'
import "../components/contact.css"




function Contact() {
  return (
    <div>
    <div className='contact'>
      <div className='con-text'>
        <h2>Обучающие Курсы</h2> 
        <h2 style={{color:"rgb(209,123,26"}}>Генераторы задач</h2>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos illum nobis mollitia sint atque laboriosam suscipit vero aspernatur, tempore error deleniti molestiae itaque iusto. Fugiat impedit quisquam reprehenderit nostrum!</h6>
        <div>
          <input type="text" placeholder='Искать по сайту...' />
          <button>Найти</button>
        </div>
      </div>
      <div className='con-img'>
        <img src="https://abbtech.az/storage/uploads/files/1687508692_1615533694-frontendd.svg" alt="" />
      </div>
    </div>
    <div className='boxes'>
      <div className='box'>
        <h4>Курсы</h4>
        <h6>И обучающие материалы для самообразования, повышения квалификации, аттестации. База курсов постоянно расширяется</h6>
      </div>
      <div className='box'>
        <h4>Генераторы</h4>
        <h6>Задачи, на которые нет решений и дети не смогут списать их. Плюс возможность большого выбора заданий для индивидуальной работы</h6>
      </div>
      <div className='box'>
        <h4>Сертификат</h4>
        <h6>Мы работаем над получением образовательной лицензии, чтобы выдавать документы государственного образца</h6>
      </div>
    </div>


    </div>
  )
}

export default Contact
