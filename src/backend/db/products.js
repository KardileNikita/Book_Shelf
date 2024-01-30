import { v4 as uuid } from "uuid";
import {
  image1,
  image6,
  image7,
  image8,
  image9,
  image10,
  item7,
  item8,
  item9,
  item10,
} from "assets/images/index";

export const products = [
  {
    _id: "3704667f-4abc-4c22-bbdd-0a4bdbd52d99",
    name: "Beloved",
    image: image7,
    ratings: 5,
    price: 399,
    original: 499,
    discounted: 100,
    description: "Toni Morrison",
    categoryName: "fiction",
  },
  {
    _id: "ee46b756-2402-4002-b158-2243b5bd7e8d",
    name: "A Man Called Ove",
    image: image1,
    ratings: 3,
    price: 299,
    original: 399,
    discounted: 100,
    description: "Fredrik Backman",
    categoryName: "fiction",
  },
  {
    _id: "bb86bda0-a2c5-43e7-8c98-997ce95817fc",
    name: "The Alchemist",
    image: image6,
    ratings: 4,
    price: 280,
    original: 400,
    discounted: 120,
    description: "Paulo Coelho",
    categoryName: "motivational",
  },
  {
    _id: "4ae7a696-fd18-4061-8309-f07002277bdc",
    name: "Atomic Habits",
    image: image8,
    ratings: 4,
    price: 199,
    original: 319,
    discounted: 120,
    description: "James Clear",
    categoryName: "motivational",
  },
  {
    _id: "ebb61bb1-7cf9-4303-aab5-1015e213145d",
    name: "Gone Girl",
    image: image9,
    ratings: 3.5,
    price: 390,
    original: 599,
    discounted: 209,
    description: "Gillian Flynn",
    categoryName: "thriller",
  },
  {
    _id: "c0d14ede-8bd0-46fe-95e2-46baf3269107",
    name: "The Silent Patient",
    image: image10,
    ratings: 5,
    price: 190,
    original: 500,
    discounted: 310,
    description:
      "Alex Michaelides",
    categoryName: "thriller",
  },
  {
    _id: "49af1064-72d0-45f3-96a9-582d2742de6a",
    name: "Verity",
    image: item7,
    ratings: 4,
    price: 299,
    original: 499,
    discounted: 200,
    description: "Colleen Hoover",
    categoryName: "thriller",
  },
  {
    _id: "d5c427cc-e05b-4075-ba46-8692c10cd8d7",
    name: "Yes Plaese",
    image: item8,
    ratings: 4,
    price: 949,
    original: 1000,
    discounted: 51,
    description: "Amy Poehler",
    categoryName: "humor",
  },
  {
    _id: "6d511572-5acd-44fa-ba1c-5d5f75753e0e",
    name: "Bossypants",
    image: item9,
    ratings: 5,
    price: 159,
    original: 249,
    discounted: 90,
    description: "Tina Fey",
    categoryName: "humor",
  },
  {
    _id: "6d511572-5acd-44fa-ba1c-5d5f75753e0e",
    name: "Born a Crime",
    image: item10,
    ratings: 5,
    price: 159,
    original: 249,
    discounted: 90,
    description: "Trevor Noah",
    categoryName: "humor",
  },
];