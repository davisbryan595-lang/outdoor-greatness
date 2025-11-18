'use client'

export default function Preloader() {
  return (
    <div
      className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 to-emerald-950/20 flex items-center justify-center"
      style={{
        animation: 'fadeOut 0.6s ease-out 2.5s forwards',
      }}
    >
      <style>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            pointer-events: auto;
          }
          to {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
      
      <div className="relative w-40 h-40">
        {/* Rotating sun */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-2xl animate-spin"
          style={{
            boxShadow: '0 0 60px rgba(52, 211, 153, 0.8)',
            animationDuration: '3s',
          }}
        />

        {/* Pulsing rays */}
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500 opacity-30 animate-pulse" />

        {/* Tree silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-xl">
            <path
              d="M50 80 L50 60 M50 60 Q30 50 20 35 M50 60 Q70 50 80 35 M50 60 Q35 45 25 25"
              stroke="#1A4D2E"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text animation */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-yellow-500 text-sm font-bebas tracking-wider opacity-70">
          GROWING YOUR OUTDOOR GREATNESS
        </div>
      </div>
    </div>
  )
}
