export default function TailwindCSS() {
  return (
    <div className="space-y-6">
      <FlexboxGrid />

      <div className="p-4 space-y-4">
        <h1 className="border p-2">Hello, Tailwind CSS 4!</h1>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me!
        </button>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Spacing 
            title="Judul Card" 
            content="Ini adalah contoh penggunaan padding dan margin di Tailwind." 
          />

          <Typography />
          <BorderRadius />
          <BackgroundColors />
          <ShadowEffects />
          <SimpleCard />
        </div>
      </div>
    </div>
  )
}

function Spacing({ title, content }) {
  return (
    <div className="bg-gray-500 shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-extrabold text-white">{title}</h2>
      <p className="mt-2 text-white">{content}</p>
    </div>
  )
}

function Typography() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-900">
        Tailwind Typography
      </h1>
      <p className="text-gray-600 text-sm mt-2">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  )
}

function BorderRadius() {
  return (
    <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition">
      Klik Saya
    </button>
  )
}

function BackgroundColors() {
  return (
    <div className="bg-pink-400 text-white p-6 rounded-lg hover:bg-pink-700 transition">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2">
        Belajar Tailwind itu seru dan fleksibel!
      </p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">MyWebsite</h1>
      <ul className="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold">Hover me!</h3>
      <p className="text-gray-600 mt-2">
        Lihat efek bayangan saat hover.
      </p>
    </div>
  )
}

function SimpleCard() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-4">
      <img 
        src="https://via.placeholder.com/150" 
        alt="profile" 
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h2 className="text-center text-lg font-bold mt-3">
        Bima
      </h2>
      <p className="text-center text-gray-500 text-sm">
        pengusaha
      </p>

      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Follow
      </button>
    </div>
  )
}