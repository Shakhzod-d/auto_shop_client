const socialArr = [
  {
    id: 1,
    img: "/imgs/telegram.png",
    link: "",
    userName: "@autoshop.uz",
  },
  {
    id: 2,
    img: "/imgs/instagram.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 3,
    img: "/imgs/youtube.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 4,
    img: "/imgs/facebook.png",
    link: "",
    userName: "@autoshop.uz",
  },
  {
    id: 5,
    img: "/imgs/x.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 6,
    img: "/imgs/a.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 7,
    img: "/imgs/ok.png",
    link: "",
    userName: "@autoshop_uz",
  },
  {
    id: 8,
    img: "/imgs/tiktok.png",
    link: "",
    userName: "@autoshop_uz",
  },
];

export const SocialMedia = () => {
  return (
    <section className="container">
      <div className="w-full max-w-[700px] m-auto">
        <h2 className="text-[36px] font-bold text-center mb-4">
          Bizni Kuzatib Boring va <br />
          Yangiliklardan Xabardor Bo'ling!
        </h2>
        <p className="text-center text-[20px] text-[#666666] mb-8">
          Yangiliklar, maxsus takliflar va eksklyuziv kontentdan xabardor
          bo'lish uchun ijtimoiy tarmoqlarda bizga obuna bo'ling.
        </p>
      </div>
      <div className="w-full grid grid-cols-4 justify-between gap-8 mb-[120px]">
        {socialArr.map((item) => (
          <div
            className="w-[254px] h-[220px] bg-[#F8F8F8] flex flex-col justify-center items-center"
            key={item.id}
          >
            <img src={item.img} alt="" className="mb-5" />
            <p className="text-[21px] font-medium mb-5">{item.userName}</p>
            <a
              href={item.link}
              target="_blank"
              className="text-[#3399FF] text-[19px] font-medium"
            >
              Obuna bo'lish
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
