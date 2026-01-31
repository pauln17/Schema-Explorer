import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import AuthIntro from "@/components/AuthIntro";
import LoginSection from "@/components/LoginSection";

export default function AuthLogin() {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  useEffect(() => {
    if (session) router.push("/dashboard");
  }, [session]);

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile Navigation Bar */}
      <nav className="block md:hidden text-white px-6 py-4 flex justify-center items-center md:justify-between">
        <Link href="/" className="text-3xl">
          Schema Visualizer
        </Link>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-[55%_45%] h-full p-3 items-stretch">
        <AuthIntro />
        <LoginSection />
      </main>
    </div>
  );
}
