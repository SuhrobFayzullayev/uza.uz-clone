import Image from "next/image";
import React from "react";
import FooterContent from "./footerContent";

export default function Footer() {
  const data = {
    categories: [
      { title: "Сиёсат" },
      { title: "Жамият" },
      { title: "Илм-фан" },
      { title: "Маданият" },
      { title: "Туризм" },
      { title: "Спорт" },
      { title: "Жаҳон" },
      { title: "Иқтисодиёт" },
      { title: "Ҳужжатлар" },
      { title: "Технология" },
    ],
    services: [
      { title: "Тадбирлар ёритиш учун мурожаат" },
      { title: "Обуна" },
      { title: "Резюме қолдириш" },
      { title: "Сайт харитаси" },
      { title: "Мурожаат йўллаш" },
      { title: "Сайтнинг эски талқини" },
    ],
    science: [
      { title: "Илмий иш эълонлари" },
      { title: "Илмий йўналишлар" },
      { title: "Инновацион ғоялар ва ишланмалар" },
      { title: "Таҳрир ҳайъати" },
      { title: "Мақолага қўйилган талаблар" },
      { title: "Низоми" },
    ],
    about: [
      { title: "Агентлик ҳақида" },
      { title: "Норматив ҳужжатлар" },
      { title: "ЎзА тендерлари" },
      { title: "Раҳбарият" },
      { title: "Очиқ маълумотлар" },
      { title: "Алоқа" },
      { title: "Вакансия" },
      { title: "Антикоррупция" },
      { title: "Гендер тенглик" },
    ],
  };
  return (
    <div className="bg-[#ECECEC] py-10 px-5  flex justify-between">
      <div className="w-[5%] h-[200px] relative">
        <Image
          alt=":("
          src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/uza-logo.d02b4538.jpg?alt=media&token=7c4b7744-1719-4425-9999-1be7db12b6b4"
          fill
        />
      </div>
      <div className="w-[90%] flex justify-between px-10">
        <FooterContent title="Рукнлар" linksList={data.categories} />
        <FooterContent title="Хизматлар" linksList={data.services} />
        <FooterContent
          title="Илм-фан бўлими (электрон журнал"
          linksList={data.science}
        />
        <FooterContent title="ЎзА ҳақида" linksList={data.about} />
      </div>
      <div className="w-[5%] relative h-[200px]">
        <Image
          alt=":("
          src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/oks-logo.960c003a.jpg?alt=media&token=1adca117-12c6-439d-a15a-d2cb61ea0f19"
          fill
        />
      </div>
    </div>
  );
}
