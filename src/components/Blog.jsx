import React from 'react'
import SectionTitle from './SectionTitle'
import { blogPosts } from '../constant/Constant'
import BlogItem from './BlogItem'
const Blog = () => {
  let duration=0
  return (
    <section className="container blog">
      <SectionTitle heading={'LATEST BLOG'} subHeading={'Read The Latest Articles from Our Blog Post'} />
      
      <div className="blog__post">
        {blogPosts.map((blog) => {
          duration+=1
          return (
             <BlogItem blog={blog} duration={duration}/>
           )
        })}
      </div>
      </section>
  )
}

export default Blog