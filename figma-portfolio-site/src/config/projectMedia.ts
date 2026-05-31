/** Public asset URLs — plain filenames so Vercel serves real files (not Git LFS pointers). */
const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const PROJECT_VIDEOS = {
  anantaraWeb: publicUrl("anantara/anantara-web.mp4"),
  anantaraMobile: publicUrl("anantara/anantara-mobile.mp4"),
  bharatYatra: publicUrl("bharatyatra/BharatYatra.mp4"),
  jalSanchay: publicUrl("jalsanchay/jalsanchay-mobile.mp4"),
} as const;
