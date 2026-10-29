import { START_DATE } from './constants';

export function getCurrentDayCount(lastCheckDate: string | null): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!lastCheckDate) {
    const start = new Date(START_DATE);
    start.setHours(0, 0, 0, 0);
    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays + 1);
  }

  const lastDate = new Date(lastCheckDate);
  lastDate.setHours(0, 0, 0, 0);

  if (lastDate.getTime() === today.getTime()) {
    const lastStreak = localStorage.getItem('currentStreak');
    return parseInt(lastStreak || '1', 10);
  }

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastDate.getTime() === yesterday.getTime()) {
    const lastStreak = localStorage.getItem('currentStreak');
    return parseInt(lastStreak || '1', 10) + 1;
  }

  return 1;
}

export function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max);
}
