import Logo from '../../public/cnodejs_light.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className='bg-gray-600'>
        <div className='container mx-auto p-2 flex items-center justify-between'>
          <div className='w-auto flex items-center'>
            <Link href='/'>
              <Image
                src={Logo}
                alt='logo'
                width='120'
                height='28'
              />
            </Link>
            <input
              type='input'
              className='ml-4 pl-4 rounded-full bg-gray-400 focus:bg-gray-50 hover:bg-gray-50'
            />
          </div>
          <div className='flex items-center'>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              首页
            </Link>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              新手入门
            </Link>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              API
            </Link>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              关于
            </Link>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              注册
            </Link>
            <Link
              href='/'
              className='text-sm px-4 py-2 text-gray-300 hover:text-gray-50'
            >
              登录
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
