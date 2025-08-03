import { LoadingGrid } from '@/app/components/loaders/LoadingGrid'
import { Suspense } from 'react'

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    return (
        <div>
            {slug}
            <Suspense fallback={<LoadingGrid />}>
                single product: {slug}
            </Suspense>
        </div>
    )
}
