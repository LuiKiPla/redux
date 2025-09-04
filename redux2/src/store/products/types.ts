interface product {
    id: number,
    title: string,
    image: string
}

interface productsState {
    products: product[],
    loading: boolean,
    error: string | null
}

export type {product, productsState}