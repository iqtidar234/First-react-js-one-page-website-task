import React from 'react'

const BrandItem = ({img}) => {
  return (
      <div className="brand-item">
          <img src={img} alt="" className="brand-item__img" />
    </div>
  )
}

export default BrandItem