const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const testBlogs = [
    {
        title: 'AaaAaa',
        author: "Axel Axelsson",
        url: "www.fullstackopen.com",
        likes: 22
    },
    {
      title: 'BlaaBlaa',
      author: "Bertil Bertelsson",
      url: "www.fullstackopen.com",
      likes: 35
  },
   
]

beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blogObject = new Blog(testBlogs[0])
    await blogObject.save()
  
    blogObject = new Blog(testBlogs[1])
    await blogObject.save()
  })

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  })
  
  test('unique identifier named id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })

  test('a valid blog can be added', async () => {
    const newBlog = {
        title: 'valid blog',
        author: "vb",
        url: "www.validblog.com",
        likes: 22
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
    const blogs = await Blog.find({})     
    expect(blogs).toHaveLength(testBlogs.length + 1)
    
    const authors = blogs.map(aut => aut.author)  
    expect(authors).toContain(
      newBlog.author
    )
  })

  afterAll(() => {
    mongoose.connection.close()
})

