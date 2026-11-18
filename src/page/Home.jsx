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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxa85U9MQFyCmgafKupQoJdSv5Qi-u0M6lxRB4xepZQ&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjmrLr7VjfrQv0_QEI2bfO4-qzQM2Ih96SyGQ4QIb6A&s=10"
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
                  src="data:image/jpeg;base64,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"
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t-2 border-[#B3352B] pt-4">
              <span className="text-sm font-semibold text-[#B3352B]">۱</span>
              <h3 className="text-lg sm:text-xl font-bold mb-1">شنیدن</h3>
              <p className="text-base text-[#857F6B]">
                جلسه‌ی شناخت نیاز و هدف
              </p>
            </div>
            <div className="border-t-2 border-[#B3352B] pt-4">
              <span className="text-sm font-semibold text-[#B3352B]">۲</span>
              <h3 className="text-lg sm:text-xl font-bold mb-1">طراحی</h3>
              <p className="text-base text-[#857F6B]">طرح اولیه و تایید شما</p>
            </div>
            <div className="border-t-2 border-[#B3352B] pt-4">
              <span className="text-sm font-semibold text-[#B3352B]">۳</span>
              <h3 className="text-lg sm:text-xl font-bold mb-1">ساخت</h3>
              <p className="text-base text-[#857F6B]">
                کدنویسی و تست روی موبایل
              </p>
            </div>
            <div className="border-t-2 border-[#B3352B] pt-4">
              <span className="text-sm font-semibold text-[#B3352B]">۴</span>
              <h3 className="text-lg sm:text-xl font-bold mb-1">تحویل</h3>
              <p className="text-base text-[#857F6B]">آموزش و پشتیبانی</p>
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
            - مدیر فروشگاه چیدمان، مشتری کدپارس
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
