import { UserAnswers, PersonaResult } from "@/types/onboarding";

export const getPersonaFromAnswers = (answers: UserAnswers): PersonaResult => {
  // Define persona scoring system
  const personaScores = {
    "The Joyful Jester": 0,
    "The Wandering Explorer": 0,
    "The Thoughtful Sage": 0,
    "The Untamed Rebel": 0,
    "The Dream Weaver": 0,
    "The Compassionate Soul": 0,
  };

  // Scoring based on humor preferences
  const humorAnswers = answers.humor || [];
  if (
    humorAnswers.includes("witty-sarcastic") ||
    humorAnswers.includes("puns")
  ) {
    personaScores["The Joyful Jester"] += 3;
  }
  if (humorAnswers.includes("silly-slapstick")) {
    personaScores["The Joyful Jester"] += 2;
    personaScores["The Dream Weaver"] += 1;
  }
  if (humorAnswers.includes("dark-humor")) {
    personaScores["The Untamed Rebel"] += 3;
    personaScores["The Thoughtful Sage"] += 1;
  }
  if (humorAnswers.includes("no-humor")) {
    personaScores["The Thoughtful Sage"] += 2;
    personaScores["The Compassionate Soul"] += 1;
  }

  // Scoring based on genre preferences
  const genreAnswers = answers.genres || [];
  if (genreAnswers.includes("fantasy")) {
    personaScores["The Dream Weaver"] += 3;
    personaScores["The Wandering Explorer"] += 1;
  }
  if (genreAnswers.includes("sci-fi")) {
    personaScores["The Thoughtful Sage"] += 2;
    personaScores["The Wandering Explorer"] += 2;
  }
  if (genreAnswers.includes("romance")) {
    personaScores["The Compassionate Soul"] += 3;
    personaScores["The Dream Weaver"] += 1;
  }
  if (genreAnswers.includes("mystery")) {
    personaScores["The Thoughtful Sage"] += 3;
    personaScores["The Wandering Explorer"] += 1;
  }
  if (genreAnswers.includes("horror")) {
    personaScores["The Untamed Rebel"] += 3;
  }
  if (genreAnswers.includes("adventure")) {
    personaScores["The Wandering Explorer"] += 3;
    personaScores["The Untamed Rebel"] += 1;
  }
  if (genreAnswers.includes("drama")) {
    personaScores["The Compassionate Soul"] += 2;
    personaScores["The Thoughtful Sage"] += 1;
  }
  if (genreAnswers.includes("comedy")) {
    personaScores["The Joyful Jester"] += 3;
  }

  // Scoring based on reading time (influences certain personas)
  const readingTimeAnswers = answers.reading_time || [];
  if (readingTimeAnswers.includes("60+")) {
    personaScores["The Thoughtful Sage"] += 2;
    personaScores["The Dream Weaver"] += 1;
  }
  if (readingTimeAnswers.includes("0-15")) {
    personaScores["The Joyful Jester"] += 1;
  }

  // Scoring based on content maturity
  const maturityAnswers = answers.content_maturity || [];
  if (
    maturityAnswers.includes("explicit") ||
    maturityAnswers.includes("mature")
  ) {
    personaScores["The Untamed Rebel"] += 2;
    personaScores["The Thoughtful Sage"] += 1;
  }
  if (maturityAnswers.includes("family-friendly")) {
    personaScores["The Compassionate Soul"] += 2;
    personaScores["The Joyful Jester"] += 1;
  }

  // Find the persona with the highest score
  const topPersona = (
    Object.entries(personaScores) as [keyof typeof personaScores, number][]
  ).reduce((a, b) => (personaScores[a[0]] > personaScores[b[0]] ? a : b))[0];

  // Return persona details
  return getPersonaDetails(topPersona);
};

const getPersonaDetails = (personaName: string): PersonaResult => {
  const personas: Record<string, PersonaResult> = {
    "The Joyful Jester": {
      name: "The Joyful Jester",
      title: "The Life of Every Story",
      description:
        "You turn every page into a punchline. For you, life’s too short for boring stories there’s always room for one more joke",
      image: "/assets/persona/The Joyful Jester.png",
      traits: [
        "Witty",
        "Optimistic",
        "Entertaining",
        "Quick-minded",
        "Lighthearted",
      ],
      storyRecommendations: [
        "Comedy",
        "Satirical Fiction",
        "Humorous Adventures",
        "Witty Romance",
        "Parody Tales",
      ],
    },
    "The Wandering Explorer": {
      name: "The Wandering Explorer",
      title: "The Seeker of New Worlds",
      description:
        "You can’t sit still stories are your passport, and every new plot is an adventure waiting to be mapped. No compass, just curiosity",
      image: "/assets/persona/The Wandering Explorer.png",
      traits: ["Adventurous", "Curious", "Bold", "Open-minded", "Restless"],
      storyRecommendations: [
        "Adventure",
        "Travel Tales",
        "Exploration Fiction",
        "Quest Stories",
        "Discovery Narratives",
      ],
    },
    "The Thoughtful Sage": {
      name: "The Thoughtful Sage",
      title: "The Keeper of Wisdom",
      description:
        "Your mind is basically a library with mood lighting. You chase meaning, mystery, and wisdom in every twist of the tale.",
      image: "/assets/persona/The Thoughtful Sage.png",
      traits: ["Analytical", "Wise", "Contemplative", "Patient", "Insightful"],
      storyRecommendations: [
        "Mystery",
        "Science Fiction",
        "Philosophical Fiction",
        "Psychological Thrillers",
        "Literary Fiction",
      ],
    },
    "The Untamed Rebel": {
      name: "The Untamed Rebel",
      title: "The Rule Breaker",
      description:
        "Rules? You snack on them for breakfast. Your stories are wild rides loud, daring, and never apologizing for being different",
      image: "/assets/persona/The Untamed Rebel.png",
      traits: [
        "Independent",
        "Fearless",
        "Unconventional",
        "Passionate",
        "Defiant",
      ],
      storyRecommendations: [
        "Dark Fiction",
        "Dystopian Tales",
        "Anti-hero Stories",
        "Rebellious Narratives",
        "Edgy Thrillers",
      ],
    },
    "The Dream Weaver": {
      name: "The Dream Weaver",
      title: "The Architect of Imagination",
      description:
        "Your imagination refuses to stay on Earth it’s busy building galaxies, castles, and maybe a dragon or two. Reality? Overrated",
      image: "/assets/persona/The Dream Weaver.png",
      traits: ["Imaginative", "Creative", "Dreamy", "Mystical", "Visionary"],
      storyRecommendations: [
        "Fantasy",
        "Magical Realism",
        "Fairy Tales",
        "Mythological Fiction",
        "Surreal Narratives",
      ],
    },
    "The Compassionate Soul": {
      name: "The Compassionate Soul",
      title: "The Heart of Empathy",
      description:
        "You lead with your heart, offering kindness and empathy to everyone you meet. Your stories are filled with warmth and connection",
      image: "/assets/persona/The Compassionate Soul.png",
      traits: ["Empathetic", "Caring", "Warm", "Understanding", "Nurturing"],
      storyRecommendations: [
        "Romance",
        "Family Sagas",
        "Emotional Drama",
        "Heartwarming Tales",
        "Character Studies",
      ],
    },
  };

  return personas[personaName] || personas["The Compassionate Soul"];
};
