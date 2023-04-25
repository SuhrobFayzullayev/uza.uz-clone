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
      <div className="w-[4%] h-[200px] relative">
        <Image
          alt=":("
          src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/uza-foot-logo.ce71d344-removebg-preview.png?alt=media&token=71712ffc-6c28-4f90-b34a-e7814b9caf2f"
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
      <div className="w-[4%] relative h-[200px]">
        <Image
          alt=":("
          src="https://firebasestorage.googleapis.com/v0/b/uza-uz.appspot.com/o/oks-logo.960c003a.png?alt=media&token=0fc0a25e-d743-4711-81c8-c44ed015c0e6"
          fill
        />
      </div>
    </div>
  );
}
