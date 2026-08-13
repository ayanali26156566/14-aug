import { AnimatePresence, motion } from "framer-motion";

import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    ChevronRight,
    X,
} from "lucide-react";

import { useEffect, useState } from "react";

import moreHeroes from "../data/moreHeroes.js";


const MoreHeroes = ({ language }) => {
    const [selectedHero, setSelectedHero] = useState(null);

    const currentLanguage =
        language === "ur" || language === "roman"
            ? language
            : "en";


    const ui = {
        en: {
            eyebrow: "MORE STORIES TO DISCOVER",
            title: "More People Behind the Journey",
            description:
                "The story of Pakistan was shaped by many people. Explore more personalities whose ideas, efforts and contributions became part of our history.",
            read: "Read Full Story",
            story: "THE STORY",
            previous: "Previous",
            next: "Next",
            close: "Close",
            person: "PERSON",
            explore: "Explore Another Story",
        },

        roman: {
            eyebrow: "MAZEED KAHANIYAN",
            title: "Is Safar Ke Mazeed Log",
            description:
                "Pakistan ki kahani ko bohat se logon ne mil kar shakal di. Un mazeed shakhsiyat ke bare mein janein jinki soch aur koshishen hamari tareekh ka hissa banin.",
            read: "Mukammal Kahani Parhein",
            story: "KAHANI",
            previous: "Pichla",
            next: "Agla",
            close: "Band Karein",
            person: "SHAKHSIYAT",
            explore: "Ek Aur Kahani Dekhein",
        },

        ur: {
            eyebrow: "مزید کہانیاں دریافت کریں",
            title: "اس سفر کے مزید لوگ",
            description:
                "پاکستان کی کہانی کو بہت سے لوگوں نے مل کر شکل دی۔ ان مزید شخصیات کے بارے میں جانیے جن کی سوچ اور کوششیں ہماری تاریخ کا حصہ بنیں۔",
            read: "مکمل کہانی پڑھیں",
            story: "کہانی",
            previous: "پچھلا",
            next: "اگلا",
            close: "بند کریں",
            person: "شخصیت",
            explore: "ایک اور کہانی دیکھیں",
        },
    };


    const t = ui[currentLanguage];


    useEffect(() => {
        document.body.style.overflow =
            selectedHero !== null ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedHero]);


    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedHero(null);
            }
        };

        window.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);


    const openHero = (index) => {
        setSelectedHero(index);
    };


    const closeHero = () => {
        setSelectedHero(null);
    };


    const nextHero = () => {
        setSelectedHero((current) => {
            if (current === null) return 0;

            return (
                (current + 1) %
                moreHeroes.length
            );
        });
    };


    const previousHero = () => {
        setSelectedHero((current) => {
            if (current === null) return 0;

            return (
                (current - 1 + moreHeroes.length) %
                moreHeroes.length
            );
        });
    };


    return (
        <>
            {/* ================================
                MORE HEROES SECTION
            ================================= */}

            <section
                id="more-heroes"
                className="
                    relative
                    overflow-hidden
                    bg-[#031a0f]
                    px-4
                    py-24
                    sm:px-6
                    sm:py-32
                "
            >

                {/* Background */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-0
                        h-[500px]
                        w-[700px]
                        -translate-x-1/2
                        rounded-full
                        bg-emerald-500/[0.055]
                        blur-[140px]
                    "
                />


                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-[350px]
                        w-[350px]
                        rounded-full
                        bg-green-700/[0.06]
                        blur-[120px]
                    "
                />


                <div className="relative z-10 mx-auto max-w-6xl">

                    {/* Heading */}

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
                        className="
                            mx-auto
                            max-w-3xl
                            text-center
                        "
                    >

                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-[9px]
                                font-bold
                                tracking-[0.3em]
                                text-emerald-300/70
                            "
                        >
                            <BookOpen size={13} />

                            {t.eyebrow}
                        </div>


                        <h2
                            className="
                                text-4xl
                                font-black
                                leading-tight
                                tracking-tight
                                text-white
                                sm:text-6xl
                            "
                        >
                            {t.title}
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-7
                                text-white/40
                                sm:text-base
                            "
                        >
                            {t.description}
                        </p>

                    </motion.div>


                    {/* Cards */}

                    <div
                        className="
                            mt-16
                            grid
                            gap-5
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {moreHeroes.map(
                            (hero, index) => (
                                <motion.article
                                    key={hero.id}

                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}

                                    transition={{
                                        duration: 0.55,
                                        delay:
                                            index * 0.08,
                                    }}

                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[1.7rem]
                                        bg-[#061f13]
                                        shadow-[0_20px_70px_rgba(0,0,0,0.22)]
                                    "
                                >

                                    {/* Image */}

                                    <div
                                        className="
                                            relative
                                            h-[300px]
                                            overflow-hidden
                                            bg-[#082719]
                                        "
                                    >

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                z-10
                                                bg-gradient-to-t
                                                from-[#061f13]
                                                via-transparent
                                                to-transparent
                                            "
                                        />


                                        <img
                                            src={hero.image}
                                            alt={
                                                hero.name.en
                                            }
                                            className="
                                                h-full
                                                w-full
                                                object-contain
                                                object-center
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-[1.06]
                                            "
                                        />


                                        {/* Image glow */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-emerald-400/[0.02]
                                                transition
                                                duration-500
                                                group-hover:bg-emerald-400/[0.07]
                                            "
                                        />

                                    </div>


                                    {/* Content */}

                                    <div
                                        className="
                                            relative
                                            z-20
                                            -mt-8
                                            p-6
                                        "
                                    >

                                        <p
                                            className="
                                                text-[8px]
                                                font-bold
                                                tracking-[0.25em]
                                                text-emerald-300/60
                                            "
                                        >
                                            {t.person}{" "}
                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </p>


                                        <h3
                                            className="
                                                mt-3
                                                text-xl
                                                font-black
                                                leading-tight
                                                text-white
                                            "
                                        >
                                            {
                                                hero
                                                    .name[
                                                    currentLanguage
                                                ]
                                            }
                                        </h3>


                                        <p
                                            className="
                                                mt-2
                                                text-xs
                                                font-medium
                                                text-emerald-300
                                            "
                                        >
                                            {
                                                hero
                                                    .role[
                                                    currentLanguage
                                                ]
                                            }
                                        </p>


                                        <p
                                            className="
                                                mt-4
                                                line-clamp-3
                                                text-xs
                                                leading-6
                                                text-white/40
                                            "
                                        >
                                            {
                                                hero
                                                    .short[
                                                    currentLanguage
                                                ]
                                            }
                                        </p>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                openHero(
                                                    index
                                                )
                                            }
                                            className="
                                                group/button
                                                mt-6
                                                inline-flex
                                                items-center
                                                gap-2
                                                text-xs
                                                font-bold
                                                text-emerald-300
                                                transition
                                                hover:text-emerald-200
                                            "
                                        >
                                            {t.read}

                                            <ChevronRight
                                                size={15}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover/button:translate-x-1
                                                "
                                            />
                                        </button>

                                    </div>

                                </motion.article>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================
                FULL STORY MODAL
            ================================= */}

            <AnimatePresence>

                {selectedHero !== null && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}

                        animate={{
                            opacity: 1,
                        }}

                        exit={{
                            opacity: 0,
                        }}

                        className="
                            fixed
                            inset-0
                            z-[300]
                            flex
                            items-center
                            justify-center
                            bg-black/85
                            p-3
                            backdrop-blur-xl
                            sm:p-6
                        "

                        onClick={closeHero}
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                                y: 25,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}

                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                y: 25,
                            }}

                            transition={{
                                duration: 0.35,
                            }}

                            onClick={(e) =>
                                e.stopPropagation()
                            }

                            className="
                                relative
                                flex
                                max-h-[94vh]
                                w-full
                                max-w-6xl
                                flex-col
                                overflow-hidden
                                rounded-[2rem]
                                bg-[#041a10]
                                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                                lg:grid
                                lg:grid-cols-[0.9fr_1.1fr]
                            "
                        >

                            {/* Close */}

                            <motion.button
                                type="button"
                                onClick={closeHero}

                                whileHover={{
                                    scale: 1.08,
                                }}

                                whileTap={{
                                    scale: 0.95,
                                }}

                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-50
                                    grid
                                    h-10
                                    w-10
                                    place-items-center
                                    rounded-full
                                    bg-black/60
                                    text-white/70
                                    backdrop-blur-xl
                                    transition
                                    hover:bg-emerald-400
                                    hover:text-[#02170c]
                                "
                            >
                                <X size={18} />
                            </motion.button>


                            {/* Large Image */}

                            <div
                                className="
                                    relative
                                    hidden
                                    min-h-[600px]
                                    overflow-hidden
                                    bg-[#061f13]
                                    lg:block
                                "
                            >

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.16),transparent_55%)]
                                    "
                                />


                                <img
                                    src={
                                        moreHeroes[
                                            selectedHero
                                        ].image
                                    }

                                    alt={
                                        moreHeroes[
                                            selectedHero
                                        ].name.en
                                    }

                                    className="
                                        relative
                                        z-10
                                        h-full
                                        w-full
                                        object-contain
                                        object-center
                                        p-8
                                    "
                                />


                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-x-0
                                        bottom-0
                                        z-20
                                        h-44
                                        bg-gradient-to-t
                                        from-[#041a10]
                                        to-transparent
                                    "
                                />

                            </div>


                            {/* Content */}

                            <div
                                className="
                                    flex
                                    max-h-[94vh]
                                    flex-col
                                    overflow-hidden
                                "
                            >

                                {/* Mobile Image */}

                                <div
                                    className="
                                        relative
                                        h-[280px]
                                        shrink-0
                                        overflow-hidden
                                        bg-[#061f13]
                                        lg:hidden
                                    "
                                >

                                    <img
                                        src={
                                            moreHeroes[
                                                selectedHero
                                            ].image
                                        }

                                        alt={
                                            moreHeroes[
                                                selectedHero
                                            ].name.en
                                        }

                                        className="
                                            h-full
                                            w-full
                                            object-contain
                                        "
                                    />


                                    <div
                                        className="
                                            absolute
                                            inset-x-0
                                            bottom-0
                                            h-32
                                            bg-gradient-to-t
                                            from-[#041a10]
                                            to-transparent
                                        "
                                    />

                                </div>


                                {/* Article */}

                                <div
                                    className="
                                        flex-1
                                        overflow-y-auto
                                        px-6
                                        py-8
                                        sm:px-10
                                        sm:py-10
                                        lg:px-12
                                        lg:py-14
                                    "
                                >

                                    <p
                                        className="
                                            text-[9px]
                                            font-bold
                                            tracking-[0.3em]
                                            text-emerald-300/70
                                        "
                                    >
                                        {t.story}
                                    </p>


                                    <h2
                                        className="
                                            mt-4
                                            text-3xl
                                            font-black
                                            leading-tight
                                            text-white
                                            sm:text-4xl
                                        "
                                    >
                                        {
                                            moreHeroes[
                                                selectedHero
                                            ].name[
                                                currentLanguage
                                            ]
                                        }
                                    </h2>


                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            font-medium
                                            text-emerald-300
                                        "
                                    >
                                        {
                                            moreHeroes[
                                                selectedHero
                                            ].role[
                                                currentLanguage
                                            ]
                                        }
                                    </p>


                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            text-white/30
                                        "
                                    >
                                        {
                                            moreHeroes[
                                                selectedHero
                                            ].year
                                        }
                                    </p>


                                    <div
                                        className="
                                            my-8
                                            h-px
                                            w-16
                                            bg-emerald-400/50
                                        "
                                    />


                                    <div
                                        className="
                                            space-y-6
                                            text-sm
                                            leading-8
                                            text-white/60
                                            sm:text-base
                                        "
                                    >

                                        {
                                            moreHeroes[
                                                selectedHero
                                            ].story[
                                                currentLanguage
                                            ].map(
                                                (
                                                    paragraph,
                                                    index
                                                ) => (

                                                    <motion.p
                                                        key={
                                                            index
                                                        }

                                                        initial={{
                                                            opacity: 0,
                                                            y: 12,
                                                        }}

                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}

                                                        transition={{
                                                            delay:
                                                                index *
                                                                0.06,
                                                        }}
                                                    >
                                                        {
                                                            paragraph
                                                        }
                                                    </motion.p>

                                                )
                                            )
                                        }

                                    </div>

                                </div>


                                {/* Footer */}

                                <div
                                    className="
                                        flex
                                        shrink-0
                                        items-center
                                        justify-between
                                        gap-3
                                        bg-black/20
                                        px-5
                                        py-4
                                        sm:px-8
                                    "
                                >

                                    <button
                                        type="button"
                                        onClick={
                                            previousHero
                                        }

                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            px-3
                                            py-2
                                            text-sm
                                            font-semibold
                                            text-white/60
                                            transition
                                            hover:bg-white/5
                                            hover:text-white
                                        "
                                    >
                                        <ArrowLeft
                                            size={16}
                                        />

                                        <span className="hidden sm:inline">
                                            {t.previous}
                                        </span>

                                    </button>


                                    <button
                                        type="button"
                                        onClick={closeHero}

                                        className="
                                            rounded-xl
                                            px-4
                                            py-2
                                            text-sm
                                            font-semibold
                                            text-white/40
                                            transition
                                            hover:text-white
                                        "
                                    >
                                        {t.close}
                                    </button>


                                    <button
                                        type="button"
                                        onClick={
                                            nextHero
                                        }

                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-emerald-400
                                            px-4
                                            py-2.5
                                            text-sm
                                            font-bold
                                            text-[#02170c]
                                            transition
                                            hover:bg-emerald-300
                                        "
                                    >

                                        <span className="hidden sm:inline">
                                            {t.next}
                                        </span>

                                        <ArrowRight
                                            size={16}
                                        />

                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>
        </>
    );
};


export default MoreHeroes;