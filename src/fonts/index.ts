import { Raleway, Unica_One } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  display: "auto",
  variable: "--font-raleway",
});

const unica = Unica_One({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "auto",
  weight: "400",
  variable: "--font-unica",
  fallback: ["monserrat"],
});

export { raleway, unica };
