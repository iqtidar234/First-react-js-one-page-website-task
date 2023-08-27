import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import TeamMember from './TeamMember'
import {teamItems} from '../constant/Constant'


const Team = () => {
    let duration=0
  return (
      <section className="container team" >
          <SectionTitle heading={'TEAM MEMBERS'} subHeading={'Professional Stuffs Ready to Help Your Business'} />
          
          {/* TEAM MEMBERS */}
          <div className="team__members">
              {teamItems.map((item) => {
                  duration+=1
                  return (
                      <TeamMember item={item} duration={duration}/>
                  )
                  
              })}
          </div>
          
    </section>
  )
}

export default Team