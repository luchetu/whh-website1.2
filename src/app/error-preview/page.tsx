import { ErrorStateSection } from '@/components/sections/ErrorStateSection'

export default function ErrorPreviewPage() {
  return (
    <ErrorStateSection
      title="Sorry for a while"
      description="It looks like there's an issue with the website. Don't worry; we're on it! Our team is working hard to fix this as quickly as possible."
      backgroundWord="We hit a snag!"
      accentLabel="ERROR"
      variant="error"
    />
  )
}
