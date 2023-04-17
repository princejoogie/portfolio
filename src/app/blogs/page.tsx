import { BlogItem } from "@/components/blogs";
import { getBlogs } from "@/utils/helpers";

const BlogPage = () => {
  const blogs = getBlogs();
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
        Blogs.
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {blogs.map(({ frontMatter, slug }) => (
          <BlogItem
            key={slug}
            description={frontMatter.description}
            title={frontMatter.title}
            date={frontMatter.date}
            href={`/blogs/${slug}`}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
