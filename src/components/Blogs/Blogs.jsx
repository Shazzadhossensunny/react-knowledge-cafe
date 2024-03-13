import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({handleAddTittleToBookmark, handleMarkAsRead}) {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
     fetch('blogs.json')
     .then(res => res.json())
     .then(data => setBlogs(data))
    },[])

  return (
    <div >
       {
        blogs.map((blog)=> <Blog key={blog.id} blog={blog} handleAddTittleToBookmark={handleAddTittleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
       }
    </div>
  )
}

Blogs.propTypes = {
    handleAddTittleToBookmark: PropTypes.func
}
