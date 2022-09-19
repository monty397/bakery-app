import React from 'react'
import './offers.css'
import Recipe from './recipe.jpg'
import Menu from './menu.jpg'
import Button from '@mui/material/Button';

function Offers() {
  return (
    <div className="flex-container">
      <div class="child">
        <img className="offers-img" src={Menu} alt="View our free recipes." width="300px" height="300px" />
        <h4 className="offers-h4">We have Pizza too!!!</h4>
        <p className="offers-p">Click below to view the different types of pizza we have to offer</p>
        <Button
          style={{
            marginBottom: "40px"
          }}
          variant="outlined">Our Recipes</Button>
      </div>

      <div class="child">
        <img className="offers-img2" src={Recipe} alt="Make sure to browse our menu." width="300" height="300" />
        <h4 className="offers-h4">View our Menu</h4>
        <p className="offers-p">Click Below to view our pastries that are alwasy fresh and ready to go.</p>
        <Button style={{
          marginBottom: "40px"
        }}
          variant="outlined">Our Menu</Button>
      </div>
    </div>
  )
}

export default Offers
