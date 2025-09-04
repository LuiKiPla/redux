interface product {
    id: number,
    title: string,
    image: string
}

interface productsState {
    products: product[]
}

export type {product, productsState}