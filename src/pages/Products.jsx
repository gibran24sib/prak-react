import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";

export default function Products() {
  // State untuk search & filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Ambil kategori unik
  const categories = [...new Set(productsData.map((p) => p.category))];

  // Format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Filter produk
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Product Inventory
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Mengelola data stok dan harga produk barang
            </p>
          </div>

          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
            Total Produk :
            <span className="text-blue-600 font-bold ml-1">
              {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Cari nama produk, kode, atau brand..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full sm:w-48">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Semua Kategori</option>

              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="px-6 py-4 text-center">ID</th>
                  <th className="px-6 py-4">Kode</th>
                  <th className="px-6 py-4">Nama Produk</th>
                  <th className="px-6 py-4">Brand</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4 text-right">Harga</th>
                  <th className="px-6 py-4 text-center">Stok</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {/* ID */}
                      <td className="px-6 py-4 text-center text-gray-500">
                        {product.id}
                      </td>

                      {/* Code */}
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-mono px-2 py-1 rounded border">
                          {product.code}
                        </span>
                      </td>

                      {/* Title */}
                      <td className="px-6 py-4">
                        <Link
                          to={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {product.title}
                        </Link>
                      </td>

                      {/* Brand */}
                      <td className="px-6 py-4 text-gray-600">
                        {product.brand}
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          {product.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 text-right font-mono font-medium text-gray-900">
                        {formatRupiah(product.price)}
                      </td>

                      {/* Stock */}
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-block min-w-8 text-xs px-2 py-1 rounded font-bold ${
                            product.stock <= 10
                              ? "bg-red-50 text-red-700 border border-red-100"
                              : "bg-green-50 text-green-700 border border-green-100"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-12 text-center text-gray-400"
                    >
                      Tidak ada produk yang cocok dengan pencarian.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}