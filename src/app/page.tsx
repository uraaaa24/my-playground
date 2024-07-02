import Link from "next/link";

export default function Home() {
	return (
		<>
			<button
				type='button'
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				<Link href='/react-scroll'>react-scroll</Link>
			</button>
		</>
	)
}
