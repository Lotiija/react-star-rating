import React, { useState } from 'react';
import {FaStar} from "react-icons/fa";
import './index.css';

const StarRating = ({noOfStars}) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseClick = (currentIndex) => {
    setRating(currentIndex)
  }

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1

        return <FaStar
          key={index}
          className={index <= (rating || hover) ? "active" : "inactive"} 
          onClick={() => handleMouseClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          size={30}
        />

      })}
    </div>
  )
}

export default StarRating;