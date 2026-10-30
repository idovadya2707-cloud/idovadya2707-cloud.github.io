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

export function getTodayIsraelTime(): string {
  const date = new Date();
  const israelDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }));
  const year = israelDate.getFullYear();
  const month = String(israelDate.getMonth() + 1).padStart(2, '0');
  const day = String(israelDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
