import { TRegion } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TRegion[] = [
  {
    path: "tashkent-city",
    title: "Тошкент шаҳри",
    img: "https://cdn.uza.uz/2020/11/01/22/10/zBg5slVtJVUcGhGzMO4lKHdtlTnHtr7w_normal.jpg",
    aboutState:
      "Ўзбекистон Республикаси пойтахти, Марказий Осиёнинг йирик тарихий шаҳри.",
    population: "2654,6 минг киши (2020 йил 1 октябрь ҳолатига)",
    area: {
      size: "334,8 км²",
      text: "Шаҳарда 11 туман ва 1 та шаҳарча бор.",
    },
    governor: {
      img: "https://cdn.uza.uz/2023/01/27/06/08/W8q9TXy0gGsqXq0KOxKF2k4neIcEIYuK_small.jpg",
      name: "Рахмонов Бахтиёр Султонович",
      title: "Тошкент шаҳар ҳокими вазифасини бажарувчи",
      yearOfAppointment: "2023 йил 16 январда лавозимга тайинланган.",
    },
  },
  {
    path: "jizzakh",
    title: "Жиззах",
    img: "https://cdn.uza.uz/2020/11/01/22/26/q1qpI5flPGc2Jd0LvqAN3gwmadT7tIJk_normal.jpg",
    aboutState:
      "Жиззах вилояти 1973 йил 6 мартда ташкил этилган. 1989 йил январда Сирдарё вилояти билан қўшилган. 1990 йил февралда қайтадан ташкил қилинган.",
    population: "1403,2 минг киши (2020 йил 1 октябрь ҳолатига)",
    area: { size: "21,2 минг км²", text: "Шаҳарда 12 туман бор." },
    governor: {
      img: "https://cdn.uza.uz/2020/11/02/13/54/Cidja7X6q5bAXwkQTHgAX7fjGsPQqZsu_small.jpg",
      name: "Салиев Эргаш Алибековичч",
      title: "Вилоят ҳокими",
      yearOfAppointment:
        "017 йил 31 октябрдаги ПФ-5218-сонли Президент Фармони билан лавозимга тайинланган.",
    },
  },
];

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
});

export default regionSlice.reducer;
