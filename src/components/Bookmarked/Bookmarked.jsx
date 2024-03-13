import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

export default function Bookmarked({bookmark, read}) {
  return (
    <div className="space-y-4">
        <div className="border border-[#6047EC] rounded-lg py-5 px-12 bg-[#6047EC1A]">
            <p className="text-[#6047EC] text-2xl font-bold">Spent time on read : <span>{read}</span> min</p>
        </div>
      <div className="bg-[#1111110D] rounded-lg p-7">
        <h3 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmark.length}
        </h3>

        {bookmark.map((book, index) => (
          <Bookmark key={index} book={book}></Bookmark>
        ))}
      </div>
    </div>
  );
}

Bookmarked.propTypes ={
    bookmark: PropTypes.object.isRequired
}
