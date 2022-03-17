import React from 'react'
import chairData from '../../db.json'
import './chairGrid.css'

const ChairGrid = () => {
  return (
    <div className={"grid"}>
        {chairData.results.map(chair => 
            <div className={"card"}>
                <img src={chair.urls.small} alt=""></img>
                <p>{chair.productName}</p>
                <div className={"priceStock"}>
                    <p className={"price"}>{"£" + chair.price}</p>
                    <p className={"stock"}>{chair.stock + " in stock"}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default ChairGrid