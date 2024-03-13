import PropTypes from "prop-types";
export default function Bookmark({book}) {
  return (
    <div className="bg-white rounded-lg p-5 mt-4">
        <p className="text-lg font-semibold text-[#111]">{book.title}</p>
    </div>
  )
}

Bookmark.propTypes = {
    book: PropTypes.object.isRequired
}
