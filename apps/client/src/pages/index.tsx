import Link from 'next/link'


export default function Home() {
  return (
    <nav className="text-white px-6 py-4 border-b-2 border-gray-800 flex justify-between items-center">
        <Link href="/" className="text-3xl">
          Schema Explorer
        </Link>
        <Link href="/register" className="text-3xl">
          Registration
        </Link>
    </nav>
  );
}
