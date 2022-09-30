import { Link } from "react-router-dom"

function Post() {
  return (
    // <div className="card w-5/6 bg-base-100 shadow-xl">
    //   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Shoes!</h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    // <div className="card rounded bg-neutral">
    // <div className="flex border-b border-gray-primary h-4 p-4 py-8">
    // <div className="flex items-center">
    //     <Link to='/ff' className="flex items-center">
    //       <img
    //         className="rounded-full h-8 w-8 flex mr-3"
    //         src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //       />
    //       <p className="font-bold">username</p>
    //     </Link>
    //   </div>
    // </div>

      // <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym13JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
    // </div>

    <div className="card border-0 rounded bg-neutral">
      <div className="flex border-0 border-gray-primary h-4 p-4 py-8">
        <div className="flex items-center">
          <Link to='/ff' className="flex items-center">
            <img
              className="rounded-full h-8 w-8 flex mr-3"
              src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <p className="font-bold">username</p>
          </Link>
        </div>
      </div>

      <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym13JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />


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
        <p className="font-bold">41.6m likes</p>
      </div>
      

      <div className="p-4 pt-2 pb-1">
        <span className="mr-1 font-bold">username</span>
        <span className="italic">caption</span>
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
          13h. ago
        </p>
      </div>
      
      <div className="mt-5 p-0 h-12">
        <input type="text" placeholder="Leave comment" class="bg-neutral ml-4  w-full focus:outline-none focus:none active:none max-w-md m-0"/>
        <button type="button" className="bg-none text-sky-400">Post</button>
      </div>
    </div>
  ) 
}
export default Post