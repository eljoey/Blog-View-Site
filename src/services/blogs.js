import axios from 'axios'

const baseUrl = 'https://jh-blog-api.herokuapp.com/api/blogs'

const getBlogs = async () => {
  const blogs = await axios.get(baseUrl)
  const sortedBlogs = blogs.data.blogs.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  )
  return sortedBlogs
}

const getBlogById = async id => {
  const blog = await axios.get(`${baseUrl}/${id}`)
  return blog.data
}

const postComment = async comment => {
  await axios.post(`${baseUrl}/comment/create`, comment)
}

export default {
  getBlogs,
  getBlogById,
  postComment
}
