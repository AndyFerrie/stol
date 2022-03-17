import React from 'react'
import chairData from '../../db.json'
import './chairGrid.css'
import {Link} from 'react-router-dom';

const ChairGrid = () => {
  return (
    <div className={"grid"}>
        {chairData.results.map(chair =>
            <Link to={`${chair.id}`}>
             <div key={chair.productName} className={"card"}>
                    <img src={chair.urls.small} alt=""></img>
                    <p>{chair.productName}</p>
                    <div className={"priceStock"}>
                        <p className={"price"}>{"£" + chair.price}</p>
                        <p className={"stock"}>{chair.stock + " in stock"}</p>
                    </div>
            </div>
            </Link>   
        )}
    </div>
  )
}

export default ChairGrid