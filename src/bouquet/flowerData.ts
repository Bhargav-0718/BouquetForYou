export type FlowerColor =
  | 'red'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'purple'
  | 'blue'
  | 'white';

export interface FlowerPalette {
  fill: string;
  stroke: string;
  glow: string;
}

export const PALETTES: Record<FlowerColor, FlowerPalette> = {
  red:    { fill: '#FF8484', stroke: '#D3414A', glow: 'rgba(255, 132, 132, 0.55)' },
  pink:   { fill: '#FFD2D9', stroke: '#E5697D', glow: 'rgba(229, 105, 125, 0.45)' },
  orange: { fill: '#FEBF79', stroke: '#DC6338', glow: 'rgba(254, 191, 121, 0.55)' },
  yellow: { fill: '#FFF689', stroke: '#ED9D38', glow: 'rgba(255, 230, 137, 0.6)'  },
  purple: { fill: '#D0B6ED', stroke: '#8564B4', glow: 'rgba(208, 182, 237, 0.55)' },
  blue:   { fill: '#CCEEFB', stroke: '#61A9DB', glow: 'rgba(204, 238, 251, 0.6)'  },
  white:  { fill: '#FFFBF5', stroke: '#D4BCAE', glow: 'rgba(255, 251, 245, 0.7)'  },
};

export interface FlowerEntry {
  id: string;
  color: FlowerColor;
  title: string;
  message: string;
  image?: string;
  music?: string;
  /**
   * Position within the bouquet expressed in percentages of the bouquet
   * container. Origin is top-left; coord is the flower's *center*.
   */
  position: { left: string; top: string; scale?: number; rotate?: number };
}

/**
 * Example data.
 *
 * Per-flower assets follow this convention — drop files at these paths
 * under /public and they'll be served automatically:
 *   - photo: /photos/<id>.jpg or /photos/<id>.jpeg
 *            (e.g. public/photos/pink.jpg or public/photos/pink.jpeg)
 *   - music: /music/<id>.mp3    (e.g. public/music/pink.mp3)
 * Use any extension you like — just match what's in the field below.
 *
 * Layout matches the target Original.png: 3 back (pink peak / red / blue),
 * 3 middle (yellow / white center / purple), 1 front (orange). Array
 * order controls z-stacking — later entries render on top.
 */
export const FLOWERS: FlowerEntry[] = [
  // --- back row ---
  // Pink is first so it renders behind red and blue (the peak tulip
  // in the target sits behind its neighbors' outer petals).
  {
    id: 'pink',
    color: 'pink',
    title: "You're a pink flower because…",
    message:
      "you’re the softest and most comforting part of my life, the little moments with you that somehow end up meaning the most to me. With you, love feels gentle, easy, and something I never want to lose.",
    image: '/photos/pink.jpeg',
    music: '/music/pink.mp3',
    position: { left: '47%', top: '16%', scale: 1.0, rotate: 0 },
  },
  {
    id: 'red',
    color: 'red',
    title: "You're a red flower because…",
    message:
      "with you, love isn't just something I say, it's something I feel deeply in every moment we share. You're not just someone I love, you're someone who has become a part of me in the most intense and real way.",
    image: '/photos/red.jpeg',
    music: '/music/red.mp3',
    position: { left: '20%', top: '25%', scale: 0.98, rotate: -20 },
  },
  {
    id: 'blue',
    color: 'blue',
    title: "You're a blue flower because…",
    message:
      "you’re the embodiment of kindness and serenity, and every time I’m with you, everything just feels calmer and right. Being around you makes me want to admire and adore you in the purest way possible.",
    image: '/photos/blue.jpeg',
    music: '/music/blue.mp3',
    position: { left: '74%', top: '30%', scale: 0.98, rotate: 20 },
  },
  // --- middle row (rendered in front of back row) ---
  {
    id: 'white',
    color: 'white',
    title: "You're a white flower because…",
    message:
      "you’re the personification of purity and peace, the one who brings a sense of calm and comfort to my heart without even trying. Around you, everything feels lighter, like I’m living in a dream I never want to wake up from.",
    image: '/photos/white.jpeg',
    music: '/music/white.mp3',
    position: { left: '47%', top: '34%', scale: 0.95, rotate: 0 },
  },
  {
    id: 'yellow',
    color: 'yellow',
    title: "You're a yellow flower because…",
    message:
  "you’re the sunshine that brightens even my worst days, the reason behind so many of my smiles without you even knowing it. You make life feel warmer and happier, and you constantly inspire me to be a better person.",
    image: '/photos/yellow.jpeg',
    music: '/music/yellow.mp3',
    position: { left: '22%', top: '46%', scale: 0.96, rotate: -20 },
  },
  {
    id: 'purple',
    color: 'purple',
    title: "You're a purple flower because…",
    message:
      "you have this slightly mysterious yet incredibly comforting charm that pulls me in more every day. I still can’t fully understand how I got so lucky to have someone like you in my life.",
    image: '/photos/purple.jpeg',
    music: '/music/purple.mp3',
    position: { left: '70%', top: '50%', scale: 0.96, rotate: 20 },
  },
  // --- front ---
  {
    id: 'orange',
    color: 'orange',
    title: "You're an orange flower because…",
    message:
    "you bring this fun, energetic vibe that makes everything around you feel alive and exciting. No matter how I’m feeling, you somehow always manage to light something up inside me and make everything better.",
    image: '/photos/orange.jpeg',
    music: '/music/orange.mp3',
    position: { left: '46%', top: '54%', scale: 1.02, rotate: -3 },
  },
];
