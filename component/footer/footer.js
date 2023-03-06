import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-screen h-auto text-footerText text-sm">
      <section className="bg-blueFooter w-full">
        <div className="w-full sm:container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="col-span-1 sm:col-span-2 flex flex-col items-start justify-between py-16">
            <Image
              src="/logo-footer.png"
              alt="site-logo"
              width={300}
              height={75}
            />
            <address className="flex flex-col items-start space-y-4 mt-8">
              <span>همدان - خیابان بوعلی -سمت چپ - پلاک 1</span>
              <a href="tel:+12463450695">+1 246-345-0695</a>
              <a href="mailto:info@example.com">info@example.com</a>
            </address>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-between py-16">
            <h2 className="font-light mb-5 text-white text-lg">راهنما</h2>
            <ul className="list-none space-y-2">
              <li>
                <a>درباره ما</a>
              </li>
              <li>سوالات متداول</li>
              <li>قوانین و مقررات</li>
              <li>مشتریان</li>
              <li>وبلاگ</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-between py-16">
            <h2 className="font-light mb-5 text-white text-lg">لینک های مهم</h2>
            <ul className="list-none space-y-2">
              <li>
                <a>آپارتمان</a>
              </li>
              <li>خانه</li>
              <li>باغ</li>
              <li>مغاره</li>
              <li>ویلا</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-between py-16">
            <h2 className="font-light mb-5 text-white text-lg">حساب کاربری</h2>
            <ul className="list-none space-y-2">
              <li>
                <a>پروفایا من</a>
              </li>
              <li>حساب کاربری من</li>
              <li>تنظیمات</li>
              <li>علاقمندی ها</li>
              <li>سبد خرید</li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 flex flex-col py-16">
            <h2 className="font-light mb-5 text-white text-lg">
              دانلود اپلیکیشن
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between">
              <a href="#" className="mb-4 sm:mb-0 sm:ml-4 md:mb-4 md:ml-0">
                <div className="border border-footerborderColor rounded px-4 w-64 h-20 flex flex-row items-center justify-between">
                  <Image
                    src="/svg/google-play.svg"
                    alt="android app"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col justify-between items-center">
                    <h3 className="text-lg font-light text-white">گوگل پلی</h3>
                    <span className="text-sm">دانلود</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="border border-footerborderColor rounded px-4 w-64 h-20 flex flex-row items-center justify-between">
                  <Image
                    src="/svg/apple.svg"
                    alt="ios app"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col justify-between items-center">
                    <h3 className="text-lg font-light text-white">اپ استور</h3>
                    <span className="text-sm">همین الان دانلود</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-copyRightFooter w-full">
        <div className="px-4 py-5 sm:container mx-auto grid grid-cols-2 gap-2">
          <p>تمامی حقوق سایت محفوظ است.</p>
          <div className="flex flex-row items-center justify-end">
            <Image
              src="/svg/instagram.svg"
              alt="instagram account"
              width={20}
              height={20}
              className="ml-4"
            />
            <Image
              src="/svg/linkedin.svg"
              alt="linkedin account"
              width={20}
              height={20}
              className="ml-4"
            />
            <Image
              src="/svg/twitter.svg"
              alt="twitter account"
              width={20}
              height={20}
              className="ml-4"
            />
            <Image
              src="/svg/facebook.svg"
              alt="facebook account"
              width={20}
              height={20}
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
