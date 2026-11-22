export default function Contact() {
  const inputClass =
    "w-full border border-[#23201D] bg-white px-4 py-3 text-base text-[#23201D] outline-none focus:border-[#B3352B]";

  return (
    <section className="py-12 lg:py-24">
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        <h1 className="text-[32px] font-extrabold text-[#23201D] lg:text-[48px]">
          با ما حرف بزن
        </h1>
        <p className="mt-4 text-base font-normal text-[#857B6F]">
          فرم را پر کن؛ حداکثر تا یک روز کاری پاسخ می‌دهیم.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <form action="#" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-[#23201D]">
                نام و نام خانوادگی 
              </label>
              <input id="name" type="text" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-bold text-[#23201D]">
                شماره تماس 
              </label>
              <input id="phone" type="tel" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-bold text-[#23201D]">
                موضوع
              </label>
              <select id="subject" className={inputClass}>
                <option>طراحی وب‌سایت</option>
                <option>فروشگاه اینترنتی</option>
                <option>اپلیکیشن موبایل</option>
                <option>پشتیبانی و سئو</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold text-[#23201D]">
                متن پیام *
              </label>
              <textarea id="message" rows={5} className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B3352B] px-7 py-3.5 font-bold text-white hover:bg-[#8E271F] sm:w-fit"
            >
              ارسال پیام
            </button>
          </form>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 bg-[#EFE7D8] border-3 border-[#DDD3C3] p-4">
              <h2 className="text-2xl font-extrabold text-[#23201D] lg:text-[32px]">
                اطلاعات تماس
              </h2>
              <p className="text-base text-[#23201D]">
                نشانی: تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲
              </p>
              <p className="text-base text-[#23201D]">تلفن: ۰۲۱-۹۱۰۰۰۰۰۰</p>
              <p className="text-base text-[#23201D]">info@codepars.ir</p>
              <p className="text-base text-[#23201D]">
                ساعت کاری: شنبه تا پنجشنبه، ۹ تا ۱۸
              </p>
            </div>

            <div className="flex h-48 items-center justify-center border-3 border-[#DDD3C3] bg-[#EFE7D8] text-[#857B6F] lg:h-64">
              قاب نقشه
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}