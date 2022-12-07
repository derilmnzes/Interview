import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateContext from '../Context/CreateContext'

const Card = ({image,name,id}) => {
   const c = useContext(CreateContext)
   const Navigate = useNavigate()
  return (
    <div onClick={()=>Navigate(`${c.cateGory}/${id}`)} className='card'>
        
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_name'>
                {name}
            </div>
        
    </div>
  )
}

export default Card