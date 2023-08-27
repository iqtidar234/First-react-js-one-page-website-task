import React from 'react'
import SectionTitle from './SectionTitle'
import PricingCart from './PricingCart'

const Pricing = () => {
  return (
      <div className='container pricing'>
          <SectionTitle heading={'PRICING PLANS'} subHeading={'We are Offering Competitive Prices for Our Clients'} />
          <div className="pricing__carts">
              <PricingCart bgColor={'bg-light'} duration={'20'} />
              <PricingCart bgColor={'bg-white'} duration={'10'}/>
              <PricingCart bgColor={'bg-light'} duration={'20'}/>
          </div>  
    </div>
  )
}

export default Pricing