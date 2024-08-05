'use client'

import React, { useRef, useState } from 'react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  // TODO TOGGLE PAUSE
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-10 bg-primary/50 backdrop-blur-md px-4 py-2 flex items-center justify-between">
      <div className="flex items-center z-20">
        <button
          className={`text-primary-foreground focus:outline-none ${
            isPlaying ? '' : ''
          }`}
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.75 15.5V19.5M18.25 15.5V19.5M8 13.5h.01M12 13.5h.01M16 13.5h.01M20 13.5h.01M8 9.5h.01M12 9.5h.01M16 9.5h.01M20 9.5h.01"
              />
            </svg>
          )}
        </button>
        <span className="ml-2 text-primary-foreground">Your Music Title</span>
      </div>
      <audio ref={audioRef} src="your_music_file.mp3" />
    </div>
  )
}
export { MusicPlayer }
