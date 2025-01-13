"use client";
import React, { use, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, User } from "lucide-react";
import BlogService from "@/services/BlogService";
import { useQuery } from "@tanstack/react-query";
import UserServices from "@/services/UserServices";
import Loading from "@/components/utils/Loading";

interface BlogType {
  id: string;
  title: string;
  description: string;
  image: string | null;
  author: string;
  created_at: string;
  updated_at: string;
}
type ParamsType = {
  params: Promise<{
    blogId: string;
  }>;
};

const BlogDetailPagge = ({ params }: ParamsType) => {
  const { blogId } = use(params);
  const [authorId, setAuthorId] = useState("");

  // fetch single blog
  const { data: Blog, isLoading } = useQuery({
    queryFn: async () => BlogService.getBlog(blogId),
    queryKey: ["blogs"],
    select: (data) => data,
    refetchOnWindowFocus: false,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (Blog) {
      setAuthorId(Blog.author);
    }
  }, [Blog]);
  // fetch author
  const { data: Author, isLoading: isAuthorLoading } = useQuery({
    queryFn: async () => BlogService.getAuthor(authorId),
    queryKey: ["author", authorId],
    // select: (data) => data,
    refetchOnWindowFocus: false,
  });

  if (isLoading || isAuthorLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Loading />
      </div>
    );
  }
  return (
    Blog && (
      <div className="max-w-4xl mx-auto p-6">
        {/* Blog Header */}

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{Blog.title}</h1>

          {/* Author and Date Info */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                {Author?.profile_picture ? (
                  <AvatarImage src={Author?.profile_picture} />
                ) : (
                  <>
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${Blog.author}`}
                    />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              <div className="flex gap-2 capitalize">
                <span>{Author?.first_name}</span>
                <span>{Author?.last_name}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Published {formatDate(Blog.created_at)}</span>
            </div>
            {Blog.updated_at !== Blog.created_at && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Updated {formatDate(Blog.updated_at)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Blog Image */}
        {Blog.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={Blog.image}
              alt={Blog.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Blog Content */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: Blog.description }}
            />
          </CardContent>
        </Card>

        {/* Metadata Footer */}
        <div className="text-sm text-gray-500 flex justify-between items-center border-t pt-4">
          <div>Article ID: {Blog.id}</div>
          <div>Last modified: {formatDate(Blog.updated_at)}</div>
        </div>
      </div>
    )
  );
};

export default BlogDetailPagge;
