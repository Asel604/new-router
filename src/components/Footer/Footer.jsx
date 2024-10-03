import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='foot1'>
          <h5>Твоё образование</h5>
          <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</h6>
        </div>
        <div className='foot2'>
        <div>
          <h5>О проекте</h5>
          <h6>О нас</h6>
          <h6>Вакансии</h6>
          <h6>Обратная связь</h6>
          <h6>ЧаВО?</h6>
        </div>
        <div>
          <h5>Курсы</h5>
          <h6>Категории</h6>
          <h6>Как учиться</h6>
          <h6>Стать преподавателем</h6>
        </div> 
        <div>
          <h5>Генераторы</h5>
          <h6>Домашки</h6>
          <h6>Экзамены</h6>
          <h6>Олимпиады</h6>
          <h6>Листы</h6>
        </div>
         <div>
          <h5>Контакты</h5>
          <h6>+7900000000</h6>
          <h6>kursy@tvoeobr.ru</h6>
          <h6>Российская Федерация, 
Челябинская область, 
г. Магнитогорск</h6>
        </div>
        </div>
   
      </div>
         <p className='foot3'>Твоё образование, Все права защищены, 2023-2024</p>
    </div>
  )
}

export default Footer
