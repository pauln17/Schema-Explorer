import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { authClient, AuthInput } from "@/lib/auth-client";

export default function RegisterSection(): ReactNode {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerData: AuthInput = {
    name: [firstName, lastName].join(" "),
    email: email,
    password: password,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      const res = await authClient.signUp.email(registerData);
      if (res.error) throw new Error(res.error.message);
      if (res.data) router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign-up",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg px-6 pb-6 flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="Schema Logo"
        width={120}
        height={120}
        className="object-contain mb-6"
        priority
      />
      <h1 className="text-2xl font-bold mb-2">Register Account</h1>
      <p className="text-gray-300 mb-8">Create an account to get started</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-center gap-4">
          <div>
            <label htmlFor="firstName" className="block text-white mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white-500"
          />
        </div>
        {error ? (
          <div className="rounded-md bg-red-300 text-black font-bold mb-4 p-2">
            {error}
          </div>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 rounded-md bg-white text-black font-bold"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="text-gray-300 mb-4 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-white font-bold">
          Login
        </Link>
      </p>
    </div>
  );
}
