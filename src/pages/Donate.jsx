import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";

const donateLinks = [
  {
    labelFa: "حمایت ریالی",
    labelEn: "Donate In Iran",
    url: "https://daramet.com/edu1404",
    icon: "💸",
  },
  {
    labelFa: "حمایت دلاری",
    labelEn: "Donate",
    url: "https://www.gofundme.com/f/supportathinker",
    icon: "💲",
  }
];

export default function Donate() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xBAA025,
          backgroundColor:  0x140c2e,
          points: 12.0,
          maxDistance: window.innerWidth > 600 ? 40.0 : 28.0,
          spacing: 30.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div  className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl animate-fade-in z-10 relative">
        {/* Persian Section */}
        <div style={{fontFamily:"IranYekan-Bold",direction:"rtl"}} className="flex-1 m-4 mb-8 sm:mb-0 bg-yellow-50 bg-opacity-90 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-700 mb-2 drop-shadow-lg animate-bounce">حمایت مالی از انجمن مغز و فلسفه ذهن</h1>
          <p className="text-lg text-gray-700 mb-6 animate-fade-in-slow">اگر از فعالیت‌های ما لذت می‌برید و دوست دارید در مسیر رشد و توسعه انجمن سهیم باشید، می‌توانید از طریق روش‌های زیر از ما حمایت کنید. هر مبلغی، هرچند کوچک، برای ما ارزشمند است! 💛</p>
          <div className="flex flex-col gap-4 items-center">
            {donateLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200 hover:from-yellow-500 hover:to-yellow-700 animate-pop"
              >
                <span className="text-xl">{link.icon}</span>
                {link.labelFa}
              </a>
            ))}
          </div>
          <div className="mt-8 text-gray-600 text-sm animate-fade-in-slow">
            <p>با حمایت شما، می‌توانیم پروژه‌های بیشتری اجرا کنیم و محتوای بهتری ارائه دهیم. سپاس از همراهی شما! 🙏</p>
          </div>
        </div>
        {/* English Section */}
        <div className="flex-1 m-4 bg-yellow-100 bg-opacity-90 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-700 mb-2 drop-shadow-lg animate-bounce">Support the Brain and Philosophy of Mind Association</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 animate-fade-in-slow">If you enjoy our activities and want to help us grow, you can support us through the following methods. Every contribution, no matter how small, is valuable to us! 💛</p>
          <div className="flex flex-col gap-4 items-center">
            {donateLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200 hover:from-yellow-500 hover:to-yellow-700 animate-pop"
              >
                <span className="text-xl">{link.icon}</span>
                {link.labelEn}
              </a>
            ))}
          </div>
          <div className="mt-8 text-gray-600 text-sm animate-fade-in-slow">
            <p>With your support, we can launch more projects and provide better content. Thank you for being with us! 🙏</p>
          </div>
        </div>
      </div>
      {/* Optional: overlay for better readability on small screens */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-100/60 via-yellow-300/40 to-yellow-500/30 z-0" />
    </div>
  );
}
