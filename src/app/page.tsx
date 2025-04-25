import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to German Learning App</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Your interactive platform to learn German language efficiently
      </p>
      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}