import Link from 'next/link'


export default function Home() {
  return (
    <nav className=" text-white px-6 py-4 border-b border-gray-800">
      <div className="flex max-w-6xl">
        <Link href="/" className="text-3xl">
          Schema Explorer
        </Link>
      </div>

    </nav>
  );
}
