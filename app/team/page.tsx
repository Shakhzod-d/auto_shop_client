"use client"
import { Banners } from "../(home)/components/banners";

export default function Team() {
  return (
    <div>
      <Banners
        btn={false}
        p="135px 0"
        w="700px"
        title="Jamoa Haqida"
        desc="Biz — avtomobil dunyosiga bo‘lgan ishtiyoq va mukammallikka intilishni o‘zida birlashtirgan jamoamiz. «Autoshop.uz» sayti orqasida turgan tajribali jurnalistlar, muhandislar va texnologiya ixlosmandlari sizga eng so‘nggi va ishonchli avtomobil yangiliklarini yetkazish uchun birlashgan."
        banner_img="/imgs/team-banner.png"
        img_two={false}
      />
    </div>
  );
}
