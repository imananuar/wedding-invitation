import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const createUser = async () => {};
  return (
    <main className="flex min-h-screen flex-col p-10">
      <nav className=" flex items-center justify-end">
        <Link href="/admin">
          <Button>Login</Button>
        </Link>
      </nav>
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex">
        <h1>Wedding invitation design here</h1>
      </div>
    </main>
  );
}
