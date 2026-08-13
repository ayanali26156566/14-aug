import { motion } from "framer-motion";
import { ArrowDown, CalendarDays } from "lucide-react";
import timeline from "../data/timeline.js";

const Timeline = ({ language }) => {
    return (
        <section
            id="timeline"
            className="
        relative overflow-hidden
        bg-[#052d18]
        px-4 py-24
        sm:px-6 sm:py-32
      "
        >
            {/* Background */}

            <div
                className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.08),transparent_40%)]
        "
            />

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="
              mb-4 flex items-center
              justify-center gap-2
              text-[9px] font-bold
              tracking-[0.3em]
              text-emerald-300/60
            "
                    >
                        <CalendarDays size={13} />

                        OUR JOURNEY
                    </motion.div>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="
              text-4xl font-black
              tracking-tight
              sm:text-6xl
            "
                    >
                        {language === "en"
                            ? "From an Idea to a Nation"
                            : language === "roman"
                                ? "Ek Khayal Se Ek Qaum Tak"
                                : "ایک خیال سے ایک قوم تک"}
                    </motion.h2>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                        {language === "en"
                            ? "The journey was neither simple nor short. These moments shaped the political path toward independence."
                            : language === "roman"
                                ? "Ye safar na asaan tha aur na chhota. In waqiat ne azadi ki siyasi rah ko shakal di."
                                : "یہ سفر نہ آسان تھا اور نہ مختصر۔ ان واقعات نے آزادی کی سیاسی راہ کو شکل دی۔"}
                    </p>
                </div>

                {/* Timeline */}

                <div className="relative mt-20">

                    {/* Center Line */}

                    <div
                        className="
              absolute bottom-0 left-4
              top-0 w-px
              bg-gradient-to-b
              from-transparent
              via-emerald-400/30
              to-transparent
              sm:left-1/2
              sm:-translate-x-1/2
            "
                    />

                    <div className="space-y-12 sm:space-y-20">

                        {timeline.map((item, index) => {
                            const isRight = index % 2 !== 0;

                            return (
                                <motion.div
                                    key={item.year}
                                    initial={{
                                        opacity: 0,
                                        x: isRight ? 40 : -40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.65,
                                    }}
                                    className="
                    relative grid
                    grid-cols-[32px_1fr]
                    gap-5
                    sm:grid-cols-2
                    sm:gap-16
                  "
                                >
                                    {/* Desktop LEFT */}

                                    <div
                                        className={`
                      hidden sm:block
                      ${isRight
                                                ? "order-1 text-right"
                                                : "order-1"
                                            }
                    `}
                                    >
                                        {!isRight && (
                                            <TimelineCard
                                                item={item}
                                                language={language}
                                                align="right"
                                            />
                                        )}
                                    </div>

                                    {/* Center Point */}

                                    <div
                                        className="
                      relative z-20
                      flex justify-center
                    "
                                    >
                                        <div
                                            className="
                        mt-6 h-3.5 w-3.5
                        rounded-full
                        border-2
                        border-emerald-300
                        bg-[#052d18]
                        shadow-[0_0_0_5px_rgba(16,185,129,0.08),0_0_25px_rgba(16,185,129,0.35)]
                        sm:absolute
                        sm:left-1/2
                        sm:mt-6
                        sm:-translate-x-1/2
                      "
                                        />
                                    </div>

                                    {/* Desktop RIGHT */}

                                    <div
                                        className={`
                      hidden sm:block
                      ${isRight
                                                ? "order-2"
                                                : "order-2"
                                            }
                    `}
                                    >
                                        {isRight && (
                                            <TimelineCard
                                                item={item}
                                                language={language}
                                                align="left"
                                            />
                                        )}
                                    </div>

                                    {/* MOBILE */}

                                    <div className="sm:hidden">
                                        <TimelineCard
                                            item={item}
                                            language={language}
                                            align="left"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom */}

                    <div className="mt-14 flex justify-center sm:mt-20">
                        <motion.div
                            animate={{
                                y: [0, 6, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="
                grid h-10 w-10
                place-items-center
                rounded-full
                border border-emerald-300/20
                bg-emerald-400/5
                text-emerald-300/60
              "
                        >
                            <ArrowDown size={16} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineCard = ({
    item,
    language,
    align,
}) => {
    return (
        <div
            className={`
        group rounded-2xl
        border border-white/[0.07]
        bg-black/[0.12]
        p-5
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-emerald-300/20
        hover:bg-white/[0.035]
        sm:p-6
        ${align === "right"
                    ? "sm:text-right"
                    : ""
                }
      `}
        >
            <span
                className="
          inline-block
          text-3xl font-black
          text-emerald-300/70
          sm:text-4xl
        "
            >
                {item.year}
            </span>

            <h3
                className="
          mt-3
          text-lg font-bold
          text-white
          sm:text-xl
        "
            >
                {item.title[language]}
            </h3>

            <p
                className="
          mt-3
          text-xs leading-6
          text-white/40
          sm:text-sm
          sm:leading-7
        "
            >
                {item.description[language]}
            </p>
        </div>
    );
};

export default Timeline;