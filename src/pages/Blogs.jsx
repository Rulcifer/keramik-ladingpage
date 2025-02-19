import { useParams } from "react-router-dom";
import BlogData from "../pages/data/BlogData"; // Pastikan path sesuai

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="container pt-8">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">{blog.published}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[300px] object-cover rounded-lg my-4"
      />
      <p className="text-lg whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
