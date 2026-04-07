import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  /** ✅ FILTER (SUDAH SUPPORT DEVELOPER) **/
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm); // 🔥 tambah ini
      framework.details.releaseYear.toString().includes(_searchTerm); // 🔥 tambah ini

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** ✅ UNIQUE TAGS **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Framework List
      </h1>

      {/* 🔍 FILTER */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search framework / developer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // ✅ fix
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)} // ✅ fix
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* 📦 LIST */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {item.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {item.details.developer}
              </span>

              <span className="text-xs font-semibold text-gray-500">
                {item.details.releaseYear}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}