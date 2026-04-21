import { FaBan } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <PageHeader title="Halaman Tidak Ditemukan" />

      {/* CONTENT */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
          
          {/* ICON */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-50 p-4 rounded-full">
              <FaBan className="text-3xl text-red-400" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Eh, mau ke mana?
          </h2>

          {/* TEXT */}
          <p className="text-sm text-gray-600 mb-2">
            Halaman ini nggak ada.
          </p>

          <p className="text-xs text-gray-400 mb-6">
            Coba cek lagi URL kamu, atau mungkin kamu nyasar.
          </p>

          {/* ACTION */}
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition"
          >
            Balik Sana
          </button>
        </div>
      </div>
    </div>
  );
}