import { TPosts } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TIS = { data: TPosts[] };
const initialState: TIS = {
  data: [
    {
      breaking: true,
      categories: { text: "Сиёсат", path: "politics" },
      regions: "karakalpakstan",
      date: "2023-03-10",
      time: "18:25",
      id: 0,
      title: `ЎзАда эълон қилинган муҳим ва долзарб хабарларнинг қисқача тафсилоти (видео)`,
      img: "https://cdn.uza.uz/2023/03/10/13/24/m4oSY3vBOhjrKWKASx3dpuBI9iDEwKoI_small.jpg",
      text: "Ўзбекистон Миллий ахборот агентлиги – ЎзАда эълон қилинган муҳим ва долзарб хабарларнинг қисқача тафсилоти ҳақида лавҳа.",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis, voluptatibus ab, doloribus asperiores laborum inventore sapiente optio nostrum nihil ullam consequatur ipsa assumenda perferendis minus debitis. Maiores, perspiciatis reprehenderit.`,
      isSave: false,
    },
    {
      breaking: false,
      regions: "jizzakh",
      isSave: false,
      categories: { text: "Сиёсат", path: "documents" },
      date: "2023-03-10",
      time: "18:23",
      id: 1,
      title:
        "Тошкент шаҳри йўлларидаги тирбандликка аҳолининг муносабати қандай? – Эксперт жавоб берди",
      img: "https://cdn.uza.uz/2023/03/10/13/22/xgYQ3z8yCDOPxBfAYWACjJaxy0ygB1ic_small.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis, voluptatibus ab, doloribus asperiores laborum inventore sapiente optio nostrum nihil ullam consequatur ipsa assumenda perferendis minus debitis. Maiores, perspiciatis reprehenderit.`,
      text: `Кейинги пайтда пойтахтимизда жамоат транспорти ва метрода тирбандлик юзага келмоқда. Куннинг қайси вақти бўлмасин, метрода ҳам, автобусларда ҳам бундай ҳолатга дуч келяпмиз.`,
    },
    {
      breaking: true,
      regions: "tashkent-city",
      isSave: false,
      categories: { text: "Сиёсат", path: "politics" },
      date: "2023-03-09",
      time: "18:16",
      id: 2,
      title:
        "Бокуда “Манас” достони ва туркий достон анъанаси” китоби тақдим этилди",
      img: "https://cdn.uza.uz/2023/03/10/13/16/BTrXcVBjwFINABl3w7Ho6ZQCjacjfpr3_small.PNG",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis, voluptatibus ab, doloribus asperiores laborum inventore sapiente optio nostrum nihil ullam consequatur ipsa assumenda perferendis minus debitis. Maiores, perspiciatis reprehenderit.`,
      text: `Қирғизистоннинг Озарбайжондаги элчихонаси ташаббуси билан Халқаро Турк маданияти ва мероси жамғармаси томонидан нашр этилган озарбайжонлик машҳур манасшунос олим, шоир, таржимон Одил Жалилнинг “Манас достони ва туркий достон анъанаси” китоби тақдимоти ўтказилди. Бу ҳақда “Кабар” ахборот агентлиги маълум қилди.`,
    },
    {
      breaking: false,
      regions: "andijan",
      isSave: true,
      categories: { text: "Сиёсат", path: "society" },
      date: "2023-03-09",
      time: "18:11",
      id: 3,
      title:
        "Сенатор бошчилигида оқова сув тозалаш иншоотлари фаолияти ўрганилди",
      img: "https://cdn.uza.uz/2023/03/10/13/08/fM42VCfrMign0LrOK56Lg0S4Rc3gX7o8_small.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis, voluptatibus ab, doloribus asperiores laborum inventore sapiente optio nostrum nihil ullam consequatur ipsa assumenda perferendis minus debitis. Maiores, perspiciatis reprehenderit.`,
      text: `Мамлакатимизда Барқарор ривожланиш мақсадларига эришишга қаратилган улкан саъй-ҳаракатлар амалга оширилмоқда. Табиийки муайян натижалар ҳам қўлга киритилаётир. Албатта, бу натижалар салмоқли бўлишида парламент вакиллари томонидан мунтазам ўтказилаётган ўрганишларнинг ҳам алоҳида ўрни бор.`,
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const copy = [...state.data];
      copy.unshift(action.payload);
      copy[0].id = copy.length;

      state.data = copy;
    },

    toggleSave: (state, action: PayloadAction<any>) => {
      const copy = [...state.data].map((v) => {
        if (v.id == action.payload.id)
          return { ...v, isSave: action.payload.isSave };
        return { ...v };
      });

      state.data = copy;
    },
  },
});

export const { addPost, toggleSave } = postSlice.actions;
export default postSlice.reducer;
