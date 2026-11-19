import { useState } from 'react'

export default function Service() {
    const [openIndex, setOpenIndex] = useState(null)

    const services = [
  {
    number: '۰۱',
    title: 'طراحی وبسایت شرکتی',
    description: 'سایت فارسی راست‌چین، بارگذاری سریع، فرم تماس و اتصال به شبکه‌های اجتماعی.',
    delivery: 'تحویل: ۲ تا ۳ هفته',
  },
  {
    number: '۰۲',
    title: 'فروشگاه اینترنتی',
    description: 'سبد خرید، درگاه پرداخت، مدیریت محصول و سفارش، پیامک اطلاع‌رسانی.',
    delivery: 'تحویل: ۴ تا ۶ هفته',
  },
  {
    number: '۰۳',
    title: 'اپلیکیشن موبایل',
    description: 'یک خروجی برای اندروید و iOS، ورود با پیامک و اعلان‌ها.',
    delivery: 'تحویل: ۶ تا ۸ هفته',
  },
  {
    number: '۰۴',
    title: 'پشتیبانی و سئو',
    description: 'به‌روزرسانی، بکاپ هفتگی، رفع اشکال و بهبود دیده‌شدن در گوگل.',
    delivery: 'قرارداد ماهانه',
  },
]

    const packages = [
  {
    name: 'پایه',
    suitableFor: 'کسب‌وکار تازه‌کار',
    features: '۵ صفحه، فرم تماس، طراحی ریسپانسیو',
  },
  {
    name: 'رشد',
    suitableFor: 'فروش آنلاین',
    features: 'فروشگاه، درگاه پرداخت، پنل مدیریت',
  },
  {
    name: 'اختصاصی',
    suitableFor: 'نیاز ویژه',
    features: 'نرم‌افزار تحت وب یا اپ، طراحی اختصاصی',
  },
]

    const faqs = [
  {
    question: 'هزینه چطور حساب می‌شود؟',
    answer: 'هزینه بر اساس نوع پروژه، تعداد صفحات و امکانات مورد نیاز محاسبه می‌شود. بعد از جلسه‌ی شناخت نیاز، قیمت و زمان‌بندی دقیق را کتبی برای شما می‌فرستیم.',
  },
  {
    question: 'مالکیت سایت با کیست؟',
    answer: 'بعد از تحویل و تسویه، مالکیت کامل سایت، کد و دامنه با شماست و هر زمان که بخواهید می‌توانید آن را به تیم دیگری بسپارید.',
  },
  {
    question: 'بعد از تحویل پشتیبانی دارید؟',
    answer: 'بله. بعد از تحویل هم پاسخگو هستیم و برای به‌روزرسانی، بکاپ و رفع اشکال می‌توانید قرارداد پشتیبانی ماهانه ببندید.',
  },
]

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

  return (
    <div className="pt-20 flex flex-col">
        <div className="border-b border-[#EFE7D8] flex flex-col p-4">
            <span className="text-5xl font-extrabold text-black">
                خدمات ما 
            </span>
            <span className="service_dis"> 
               چهار خدمت اصلی هر کدام با خروجی مشخص و زمان بندی مشخص .
            </span>
        </div>
      {services.map(
        (el) => {
            return(
                <div className="border-b border-[#EFE7D8] flex flex-col p-4">
                    <span className="service_header flex gap-4"><span className="text-[#B3352B]">{el.number}</span> {el.title}</span>
                    <span className="service_dis gap-4">{el.description}{el.delivery}</span>
                </div>
            )
        }
      )}

      <div className="border-b border-[#EFE7D8] flex flex-col p-4 mt-12">
        <span className="text-3xl font-extrabold text-black">
            بسته‌های ما
        </span>
      </div>
      <div className="p-4">
        <table className="w-full text-right border border-[#DDD3C3] border-collapse">
            <thead>
                <tr className="bg-[#EFE7D8]">
                    <th className="p-3 font-bold border border-[#DDD3C3]">بسته</th>
                    <th className="p-3 font-bold border border-[#DDD3C3]">مناسب برای</th>
                    <th className="p-3 font-bold border border-[#DDD3C3]">امکانات کلیدی</th>
                </tr>
            </thead>
            <tbody>
                {packages.map((pkg) => (
                    <tr key={pkg.name}>
                        <td className="p-3 font-bold text-[#B3352B] border border-[#DDD3C3]">{pkg.name}</td>
                        <td className="p-3 border border-[#DDD3C3]">{pkg.suitableFor}</td>
                        <td className="p-3 border border-[#DDD3C3]">{pkg.features}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      <div className="border-b border-[#EFE7D8] flex flex-col p-4 mt-12">
        <span className="text-3xl font-extrabold text-black">
            پرسش‌های پرتکرار
        </span>
      </div>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
            <div key={i} className="border-b border-[#EFE7D8] flex flex-col">
                <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex justify-between items-center gap-4 p-4 w-full text-right font-bold cursor-pointer"
                >
                    <span>{faq.question}</span>
                    <span className="text-[#B3352B] text-2xl">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                    <p className="px-4 pb-4 text-[#857F6B]">{faq.answer}</p>
                )}
            </div>
        )
      })}
      
    </div>
  )
}