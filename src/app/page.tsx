export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white dark:bg-black">
      <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
        MCPy
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-md">
        Your AI with superpowers. Connect your apps and let AI work for you.
      </p>
      <div className="mt-10 flex gap-5 text-sm text-gray-400 dark:text-gray-500">
        <a
          href="/privacy"
          className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
        >
          Terms of Service
        </a>
      </div>
    </main>
  );
}
