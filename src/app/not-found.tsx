import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        404
      </p>
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-sm text-gray-600 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
      >
        Back home
      </Link>
    </main>
  )
}
