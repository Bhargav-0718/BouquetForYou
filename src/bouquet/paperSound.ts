
const PAPER_SOUND_SRC = '/sounds/paper_flip.mp3';

let audio: HTMLAudioElement | null = null;

export function playPaperSound() {
  if (typeof Audio === 'undefined') return;
  if (!audio) {
    audio = new Audio(PAPER_SOUND_SRC);
    audio.preload = 'auto';
    audio.volume = 0.7;
  }
  audio.currentTime = 0;
  audio.play().catch(() => {
    /* Autoplay blocked (no user gesture yet) — safe to ignore. */
  });
}
