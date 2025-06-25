import React from 'react'
import { ZapIcon } from "lucide-react"

function RateLimitedUI() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-900">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className="bg-yellow-900 rounded-full p-3 mb-4">
          <ZapIcon className="size-10 text-yellow-400" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Rate Limit Reached</h3>
          <p className="text-gray-300 mb-1">
            You've made too many requests in a short period. Please wait a moment.
          </p>
          <p className="text-gray-400 text-sm">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RateLimitedUI