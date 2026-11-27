export default function Home() {
  return (
    <main className="bg-[#F7F3EC] text-[#23201D] pt-14 sm:pt-18">
      <section className="bg-[#23201D] text-white">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8 py-12 lg:py-24">
          <span className="inline-block text-[#D9A441] text-[18px] px-3 py-1 mb-6">
            شرکت نرم‌افزاری کارها
          </span>
          <h1 className="text-[32px] sm:text-[48px] font-extrabold leading-tight mb-6">
            نرم‌افزار می‌سازیم
            <br />
            که کار کند، نه فقط دیده شود.
          </h1>
          <p className="text-base text-[#DDD3C3] max-w-xl mb-8">
            طراحی و ساخت وب‌سایت، فروشگاه اینترنتی و اپلیکیشن برای کسب‌وکارهایی
            که رشد می‌خواهند.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="main-btn">مشاوره‌ی رایگان</button>
            <button className="second-btn bg-white">دیدن نمونه‌کارها</button>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD3C3]">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-[32px] font-extrabold text-[#B3352B]">
              ۱۲۰+
            </div>
            <div className="text-sm text-[#857F6B]">پروژه‌ی تحویل‌شده</div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-[#B3352B]">۹۸٪</div>
            <div className="text-sm text-[#857F6B]">رضایت مشتری</div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-[#B3352B]">
              ۸ سال
            </div>
            <div className="text-sm text-[#857F6B]">تجربه‌ی تیم</div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-[#B3352B]">
              ۲۴ ساعته
            </div>
            <div className="text-sm text-[#857F6B]">پشتیبانی</div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-[32px] font-extrabold mb-8">
            آنچه می‌سازیم
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-[#DDD3C3] bg-white p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                طراحی وب‌سایت
              </h3>
              <p className="text-base text-[#857F6B]">
                سایت شرکتی سریع و فارسی، سازگار با موبایل.
              </p>
            </div>
            <div className="border border-[#DDD3C3] bg-white p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                فروشگاه اینترنتی
              </h3>
              <p className="text-base text-[#857F6B]">
                فروش آنلاین با درگاه پرداخت و مدیریت سفارش.
              </p>
            </div>
            <div className="border border-[#DDD3C3] bg-white p-6 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                اپلیکیشن موبایل
              </h3>
              <p className="text-base text-[#857F6B]">
                اپ اندروید و iOS با یک کد مشترک.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24 bg-[#EFE7D8]">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-[32px] font-extrabold mb-8">
            کارهایی که تحویل داده‌ایم
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="h-48 bg-[#D9A441] rounded-sm mb-4 p-5 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src="/image5.jpg"
                  alt="فروشگاه مبلمان چیدمان"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                فروشگاه مبلمان چیدمان
              </h3>
              <p className="text-sm text-[#857F6B]">فروشگاه اینترنتی</p>
            </div>

            <div>
              <div className="h-48 bg-[#B3352B] rounded-sm mb-4 p-5 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src="/image4.jpg"
                  alt="سامانه‌ی نوبت‌دهی درمانگاه"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                سامانه‌ی نوبت‌دهی درمانگاه
              </h3>
              <p className="text-sm text-[#857F6B]">نرم‌افزار تحت وب</p>
            </div>

            <div>
              <div className="h-48 bg-[#23201D] rounded-sm mb-4 p-5 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src="/image6.jpg"
                  alt="اپلیکیشن سفارش غذای محلی"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                اپلیکیشن سفارش غذای محلی
              </h3>
              <p className="text-sm text-[#857F6B]">اپلیکیشن موبایل</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-[32px] font-extrabold mb-8">
            از ایده تا تحویل
          </h2>

          <div className="relative">
            <div
              className="
                absolute z-0 bg-[#B3352B]
                top-6 bottom-6 left-6 w-0.5
                md:top-6 md:bottom-auto md:left-0 md:right-0 md:h-0.5 md:w-auto
              "
            />

            <div className="flex flex-col gap-8 md:flex-row md:gap-6 relative z-10">
              {[
                { n: "۱", title: "شنیدن", text: "جلسه‌ی شناخت نیاز و هدف" },
                { n: "۲", title: "طراحی", text: "طرح اولیه و تایید شما" },
                { n: "۳", title: "ساخت", text: "کدنویسی و تست روی موبایل" },
                { n: "۴", title: "تحویل", text: "آموزش و پشتیبانی" },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex-1 flex items-start md:flex-col gap-4 md:gap-3"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full border-2 border-[#B3352B] bg-[#F7F3EC] flex items-center justify-center font-bold text-[#B3352B] z-10">
                    {step.n}
                  </div>

                  <div className="flex flex-col gap-1 md:text-center">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-base text-[#857F6B]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24 bg-[#EFE7D8]">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8">
          <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed max-w-3xl border-r-4 border-[#D9A441] pr-6">
            «سایت جدیدمان در سه ماه اول، سفارش آنلاین را دو برابر کرد.»
          </blockquote>
          <p className="text-sm text-[#857F6B] mt-4">
            - مدیر فروشگاه چیدمان، مشتری کارها
          </p>
        </div>
      </section>

      <section className="bg-[#23201D] text-white">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8 py-12 lg:py-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-[32px] font-extrabold">
            پروژه‌ای در ذهن داری؟
          </h2>
          <button className="main-btn">فرم تماس</button>
        </div>
      </section>
    </main>
  );
}
