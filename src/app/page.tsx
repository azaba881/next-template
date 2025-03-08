import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold">Welcome dear developer</h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-4">
        Here is your Next.js template, ready to use !
      </p>
      <button className="mt-6 px-6 py-3 border border-gray-700 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        Let's get started
      </button>
    </div>
  );
}
