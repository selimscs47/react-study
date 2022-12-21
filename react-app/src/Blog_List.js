import React from 'react'

export default function Blog_List() {
  return (
    <div className="home">
    {blogs.map((blog) => (
      <div className='blog-preview' key={blog.id}>
        <h2>{blog.ad}</h2>
        <p>Yazının yazarı :{blog.yazar}</p>
      </div>
    ))}
  </div>
  )
}
