import type { TopicType } from '@/types/Topic.t'

export default function Topic({ topic }: { topic: TopicType }) {
  console.log(topic.content)

  return (
    <>
      <div className='container w-full mx-auto mt-4 bg-white'>
        {/* 标题 */}
        <div className='py-4 border-b border-r-gray-300'>
          <div className='flex px-4'>
            <h1 className='text-2xl font-bold'>{topic.title}</h1>
          </div>
          <div className='flex px-4 mt-2'>
            <span className='text-xs text-neutral-600'>发布于 {'4个月前'}</span>
            <span className='text-xs text-neutral-600 ml-2'>作者 {topic.author.loginname}</span>
            <span className='text-xs text-neutral-600 ml-2'>{topic.visit_count} 次浏览</span>
            <span className='text-xs text-neutral-600 ml-2'>来自 {}</span>
          </div>
        </div>
        {/* 内容 */}
        <div>
          {/* {topic.content} */}
          <div
            className='p-4'
            dangerouslySetInnerHTML={{ __html: topic.content }}
          ></div>
        </div>
      </div>
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
    const topicResponse = await fetch(`https://cnodejs.org/api/v1/topic/${params.id}?mdrender=true`)
    const result = await topicResponse.json()
    if (result.success) {
      // const content = await markdownToHtml(result.data.content)
      return {
        props: {
          topic: {
            ...result.data,
            // content,
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
