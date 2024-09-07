import Layout from '@/components/global/Layout'
import { OurBlog } from '@/components/Home/OurBlog'
import React from 'react'

 const BlogPage = () => {
  return (
    <Layout>

        {/* blogs */}
        <OurBlog/>
    </Layout>
  )
}

export default BlogPage