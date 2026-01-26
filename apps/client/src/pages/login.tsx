import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'



export default function AuthLogin() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await authClient.signIn.email({
                email: email, // required
                password: password, // required
                rememberMe: true,
            })
            router.push('/dashboard')
        } catch (err) {
            setError('An error occurred during sign-in')
            console.error(err)
        } finally { setLoading(false) }
    }

    return (
        <div className="flex flex-col h-screen">
            <nav className="block md:hidden text-white px-6 py-4 flex justify-center items-center md:justify-between">
                <Link href="/" className="text-3xl">
                    Schema Explorer
                </Link>
            </nav>
            <main className="grid grid-cols-1 md:grid-cols-[55%_45%] h-full p-3 items-stretch">
                <div className="hidden md:grid grid-rows-[50%_50%] place-items-center h-full bg-[radial-gradient(ellipse_250%_150%_at_bottom,_black_30%,_#6D28D9_40%,_#A855F7_50%,_#E0B4FF_75%,_#E8D5F5_85%,_#D4C4E0_95%)] rounded-4xl shadow-[inset_0_0_30px_rgba(0,0,0,0.75)]">
                    <div></div>
                    <div className="flex flex-col items-center justify-center max-w-md">
                        <Link href="/" className="text-white text-4xl mb-2">Schema Explorer</Link>
                        <p className="text-center mb-8">Expose invisible schema problems before they surface in production</p>
                        <div className="flex flex-col gap-4 w-fit">
                            <div className="w-full p-4 rounded-lg bg-gray-200 text-black items-start justify-start flex gap-3 pr-16 font-bold">
                                <span className="rounded-full w-6 h-6 bg-black text-white text-xs flex items-center justify-center">1</span>
                                <p>Login to your account</p>
                            </div>
                            <div className="w-full px-4 py-4 rounded-lg bg-gray-800 text-white items-center justify-start flex gap-3 pr-16">
                                <span className="rounded-full w-6 h-6 bg-gray-700 text-white text-xs flex items-center justify-center">2</span>
                                <p>Build, share and collaborate</p>
                            </div>
                            <div className="w-full px-4 py-4 rounded-lg bg-gray-800 text-white items-center justify-start flex gap-3 pr-16">
                                <span className="rounded-full w-6 h-6 bg-gray-700 text-white text-xs flex items-center justify-center">3</span>
                                <p>Refine and ship</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rounded-lg px-6 pb-6 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-2">Account Login</h1>
                    <p className="text-gray-300 mb-8">Log in to start exploring schemas</p>
                    <form onSubmit={handleSubmit} className="max-w-sm w-full">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white mb-1">Email</label>
                            <input required type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500" />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="password" className="block text-white mb-1">Password</label>
                            <input required type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500" />
                        </div>
                        {error ? (
                            <div className="rounded-md bg-red-300 text-black font-bold mb-4 p-2">{error}</div> 
                        )
                        : null}
                        <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-md bg-white text-black font-bold">
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                    <p className="text-gray-300 mb-4 mt-6">Don’t have an account? <Link href="/register" className="text-white font-bold">Register</Link></p>
                </div>
            </main>
        </div>
    )
}