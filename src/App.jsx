import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarked from './components/Bookmarked/Bookmarked'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleAddTittleToBookmark = (blog) => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark);
  }

  const [read, setRead] = useState(0)
  const handleMarkAsRead = (reading_time , id) => {
    const newRead = read + reading_time;
    setRead(newRead);
    const remaining = bookmark.filter((book) => book.id !== id)
    setBookmark(remaining)

  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex justify-between mt-8 gap-6'>
        <div className='md:w-2/3'>
          <Blogs handleAddTittleToBookmark={handleAddTittleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className='md:w-1/3'>
          <Bookmarked bookmark={bookmark} read={read}></Bookmarked>
        </div>
      </div>
    </div>
  )
}

export default App
