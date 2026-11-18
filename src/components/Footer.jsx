import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { text: "خانه", path: "/" },
    { text: "خدمات", path: "/services" },
    { text: "نمونه کارها", path: "/works" },
    { text: "درباره ما", path: "/about" },
  ];
  const services = [
    "طراحی وب‌سایت",
    "فروشگاه اینترنتی",
    "اپلیکیشن موبایل",
    "پشتیبانی و سئو",
  ];

  const heading = "text-[18px] font-bold text-[#D9A441] mb-2";
  const linkStyle = "text-[#DDD3C3] hover:text-[#D9A441] transition-colors w-fit";

  return (
    <footer className="bg-[#23201D] text-[14px] font-normal text-[#DDD3C3]">
      <div className="w-full max-w-300 mx-auto px-6 sm:px-8 py-12 lg:py-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="text-[20px] font-bold text-[#F7F3EC] flex gap-2 items-center">
            کارها
            <span className="w-2 h-2 rounded-full bg-[#D9A441]"></span>
          </span>
          <p className="leading-7">
            شرکت برنامه‌نویسی کارها؛ ساخت سایت و نرم‌افزار برای کسب‌وکارها.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={heading}>دسترسی سریع</h3>
          {quickLinks.map((item) => (
            <Link key={item.path} to={item.path} className={linkStyle}>
              {item.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={heading}>خدمات</h3>
          {services.map((item) => (
            <Link key={item} to="/services" className={linkStyle}>
              {item}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={heading}>ارتباط</h3>
          <span>بندرعباس، چهارراه دانشگاه، کوچه سوم</span>
          <a
            href="mailto:rahmanianmeraj@gmail.com"
            className={linkStyle}
            dir="ltr"
          >
            rahmanianmeraj@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-[#3C3A36]">
        <div className="w-full max-w-300 mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <span>تمامی حقوق برای کارها محفوظ است.</span>
          <div className="flex gap-6">
            <Link to="/" className={linkStyle}>حریم خصوصی</Link>
            <Link to="/" className={linkStyle}>قوانین</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}