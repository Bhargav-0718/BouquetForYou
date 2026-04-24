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
 *   - photo: /photos/<id>.jpg   (e.g. public/photos/pink.jpg)
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
      "of the soft way you laugh, the way you hold my hand without thinking. Every gentle moment with you is a tiny forever.",
    image: '/photos/pink.jpg',
    music: '/music/pink.mp3',
    position: { left: '47%', top: '16%', scale: 1.0, rotate: 0 },
  },
  {
    id: 'red',
    color: 'red',
    title: "You're a red flower because…",
    message:
      "you set my heart on fire in the calmest way — fierce, brave, and impossibly warm. Loving you feels like coming home.",
    image: '/photos/red.jpg',
    music: '/music/red.mp3',
    position: { left: '20%', top: '25%', scale: 0.98, rotate: -20 },
  },
  {
    id: 'blue',
    color: 'blue',
    title: "You're a blue flower because…",
    message:
      "you are calm where I am storm. You hold me together when I'm scattered, and you make stillness feel like the best place to be.",
    image: '/photos/blue.jpg',
    music: '/music/blue.mp3',
    position: { left: '74%', top: '30%', scale: 0.98, rotate: 20 },
  },
  // --- middle row (rendered in front of back row) ---
  {
    id: 'white',
    color: 'white',
    title: "You're a white flower because…",
    message:
      "of the quiet kind of love you give — patient, steady, true. You make ordinary days feel sacred.",
    image: '/photos/white.jpg',
    music: '/music/white.mp3',
    position: { left: '47%', top: '34%', scale: 0.95, rotate: 0 },
  },
  {
    id: 'yellow',
    color: 'yellow',
    title: "You're a yellow flower because…",
    message:
      "you are sunshine on the days the world feels grey. Your joy is contagious, and your light makes everything bloom.",
    image: '/photos/yellow.jpg',
    music: '/music/yellow.mp3',
    position: { left: '22%', top: '46%', scale: 0.96, rotate: -20 },
  },
  {
    id: 'purple',
    color: 'purple',
    title: "You're a purple flower because…",
    message:
      "you're a little bit magical — thoughtful, dreamy, the kind of person I'd write poems about if I were any good at them.",
    image: '/photos/purple.jpg',
    music: '/music/purple.mp3',
    position: { left: '70%', top: '50%', scale: 0.96, rotate: 20 },
  },
  // --- front ---
  {
    id: 'orange',
    color: 'orange',
    title: "You're an orange flower because…",
    message:
      "of your spark — your wild ideas, your bright energy, the way you pull me into adventures I'd have been too shy to chase alone.",
    image: '/photos/orange.jpg',
    music: '/music/orange.mp3',
    position: { left: '46%', top: '54%', scale: 1.02, rotate: -3 },
  },
];
