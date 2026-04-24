/**
 * Paper-unfolding SFX played whenever a flower opens.
 *
 * Drop the audio file at `public/sounds/paper-open.mp3` and it will be
 * served at the path below. To use a different file name, format, or
 * location, change PAPER_SOUND_SRC — anything under /public works (e.g.
 * '/sounds/page-turn.wav').
 *
 * A single shared Audio instance is reused so that rapid clicks restart
 * the effect instead of layering copies on top of each other.
 */
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
