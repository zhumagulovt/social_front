import Post from "./Post"
import { useEffect, useState } from "react"

function FollowingFeed() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`http://localhost:8000/api/v1/posts/feed/`)
    const data = await response.json()
    // console.log(data.results);
    setPosts(data.results)
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      { posts.map((post) => {
        return <Post key={post.id} item={post} />
      }) }
    </div>
  )
}
export default FollowingFeed