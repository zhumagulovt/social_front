import FollowingFeed from "../components/post/FollowingFeed"
import Post from "../components/post/Post"

function Home() {
  return (
    <div className="container mx-auto max-w-4xl flex flex-row">
      <div className="basis-7/12">
          <Post />
      </div>

      <div className="basis-5/12 ml-6">
        
      </div>
    </div>
  )
}
export default Home