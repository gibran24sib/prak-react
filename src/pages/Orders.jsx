import React from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    // Generate 30 data dummy untuk Orders sesuai instruksi
    const ordersData = Array.from({ length: 30 }, (_, i) => ({
        id: `ORD-2026-${100 + i}`,
        customerName: ["Budi Santoso", "Siti Aminah", "Andi Wijaya", "Rina Putri", "Dewi Lestari"][i % 5],
        status: ["Pending", "Completed", "Cancelled"][i % 3],
        totalPrice: `Rp ${(Math.random() * 500000 + 50000).toLocaleString("id-ID")}`,
        orderDate: `2026-04-${(i % 28) + 1}`
    }));

    return (
        <div id="dashboard-container" className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Orders" />
            
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-bold text-gray-700">Order ID</th>
                            <th className="p-4 font-bold text-gray-700">Customer Name</th>
                            <th className="p-4 font-bold text-gray-700">Status</th>
                            <th className="p-4 font-bold text-gray-700">Total Price</th>
                            <th className="p-4 font-bold text-gray-700">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order) => (
                            <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-sm font-medium text-gray-900">{order.id}</td>
                                <td className="p-4 text-sm text-gray-600">{order.customerName}</td>
                                <td className="p-4 text-sm">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        order.status === "Completed" ? "bg-green-100 text-green-600" :
                                        order.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                                        "bg-red-100 text-red-600"
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm font-bold text-gray-900">{order.totalPrice}</td>
                                <td className="p-4 text-sm text-gray-500">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}