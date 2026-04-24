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
      "you have this soft, easy vibe that just makes people smile… especially me. Not saying you're my favorite, but you're definitely in the top 1.",
    image: '/photos/pink.jpeg',
    music: '/music/pink.mp3',
    position: { left: '47%', top: '16%', scale: 1.0, rotate: 0 },
  },
  {
    id: 'red',
    color: 'red',
    title: "You're a red flower because…",
    message:
      "you somehow manage to be bold and chill at the same time. Also, I’m like 80% sure you cause my random smiles during the day.",
    image: '/photos/red.jpeg',
    music: '/music/red.mp3',
    position: { left: '20%', top: '25%', scale: 0.98, rotate: -20 },
  },
  {
    id: 'blue',
    color: 'blue',
    title: "You're a blue flower because…",
    message:
      "I feel like your brain does overtime for no reason sometimes… but hey, at least it gives you personality (and gives me reasons to talk to you).",
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
      "you’ve got this simple, genuine vibe that’s really rare. Also, talking to you is suspiciously easy… I don’t trust how comfortable it is.",
    image: '/photos/white.jpeg',
    music: '/music/white.mp3',
    position: { left: '47%', top: '34%', scale: 0.95, rotate: 0 },
  },
  {
    id: 'yellow',
    color: 'yellow',
    title: "You're a yellow flower because…",
    message:
      "you bring good energy wherever you go. Like… if you were a weather forecast, you’d be 'sunny with a high chance of me wanting to hang out.",
    image: '/photos/yellow.jpeg',
    music: '/music/yellow.mp3',
    position: { left: '22%', top: '46%', scale: 0.96, rotate: -20 },
  },
  {
    id: 'purple',
    color: 'purple',
    title: "You're a purple flower because…",
    message:
      "you've got this slightyly mysterious and uniquely embracing charm which never ceases to amaze me, I still couldn't comprehend how I got so lucky to have you.",
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
      "you've got this fun, energetic vibe that makes everything around you so vibrant. Also, I feel like hanging out with you would be a great decision… just saying.",
    image: '/photos/orange.jpeg',
    music: '/music/orange.mp3',
    position: { left: '46%', top: '54%', scale: 1.02, rotate: -3 },
  },
];
