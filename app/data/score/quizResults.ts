import { PersonalityScores } from "../../types/quiz";

export interface FlowerResult {
  trait: keyof PersonalityScores;
  name: string;
  description: string;
  careInstructions: string;
  compatibleFlowers: string[];
}

export const FLOWER_RESULTS: FlowerResult[] = [
  {
    trait: "SUN",
    name: "Sunflower",
    description:
      "You're radiant and life-giving, like a sunflower that turns its face toward the light. You thrive on connection and bring warmth to every room you enter. Your garden will be vibrant, social, and full of life—just like you. People are drawn to your natural warmth, and you have a gift for making others feel seen and celebrated.",
    careInstructions:
      "Your garden needs plenty of social interaction! Place it where people gather—a sunny windowsill, a welcoming entryway, or a shared patio. Water regularly but don't overthink it; you'll know when it needs attention, just like you know when your friends need you. Consider pairing it with plants that enjoy the spotlight as much as you do.",
    compatibleFlowers: ["Hydrangea", "Dandelion", "Lily of the Valley"],
  },
  {
    trait: "DESERT",
    name: "Cactus",
    description:
      "Resilient, independent, and self-sufficient—you thrive on your own terms. You don't need constant attention to flourish; in fact, you do your best work when given space. Your garden will be a testament to quiet strength and understated beauty. There's a powerful elegance in how you conserve your energy for what truly matters.",
    careInstructions:
      "Your garden prefers infrequent but deep watering—just like you prefer meaningful connection over constant contact. It'll thrive with some neglect, so don't stress if you forget about it for a few days. A well-draining pot and a spot that gets strong but infrequent attention will yield the most stunning blooms. Less is truly more with you.",
    compatibleFlowers: ["Nemophila", "Sedum", "Rose"],
  },
  {
    trait: "MIST",
    name: "Lily of the Valley",
    description:
      "Gentle, intuitive, and deeply empathetic—you feel everything deeply and create beauty from emotion. Your garden will be a soft, dreamy space that reflects your rich inner world. You don't just grow plants; you nurture souls. Your sensitivity is your superpower, allowing you to notice the subtle changes and needs that others overlook.",
    careInstructions:
      "Your garden needs gentle, consistent care and protection from harsh conditions. It'll respond to your emotional energy—talk to your plants, play them music, and they'll thrive under your tender attention. A sheltered spot with dappled light suits you best. Trust your intuition; if you feel a plant needs something, it probably does.",
    compatibleFlowers: ["Nemophila", "Hydrangea", "Sunflower"],
  },
  {
    trait: "ALPINE",
    name: "Sedum",
    description:
      "Ambitious, structured, and always reaching new heights. You have a vision and the discipline to make it real. Your garden won't just be beautiful—it'll be a masterpiece of planning and intention. You grow with purpose. Challenges don't deter you; they're just opportunities to prove what you're capable of achieving.",
    careInstructions:
      "Your garden appreciates structure and routine. Regular pruning, scheduled watering, and thoughtful placement will yield stunning results. Keep a gardening journal—you'll love looking back at your progress. Give your plants something to climb, and watch them rise to meet your expectations, just like you rise to meet yours.",
    compatibleFlowers: ["Rose", "Cactus", "Sunflower"],
  },
  {
    trait: "THORN",
    name: "Rose",
    description:
      "Passionate, guarded, and fiercely loyal. You have strong boundaries, but those who earn your trust discover incredible depth and beauty. Your garden will be bold, protected, and absolutely stunning—worth the effort to get close. You don't bloom for everyone, and that makes your bloom all the more precious.",
    careInstructions:
      "Your garden needs firm boundaries—protect it from pests and harsh weather. It thrives with confident, decisive care. Don't be afraid to prune hard; it'll come back stronger. The blooms will be worth the thorns. Place it where it can be admired from a respectful distance, and watch how it rewards those who approach with care.",
    compatibleFlowers: ["Sedum", "Cactus", "Nemophila"],
  },
  {
    trait: "WIND",
    name: "Dandelion",
    description:
      "Free-spirited, adaptable, and always up for adventure. You hate being tied down and find joy in the unexpected. Your garden will be ever-changing, surprising, and full of delightful chaos—just like your beautiful mind. Routine feels like a cage; spontaneity is where you come alive.",
    careInstructions:
      "Your garden needs flexibility! Try new arrangements, experiment with different plants, and don't worry about perfection. It'll survive your sporadic attention and surprise you with how creatively it grows. Let it cascade and trail and wander—a strict shape will never suit your wild heart. Embrace the beautiful mess.",
    compatibleFlowers: ["Sunflower", "Hydrangea", "Lily of the Valley"],
  },
  {
    trait: "MOON",
    name: "Nemophila",
    description:
      "Mysterious, introspective, and full of hidden depths. You're most alive in quiet moments, and there's more to you than meets the eye. Your garden will be enchanting, subtle, and reveal its magic slowly to those who pay attention. The world may not always understand you, but those who take the time to look closer are rewarded with something extraordinary.",
    careInstructions:
      "Your garden appreciates the night—consider moon gardens with white blooms that glow at dusk. It needs less attention than you think, but when you do visit, be present. The quiet moments together are what matter. A secluded corner, a bench for contemplation—these are where your garden will feel most at home.",
    compatibleFlowers: ["Lily of the Valley", "Cactus", "Rose"],
  },
  {
    trait: "SHRUB",
    name: "Hydrangea",
    description:
      "Adaptable, connecting, and quietly persistent. You weave yourself into communities and projects, becoming an essential, supportive force. Your garden will spread, connect, and create beauty in collaboration with everything around it. You understand that nothing grows in isolation—we all need something to hold onto, and you're often that steady support for others.",
    careInstructions:
      "Your garden loves community—plant things that support each other. It'll thrive with consistent, gentle care and will reward you by spreading joy to every corner of your space. Give it something to climb, other plants to mingle with, and watch how it creates a thriving ecosystem. You're the glue that holds the garden together.",
    compatibleFlowers: ["Sunflower", "Lily of the Valley", "Dandelion"],
  },
];
