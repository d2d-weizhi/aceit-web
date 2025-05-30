"use client";

export default function CircularProgressBar({ value, statsType = "" }: { value: number, statsType?: string }) {
  const strokeDashoffset = 283 - (value * 283);
  let progressColor = "";

  if (statsType === "")
    progressColor = value > .5 ? 'above50Gradient' : 'below50Gradient';
  else if (statsType === "pending")
    progressColor = "below50Gradient";
  else if (statsType === "inProgress")
    progressColor = "above50Gradient";
  else if (statsType === "completed")
    progressColor = "completedGradient";


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

          {/* Pending Tasks Stats */}
          <linearGradient id="pendingGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B7280" /> {/* Gray-700 */}
            <stop offset="90%" stopColor="#9CA3AF" />  {/* Gray-500 */}
          </linearGradient>

          {/* In-Progress Tasks Stats */}
          <linearGradient id="inProgressGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22C55E" /> {/* Green-500 */}
            <stop offset="90%" stopColor="#34D399" />  {/* Green-400 */}
          </linearGradient>

          {/* Completed Tasks Stats */}
          <linearGradient id="completedGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" /> {/* Emerald-700 */}
            <stop offset="90%" stopColor="#10B981" />  {/* Emerald-500 */}
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="38" stroke="#D1D5DC" strokeWidth="12" style={{ opacity: 0.4 }} fill="none" />
        <circle
					cx="50"
					cy="50"
					r="38"
					stroke={`url(#${progressColor})`}
					strokeWidth="12"
					fill="none"
					strokeDasharray="283"
          strokeLinecap={statsType !== "" ? "round" : "square"}
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