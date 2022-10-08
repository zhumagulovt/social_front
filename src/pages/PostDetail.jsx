import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function PostDetail() {
  const [post, setPost] = useState({});
  const params = useParams()

  const fetchPost = async () => {
    const id = params.id

    const response = await fetch(`http://localhost:8000/api/v1/posts/${id}/`)
    const data = await response.json()
    console.log(data)
    setPost(data);
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="container mx-auto max-w-6xl flex flex-row">
      <div className="basis-7/12 bg-black h-[40rem] flex">
        <div className="carousel w-full">
          {post.images?.map((image, index) => {
            return <>
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                <img src={image.image} className="object-contain mx-auto" alt='post' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? 1 : index}`} className="btn btn-circle">❮</a>
                  <a href={`#slide${index + 2}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            </>
          })}
        </div>
      </div>

      <div className="basis-5/12 bg-neutral max-h-[40rem]">
        <div className="flex border-0 border-gray-primary h-4 p-4 py-8 border-b border-gray-600">
          <div className="flex items-center">
            <Link to={`/users/${post.user?.id}`} className="flex items-center">
              <img
                className="rounded-full h-8 w-8 flex mr-3"
                src={post.user?.avatar}
                alt='avatar'
              />
              <p className="font-bold">{post.user?.username}</p>
            </Link>

            <p className="ml-3">{post.content}</p>
          </div>
        </div>
        
        <div className="max-h-96 overflow-auto">
          {post.comments?.map((comment) => {
          return <div className="flex border-0 border-gray-primary h-4 p-4 py-8">
            <div className="flex items-center">
              <Link to={`/users/${comment.user.id}`} className="flex items-center">
                <img
                  className="rounded-full h-8 w-8 flex mr-3"
                  src={`http://localhost:8000${comment.user.avatar}`}
                  alt='avatar'
                />
                <p className="font-bold">{comment.user.username}</p>
              </Link>
              <p className="ml-3">{comment.content}</p>
            </div>
          </div>
          })}
        </div>

        <div className="mt-5 p-0 h-12">
          <input type="text" placeholder="Leave comment" className="bg-neutral ml-4  w-full focus:outline-none focus:none active:none max-w-sm m-0"/>
          <button type="button" className="bg-none text-sky-400">Post</button>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex">
            <svg

              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              tabIndex={0}
              className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${true ? 'fill-red text-red-primary' : 'text-black-light'
                }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <svg

              className="w-8 text-black-light select-none cursor-pointer focus:outline-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              tabIndex={0}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
        <div className="p-4 py-0">
          <p className="font-bold">{post.likes_count} likes</p>
        </div>
      </div>
    </div>
  )
}
export default PostDetail