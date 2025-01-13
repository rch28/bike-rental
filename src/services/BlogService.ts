import { BlogType } from "@/types/Blog";
import configureAxios from "./axiosConfig";

const requests = configureAxios();

const BlogService = {
  getBlogs: async ({
    offset = 0,
    limit = 10,
    query,
  }: {
    offset?: number;
    limit?: number;
    query?: string;
  }) => {
    const offsetParam = offset ? `offset=${offset}` : "offset=0";
    const limitParam = limit ? `&&limit=${limit}` : "";
    const queryParam = query ? `&&search=${query}` : "";
    return requests.get(
      `/blog/blogs/?${offsetParam}${limitParam}${queryParam}`
    );
  },
  //   get single blog
  getBlog: async (id: string): Promise<BlogType> => {
    return requests.get(`/blog/blogs/${id}/`);
  },
  //   get author
  getAuthor: async (id: string) => {
    return requests.get(`/blog/author/${id}/`);
  },
};

export default BlogService;
