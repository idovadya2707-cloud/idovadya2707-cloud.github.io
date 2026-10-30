'use client';

import { useState, useEffect } from 'react';
import { AFFIRMATIONS, IMAGES, START_DATE } from '@/lib/constants';
import { getCurrentDayCount, getRandomIndex, getTodayIsraelTime } from '@/lib/utils';

export default function CovenantKeeper() {
  const [dayCount, setDayCount] = useState<number>(() => getCurrentDayCount());
  const [affirmationIndex, setAffirmationIndex] = useState<number>(() => getRandomIndex(AFFIRMATIONS.length));
  const [imageIndex, setImageIndex] = useState<number>(() => getRandomIndex(IMAGES.length));
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [missedYesterday, setMissedYesterday] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, app will still work
      });
    }

    const todayIsrael = getTodayIsraelTime();
    const lastCheckDate = localStorage.getItem('lastCheckDate');
    const lastCheckDay = localStorage.getItem('lastCheckDay');

    setCheckedInToday(lastCheckDate === todayIsrael);
    setMissedYesterday(!!(lastCheckDay && lastCheckDay !== todayIsrael && !checkedInToday));

    // Check every minute for day change (only update when new day, not continuously)
    const interval = setInterval(() => {
      const today = getTodayIsraelTime();
      const lastCheck = localStorage.getItem('lastCheckDate');
      if (lastCheck !== today) {
        setCheckedInToday(false);
        setDayCount(getCurrentDayCount());
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    setIsAnimating(true);

    // Create particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);

    // Log the check-in with Israel timezone
    const todayIsrael = getTodayIsraelTime();
    localStorage.setItem('lastCheckDate', todayIsrael);
    localStorage.setItem('lastCheckDay', todayIsrael);
    setCheckedInToday(true);
    setMissedYesterday(false);

    // Rotate content
    setAffirmationIndex(getRandomIndex(AFFIRMATIONS.length));
    setImageIndex(getRandomIndex(IMAGES.length));

    setTimeout(() => {
      setIsAnimating(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div className="w-full bg-black flex flex-col items-center justify-between p-3 safe-area-inset" style={{ minHeight: '100vh' }}>
      <div className="w-full max-w-sm flex flex-col gap-2">
        {/* Start Date */}
        <p className="text-center text-gray-400 text-xs">Started: {START_DATE.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>

        {/* Image Card */}
        <div className="relative rounded-xl overflow-hidden shadow-xl h-48 bg-slate-800 border border-orange-500/20">
          <img
            src={IMAGES[imageIndex]}
            alt="Inspiration"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Day Counter */}
        <div className="text-center">
          <div className="text-7xl font-black text-white">{dayCount}</div>
          <p className="text-gray-300 text-sm font-light tracking-wide">DAYS OF COMMITMENT</p>
          <div className="mt-2 flex gap-2 justify-center flex-wrap">
            <div className="inline-block px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/5">
              <p className="text-xs font-medium">{checkedInToday ? '✅ TODAY' : '❌ NOT TODAY'}</p>
            </div>
            {missedYesterday && (
              <div className="inline-block px-3 py-1 rounded-full border border-red-500/40 bg-red-500/5">
                <p className="text-xs font-medium">⚠️ MISSED YESTERDAY</p>
              </div>
            )}
          </div>
        </div>

        {/* Affirmation */}
        <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-lg p-3 backdrop-blur-sm border border-orange-500/20">
          <p className="text-white text-center text-sm leading-relaxed font-light italic">
            "{AFFIRMATIONS[affirmationIndex]}"
          </p>
        </div>

        {/* Main Button */}
        <div className="relative">
          <button
            onClick={handleCheckIn}
            disabled={isAnimating}
            style={{
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              color: '#ffffff',
              borderRadius: '1rem',
              padding: '0.9rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              width: '100%',
              border: 'none',
              cursor: isAnimating ? 'not-allowed' : 'pointer',
              opacity: isAnimating ? 0.5 : 1,
              boxShadow: '0 20px 25px -5px rgba(255, 107, 53, 0.3)',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 25px 35px -5px rgba(255, 107, 53, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(255, 107, 53, 0.3)';
              }
            }}
          >
            I kept the covenant today
          </button>

          {/* Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                animation: `float-up 1s ease-out forwards`,
                '--tx': `${particle.x}px`,
                '--ty': `${particle.y}px`,
              } as React.CSSProperties & { '--tx': string; '--ty': string }}
            >
              <div className="text-3xl">💰</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2 - 100px)) scale(0);
          }
        }
      `}</style>
    </div>
  );
}
