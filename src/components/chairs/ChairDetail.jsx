import React from 'react'
import chairData from '../../db.json'

const ChairDetail = () => {

   const chairID = window.location.pathname.substring(1);

   function findId(chairData, idToLookFor) {
    var chairArray = chairData.results;
    for (var i = 0; i < chairArray.length; i++) {
        if (chairArray[i].id === idToLookFor) {
            return(chairArray[i]);
        }
    }
}

var item = findId(chairData, chairID);

   return (
       <>
        <div>{item.productName}</div>
        <div>{item.price}</div>
       </>
    
  )
}

export default ChairDetail

