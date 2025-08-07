import { getGifts } from '@/app/lib/api'
import { use } from 'react'
import { GiftCard } from '../cards/Gift'
import { Gift, GiftFilter } from '@/app/types'

type Props = {
  filter?: Partial<Record<GiftFilter, string>>
}
export const GiftsGrid = ({ filter }: Props) => {
  const allGifts = use<Gift[]>(getGifts(filter))

  return (
    <div className="col-start-1 col-span-full grid grid-cols-subgrid gap-y-32">
      {allGifts.map((gift) => (
        <GiftCard data={gift} key={gift.url} />
      ))}
    </div>
  )
}
