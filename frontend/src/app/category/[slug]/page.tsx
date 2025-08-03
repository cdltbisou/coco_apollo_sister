import { GiftsGrid } from '@/app/components/homepage/GiftsGrid'
import { LoadingGrid } from '@/app/components/loaders/LoadingGrid'
import { GiftFilter } from '@/app/types'
import { Suspense } from 'react'

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    return (
        <div>
            {slug}
            <Suspense fallback={<LoadingGrid />}>
                <GiftsGrid filter={{ [GiftFilter.Category]: slug }} />
            </Suspense>
        </div>
    )
}
