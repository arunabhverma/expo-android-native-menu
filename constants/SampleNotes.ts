export interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

export const SAMPLE_NOTES: Note[] = [
  {
    id: 1,
    title: "Meeting Notes",
    content: "Discuss project timeline and deliverables for Q2",
    date: "2024-03-20",
  },
  {
    id: 2,
    title: "Shopping List",
    content: "Milk, eggs, bread, fruits",
    date: "2024-03-19",
  },
  {
    id: 3,
    title: "Book Recommendations",
    content: "Atomic Habits, Deep Work, The Psychology of Success",
    date: "2024-03-18",
  },
  {
    id: 4,
    title: "Workout Plan",
    content: "30 min cardio, strength training, stretching",
    date: "2024-03-17",
  },
  {
    id: 5,
    title: "Travel Plans",
    content: "Book flights for summer vacation, research hotels",
    date: "2024-03-16",
  },
  {
    id: 6,
    title: "Movie Watchlist",
    content: "Inception, The Matrix, Interstellar",
    date: "2024-03-15",
  },
  {
    id: 7,
    title: "Project Ideas",
    content: "Mobile app for task management, website redesign",
    date: "2024-03-14",
  },
  {
    id: 8,
    title: "Health Goals",
    content: "Drink more water, get 8 hours of sleep, meditate daily",
    date: "2024-03-13",
  },
  {
    id: 9,
    title: "Learning Goals",
    content: "Complete React Native course, learn TypeScript",
    date: "2024-03-12",
  },
  {
    id: 10,
    title: "Home Improvement",
    content: "Paint living room, organize garage, fix leaky faucet",
    date: "2024-03-11",
  },
];
