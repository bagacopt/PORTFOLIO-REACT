import React from 'react'
import { Link } from 'react-router-dom'

function MyPicture() {
  return (
    <>
      <li className='cards_item'>
        <Link className='cards_item_link'>
            <figure className='cards_item_pic-wrap'>
                <img className='cards_item_img' src='../public/images/img-1.jpg' alt='Myself'/>
            </figure>
            <div className='cards_item_info'>
                <h5 className='cards_item_text'> </h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default MyPicture