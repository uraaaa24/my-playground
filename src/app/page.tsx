import Link from 'next/link'

export default function Home() {
  return (
    <>
      <button type="button" className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <Link href="/react-scroll">react-scroll</Link>
      </button>
    </>
  )
}
