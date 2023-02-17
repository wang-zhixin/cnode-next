import type { TopicType } from './Topic.t'

export default function Topic({ topic }: { topic: TopicType }) {
  return (
    <>
      <div className='flex'>123123123</div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const topicResponse = await fetch(`https://cnodejs.org/api/v1/topic/${params.id}?mdrender=false`)
    const result = await topicResponse.json()
    if (result.success) {
      // const content = await markdownToHtml(result.data.content)
      return {
        props: {
          topic: {
            ...result.data,
            // content
          },
        },
        revalidate: 1,
      }
    }

    return {
      notFound: true,
    }
  } catch (error) {
    console.error(error)
    throw new Error('请求异常')
  }
}
