import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import productsData from "../data/Products.json"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const foundProduct = productsData.find(
            (item) => item.id === Number(id)
        )

        if (!foundProduct) {
            setError("Produk tidak ditemukan")
            return
        }

        setProduct(foundProduct)
    }, [id])

    if (error) return <div className="text-red-600 p-4">{error}</div>
    if (!product) return <div className="p-4">Loading...</div>

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto mt-6">
            <img
                src={`https://picsum.photos/seed/${product.id}/600/400`}
                alt={product.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            <h2 className="text-2xl font-bold mb-2">
                {product.title}
            </h2>

            <p className="text-gray-600 mb-1">
                Kategori: {product.category}
            </p>

            <p className="text-gray-600 mb-1">
                Brand: {product.brand}
            </p>

            <p className="text-gray-600 mb-1">
                Kode Produk: {product.code}
            </p>

            <p className="text-gray-600 mb-1">
                Stock: {product.stock}
            </p>

            <p className="text-gray-800 font-semibold text-lg">
                Harga: Rp {product.price.toLocaleString("id-ID")}
            </p>
        </div>
    )
}