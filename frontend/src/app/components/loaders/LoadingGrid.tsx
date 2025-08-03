import { LoadingSkeleton } from './LoadingSkeleton'

export const LoadingGrid = () => {
    return (
        <div className="col-start-1 col-span-full grid grid-cols-subgrid">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
        </div>
    )
}
