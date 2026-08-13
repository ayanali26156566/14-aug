import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    Play,
    X,
    Volume2,
} from "lucide-react";
import { useState } from "react";

const Hero = ({ language }) => {
    const [videoOpen, setVideoOpen] = useState(false);

    const text = {
        en: {
            date: "14 AUGUST 1947",
            eyebrow: "A NATION WAS BORN",
            title: "A Story of Freedom, Sacrifice & Nationhood.",
            description:
                "Discover the people, struggles, decisions and moments that shaped the journey toward Pakistan.",
            explore: "Explore Our History",
            watch: "Watch National Anthem",
            scroll: "SCROLL TO EXPLORE",
            videoTitle: "Pakistan National Anthem",
            videoText:
                "Experience the national anthem of Pakistan.",
            nowPlaying: "NOW PLAYING",
            clickToWatch: "Click to watch",
        },

        roman: {
            date: "14 AUGUST 1947",
            eyebrow: "EK QAUM KA JANAM",
            title:
                "Azadi, Qurbani Aur Qaum Ki Ek Kahani.",
            description:
                "Un logon, koshishon, faislon aur waqiat ko explore karein jinhon ne Pakistan ke safar ko shakal di.",
            explore: "Tareekh Explore Karein",
            watch: "Qaumi Tarana Dekhein",
            scroll: "NEECHE EXPLORE KAREIN",
            videoTitle: "Pakistan Ka Qaumi Tarana",
            videoText:
                "Pakistan ke Qaumi Tarane ko dekhein.",
            nowPlaying: "AB CHAL RAHA HAI",
            clickToWatch: "Dekhne ke liye click karein",
        },

        ur: {
            date: "۱۴ اگست ۱۹۴۷",
            eyebrow: "ایک قوم کا جنم",
            title:
                "آزادی، قربانی اور قوم بننے کی ایک داستان۔",
            description:
                "ان لوگوں، کوششوں، فیصلوں اور واقعات کو دریافت کریں جنہوں نے پاکستان کے سفر کو شکل دی۔",
            explore: "تاریخ دریافت کریں",
            watch: "قومی ترانہ دیکھیں",
            scroll: "مزید دیکھنے کے لیے نیچے جائیں",
            videoTitle: "پاکستان کا قومی ترانہ",
            videoText:
                "پاکستان کے قومی ترانے کا مشاہدہ کریں۔",
            nowPlaying: "اب چل رہا ہے",
            clickToWatch: "دیکھنے کے لیے کلک کریں",
        },
    };

    const t = text[language] || text.en;

    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#02170c]
            "
        >
            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.16),transparent_32%)]
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_20%_80%,rgba(21,128,61,0.12),transparent_30%)]
                "
            />

            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.035]
                    [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                    [background-size:70px_70px]
                "
            />

            {/* Animated glow */}

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-40
                    top-1/4
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-emerald-500/10
                    blur-[120px]
                "
            />

            {/* =========================================
                HERO CONTAINER
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-screen
                    max-w-7xl
                    items-center
                    px-5
                    pb-20
                    pt-28
                    sm:px-8
                    lg:px-12
                "
            >
                <div
                    className="
                        grid
                        w-full
                        items-center
                        gap-14
                        lg:grid-cols-[1.05fr_.95fr]
                        lg:gap-20
                    "
                >
                    {/* =========================================
                        LEFT SIDE
                    ========================================= */}

                    <div>
                        {/* Eyebrow */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-emerald-300/15
                                bg-emerald-300/[0.05]
                                px-4
                                py-2
                                text-[9px]
                                font-bold
                                tracking-[0.25em]
                                text-emerald-200/70
                            "
                        >
                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    animate-pulse
                                    rounded-full
                                    bg-emerald-300
                                "
                            />

                            {t.eyebrow}
                        </motion.div>

                        {/* Date */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.15,
                                duration: 0.7,
                            }}
                            className="
                                mb-5
                                text-sm
                                font-semibold
                                tracking-[0.18em]
                                text-emerald-300/60
                                sm:text-base
                            "
                        >
                            {t.date}
                        </motion.div>

                        {/* Main heading */}

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.8,
                            }}
                            className="
                                max-w-4xl
                                text-5xl
                                font-black
                                leading-[0.98]
                                tracking-[-0.04em]
                                text-white
                                sm:text-6xl
                                md:text-7xl
                                lg:text-7xl
                                xl:text-8xl
                            "
                        >
                            {t.title}
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.7,
                            }}
                            className="
                                mt-7
                                max-w-xl
                                text-sm
                                leading-7
                                text-white/45
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            {t.description}
                        </motion.p>

                        {/* Buttons */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.55,
                            }}
                            className="
                                mt-9
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                            "
                        >
                            {/* Explore */}

                            <a
                                href="#timeline"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-emerald-400
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-[#02170c]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-emerald-300
                                    hover:shadow-[0_15px_40px_rgba(52,211,153,.2)]
                                "
                            >
                                {t.explore}

                                <ArrowRight
                                    size={17}
                                    className="
                                        transition-transform
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>

                            {/* Watch button */}

                            <button
                                type="button"
                                onClick={() => setVideoOpen(true)}
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-emerald-300/30
                                    hover:bg-white/[0.07]
                                "
                            >
                                <span
                                    className="
                                        grid
                                        h-7
                                        w-7
                                        place-items-center
                                        rounded-full
                                        bg-emerald-400
                                        text-[#02170c]
                                    "
                                >
                                    <Play
                                        size={12}
                                        fill="currentColor"
                                    />
                                </span>

                                {t.watch}
                            </button>
                        </motion.div>
                    </div>

                    {/* =========================================
                        RIGHT SIDE VIDEO
                    ========================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.35,
                            duration: 0.9,
                        }}
                        className="relative"
                    >
                        {/* Decorative rotating ring */}

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="
                                absolute
                                -inset-5
                                rounded-[2rem]
                                border
                                border-dashed
                                border-emerald-300/[0.08]
                            "
                        />

                        {/* Main media container */}

                        <div
                            className="
                                relative
                                aspect-[4/5]
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-white/[0.1]
                                bg-black
                                shadow-2xl
                                backdrop-blur-xl
                                sm:aspect-video
                            "
                        >
                            {/* =====================================
                                THUMBNAIL
                            ===================================== */}

                            <AnimatePresence mode="wait">
                                {!videoOpen ? (
                                    <motion.button
                                        key="thumbnail"
                                        type="button"
                                        onClick={() =>
                                            setVideoOpen(true)
                                        }
                                        initial={{
                                            opacity: 0,
                                            scale: 1.03,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.97,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                        }}
                                        className="
                                            group
                                            absolute
                                            inset-0
                                            h-full
                                            w-full
                                            overflow-hidden
                                        "
                                    >
                                        {/* Actual thumbnail */}

                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIRE9Xyxtsp8PgST9Rz3fVzmpIg6U-pIhRmTM_iPM6g&s=10"
                                            alt="Pakistan National Anthem"
                                            className="
                                                absolute
                                                inset-0
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-105
                                            "
                                        />

                                        {/* Dark overlay */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-black/40
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/25
                                            "
                                        />

                                        {/* Green glow */}

                                        <div
                                            className="
                                                absolute
                                                left-1/2
                                                top-1/2
                                                h-40
                                                w-40
                                                -translate-x-1/2
                                                -translate-y-1/2
                                                rounded-full
                                                bg-emerald-400/10
                                                blur-3xl
                                                transition-all
                                                duration-500
                                                group-hover:bg-emerald-400/20
                                            "
                                        />

                                        {/* Play */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.1,
                                                }}
                                                whileTap={{
                                                    scale: 0.94,
                                                }}
                                                className="
                                                    relative
                                                    grid
                                                    h-20
                                                    w-20
                                                    place-items-center
                                                    rounded-full
                                                    bg-emerald-400
                                                    text-[#02170c]
                                                    shadow-[0_0_60px_rgba(52,211,153,0.45)]
                                                    sm:h-24
                                                    sm:w-24
                                                "
                                            >
                                                {/* Pulse */}

                                                <motion.span
                                                    animate={{
                                                        scale: [
                                                            1,
                                                            1.4,
                                                            1,
                                                        ],
                                                        opacity: [
                                                            0.5,
                                                            0,
                                                            0.5,
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                    }}
                                                    className="
                                                        absolute
                                                        inset-0
                                                        rounded-full
                                                        border
                                                        border-emerald-300
                                                    "
                                                />

                                                <Play
                                                    size={28}
                                                    fill="currentColor"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Bottom information */}

                                        <div
                                            className="
                                                absolute
                                                bottom-0
                                                left-0
                                                right-0
                                                bg-gradient-to-t
                                                from-black
                                                via-black/70
                                                to-transparent
                                                p-5
                                                text-left
                                                sm:p-7
                                            "
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-end
                                                    justify-between
                                                    gap-4
                                                "
                                            >
                                                <div>
                                                    <p
                                                        className="
                                                            text-[9px]
                                                            font-bold
                                                            tracking-[0.3em]
                                                            text-emerald-300
                                                        "
                                                    >
                                                        NATIONAL ANTHEM
                                                    </p>

                                                    <h3
                                                        className="
                                                            mt-1
                                                            text-lg
                                                            font-bold
                                                            text-white
                                                            sm:text-2xl
                                                        "
                                                    >
                                                        {t.videoTitle}
                                                    </h3>

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            text-white/50
                                                        "
                                                    >
                                                        {t.clickToWatch}
                                                    </p>
                                                </div>

                                                <Volume2
                                                    size={18}
                                                    className="
                                                        shrink-0
                                                        text-white/40
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </motion.button>
                                ) : (
                                    /* =================================
                                       VIDEO
                                    ================================= */

                                    <motion.div
                                        key="video"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.97,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.97,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                        }}
                                        className="
                                            absolute
                                            inset-0
                                            bg-black
                                        "
                                    >
                                        <iframe
                                            className="
                                                absolute
                                                inset-0
                                                h-full
                                                w-full
                                            "
                                            src="https://www.youtube.com/embed/igozswk9nrs?autoplay=1&rel=0"
                                            title="Pakistan National Anthem"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media; picture-in-picture"
                                            allowFullScreen
                                        />

                                        {/* Close button */}

                                        <motion.button
                                            type="button"
                                            onClick={() =>
                                                setVideoOpen(false)
                                            }
                                            whileHover={{
                                                scale: 1.08,
                                            }}
                                            whileTap={{
                                                scale: 0.94,
                                            }}
                                            className="
                                                absolute
                                                right-3
                                                top-3
                                                z-20
                                                grid
                                                h-10
                                                w-10
                                                place-items-center
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-black/70
                                                text-white
                                                backdrop-blur-xl
                                                transition
                                                hover:bg-emerald-400
                                                hover:text-[#02170c]
                                            "
                                            aria-label="Close video"
                                        >
                                            <X size={18} />
                                        </motion.button>

                                        {/* Now playing */}

                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                bottom-4
                                                left-4
                                                z-10
                                                flex
                                                items-center
                                                gap-2
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-black/60
                                                px-3
                                                py-2
                                                text-[9px]
                                                font-bold
                                                tracking-[0.2em]
                                                text-white/70
                                                backdrop-blur-xl
                                            "
                                        >
                                            <span
                                                className="
                                                    h-1.5
                                                    w-1.5
                                                    animate-pulse
                                                    rounded-full
                                                    bg-emerald-400
                                                "
                                            />

                                            {t.nowPlaying}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* =========================================
                SCROLL INDICATOR
            ========================================= */}

            <motion.a
                href="#countdown"
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    bottom-7
                    left-1/2
                    z-20
                    hidden
                    -translate-x-1/2
                    flex-col
                    items-center
                    gap-2
                    text-[8px]
                    font-bold
                    tracking-[0.25em]
                    text-white/25
                    sm:flex
                "
            >
                <span>{t.scroll}</span>

                <ArrowDown size={14} />
            </motion.a>
        </section>
    );
};

export default Hero;