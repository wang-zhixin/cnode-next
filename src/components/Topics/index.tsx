import Link from 'next/link'
import Image from 'next/image'
import useSWR, { SWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { fetcher } from '@/utils/fetcher'
import dayjs from 'dayjs'
import Error from '@/components/Error'
import Loading from '@/components/Loading'

const tabs = [
  {
    name: '全部',
    key: '',
  },
  {
    name: '精华',
    key: 'good',
  },
  {
    name: '分享',
    key: 'share',
  },
  {
    name: '问答',
    key: 'ask',
  },
  {
    name: '招聘',
    key: 'job',
  },
  {
    name: '客户端测试',
    key: 'dev',
  },
]

type TopIcsItem = {
  id: string
  title: string
  tab: string
  reply_count: number
  visit_count: number
  top: boolean
  good: boolean
  last_reply_at: string
  author: {
    avatar_url: string
    loginname: string
  }
}

export default function Topics() {
  const router = useRouter()
  const { page = 1, tab = '' } = router.query

  const { data: result, error, isLoading } = useSWR<{ data: TopIcsItem[] }>(`https://cnodejs11.org/api/v1/topics?page=${page}&limit=${30}&tab=${tab}`)
  console.log(result, 'result')

  return (
    <>
      <div className='w-9/12'>
        <div className='flex items-center bg-neutral-100'>
          {tabs.map((tab, index) => (
            <Link
              href={`${tab.key ? `?tab=${tab.key}` : '/'}`}
              key={index}
              className={`text-sm p-1 mx-3 my-2 text-lime-500 hover:text-gray-500 rounded ${
                router.query?.tab === tab.key || (!router.query?.tab && tab.name === '全部') ? 'bg-lime-500 text-gray-50' : ''
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <ul className='bg-white'>
          {/* 加载动画 */}
          {isLoading ? <Loading /> : ''}
          {/* 错误页面 */}
          {error ? <Error /> : ''}
          {/* 渲染数据 */}
          {!isLoading &&
            !error &&
            result?.data?.map(({ id, title, tab, reply_count, visit_count, author, last_reply_at, good, top }) => (
              <li
                className='flex items-center p-4 justify-between hover:bg-neutral-100'
                key={id}
              >
                <div className='flex items-center'>
                  <Image
                    src={author.avatar_url[0] === '/' ? `https:${author.avatar_url}` : author.avatar_url}
                    alt={author.loginname}
                    width='30'
                    height='30'
                  />
                  <div className='flex w-16 justify-center items-center ml-4 text align-bottom	'>
                    <span className='text-indigo-400 text-base'>{reply_count}</span>
                    <span className='text-neutral-400 text-xs m-0.5'>/</span>
                    <span className='text-neutral-400 text-xs'>{visit_count}</span>
                  </div>
                  <Tag type={top ? 'top' : good ? 'good' : tab === 'share' ? 'share' : ''} />
                  <div className='ml-4 text-black text-base'>
                    <Link
                      href={{
                        pathname: '/topic/[id]',
                        query: { id },
                      }}
                      className='hover:underline'
                    >
                      {title}
                    </Link>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Image
                    src={author.avatar_url[0] === '/' ? `https:${author.avatar_url}` : author.avatar_url}
                    alt='The avatar of the last responder'
                    width='18'
                    height='18'
                  />
                  <div className='flex items-center text-neutral-400 text-sm ml-4'>{dayjs(last_reply_at).fromNow()}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

type TagParams = {
  type: 'top' | 'good' | 'share' | ''
}
function Tag({ type }: TagParams) {
  if (!type) return <></>
  const tagClassName = {
    top: <div className='ml-4 p-1 bg-lime-500 rounded text-gray-50 text-xs'>置顶</div>,
    good: <div className='ml-4 p-1 bg-lime-500 rounded text-gray-50 text-xs'>精华</div>,
    share: <div className='ml-4 p-1 bg-lime-500 rounded text-gray-50 text-xs'>分享</div>,
  }
  return tagClassName[type]
}
