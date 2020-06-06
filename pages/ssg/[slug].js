const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
			<p>{post.text}</p>
    </div>
  )
}

export default Post

const posts = [
  { slug: 'primeiro-post', title: 'Primeiro Post', text: 'bla bla...' },
  { slug: 'segundo-post', title: 'Segundo Post', text: 'lorem...' }
]

export const getStaticProps = ({ params: { slug } }) => {
  const post = posts.find(item => item.slug === slug)
  return { props: { post } }
}

export const getStaticPaths = () => {
  return { paths: posts.map(post => ({ params: { slug: post.slug } })), fallback: false }
}
