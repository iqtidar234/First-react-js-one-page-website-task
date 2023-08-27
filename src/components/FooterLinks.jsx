import React from 'react'

const FooterLinks = ({ links }) => {
  return (
    <div className="links text-white">
      <div className="links__title"><h4 className="links__heading">{links.heading}</h4></div>
      <div className="div2">
        <div className="div2__inner"></div>
      </div>
      {links.location.map((item) => {
        return (
          <div className={`links__item `} >
            {item.icon}
            <p className="paragraph text-white">{item.text}</p>
          </div>
        )
      })}

    </div>
  )
}

export default FooterLinks