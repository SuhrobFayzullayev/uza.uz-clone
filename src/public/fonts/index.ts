import { Noto_Sans, Merriweather } from "@next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
});

export const merriWeather = Merriweather({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
});
