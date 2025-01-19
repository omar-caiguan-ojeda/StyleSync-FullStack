type Params = Promise<{categoryId: string}>


async function getProducts(categoryId: string) {
    const url = `${process.env.API_URL}/categories/${categoryId}?products=true`
    const req = await fetch(url)
    const json = await req.json()
    console.log(json)
}

export default async function StorePage({params}: {params: Params}) {

    const { categoryId } = await params

    await getProducts(categoryId)

    return (
        <div>StorePage</div>
    )
}