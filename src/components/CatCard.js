import React from 'react'

const CatCard = ({ cat }) => {
  return (
    <div>
      <img src={cat.url}/>
      <p>{cat.name}</p>
    </div>
  )
}

export default CatCard
