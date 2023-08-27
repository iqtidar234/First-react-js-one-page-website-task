import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogItem = ({ blog, duration }) => {
     AOS.init({
    once: true,
     })
    
  return (
      <div className="blog-post bg-light" data-aos="fade-up" data-aos-duration={`${duration}000`}>
          <div className="blog-post__img--box">
              <img src={blog.image} alt="" className="blog-post__img" />
              <Link className='btn blog-post__img--btn'>{blog.niche }</Link>
          </div>
          <div className="blog-post__text">
              <div className="blog-post__text--author mb-1">
                  <span className="blog-post__text--name ">{blog.author} John Doe</span>
                  <span className="blog-post__text--date">{blog.date} 01 Jan, 2045 </span>
              </div>
              <h4 className='about__call--question font-bold mb-1'>{blog.heading}</h4>
              <p className="paragraph mb-1">{blog.discription}</p>
              <Link className='blog-post__text--btn text-primary'>Read More<BsArrowRight className='blog-post__text--btn--icon'/></Link>
          </div>
    </div>
  )
}

export default BlogItem