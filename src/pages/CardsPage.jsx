import React from 'react'
import CardComponent from '../components/CardComponent';
const CardsPage = () => {
  return (
    <div>
      <div className="row g-4">
          <div className="col-md-4">
            <CardComponent
            title="Лягушка 1"
            imageUrl = "/images/1.jpg"
            description="Это самая крутая лягушка номер 1"
            imageAlt="Лягушка 1"></CardComponent>
          </div>
          <div className="col-md-4">
            <CardComponent
            title="Лягушка 2"
            imageUrl = "/images/2.jpg"
            description="Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2"
            imageAlt="Лягушка 2"></CardComponent>
          </div>
          <div className="col-md-4">
            <CardComponent
            title="Лягушка 3"
            imageUrl = "/images/3.jpg"
            description="Это самая крутая лягушка номер 3"
            imageAlt="Лягушка 3"></CardComponent>
          </div>
        </div>
    </div>
  )
}

export default CardsPage
