import { useParams } from "react-router-dom";
import "./BlogDetails.css";

function BlogDetails({ blogs }) {
    
  const { id: blogId } = useParams();

  var filteredItem;

  function filterById(idToSearch) {
    filteredItem = blogs.filter((item) => item.id === idToSearch);
  }

  filterById(parseInt(blogId));

  return (
    <div className="blog-details">
      <article>
        <div className="blog-details-img">
            <img width="100%" src={filteredItem[0].img} alt={filteredItem[0].title}/>
        </div>
      </article>
      <h1>{filteredItem[0].title}</h1>
      <p>{filteredItem[0].body}</p>
    </div>
  );
}

export default BlogDetails;
