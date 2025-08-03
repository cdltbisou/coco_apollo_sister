export type Gift = {
    id: string
    name: string
    price: number
    url: string
    description: string
    brand: string
    imageUrl: string
    category: Category
    greetings: Greetings
    quantity: number
    user: User
}

export type Greetings = {
    name: string
    level: number
}

export type User = {
    name: string
    email: string
}

export type Category = {
    name: string
    color: string
    description: string
    slug: string
}

export enum GiftFilter {
    Category = 'category',
    Price = 'price',
}
