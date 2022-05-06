export type TProps = {
  userId: number
  id: number
  title: string
  body: string
}

export const Post: React.FC<TProps> = ({ userId, id, title, body }) => {
  return (
    <div>
      <div>userId: {userId}</div>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>body: {body}</div>
    </div>
  )
}
