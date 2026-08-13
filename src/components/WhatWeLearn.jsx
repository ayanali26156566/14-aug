import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  ShieldCheck,
  Heart,
  Target,
  Landmark,
  ArrowRight,
  Lightbulb,
  Flag,
} from "lucide-react";

/* =========================================================
   WHAT WE LEARN
========================================================= */

const lessons = [
  {
    id: 1,
    icon: Users,

    title: {
      en: "Unity",
      roman: "Ittihad",
      ur: "اتحاد",
    },

    description: {
      en: "The Pakistan Movement showed the importance of people coming together around a shared political purpose.",
      roman:
        "Tehreek-e-Pakistan ne dikhaya ke mushtarka siyasi maqsad ke liye logon ka aik saath kharay hona kitna aham hai.",
      ur: "تحریک پاکستان نے دکھایا کہ مشترکہ سیاسی مقصد کے لیے لوگوں کا ایک ساتھ کھڑا ہونا کتنا اہم ہے۔",
    },
  },

  {
    id: 2,
    icon: BookOpen,

    title: {
      en: "Education",
      roman: "Taleem",
      ur: "تعلیم",
    },

    description: {
      en: "Education and intellectual development played an important role in shaping political awareness and preparing future generations.",
      roman:
        "Taleem aur fikri taraqqi ne siyasi sha'oor paida karne aur mustaqbil ki nasal ko tayar karne mein aham kirdar ada kiya.",
      ur: "تعلیم اور فکری ترقی نے سیاسی شعور پیدا کرنے اور مستقبل کی نسل کو تیار کرنے میں اہم کردار ادا کیا۔",
    },
  },

  {
    id: 3,
    icon: Target,

    title: {
      en: "Determination",
      roman: "Azm",
      ur: "عزم",
    },

    description: {
      en: "Major historical changes rarely happen overnight. Persistence over many years can turn an idea into a political reality.",
      roman:
        "Bari tareekhi tabdeeliyan aik raat mein nahi hotin. Saalon tak istiqamat kisi khayal ko siyasi haqeeqat mein badal sakti hai.",
      ur: "بڑی تاریخی تبدیلیاں ایک رات میں نہیں ہوتیں۔ سالوں کی ثابت قدمی کسی خیال کو سیاسی حقیقت میں بدل سکتی ہے۔",
    },
  },

  {
    id: 4,
    icon: ShieldCheck,

    title: {
      en: "Leadership",
      roman: "Qiyadat",
      ur: "قیادت",
    },

    description: {
      en: "Effective leadership requires clear principles, political judgment, discipline and the ability to work toward long-term goals.",
      roman:
        "Moassar qiyadat ke liye wazeh usool, siyasi basirat, discipline aur door ras maqsadon ke liye kaam karne ki salahiyat zaroori hai.",
      ur: "مؤثر قیادت کے لیے واضح اصول، سیاسی بصیرت، نظم و ضبط اور دور رس مقاصد کے لیے کام کرنے کی صلاحیت ضروری ہے۔",
    },
  },

  {
    id: 5,
    icon: Heart,

    title: {
      en: "Respect for Sacrifice",
      roman: "Qurbaniyon Ki Qadar",
      ur: "قربانیوں کی قدر",
    },

    description: {
      en: "The story of independence reminds us that political change affected real people and involved displacement, uncertainty and enormous personal sacrifice.",
      roman:
        "Azadi ki kahani yaad dilati hai ke siyasi tabdeeli ne haqeeqi logon ki zindagiyon ko mutasir kiya aur hijrat, be-yaqeeni aur bohat si zaati qurbaniyan saamne aayin.",
      ur: "آزادی کی کہانی یاد دلاتی ہے کہ سیاسی تبدیلی نے حقیقی لوگوں کی زندگیوں کو متاثر کیا اور ہجرت، بے یقینی اور بہت سی ذاتی قربانیاں سامنے آئیں۔",
    },
  },

  {
    id: 6,
    icon: Landmark,

    title: {
      en: "Responsibility",
      roman: "Zimmedari",
      ur: "ذمہ داری",
    },

    description: {
      en: "Independence was a beginning, not an ending. Building a better country requires responsible citizens and strong institutions.",
      roman:
        "Azadi aik khatma nahi balkay aik nayi shuruaat thi. Behtar mulk ki tameer ke liye zimmedar shehri aur mazboot idare zaroori hain.",
      ur: "آزادی ایک اختتام نہیں بلکہ ایک نئی شروعات تھی۔ بہتر ملک کی تعمیر کے لیے ذمہ دار شہری اور مضبوط ادارے ضروری ہیں۔",
    },
  },
];

/* =========================================================
   LANGUAGE HELPER
========================================================= */

const getText = (value, language) => {
  if (!value) return "";

  if (language === "ur") return value.ur;
  if (language === "roman") return value.roman;

  return value.en;
};

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const WhatWeLearn = ({ language = "en" }) => {
  const isUrdu = language === "ur";

  return (
    <section
      id="what-we-learn"
      className="
        relative
        overflow-hidden
        bg-[#16764a]
        px-4
        py-24
        sm:px-6
        sm:py-32
        lg:py-40
    "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Green Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[130px]"
        />

        {/* Right Green Glow */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[140px]"
        />

        {/* Center Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,197,94,0.09),transparent_55%)]" />

        {/* Dark Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#020b08] via-[#03120d]/90 to-[#020806]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            <Lightbulb className="h-4 w-4" />

            <span>
              {getText(
                {
                  en: "Lessons From Our History",
                  roman: "Hamari Tareekh Se Sabak",
                  ur: "ہماری تاریخ سے سبق",
                },
                language
              )}
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {getText(
              {
                en: "What We",
                roman: "Hum Kya",
                ur: "ہم کیا",
              },
              language
            )}{" "}
            <span className="text-green-400">
              {getText(
                {
                  en: "Learn",
                  roman: "Seekhte Hain",
                  ur: "سیکھتے ہیں",
                },
                language
              )}
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {getText(
              {
                en: "The story of Pakistan is not only about the past. It also gives us lessons about the kind of future we can build.",
                roman:
                  "Pakistan ki kahani sirf maazi ke bare mein nahi. Yeh humein yeh bhi sikhati hai ke hum kis qisam ka mustaqbil tameer kar sakte hain.",
                ur: "پاکستان کی کہانی صرف ماضی کے بارے میں نہیں۔ یہ ہمیں یہ بھی سکھاتی ہے کہ ہم کس قسم کا مستقبل تعمیر کر سکتے ہیں۔",
              },
              language
            )}
          </p>
        </motion.div>

        {/* =====================================================
            LESSON CARDS
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;

            return (
              <motion.article
                key={lesson.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-green-500/30 hover:bg-green-500/[0.04] sm:p-7"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}

                <div className="absolute right-5 top-5 text-5xl font-black text-white/[0.025]">
                  0{index + 1}
                </div>

                {/* Icon */}

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/10 bg-green-500/10 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/15">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}

                <h3 className="relative text-xl font-bold text-white sm:text-2xl">
                  {getText(lesson.title, language)}
                </h3>

                {/* Description */}

                <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {getText(lesson.description, language)}
                </p>

                {/* Bottom Line */}

                <div className="relative mt-6 flex items-center gap-2">
                  <div className="h-px w-8 bg-green-500/50 transition-all duration-300 group-hover:w-12" />

                  <span className="text-xs font-semibold uppercase tracking-widest text-green-500/70">
                    {getText(
                      {
                        en: "Lesson",
                        roman: "Sabaq",
                        ur: "سبق",
                      },
                      language
                    )}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            RESPONSIBILITY MESSAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mt-20 max-w-4xl sm:mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/[0.04] to-transparent p-7 text-center shadow-2xl shadow-green-500/5 sm:p-10 lg:p-12">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative">
              {/* Icon */}

              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400">
                <Flag className="h-6 w-6" />
              </div>

              {/* Heading */}

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {getText(
                  {
                    en: "Freedom Was the Beginning",
                    roman: "Azadi Sirf Shuruaat Thi",
                    ur: "آزادی صرف شروعات تھی",
                  },
                  language
                )}
              </h3>

              {/* Message */}

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                {getText(
                  {
                    en: "Independence gave Pakistan the opportunity to shape its own future. The responsibility of building a better society belongs to every generation.",
                    roman:
                      "Azadi ne Pakistan ko apna mustaqbil khud tarashne ka mauqa diya. Behtar muashray ki tameer ki zimmedari har nasal par hai.",
                    ur: "آزادی نے پاکستان کو اپنا مستقبل خود تراشنے کا موقع دیا۔ بہتر معاشرے کی تعمیر کی ذمہ داری ہر نسل پر ہے۔",
                  },
                  language
                )}
              </p>

              {/* Responsibility Points */}

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  {
                    en: "Education",
                    roman: "Taleem",
                    ur: "تعلیم",
                  },
                  {
                    en: "Honesty",
                    roman: "Imaandari",
                    ur: "ایمانداری",
                  },
                  {
                    en: "Discipline",
                    roman: "Pabandi",
                    ur: "پابندی",
                  },
                  {
                    en: "Unity",
                    roman: "Ittihad",
                    ur: "اتحاد",
                  },
                  {
                    en: "Service",
                    roman: "Khidmat",
                    ur: "خدمت",
                  },
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-green-500/30 hover:text-green-400 sm:text-sm"
                  >
                    {getText(item, language)}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL TRANSITION
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="mx-auto mb-7 h-px w-16 bg-green-500/50" />

          <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            {getText(
              {
                en: "Freedom was achieved. Now comes the responsibility of preserving and improving it.",
                roman:
                  "Azadi hasil ho gayi. Ab isay barqarar rakhne aur behtar banane ki zimmedari hamari hai.",
                ur: "آزادی حاصل ہو گئی۔ اب اسے برقرار رکھنے اور بہتر بنانے کی ذمہ داری ہماری ہے۔",
              },
              language
            )}
          </p>

          <div className="mt-6 flex justify-center">
            <ArrowRight
              className={`h-5 w-5 text-green-400 ${isUrdu ? "rotate-180" : ""
                }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeLearn;