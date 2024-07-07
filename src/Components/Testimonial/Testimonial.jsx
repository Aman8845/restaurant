import React from 'react'
import './Testimonial.css'
import ProfilePic from '../../Assets/profile-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus atque repellat quidem! Sequi, cupiditate.</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique ab, perferendis voluptates illum minima iste accusantium possimus laudantium rerum?</p>
        <div className="testimonials-stars-container">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <h2>Aman</h2>
      </div>
    </div>
  )
}

export default Testimonial
