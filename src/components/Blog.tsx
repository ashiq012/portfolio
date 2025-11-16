'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlogPost {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  pubDate: string;
  subtitle?: string;
  publishDate?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        
        // Your actual LinkedIn posts
        const yourLinkedInPosts: BlogPost[] = [
          {
            title: "Finding Strength Through Career Challenges",
            description: "Sharing my journey through unemployment, rejection, and finding resilience through storytelling.",
            subtitle: "Feeling the weight of unemployment for a year, enduring rejection every two weeks, and finding solace in storytelling to ease the pain...",
            thumbnail: '/default-blog-image.jpg',
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7361665034982215681/", // Update with actual post URL when available
            pubDate: "2024-08-14T10:00:00Z",
            publishDate: "August 14, 2024"
          },
          {
            title: "SQL Interview Preparation Guide - Must-Have Resource",
            description: "Complete SQL practice guide with hospital database queries for interview preparation.",
            subtitle: "I've been consistently practicing SQL and compiled essential queries covering data cleaning, filtering, grouping, and joining...",
            thumbnail: '/default-blog-image.jpg',
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7355080750104264709/", // Update with actual post URL when available
            pubDate: "2024-08-16T10:00:00Z", 
            publishDate: "August 11, 2024"
          },
          {
            title: "3 Tough Interview Questions That Led to Rejection",
            description: "Real interview challenges from Pricing Analyst, Power BI Developer, and Business Analyst roles.",
            subtitle: "Over the past few weeks, I've interviewed for different roles in data and analytics. These specific questions caught me off guard...",
            thumbnail: '/default-blog-image.jpg',
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7347237788305498113/", // Update with actual post URL when available
            pubDate: "2024-08-15T10:00:00Z",
            publishDate: "July 15, 2024"
          }
        ];

        setPosts(yourLinkedInPosts);
        
      } catch (error) {
        console.error('Error loading posts:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-16 w-full max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Latest from LinkedIn
          </h2>
          <p className="text-gray-400 text-sm">
            My recent posts and professional insights • @heyyromii
          </p>
        </motion.div>
        
        <motion.a
          href="https://www.linkedin.com/in/heyyromii/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077b5] hover:bg-[#005885] text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          View All Posts
        </motion.a>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0077b5] mx-auto mb-4"></div>
            <p className="text-gray-400">Loading latest posts...</p>
          </div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p>No posts available. Please add your LinkedIn posts to the component.</p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {posts.map((post, index) => (
            <motion.a
              key={`${post.link}-${index}`}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A2F32] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-[#0077b5]/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/hotel.jpg'; // Your fallback image
                  }}
                />
                
                {/* LinkedIn Badge */}
                <div className="absolute top-3 right-3 bg-[#0077b5] text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#49c5b6] line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.subtitle}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-xs">
                    Published on {post.publishDate}
                  </p>
                  <span className="text-[#0077b5] text-sm hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </section>
  );
}