const values = [
  { title: "شفافیت", text: "قیمت و زمان‌بندی از روز اول روی کاغذ است." },
  { title: "کیفیت فنی", text: "کد تمیز و سرعت بالا، نه قالب آماده‌ی سنگین." },
  { title: "همراهی", text: "بعد از تحویل هم پاسخگوی مشتری می‌مانیم." },
];

const team = [
  {
    name: "سارا محمدی",
    role: "مدیر محصول",
    image: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "امیر رضایی",
    role: "توسعه‌دهنده ارشد",
    image: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "نگار کریمی",
    role: "طراح رابط کاربری",
    image: "https://i.pravatar.cc/400?img=32",
  },
  {
    name: "رضا احمدی",
    role: "توسعه‌دهنده موبایل",
    image: "https://i.pravatar.cc/400?img=33",
  },
];

const timeline = [
  { year: "۱۳۸۷", text: "شروع کار با دو نفر در یک اتاق کوچک" },
  { year: "۱۳۸۹", text: "اولین پروژهٔ بزرگ: وبسایت یک شرکت تولیدی" },
  { year: "۱۳۹۱", text: "راه‌اندازی اولین فروشگاه اینترنتی" },
  { year: "۱۳۹۳", text: "عبور از ۵۰ پروژه و اضافه شدن تیم طراحی" },
  { year: "۱۳۹۵", text: "شروع همکاری با برندهای ملی" },
  { year: "۱۳۹۷", text: "تیم ۷ نفره و دفتر جدید" },
  { year: "۱۳۹۹", text: "ورود به توسعهٔ اپلیکیشن موبایل" },
  { year: "۱۴۰۱", text: "عبور از ۱۰۰ پروژه" },
  { year: "۱۴۰۳", text: "راه‌اندازی واحد پشتیبانی اختصاصی" },
  { year: "۱۴۰۴", text: "تیم ۱۲ نفره و تمرکز بر پروژه‌های بزرگ" },
];

export default function About() {
  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#23201D]">
      <section className="py-12 md:py-24">
        <div className="max-w-300 mx-auto px-6 md:px-8 flex flex-col gap-6">
          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-tight max-w-3xl">
            ما «کارها» هستیم؛ یک تیم کوچک و دقیق.
          </h1>
          <p className="text-[16px] leading-8 max-w-2xl">
            کارها از سال ۱۳۹۷ با سه نفر شروع شد و امروز با یک تیم ۱۲ نفره، برای
            کسب‌وکارهای ایرانی وبسایت و نرم‌افزار می‌سازد. اصل کار ما ساده است:
            کم‌حرفی در وعده، دقت در تحویل.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#EFE7D8]">
        <div className="max-w-300 mx-auto px-6 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] md:text-[32px] font-extrabold">
              چیزهایی که برایمان مهم است
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7F3EC] border border-[#DDD3C3] border-t-[3px] border-t-[#B3352B] p-6 flex flex-col gap-2"
              >
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  {item.title}
                </h3>
                <p className="text-[16px] leading-7 text-[#857F6B]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="max-w-300 mx-auto px-6 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] md:text-[32px] font-extrabold">
              آدم‌های پشت پروژه‌ها
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-[#DDD3C3] bg-[#F7F3EC] overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="text-[18px] md:text-[20px] font-bold">
                    {member.name}
                  </h3>
                  <span className="text-[14px] text-[#857F6B]">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#EFE7D8]">
        <div className="max-w-300 mx-auto px-6 md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[#857F6B]">۰۴ / خط زمانی</span>
            <h2 className="text-[24px] md:text-[32px] font-extrabold">
              مسیری که آمده‌ایم
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#B3352B] z-0" />

            <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
              <div className="flex gap-8 min-w-max px-2">
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="relative z-10 flex flex-col items-center gap-3 w-40 shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-[#B3352B] bg-[#F7F3EC] flex items-center justify-center font-bold text-[#B3352B]">
                      {item.year.slice(-2)}
                    </div>

                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-[20px] md:text-[24px] font-extrabold">
                        {item.year}
                      </span>
                      <span className="text-[14px] text-[#857F6B]">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
