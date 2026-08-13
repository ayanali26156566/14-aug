import { useEffect, useState } from "react";
import { CalendarDays, Clock3, Flag } from "lucide-react";
import { motion } from "framer-motion";
import { content } from "../data/content";

const Countdown = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-08-14T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  const labels = {
    en: ["Days", "Hours", "Minutes", "Seconds"],
    roman: ["Din", "Ghantay", "Minutes", "Seconds"],
    ur: ["دن", "گھنٹے", "منٹ", "سیکنڈ"],
  };

  const currentLabels = labels[language];

  const values = [
    timeLeft.days,
    timeLeft.hours,
    timeLeft.minutes,
    timeLeft.seconds,
  ];

  return (
    <section
      id="countdown"
      className="
        relative overflow-hidden
        bg-[#03150b]
        px-4 py-24
        sm:px-6 sm:py-32
      "
    >
      {/* Background */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(8,115,58,0.14),transparent_45%)]
        "
      />

      <div
        className="
          absolute left-1/2 top-1/2
          h-[400px] w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-emerald-400/[0.04]
        "
      />

      {/* Header */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-4 flex items-center
            justify-center gap-2
            text-[9px] font-bold
            tracking-[0.3em]
            text-emerald-300/60
          "
        >
          <Flag size={13} />

          14 AUGUST

          <Flag size={13} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            text-4xl font-black
            tracking-tight
            sm:text-6xl
            lg:text-7xl
          "
        >
          {language === "en"
            ? "A Day That Changed History"
            : language === "roman"
            ? "Ek Din Jis Ne Tareekh Badal Di"
            : "ایک دن جس نے تاریخ بدل دی"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mx-auto mt-5
            max-w-2xl
            text-sm leading-7
            text-white/40
          "
        >
          {language === "en"
            ? "A moment born from decades of determination, political struggle and the dream of a homeland."
            : language === "roman"
            ? "Ek aisa lamha jo dashkon ki mehnat, siyasi jadd-o-jehad aur ek watan ke khwab se paida hua."
            : "ایک ایسا لمحہ جو دہائیوں کی محنت، سیاسی جدوجہد اور ایک وطن کے خواب سے پیدا ہوا۔"}
        </motion.p>

        {/* Countdown */}

        <div
          className="
            mx-auto mt-12
            grid max-w-4xl
            grid-cols-2 gap-3
            sm:grid-cols-4 sm:gap-5
          "
        >
          {values.map((value, index) => (
            <motion.div
              key={currentLabels[index]}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                group relative
                overflow-hidden
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.025]
                p-5
                backdrop-blur-xl
                transition-all duration-300
                hover:border-emerald-400/20
                hover:bg-emerald-400/[0.04]
                sm:p-7
              "
            >
              <div
                className="
                  absolute inset-x-0 top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-400/40
                  to-transparent
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  text-4xl font-black
                  tabular-nums
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {String(value).padStart(2, "0")}
              </div>

              <div
                className="
                  mt-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-emerald-300/50
                "
              >
                {currentLabels[index]}
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="
            mt-10 flex
            items-center
            justify-center
            gap-2
            text-[9px]
            text-white/25
          "
        >
          <CalendarDays size={13} />

          14 August 1947 → 14 August 2026

          <Clock3 size={13} />
        </div>
      </div>
    </section>
  );
};

export default Countdown;