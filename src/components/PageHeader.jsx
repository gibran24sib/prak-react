import { FiPlus } from "react-icons/fi";

export default function PageHeader(props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      
      {/* LEFT */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          Dashboard
        </h1>

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
          <span className="hover:text-gray-600 cursor-pointer transition">
            Dashboard
            ({props.title})
          </span>
          <span>/</span>
          <span className="text-gray-500 font-medium">
            Order List
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all active:scale-95">
          <FiPlus className="text-lg" />
          Add Order
        </button>
      </div>
    </div>
  );
}