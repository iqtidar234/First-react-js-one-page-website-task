import React from 'react'

const Carousal = ({ item}) => {
    
  return (
      <div className={`carousal `} key={item.id} >
          <div className="carousal__client">
              <div className="carousal__client__img__box"><img src={item.image} alt="" className='carousal__client--img'/></div>
              <div className="carousal__client--text">
                  <h4 className="tags">{item.name}</h4>
                  <p className="paragraph">{item.profession }</p>
              </div>
          </div>
          <div className="carousal__discription">
              <p className="paragraph">{ item.discription}</p>
          </div>
    </div>
  )
}

export default Carousal