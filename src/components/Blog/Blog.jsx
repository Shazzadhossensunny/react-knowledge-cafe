import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";
export default function Blog({ blog, handleAddTittleToBookmark, handleMarkAsRead }) {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center mt-8">
          <div className="w-[60px] h-[60px]">
            <img className="w-full h-full" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111]">{author}</h3>
            <p className="text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-xl font-medium text-[#11111199]">
            {reading_time} min read
          </p>
          <button onClick={()=>handleAddTittleToBookmark(blog)} className="text-xl font-medium text-[#11111199]">
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-[#111] my-4">{title}</h2>
      <p className="space-x-4 text-xl font-medium text-[#11111199]">
        {hashtags.map((hastag, index) => (
          <span key={index}>#{hastag}</span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time, id)} className="text-xl font-semibold text-[#6047EC] underline mt-5">
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddTittleToBookmark : PropTypes.func.isRequired
};
