import Image from 'next/image'
import Logo from '../../public/cnodejs_light.svg'
import Link from 'next/link'

export default function Footer() {


	return (
		<>
			<div className="bg-white mt-4">
				<div className="container mx-auto py-6 flex items-center justify-between">
					<span className='text-sm text-neutral-400'>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</span>
				</div>
			</div>
		</>
	)
}