import React from 'react'
import './mobile.css'

export default function Mobile(data) {
  return (
    <div className='mobile'>
      <img src={data.path}/>
      <h4>{data.name}</h4>
      <p>Price:{data.price}</p>
      <button>buy now</button>
    </div>
  );
}
