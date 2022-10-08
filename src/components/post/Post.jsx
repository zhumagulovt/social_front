import { Link } from "react-router-dom"

function Post({ item }) {

  const date = new Date(item.created_at).toLocaleDateString()

  return (

    <div className="card border-0 rounded bg-neutral mb-9">
      <div className="flex border-0 border-gray-primary h-4 p-4 py-8">
        <div className="flex items-center">
          <Link to={`/users/${item.user.id}`} className="flex items-center">
            <img
              className="rounded-full h-8 w-8 flex mr-3"
              src={item.user.avatar}
              alt='avatar'
            />
            <p className="font-bold">{item.user.username}</p>
          </Link>
        </div>
      </div>
      <Link to={`/p/${item.id}`}>
        <img src={item.image} alt="" />
      </Link>
      <div className="flex justify-between p-4">
        <div className="flex">
          <svg
           
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${
              true ? 'fill-red text-red-primary' : 'text-black-light'
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
        <p className="font-bold">{item.likes_count} likes</p>
      </div>
      

      <div className="p-4 pt-2 pb-1">
        <span className="mr-1 font-bold">{ item.user.username }</span>
        <span className="italic">{ item.content }</span>
        <br />
      </div>
        
      <div className="p-4 pt-1 pb-4">
          <button
            className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none italic"
            type="button"
          >
            View more comments
          </button>
        <p className="text-gray-base uppercase text-xs mt-2">
          {date}
        </p>
      </div>
      
      <div className="mt-5 p-0 h-12">
        <input type="text" placeholder="Leave comment" className="bg-neutral ml-4  w-full focus:outline-none focus:none active:none max-w-md m-0"/>
        <button type="button" className="bg-none text-sky-400">Post</button>
      </div>
    </div>
  ) 
}
export default Post