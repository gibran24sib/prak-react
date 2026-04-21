import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const stats = [
        { 
            id: "orders", 
            title: "Total Orders", 
            count: "75", 
            icon: <FaShoppingCart />, 
            color: "from-green-400 to-green-600", 
            progress: "w-[75%]",
            percent: "75%"
        },
        { 
            id: "delivered", 
            title: "Total Delivered", 
            count: "175", 
            icon: <FaTruck />, 
            color: "from-blue-400 to-blue-600", 
            progress: "w-[90%]", 
            percent: "90%"
        },
        { 
            id: "canceled", 
            title: "Total Canceled", 
            count: "40", 
            icon: <FaBan />, 
            color: "from-red-400 to-red-600", 
            progress: "w-[20%]", 
            percent: "20%"
        },
        { 
            id: "revenue", 
            title: "Total Revenue", 
            count: "Rp.128", 
            icon: <FaDollarSign />, 
            color: "from-yellow-400 to-yellow-600", 
            progress: "w-[60%]", 
            percent: "60%"
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Dashboard" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                        {/* ICON */}
                        <div className={`absolute -top-5 left-5 bg-gradient-to-r ${item.color} text-white p-4 rounded-xl shadow-lg text-xl`}>
                            {item.icon}
                        </div>

                        {/* CONTENT */}
                        <div className="mt-8">
                            <p className="text-gray-400 text-sm">{item.title}</p>
                            <h2 className="text-3xl font-bold text-gray-800 mt-1">
                                {item.count}
                            </h2>
                        </div>

                        {/* PROGRESS */}
                        <div className="mt-5">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Progress</span>
                                <span>{item.percent}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`bg-gradient-to-r ${item.color} h-2 rounded-full ${item.progress} transition-all duration-500`}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}