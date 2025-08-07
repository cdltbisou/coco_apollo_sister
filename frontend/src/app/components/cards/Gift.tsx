import Image from 'next/image'
import { type Gift } from '@/app/types'
import Link from 'next/link'

type Props = {
  data: Gift
}

export const GiftCard = ({ data }: Props) => {
  if (!data) {
    return null
  }
  const { name, imageUrl, category, id } = data
  return (
    <div className="col-start-2 md:col-span-4 lg:col-span-3">
      <Link href={`/product/${id}`}>
        <h3>{name}</h3>
        <h4 style={{ background: category.color }}>{category.name}</h4>
        <div className="relative w-full h-[480px]">
          <Image src={imageUrl} alt={name} fill={true} objectFit="cover" />
        </div>
      </Link>
      <div className="grid">
        <button>ajouter le produit aux favoris</button>
        <button>offrir ce produit</button>
      </div>
    </div>
  )
}
