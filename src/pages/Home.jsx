import FollowingFeed from "../components/post/FollowingFeed"

function Home() {
  return (
    <div className="container mx-auto max-w-4xl flex flex-row">
      <div className="basis-7/12">
          <FollowingFeed />
      </div>

      <div className="basis-5/12 ml-6">
        
      </div>
    </div>
  )
}
export default Home