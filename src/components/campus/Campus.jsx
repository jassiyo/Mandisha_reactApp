import React from 'react'
import './campus.css'
import galary1 from '../../assets/galary1.jpeg'
import galary2 from '../../assets/galary2.jpg'
import galary3 from '../../assets/galary3.jpeg'
import galary4 from '../../assets/galary4.jpg'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
const Campus = () => {
  return (
    <div className='campus'>
        <div className='galary'>
            <img src={galary1} alt='' />
            <img src={galary2} alt='' />
            <img src={galary3} alt='' />
            <img src={galary4} alt='' />
        </div>
        <button className='btn dark-btn'>See more here <ReadMoreIcon /></button>
    </div>
  )
}

export default Campus