'use client'

import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        Something went wrong
      </p>
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="max-w-md text-sm text-gray-600 sm:text-base">
        Please try again. If the issue continues, head back to the homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
