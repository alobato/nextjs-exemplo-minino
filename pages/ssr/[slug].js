const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
			<p>{post.text}</p>
    </div>
  )
}

export default Post

export const getServerSideProps = ({ query }) => {
  const posts = [
    { slug: 'primeiro-post', title: 'Primeiro Post', text: 'bla bla...' },
    { slug: 'segundo-post', title: 'Segundo Post', text: 'lorem...' }
  ]

  const post = posts.find(post => post.slug === query.slug)
  return { props: { post } }
}
