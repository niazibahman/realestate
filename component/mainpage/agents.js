import { VscBookmark } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

export default function Agents() {
  return (
    <section className="w-full content-center">
      <div className="sm:container mx-auto grid grid-cols-1 px-4 content-center text-center my-8">
        <h2 className="text-2xl font-bold text-textColorH">
          آژانس های املاک فعال در ریکادا
        </h2>
        <p className="text-xl text-textColorBase mt-1">
          املاک مورد نظر خود را جستجو کنید
        </p>
      </div>
      <div className="sm:container mx-auto grid sm:grid-cols-3 gap-4 px-8 max-w-6xl content-center">
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid">
          <div className="absolute top-5	left-5 text-xl text-textColorH	">
            <VscBookmark />
          </div>
          <div className="absolute right-5	top-6	text-textColorH">
            <a href="#">
              <BsTelephone className="text-xl	text-greenTheme" />
            </a>
          </div>
          <div className="p-6">
            <div className="w-24	h-24 rounded-full table relative my-3	mx-auto shadow-inner">
              <a href="#">
                <div className="overall-rate">4.4</div>
                <Image
                  src="/user-1.jpg"
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </a>
            </div>
            <div className="text-center ">
              <h5 className="mb-0.5	text-xl	font-bold	">
                <a href="#">آرش صمدی</a>
              </h5>
              <span className="text-sm text-textColorBase">
                <VscLocation className="inline-block" /> تهران، نیاوران
              </span>
              <div className="fr-can-rating mt-1">
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-textColorBase" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <ul>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                دفتر آژانس<span>306</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 bg-gray-100	text-textColorBase text-base	">
                ایمیل<span>agent@gmail.com</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                تلفن<span>09121234567859</span>
              </li>
            </ul>
          </div>
          <div className="	px-4	">
            <a href="#" className="btn-outline-theme w-full">
              <AiOutlineArrowRight className="ml-1" />
              مشاهده پروفایل
            </a>
          </div>
        </div>
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid">
          <div className="absolute top-5	left-5 text-xl text-textColorH	">
            <VscBookmark />
          </div>
          <div className="absolute right-5	top-6	text-textColorH">
            <a href="#">
              <BsTelephone className="text-xl	text-greenTheme" />
            </a>
          </div>
          <div className="p-6">
            <div className="w-24	h-24 rounded-full table relative my-3	mx-auto shadow-inner">
              <a href="#">
                <div className="overall-rate">4.4</div>
                <Image
                  src="/user-2.jpg"
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </a>
            </div>
            <div className="text-center ">
              <h5 className="mb-0.5	text-xl	font-bold	">
                <a href="#">نازنین احمدی</a>
              </h5>
              <span className="text-sm text-textColorBase">
                <VscLocation className="inline-block" /> تهران، نیاوران
              </span>
              <div className="fr-can-rating mt-1">
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-textColorBase" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <ul>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                دفتر آژانس<span>306</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 bg-gray-100	text-textColorBase text-base	">
                ایمیل<span>agent@gmail.com</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                تلفن<span>09121234567859</span>
              </li>
            </ul>
          </div>
          <div className="	px-4	">
            <a href="#" className="btn-outline-theme w-full">
              <AiOutlineArrowRight className="ml-1" />
              مشاهده پروفایل
            </a>
          </div>
        </div>
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid">
          <div className="absolute top-5	left-5 text-xl text-textColorH	">
            <VscBookmark />
          </div>
          <div className="absolute right-5	top-6	text-textColorH">
            <a href="#">
              <BsTelephone className="text-xl	text-greenTheme" />
            </a>
          </div>
          <div className="p-6">
            <div className="w-24	h-24 rounded-full table relative my-3	mx-auto shadow-inner">
              <a href="#">
                <div className="overall-rate">4.4</div>
                <Image
                  src="/user-3.jpg"
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </a>
            </div>
            <div className="text-center ">
              <h5 className="mb-0.5	text-xl	font-bold	">
                <a href="#">علی بیاتی</a>
              </h5>
              <span className="text-sm text-textColorBase">
                <VscLocation className="inline-block" /> تهران، نیاوران
              </span>
              <div className="fr-can-rating mt-1">
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-ratingColor" />
                <AiOutlineStar className="inline-block text-textColorBase" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <ul>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                دفتر آژانس<span>306</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 bg-gray-100	text-textColorBase text-base	">
                ایمیل<span>agent@gmail.com</span>
              </li>
              <li className="flex justify-between	 list-none py-4	px-6 text-textColorBase text-base	">
                تلفن<span>09121234567859</span>
              </li>
            </ul>
          </div>
          <div className="	px-4	">
            <a href="#" className="btn-outline-theme w-full">
              <AiOutlineArrowRight className="ml-1" />
              مشاهده پروفایل
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
