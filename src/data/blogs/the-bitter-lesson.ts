import { Blog } from './types';

export const productionMlSystems: Blog = {
  id: "the-bitter-lesson",
  title: "The Bitter Lesson in AI",
  description: "Summary of The Bitter Lesson by Rich Sutton",
  date: "29-10-2003",
  tags: ["Machine Learning", "AI", "LLM"],
  content: `
The most effective approach in seventy years of AI research is the use of 
**general methods that leverage computation**.

The central thesis, known as **The Bitter Lesson,** is based on historical observation in fields 
like computer chess, Go, speech recognition, and computer vision.

### The Problem
Most AI research has historically focused on leveraging human knowledge of a 
domain to improve performance in the short term, often by building in how researches think their
own minds work. This approach tends to complicate methods, making them less suited for utilizing
general computational power.

### The Lesson
This human-knowledge-based approach eventually **plateaus and even inhibits 
further progres.** Breakthrough progress consistently comes from the opposing approach of **scaling
computation** through **search and learning.**

### The Cause
The ultimate reason this computational approach prevails is the continued 
exponentially falling cost per unit of computation, a generalization of **Moore's law.** Over time,
**massively more computation inevitably becomes available.**


### Historical Examples

- **Computer Chess:** Methods based on massive, deep search defeated the world champion in 1997,
overcoming earlier methods that leveraged human understanding of the games's structure.

- **Computer Go:** Slightly delayed, but again the search and learning by self-play were applied
effectively at scale. 

    *This shook the world. The world got to know the power of AI. You can watch
    the documentary [AlphaGo - The Movie](https://youtu.be/WXuK6gekU1Y) which is available on youtube.
    It was the most challenging task for artificial intelligence, as there are more board configurations
    than there are atoms in the universe. But no more. This was the greatest achievement in history of
    AI. The AI made by team Deepmind (led by Demmis Hassabis), defeated the world champions in that
    Game.*

- Similarly in **speech recognition** and **computer vision** too.





`
};
