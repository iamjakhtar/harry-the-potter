import { Book } from "../types/Book";
import book1Image from "./images/book1.png";
import book2Image from "./images/book2.png";
import book3Image from "./images/book3.png";
import book4Image from "./images/book4.png";
import book5Image from "./images/book5.png";




export const collection: Book[] = [
  {
    id: 1,
    title: "Harry The Potter and Harriet",
    price: 8.0,
    coverImage: `${book1Image}`,
  },
  {
    id: 2,
    title: "Harry The Potter Hunger Games",
    price: 8.0,
    coverImage: `${book2Image}`,
  },
  {
    id: 3,
    title: "Harry The Potter and Blue Dragon",
    price: 8.0,
    coverImage: `${book3Image}`,
  },
  {
    id: 4,
    title: "Harry The Potter and Black Sea",
    price: 8.0,
    coverImage: `${book4Image}`,
  },
  {
    id: 5,
    title: "Harry The Potter and Talking Owl",
    price: 8.0,
    coverImage: `${book5Image}`,
  },
];
