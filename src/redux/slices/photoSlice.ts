import { TPhoto } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TPhoto[] = [
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
  {
    author: "Maqsad Habibullayev",
    category: "Маданият",
    date: "01.04.2023",
    id: 0,
    img: "https://cdn.uza.uz/2023/04/01/11/42/srujwdDTv1DCUx5UF2Gj0fGMrPHAolU7_front.jpg",
    pixels: "53 × 41",
    price: "36,750",
    region: "Қорақалпоғистон",
    size: "200 × 1520",
    title: "Ўтмишдан келган рассом",
  },
];

export const photoSlice = createSlice({
  name: "photo",
  initialState: { data: initialState },
  reducers: {
    addPhoto: (state, action: PayloadAction<any>) => {
      const copy = [...state.data];
      copy.unshift(action.payload);
      copy[0].id = copy.length;
      state.data = copy;
    },
  },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
