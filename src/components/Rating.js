import React from 'react'

export default function Rating({rating}) {
    let ratingArray = Array(5).fill(false);

    for(let i=0; i<rating; i++){
        ratingArray[i] = true;
    }
  return (
    <div className=''>
        {ratingArray.map((value, index) => (
            value ? (<span key={index} className='bi bi-star-fill text-orange-400'></span>) : (<span key={index} className='bi bi-star text-orange-500' />) 
        ))}
      
    </div>
  )
}
