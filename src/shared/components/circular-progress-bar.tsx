"use client";

export default function CircularProgressBar({ value }: { value: number }) {
  const strokeDashoffset = 283 - (value * 283);
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100">
				{/* Conic Gradient for Stroke */}
        <defs> {/* Define the gradient within the circle element */}
          {/* More than 50% */}
          <linearGradient id="above50Gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3f51b5" /> {/* Main focus colour - bottom/end stop */}
            <stop offset="90%" stopColor="#2563eb" /> {/* Lighter shade colour - top/starting stop */}
          </linearGradient>

          {/* Less than 50% */}
          <linearGradient id="below50Gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" /> {/* Main break colour */}
            <stop offset="90%" stopColor="#facc15" /> {/* Lighter shade colour */}
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="38" stroke="#D1D5DC" strokeWidth="12" style={{ opacity: 0.4 }} fill="none" />
        <circle
					cx="50"
					cy="50"
					r="38"
					stroke={`url(#${value > .5 ? 'above50Gradient' : 'below50Gradient'})`}
					strokeWidth="12"
					fill="none"
					strokeDasharray="283"
					strokeDashoffset={strokeDashoffset}
					style={{ 
            transform: 'rotate(-90deg)', 
            transformOrigin: '50% 50%'
          }}
          className="circular-progress transition-all duration-500"
				/>
			</svg>
  );
}