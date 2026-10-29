export function playThankYouSound() {
  if (typeof window === 'undefined') return;

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const now = audioContext.currentTime;

  // Create a simple celebratory sound
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.connect(gain);
  gain.connect(audioContext.destination);

  // Ascending notes for "thank you"
  osc.frequency.setValueAtTime(523.25, now); // C5
  osc.frequency.setValueAtTime(659.25, now + 0.15); // E5
  osc.frequency.setValueAtTime(783.99, now + 0.3); // G5

  gain.gain.setValueAtTime(0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

  osc.start(now);
  osc.stop(now + 0.5);
}

export function playCelebrationSound() {
  if (typeof window === 'undefined') return;

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const now = audioContext.currentTime;

  // Create multiple quick beeps for celebration
  for (let i = 0; i < 3; i++) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.frequency.setValueAtTime(800 + i * 200, now + i * 0.1);
    gain.gain.setValueAtTime(0.2, now + i * 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.15);

    osc.start(now + i * 0.1);
    osc.stop(now + i * 0.1 + 0.15);
  }
}
