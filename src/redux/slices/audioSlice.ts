import { TAudio, TAudioData } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TAudio = {
  activeAudioId: 0,
  data: [
    {
      id: 2,
      title:
        "Тадбиркорларнинг банкдаги маблағларини бесўроқ олиб қўйиш ҳолатлари юзасидан жазо кучайтирилади",
      date: "09.02.2023",
      time: "16:22",
      audio:
        "https://cdn.uza.uz/2023/02/09/11/21/IatUYg5xxJkWgsuYnSQr681xvok6vCxG.mp3",
      img: "https://cdn.uza.uz/2023/02/09/11/14/kgIXg3AavynOmaK8SuD4tWwvwv31oFLG_small.jpg",
    },
    {
      id: 1,
      title:
        "2022-2023-ўқув йилидан мактаб битирувчиларининг шаҳодатномалари электрон шаклда берилади",
      date: "01.02.2023",
      time: "16:20",
      audio:
        "https://cdn.uza.uz/2023/02/01/14/25/73yO3IMHYKz4aQYCsqApFVmiymro53Uw.mp3",
      img: "https://cdn.uza.uz/2023/02/01/14/24/zItggjA5p2DTRHvj6X0We3EhAKpV6vg3_small.jpg",
    },
    {
      id: 0,
      title: "Янги корхоналарда аҳоли доимий иш билан таъминланмоқда",
      date: "01.02.2023",
      time: "14:12",
      audio:
        "https://cdn.uza.uz/2023/02/01/13/58/jfDzbCbUXcYY3KGXds5CP1MVltlNo5yP.mp3",
      img: "https://cdn.uza.uz/2023/02/01/13/57/cOcLwS8yCyzygbaFxyJn2hqc8kITihsU_small.jpg",
    },
  ],
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    addAudio: (state, action: PayloadAction<TAudioData>) => {
      const copy = [...state?.data];
      copy.unshift({ ...action.payload });
      state.data = copy;
    },

    changeAudio: (state, action: PayloadAction<number>) => {
      state.activeAudioId = action.payload;
    },
  },
});

export const { changeAudio, addAudio } = audioSlice.actions;
export default audioSlice.reducer;
