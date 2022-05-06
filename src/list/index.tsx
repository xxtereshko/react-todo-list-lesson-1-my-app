import { useEffect, useState } from "react"
import { Post, TProps } from "../post"

export const List = () => {
  const [posts, setPosts] = useState<TProps[] | []>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
  }, [])

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        )
      })}
    </div>
  )
}
