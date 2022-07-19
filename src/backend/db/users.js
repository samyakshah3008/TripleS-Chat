import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aron",
    lastName: "James",
    username: "aron20",
    password: "aron123",
    bookmarks: [],
    bio: "Specialized in mobile and web products",
    website: " https://www.aaronjames.design/",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654448058/PalletGram/users/60b7ff0e93f2b25ece22b640_itsMe_bz9a4e.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Varnita",
    lastName: "Makrariya",
    username: "varnita19",
    password: "varnita123",
    bookmarks: [],
    bio: "Aspring FullStack Developer",
    website: " https://varnitamakrariya.netlify.app/",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654448441/PalletGram/users/PicsArt_08-01-12.00.18_j33iee.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Samyak",
    lastName: "Shah",
    username: "samyakshah",
    password: "samyak123",
    bookmarks: [],
    bio: "Aspring FullStack Developer",
    website: " https://samyakshah-portfolio.netlify.app/",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654447975/PalletGram/users/74gujmdK_400x400_qggv5e.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pritam",
    lastName: "Kumar",
    username: "pritamkumar",
    password: "pritam123",
    bookmarks: [],
    bio: "Aspring FullStack Developer",
    website: " https://neogcamp-portfolio-of-pritam.netlify.app/index.html",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654447947/PalletGram/users/m0lXiJrv_400x400_yly3ts.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Human",
    username: "johnthehuman",
    password: "john123",
    bookmarks: [],
    bio: "Graphic Designer",
    website: " https://johnthehuman.com/",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654448171/PalletGram/users/701651-vector-cartoon-portrait-avatar-illustration-fanart_abtrqt.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anuj",
    lastName: "Kumar",
    username: "anujkumar",
    password: "anuj123",
    bookmarks: [],
    bio: "Aspring Advanced frontend Developer",
    website: " https://anujkumar.netlify.app/",
    avatar:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654447993/PalletGram/users/6BqB7h-i_400x400_qkbhfu.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
