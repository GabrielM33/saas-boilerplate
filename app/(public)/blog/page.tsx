import React from 'react';
import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: 'Getting Started with Our Platform', category: 'tutorial', date: 'May 1, 2023' },
    { id: 2, title: 'Best Practices for Project Management', category: 'tips', date: 'May 5, 2023' },
    { id: 3, title: 'New Features Released This Month', category: 'news', date: 'May 10, 2023' },
    { id: 4, title: 'How to Optimize Your Workflow', category: 'tutorial', date: 'May 15, 2023' },
    { id: 5, title: 'Customer Success Story: XYZ Corp', category: 'case-study', date: 'May 20, 2023' },
    { id: 6, title: 'Upcoming Webinar: Advanced Techniques', category: 'news', date: 'May 25, 2023' },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Our Blog
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Stay updated with the latest news, tutorials, and insights
          </p>
        </div>
        
        <div className="mt-12">
          <div className="relative self-center bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            {['all', 'tutorial', 'tips', 'news', 'case-study'].map((category) => (
              <Link key={category} href={`/blog?category=${category}`}>
                <button
                  type="button"
                  className="ml-0.5 relative w-1/5 border border-transparent text-zinc-400 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-zinc-400 text-sm mb-4">
                {post.date} | Category: {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </p>
              <p className="text-zinc-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href={`/blog/${post.id}`}>
                <Button
                  variant="slim"
                  type="button"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-md hover:bg-zinc-800"
                >
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:flex sm:flex-col sm:align-center">
          <Link href="/subscribe">
            <Button
              variant="slim"
              type="button"
              className="block w-full sm:w-auto py-2 px-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
            >
              Subscribe to Our Newsletter
            </Button>
          </Link>
        </div>

        <LogoCloud />
      </div>
    </section>
  );
};

export default BlogPage;