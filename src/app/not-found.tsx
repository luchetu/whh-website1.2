import { ErrorStateSection } from '@/components/sections/ErrorStateSection'

export default function NotFound() {
  return (
    <ErrorStateSection
      title="Whoops, that page is gone."
      description="The page you're looking for doesn't exist or maybe it's taking a coffee break. But don't worry, we're here to guide you back on track."
      backgroundWord="404"
      variant="not-found"
    />
  )
}
