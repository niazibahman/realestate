import { RiCalendarLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Articles() {
  return (
    <section className="w-full content-center ">
      <div className="sm:container mx-auto grid grid-cols-1 px-4 content-center text-center mb-8 mt-16">
        <h2 className="text-2xl font-bold text-textColorH">جدیدترین مقالات</h2>
        <p className="text-xl text-textColorBase mt-1">
          تازه ترین و به روز ترین مقالات ملکی و دکوراسیون داخلی
        </p>
      </div>
      <div className="sm:container mx-auto grid sm:grid-cols-3 gap-4 px-8 max-w-6xl content-center mb-10">
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid w-full">
          <div className="p-2.5	rounded overflow-hidden	">
            <a href="#">
              <img src="/p-11.jpg" alt="" className="rounded img-fluid" />
            </a>
          </div>
          <div className="blog-info py-2.5 px-5">
            <span className="flex	items-center text-sm text-textColorBase	">
              <RiCalendarLine className="ml-1.5 	text-lg" />
              30 بهمن 1401
            </span>
          </div>
          <div className="blog-body pt-1	px-5">
            <h4 className="bl-title text-lg mb-3">
              <a href="#">تاثیر دکوراسیون داخلی در طراحی مدرن </a>
            </h4>
            <p className="text-sm text-textColorBase">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <div className="bl-continue text-redTheme text-base	my-5	 ">
              <a href="#" className="flex items-center">
                <IoIosArrowRoundForward />
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid w-full">
          <div className="p-2.5	rounded overflow-hidden	">
            <a href="#">
              <img src="/p-10.jpg" alt="" className="rounded img-fluid" />
            </a>
          </div>
          <div className="blog-info py-2.5 px-5">
            <span className="flex	items-center text-sm text-textColorBase	">
              <RiCalendarLine class="ml-1.5 	text-lg" />
              30 بهمن 1401
            </span>
          </div>
          <div className="blog-body pt-1	px-5">
            <h4 className="bl-title text-lg mb-3">
              <a href="#">راهنمای قدم به قدم مراحل تأسیس آژانس املاک</a>
            </h4>
            <p className="text-sm text-textColorBase">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <div className="bl-continue text-redTheme text-base	my-5	 ">
              <a href="#" className="flex items-center">
                <IoIosArrowRoundForward />
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-sm	mt-7 border-0	shadow-grid w-full">
          <div className="p-2.5	rounded overflow-hidden	">
            <a href="#">
              <img src="/p-8.jpg" alt="" className="rounded img-fluid" />
            </a>
          </div>
          <div className="blog-info py-2.5 px-5">
            <span className="flex	items-center text-sm text-textColorBase	">
              <RiCalendarLine class="ml-1.5 	text-lg" />
              30 بهمن 1401
            </span>
          </div>
          <div className="blog-body pt-1	px-5">
            <h4 className="bl-title text-lg mb-3">
              <a href="#">۵ محله مناسب برای خرید آپارتمان در تهران ! </a>
            </h4>
            <p className="text-sm text-textColorBase">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <div className="bl-continue text-redTheme text-base	my-5	 ">
              <a href="#" className="flex items-center">
                <IoIosArrowRoundForward />
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
