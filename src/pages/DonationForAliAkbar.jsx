import React, { useState } from 'react';
import { Heart, GraduationCap, MapPin, Target, Globe, Users, DollarSign, Star, BookOpen, Award, Phone, Mail, CreditCard, Building } from 'lucide-react';
import personalImage from "../Assets/images/kouchakzade.jpg";
const DonationPage = () => {
  const [language, setLanguage] = useState('en');
  const [currentDonated, setCurrentDonated] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  // Bilingual data structure
  const data = {
    en: {
      personal: {
        name: "Ali Akbar Kouchakzadeh",
        photo: personalImage,
        location: "Iran",
        age: 25,
        currentStatus: "Graduate MD",
        dream: "Pursuing Philosophy in a Top-ranked University",
        story: "I recognized myself as a person who wants to solve some theoretical problems that are generally regarded as hard ones and to make a breakthrough toward new conceptions of reality as much as I can. For this purpose, I require a strong ground in general knowledge of common debates, and I need to develop and strengthen some skills related to theoretical advancements."
      },
      
      universities: [
        {
          name: "University of Warwick",
          rank: "5th in UK",
          program: "Master's in Philosophy",
          state: "Coventry",
          country: "United Kingdom",
          duration: "1 year",
          startDate: "September 2026"
        },
        {
          name: "Central European University",
          rank: "34th globally",
          program: "Master's in Philosophy",
          state: "Vienna",
          country: "Austria",
          duration: "2 years",
          startDate: "September 2026"
        },
        {
          name: "University of Leeds",
          rank: "33rd globally",
          program: "Master's in Philosophy",
          state: "Leeds",
          country: "United Kingdom",
          duration: "1 year",
          startDate: "September 2026"
        },
        {
          name: "University of Glasgow",
          rank: "Top 100 globally",
          program: "Master's in Philosophy",
          state: "Glasgow",
          country: "United Kingdom",
          duration: "1 year",
          startDate: "September 2026"
        }
      ],
      
      financialGoal: {
        total: 46000,
        needed: 15000,
        personalSavings: 15000,
        scholarships: 16000,
        currency: "Euros",
        breakdown: [
          { item: "Tuition Fees", amount: 24000, description: "Average tuition fee needed" },
          { item: "Living Expenses", amount: 10000, description: "Minimum student living costs for 2 years (420 euros per month as a supplement to employment)" },
          { item: "Release Bond for Document", amount: 9000, description: "Academic resources" },
          { item: "Miscellaneous", amount: 3000, description: "Visa costs, flight tickets, tolls, tax, books, and academic partnerships." }
        ]
      },
      
      achievements: [
        "🏆 Top 0.25% in National University Entrance Exam",
        "📚 Author of more than 10 papers in peer-reviewed journals and presentations in international conferences",
        "🎁 Scholarship winner for oral presentations and tuition fee reduction",
        "👥 Co-founder of Brain and Philosophy of Mind Association",
      ],
      
      whyHelp: [
        "Special appreciation and declaration of donor names in my MA and PhD theses as essential supporters",
        "Further collaborations including educational, academic, and clinical ones are available",
        "Please contact me for further discussions",
        "There is a possibility for repayment"
      ],
      
      labels: {
        headerTitle: "Support Philosophy Education",
        donateNow: "Donate Now",
        heroTitle: "Help Me Pursue Advanced Philosophy Studies",
        progressTitle: "Fundraising Progress",
        progressSubtitle: "Together, we can advance philosophical knowledge",
        raised: "Raised",
        goal: "Goal",
        complete: "Complete",
        quickDonate: "Quick Donate",
        universities: "Target Universities",
        universitySubtitle: "I am an offer-holder at these prestigious institutions",
        financialBreakdown: "Financial Breakdown",
        achievements: "My Achievements",
        achievementsSubtitle: "Proof of dedication and academic excellence",
        whyHelp: "Why Your Support Matters",
        contact: "Get In Touch",
        contactSubtitle: "Have questions? Want to learn more about my journey?",
        bankingInfo: "Banking Information",
        cardNumber: "Card Number",
        iban: "IBAN",
        bankName: "Pasargad Bank",
        supportLinks: "Support Links",
        thankYou: "Thank You!",
        thankYouMessage: "Your generosity means the world to me. Every contribution brings me closer to my educational dreams.",
        donated: "Donated",
        personalSavings: "Personal Savings",
        scholarships: "Secured Scholarships",
        needed: "Needed Donation"
      }
    },
    
    fa: {
      personal: {
        name: "علی اکبر کوچک زاده",
        photo: personalImage,
        location: "ایران",
        age: 25,
        currentStatus: "پزشک فارغ التحصیل",
        dream: "دنبال کردن تحصیلات در فلسفه در یکی از ۴۰ دانشگاه برتر جهان",
        story: "اگر نگوییم همه، قطعاً بسیاری از مشکلات بشر متأثر از عدم دقت در کاربرد مفاهیم و شناخت صحیح از حقایق است. من این نکته را در حین تحصیل پزشکی یافتم. جایی که جان آدمی می‌تواند قربانی فهم نادرست از حقایق شود. گسترۀ خدمت پزشکی برایم ایده‌آل نبود. چرا بگذاریم همه چیز خراب شود و بعد به دنبال درست کردنش بیفتیم؟ چرا از همان ابتدا چیزها را «درست» نسازیم و نگه نداریم؟ من برای فهمیدن بیشتر باید فلسفه‌ورزی را از آدم درستش بیاموزم و این رویای من است: فهمیدن و کمک کردن درست و بجا. هر مفید بودنی عالی نیست. بجا مفید بودن بهتر است."
      },
      
      universities: [
        {
          name: "دانشگاه واریک",
          rank: "رتبه ۵ در انگلستان",
          program: "کارشناسی ارشد فلسفه",
          state: "کاونتری",
          country: "انگلستان",
          duration: "۱ سال",
          startDate: "سپتامبر ۲۰۲۶"
        },
        {
          name: "دانشگاه اروپای مرکزی",
          rank: "رتبه ۳۴ جهانی",
          program: "کارشناسی ارشد فلسفه",
          state: "وین",
          country: "اتریش",
          duration: "۲ سال",
          startDate: "سپتامبر ۲۰۲۶"
        },
        {
          name: "دانشگاه لیدز",
          rank: "رتبه ۳۳ جهانی",
          program: "کارشناسی ارشد فلسفه",
          state: "لیدز",
          country: "انگلستان",
          duration: "۱ سال",
          startDate: "سپتامبر ۲۰۲۶"
        },
        {
          name: "دانشگاه گلاسکو",
          rank: "۱۰۰ دانشگاه برتر جهان",
          program: "کارشناسی ارشد فلسفه",
          state: "گلاسکو",
          country: "انگلستان",
          duration: "۱ سال",
          startDate: "سپتامبر ۲۰۲۶"
        }
      ],
      
      financialGoal: {
        total: 46000,
        needed: 15000,
        personalSavings: 15000,
        scholarships: 16000,
        currency: "یورو",
        breakdown: [
          { item: "شهریه دانشگاه", amount: 24000, description: "میانگین شهریه کل دوره" },
          { item: "هزینه غذا و خوابگاه", amount: 10000, description: "حداقل هزینه زندگی دانشجویی برای 2 سال (ماهانه 420 یورو به صورت کمک هزینه کنار اشتغال)" },
          { item: "وثیقه‌ی آزادسازی مدرک", amount: 9000, description: "منابع آکادمیک" },
          { item: "متفرقه", amount: 3000, description: "هزینه‌های ویزا، بلیط رفت و برگشت و عوارض خروج و کتب و اشتراکات تحصیلی" }
        ]
      },
      
      achievements: [
        "🏆 رتبه ۵۰ کنکور سراسری ۹۶",
        "📚 نگارنده بیش از ۱۰ عدد مقاله و سخنرانی در کنفرانس‌های بین‌المللی",
        "🎁 برنده چندین جایزه کمک هزینه ارائه سخنرانی و بورسیه ملی و بین‌المللی",
        "👥 هم‌بنیان‌گذار انجمن مغز و فلسفه ذهن"
      ],
      
      whyHelp: [
        "شراکت حامی در تزهای ارشد و دکتری (نام حامی به عنوان منبع حمایت از آن تزها جهت ادای دین ذکر خواهد شد)",
        "مشاوره تحصیلی و همکاری‌های پژوهشی، علمی و درمانی آینده با حامی نیز قابل انجام است",
        "گسترۀ وسیعی از اقدامات برای قدردانی برای من قابل تصور است. لطفاً تماس بگیرید",
        "امکان بازپرداخت مدت‌دار نیز وجود دارد"
      ],
      
      labels: {
        headerTitle: "حمایت از تحصیلات فلسفه",
        donateNow: "حمایت کنید",
        heroTitle: "در تحصیلات پیشرفته فلسفه به من کمک کنید",
        progressTitle: "پیشرفت جمع‌آوری کمک",
        progressSubtitle: "با هم می‌توانیم دانش فلسفی را ارتقا دهیم",
        raised: "جمع‌آوری شده",
        goal: "هدف",
        complete: "تکمیل",
        quickDonate: "حمایت سریع",
        universities: "دانشگاه‌های هدف",
        universitySubtitle: "من پذیرش (Offer-holder) از این دانشگاه‌های معتبر هستم",
        financialBreakdown: "تفکیک مالی",
        achievements: "دستاورد‌های من",
        achievementsSubtitle: "اثبات تعهد و تعالی آکادمیک",
        whyHelp: "چرا حمایت شما اهمیت دارد",
        contact: "تماس با من",
        contactSubtitle: "سوالی دارید؟ می‌خواهید بیشتر در مورد سفر من بدانید؟",
        bankingInfo: "اطلاعات بانکی",
        cardNumber: "شماره کارت",
        iban: "شماره شبا",
        bankName: "بانک پاسارگاد",
        supportLinks: "لینک‌های حمایت",
        thankYou: "متشکرم!",
        thankYouMessage: "سخاوت شما برای من بسیار ارزشمند است. هر کمکی مرا به رویاهای تحصیلی‌ام نزدیک‌تر می‌کند.",
        donated: "حمایت شد",
        personalSavings: "پس‌انداز شخصی",
        scholarships: "بورسیه تأمین شده",
        needed: "حمایت مورد نیاز"
      }
    }
  };

  const currentData = data[language];
  const progressPercentage = (currentDonated / currentData.financialGoal.needed) * 100;

  const handleDonate = (amount) => {
    setDonationAmount(amount);
    // Scroll to donation section (contact/banking info)
    const donationSection = document.getElementById('donation-section');
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <div className={`donation-page-main-container min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">{currentData.labels.headerTitle}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors duration-200"
              >
                {language === 'en' ? 'فارسی' : 'English'}
              </button>
              <button 
                onClick={() => handleDonate(50)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {currentData.labels.donateNow}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={language === 'fa' ? 'text-right' : 'text-left'}>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                {currentData.labels.heroTitle}
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                {currentData.personal.story}
              </p>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{currentData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>{currentData.personal.currentStatus}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={currentData.personal.photo} 
                  alt={currentData.personal.name}
                  className="w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{currentData.labels.progressTitle}</h3>
            <p className="text-xl text-gray-600">{currentData.labels.progressSubtitle}</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  €{currentData.financialGoal.personalSavings.toLocaleString()}
                </div>
                <div className="text-gray-600">{currentData.labels.personalSavings}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  €{currentData.financialGoal.scholarships.toLocaleString()}
                </div>
                <div className="text-gray-600">{currentData.labels.scholarships}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  €{currentDonated.toLocaleString()}
                </div>
                <div className="text-gray-600">{currentData.labels.raised}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  €{currentData.financialGoal.needed.toLocaleString()}
                </div>
                <div className="text-gray-600">{currentData.labels.needed}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>€{currentDonated.toLocaleString()}</span>
                <span>€{currentData.financialGoal.needed.toLocaleString()}</span>
              </div>
              <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 relative"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                </div>
              </div>
              <div className="text-center mt-2 text-lg font-semibold text-gray-700">
                {Math.round(progressPercentage)}% {currentData.labels.complete}
              </div>
            </div>

            {/* Quick Donate Buttons */}
            <div className="text-center">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">{currentData.labels.quickDonate}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[50, 100, 250, 500, 1000, 2500].map(amount => (
                  <button
                    key={amount}
                    onClick={() => handleDonate(amount)}
                    className="bg-white border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-blue-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    €{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{currentData.labels.universities}</h3>
            <p className="text-xl text-gray-600">{currentData.labels.universitySubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentData.universities.map((university, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">
                    {university.name}
                  </h4>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {university.rank}
                  </div>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    <span>{university.program}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span>{university.state}, {university.country}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span>{university.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Financial Breakdown */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
            <h5 className="text-3xl font-semibold mb-8 text-gray-800 text-center">{currentData.labels.financialBreakdown}</h5>
            <div className="grid md:grid-cols-2 gap-6">
              {currentData.financialGoal.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-800">{item.item}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <div className="font-bold text-blue-600">
                    €{item.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{currentData.labels.achievements}</h3>
            <p className="text-xl text-gray-600">{currentData.labels.achievementsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {currentData.achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-lg font-semibold text-gray-800">{achievement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Help */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{currentData.labels.whyHelp}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentData.whyHelp.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div className="text-lg text-gray-700">{reason}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Banking Info */}
      <footer id="donation-section" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{currentData.labels.contact}</h3>
            <p className="text-xl text-gray-300">{currentData.labels.contactSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Support Links - More Important */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-semibold mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3" />
                {currentData.labels.supportLinks}
              </h4>
              <p className="text-blue-100 mb-6 text-lg">
                {language === 'fa' ? 'بهترین راه برای حمایت از طریق لینک‌های زیر است:' : 'The best way to support is through the links below:'}
              </p>
              <div className="space-y-4">
                <a 
                  href="https://daramet.com/edu1404" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-lg transition-colors duration-200 font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📱 Daramet Campaign
                </a>
                <a 
                  href="https://www.gofundme.com/f/supportathinker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 px-6 py-4 rounded-lg transition-colors duration-200 font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🌍 GoFundMe Campaign
                </a>
              </div>
            </div>

            {/* Banking Information */}
            <div className="bg-gray-700 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3" />
                {currentData.labels.bankingInfo}
              </h4>
              <p className="text-gray-300 mb-6">
                {language === 'fa' ? 'برای حمایت‌های خرد یا ناشناس:' : 'For small or anonymous donations:'}
              </p>
              <div className="space-y-4">
                <div className="bg-gray-600 p-4 rounded-lg">
                  <div className="text-gray-300 mb-1">{currentData.labels.cardNumber}</div>
                  <div className="font-mono text-lg text-yellow-400">5022291519938128</div>
                </div>
                <div className="bg-gray-600 p-4 rounded-lg">
                  <div className="text-gray-300 mb-1">{currentData.labels.iban}</div>
                  <div className="font-mono text-lg text-yellow-400">IR850570077700002339594001</div>
                </div>
                <div className="bg-gray-600 p-4 rounded-lg">
                  <div className="text-gray-300 mb-1">{currentData.labels.bankName}</div>
                  <div className="text-lg text-yellow-400">{language === 'fa' ? 'بانک پاسارگاد - به نام علی اکبر کوچک زاده' : 'Pasargad Bank - Ali Akbar Kouchakzadeh'}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 {currentData.personal.name}. {language === 'fa' ? 'هر حمایتی مرا به رویاهایم نزدیک‌تر می‌کند.' : 'Every donation brings me closer to my dreams.'}
            </p>
          </div>
        </div>
      </footer>

      {/* Thank You Modal - Removed since we're redirecting to donation section */}
    </div>
  );
};

export default DonationPage;