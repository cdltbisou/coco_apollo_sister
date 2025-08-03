import { Category, Gift, Greetings, User } from './types'
import { v4 as uuidv4 } from 'uuid'

export const mockGift = (options?: Partial<Gift>): Gift => ({
    id: uuidv4(),
    name: 'une poussette',
    price: 120000,
    url: 'https://kidobebe.com/products/nuna-mixx-next-stroller?variant=39757213597793',
    description:
        'The Nuna MIXX™ is the perfect stroller for families on the move! It can be used from birth up to 50 lbs. It features a smooth ride that allows you to maneuver it with one hand, and can also lay flat for quick naps on the go. This stroller fold compactly, allowing you to maximize space and fit it into tighter spaces.',
    brand: 'Nuna',
    imageUrl:
        'https://kidobebe.com/cdn/shop/files/lg-19436218-0_2048x.png?v=1721894492',
    category: mockCategory(),
    greetings: mockGreetings(),
    quantity: 1,
    user: mockUser(),
    ...options,
})

export const mockCategory = (options?: Partial<Category>): Category => ({
    name: 'Puériculture',
    color: '#FF6B6B',
    description: 'Articles de puériculture pour bébé',
    slug: 'puericulture',
    ...options,
})

export const mockGreetings = (options?: Partial<Greetings>): Greetings => ({
    name: 'Un immense merci',
    level: 5,
    ...options,
})

export const mockUser = (options?: Partial<User>): User => ({
    name: 'Camille',
    email: 'camille@example.com',
    ...options,
})
