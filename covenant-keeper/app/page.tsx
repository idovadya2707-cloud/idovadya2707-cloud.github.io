'use client';

import { useState, useEffect } from 'react';
import { AFFIRMATIONS, IMAGES } from '@/lib/constants';
import { getCurrentDayCount, getRandomIndex } from '@/lib/utils';
import { playCelebrationSound } from '@/lib/audio';

export default function CovenantKeeper() {
  const [dayCount, setDayCount] = useState<number>(0);
  const [affirmationIndex, setAffirmationIndex] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, app will still work
      });
    }

    // Initialize on mount
    const lastCheckDate = localStorage.getItem('lastCheckDate');
    const streak = localStorage.getItem('currentStreak');

    let initialDayCount = 1;
    if (lastCheckDate) {
      initialDayCount = getCurrentDayCount(lastCheckDate);
    }

    setDayCount(initialDayCount);
    setAffirmationIndex(getRandomIndex(AFFIRMATIONS.length));
    setImageIndex(getRandomIndex(IMAGES.length));
  }, []);

  const handleCheckIn = () => {
    setIsAnimating(true);
    playCelebrationSound();

    // Create particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    const lastCheckDate = localStorage.getItem('lastCheckDate');
    const lastStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);

    let newDayCount = dayCount;

    if (!lastCheckDate || lastCheckDate !== today) {
      if (lastCheckDate) {
        const lastDate = new Date(lastCheckDate);
        const today2 = new Date();
        const yesterday = new Date(today2);
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastDate.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0]) {
          newDayCount = lastStreak + 1;
        } else {
          newDayCount = 1;
        }
      }

      localStorage.setItem('lastCheckDate', today);
      localStorage.setItem('currentStreak', newDayCount.toString());
      setDayCount(newDayCount);
    }

    // Rotate content
    setAffirmationIndex((getRandomIndex(AFFIRMATIONS.length)));
    setImageIndex((getRandomIndex(IMAGES.length)));

    setTimeout(() => {
      setIsAnimating(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 safe-area-inset">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Covenant Keeper</h1>
          <p className="text-slate-400">Day {dayCount}</p>
        </div>

        {/* Image Card */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-700">
          <img
            src={IMAGES[imageIndex]}
            alt="Inspiration"
            className="w-full h-full object-cover transition-opacity duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Day Counter */}
        <div className="text-center mb-8">
          <div className="text-7xl font-bold text-white mb-2">{dayCount}</div>
          <p className="text-slate-300 text-lg">days of commitment</p>
        </div>

        {/* Affirmation */}
        <div className="bg-slate-700/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-slate-600">
          <p className="text-white text-center text-lg leading-relaxed font-medium">
            "{AFFIRMATIONS[affirmationIndex]}"
          </p>
        </div>

        {/* Main Button */}
        <div className="relative">
          <button
            onClick={handleCheckIn}
            disabled={isAnimating}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-xl shadow-lg hover:shadow-xl active:scale-95 disabled:cursor-not-allowed"
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
