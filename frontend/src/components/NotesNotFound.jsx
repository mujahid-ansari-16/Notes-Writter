import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotesNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-gray-800 rounded-xl p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">No Notes Found</h2>
      <p className="text-gray-400 text-center mb-3">
        Your notes list is empty.<br />Create a new note to get started!
      </p>
      <span className="text-5xl mt-2 mb-4" role="img" aria-label="notebook">🗒️</span>
      <button
        onClick={() => navigate('/create')}
        className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        Create Note
      </button>
    </div>
  )
}

export default NotesNotFound