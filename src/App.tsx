import { Toaster } from 'react-hot-toast'
import { Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Hello World <Heart className="text-red-500" />
        </h1>
        <p className="text-gray-600">
          Welcome to React + Tailwind CSS + TypeScript
        </p>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default App
