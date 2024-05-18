// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string().max(100),
        date: z.date(),
        description: z.string(),
        coverImage: z.string().optional(), //Image can be optional
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectsCollection,
};