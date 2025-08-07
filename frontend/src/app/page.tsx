import { Suspense } from 'react'
import { FullScreenSection } from './components/homepage/FullScreenSection'
import { GiftsGrid } from './components/homepage/GiftsGrid'
import { LoadingGrid } from './components/loaders/LoadingGrid'

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-24">
      <FullScreenSection />

      <Suspense fallback={<LoadingGrid />}>
        <GiftsGrid />
      </Suspense>
    </main>
  )
}
