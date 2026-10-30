import { START_DATE } from './constants';

export function getCurrentDayCount(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1);
}

export function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max);
}
