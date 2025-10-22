'use client';

import { ShootingStars } from '@/components/shooting-stars';
import { RocketIcon } from '@/components/rocket-icon';

export default function SpacePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black p-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#0b0f1c] to-black" />

      <ShootingStars
        starColor="#ffffff"
        trailColor="#6b7280"
        minSpeed={15}
        maxSpeed={35}
        minDelay={800}
        maxDelay={3000}
        className="z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <div className="flex justify-center mb-8">
          <RocketIcon size={64} className="text-white/90" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance tracking-tight">
            Launch sequence paused
          </h1>

          <p className="text-xl text-white/70 text-balance">
            The next mission is being assembled in orbit.
          </p>

          <div className="pt-4 flex items-center justify-center gap-2 text-lg text-white/60">
            <span className="font-mono">ETA: when it&apos;s ready</span>
            <span className="inline-block w-2 h-5 bg-white/60 animate-blink" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}
