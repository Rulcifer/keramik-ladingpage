import { useParams } from "react-router-dom";
import BlogData from "./data/BlogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  const relatedArticles = BlogData.filter((item) => item.id !== blog.id).slice(
    0,
    3
  );

  return (
    <div className="content-wrapper">
      {/* Head Container */}
      <div className="container pt-8">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-500">{blog.published}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[300px] object-cover rounded-lg my-4"
        />
      </div>

      {/* Content Grid */}
      <div className="container content-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Table of Contents */}
        <div
          className="flex flex-col gap-6 p-4 rounded-lg sj-color-bg-gray-50"
          data-v-1cc73ed4=""
        >
          <h4 className="sj-text-display2" data-v-1cc73ed4="">
            Baca Kategori Lainnya
          </h4>
          <a
            href="/blog/berita-juragan"
            className="sj-text-display4 underline text-text-main"
            data-v-1cc73ed4=""
          >
            Berita Juragan
          </a>
          <a
            href="/blog/promo-event"
            className="sj-text-display4 underline text-text-main"
            data-v-1cc73ed4=""
          >
            Promo dan Event
          </a>
          <a
            href="/blog/tips-juragan"
            className="sj-text-display4 underline text-text-main"
            data-v-1cc73ed4=""
          >
            Tips Juragan
          </a>
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none break-words min-w-0 blog-content prose-h2:scroll-m-32">
          <h1 className="text-2xl font-bold">{blog.chapter_title}</h1>
          <p className="text-lg whitespace-pre-line">{blog.content}</p>
        </div>

        {/* Blog Share Links & TOC */}
        <div className="flex flex-col gap-8">
          {/* Share Links */}
          <div className="flex items-center gap-3 blog-shareLink">
            {/* Tambahkan tombol share */}
          </div>

          {/* Related Articles */}
          <div className="py-6 flex flex-col gap-4 blog-relatedArticles">
            <h4 className="text-xl font-bold">Artikel Terkait</h4>
            <div className="flex flex-col gap-4">
              {relatedArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-100"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">{article.title}</h5>
                    <p className="text-sm text-gray-500">{article.published}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Blog Side Banner */}
          <div className="min-w-0 px-0 blog-sideBanner">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover rounded-lg my-4"
            />
            {/* Tambahkan banner atau iklan di sini */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
