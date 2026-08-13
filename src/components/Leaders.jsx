import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    ChevronRight,
    X,
} from "lucide-react";

import { useEffect, useState } from "react";

import leaders from "../data/leaders.js";

const Leaders = ({ language }) => {
    const [selectedLeader, setSelectedLeader] = useState(null);

    const currentLanguage =
        language === "ur" || language === "roman"
            ? language
            : "en";

    const ui = {
        en: {
            eyebrow: "THE PEOPLE BEHIND THE STORY",
            title: "The Leaders Who Shaped Our History",
            description:
                "Learn about the people whose ideas, leadership and efforts became part of the journey toward Pakistan.",
            read: "Read Full Story",
            continue: "CONTINUE READING",
            previous: "Previous",
            next: "Next",
            close: "Close",
            leader: "LEADER",
        },

        roman: {
            eyebrow: "KAHANI KE PEECHE KE LOG",
            title: "Woh Rehnuma Jinhon Ne Hamari Tareekh Banai",
            description:
                "Un logon ke bare mein janein jinki soch, qiyadat aur koshishen Pakistan ke safar ka hissa banin.",
            read: "Mukammal Kahani Parhein",
            continue: "MAZEED PARHEIN",
            previous: "Pichla",
            next: "Agla",
            close: "Band Karein",
            leader: "REHNUMA",
        },

        ur: {
            eyebrow: "کہانی کے پیچھے کے لوگ",
            title: "وہ رہنما جنہوں نے ہماری تاریخ بنائی",
            description:
                "ان لوگوں کے بارے میں جانیے جن کی سوچ، قیادت اور کوششیں پاکستان کے سفر کا حصہ بنیں۔",
            read: "مکمل کہانی پڑھیں",
            continue: "مزید پڑھیں",
            previous: "پچھلا",
            next: "اگلا",
            close: "بند کریں",
            leader: "رہنما",
        },
    };

    const t = ui[currentLanguage];

    // Lock background scrolling when story is open
    useEffect(() => {
        document.body.style.overflow =
            selectedLeader !== null ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedLeader]);

    // ESC key closes story
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedLeader(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    const openLeader = (index) => {
        setSelectedLeader(index);
    };

    const closeLeader = () => {
        setSelectedLeader(null);
    };

    const nextLeader = () => {
        setSelectedLeader((current) => {
            if (current === null) return 0;

            return (current + 1) % leaders.length;
        });
    };

    const previousLeader = () => {
        setSelectedLeader((current) => {
            if (current === null) return 0;

            return (
                (current - 1 + leaders.length) %
                leaders.length
            );
        });
    };

    return (
        <>
            {/* =====================================================
                LEADERS SECTION
            ====================================================== */}

            <section
                id="leaders"
                className="
                    relative
                    overflow-hidden
                    bg-[#02170c]
                    px-4
                    py-24
                    sm:px-6
                    sm:py-32
                "
            >
                {/* Background glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-0
                        h-[550px]
                        w-[850px]
                        -translate-x-1/2
                        rounded-full
                        bg-emerald-500/[0.055]
                        blur-[150px]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-green-600/[0.04]
                        blur-[130px]
                    "
                />

                <div className="relative z-10 mx-auto max-w-7xl">

                    {/* =================================================
                        HEADING
                    ================================================== */}

                    <motion.div
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

                    {/* =================================================
                        LEADERS
                    ================================================== */}

                    <div className="mt-20">

                        {leaders.map((leader, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.article
                                    key={leader.id}
                                    initial={{
                                        opacity: 0,
                                        y: 45,
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
                                        duration: 0.7,
                                        delay: index * 0.05,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        bg-transparent
                                    "
                                >
                                    {/* =================================================
                                        MAIN LEADER ROW
                                    ================================================== */}

                                    <div
                                        className={`
                                            relative
                                            grid
                                            min-h-[420px]
                                            items-center
                                            lg:grid-cols-2
                                            ${
                                                isEven
                                                    ? ""
                                                    : "lg:[&_.leader-text]:order-2 lg:[&_.leader-image]:order-1"
                                            }
                                        `}
                                    >

                                        {/* =================================================
                                            TEXT
                                        ================================================== */}

                                        <div
                                            className="
                                                leader-text
                                                relative
                                                z-20
                                                px-2
                                                py-12
                                                sm:px-8
                                                sm:py-16
                                                lg:px-14
                                                xl:px-20
                                            "
                                        >
                                            {/* Number */}

                                            <motion.p
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                className="
                                                    text-[9px]
                                                    font-bold
                                                    tracking-[0.3em]
                                                    text-emerald-300/60
                                                "
                                            >
                                                {t.leader}{" "}
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </motion.p>

                                            {/* Name */}

                                            <h3
                                                className="
                                                    mt-5
                                                    max-w-xl
                                                    text-3xl
                                                    font-black
                                                    leading-tight
                                                    tracking-tight
                                                    text-white
                                                    sm:text-5xl
                                                    lg:text-5xl
                                                    xl:text-6xl
                                                "
                                            >
                                                {
                                                    leader.name[
                                                        currentLanguage
                                                    ]
                                                }
                                            </h3>

                                            {/* Role */}

                                            <p
                                                className="
                                                    mt-4
                                                    text-sm
                                                    font-semibold
                                                    text-emerald-300
                                                    sm:text-base
                                                "
                                            >
                                                {
                                                    leader.role[
                                                        currentLanguage
                                                    ]
                                                }
                                            </p>

                                            {/* Short intro */}

                                            <p
                                                className="
                                                    mt-6
                                                    max-w-xl
                                                    text-sm
                                                    leading-7
                                                    text-white/45
                                                    sm:text-base
                                                    sm:leading-8
                                                "
                                            >
                                                {
                                                    leader.short[
                                                        currentLanguage
                                                    ]
                                                }
                                            </p>

                                            {/* Read button */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    openLeader(
                                                        index
                                                    )
                                                }
                                                className="
                                                    group/button
                                                    mt-8
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    rounded-xl
                                                    bg-emerald-400
                                                    px-5
                                                    py-3
                                                    text-sm
                                                    font-bold
                                                    text-[#02170c]
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-1
                                                    hover:bg-emerald-300
                                                    hover:shadow-[0_15px_45px_rgba(52,211,153,0.18)]
                                                "
                                            >
                                                {t.read}

                                                <ChevronRight
                                                    size={16}
                                                    className="
                                                        transition-transform
                                                        duration-300
                                                        group-hover/button:translate-x-1
                                                    "
                                                />
                                            </button>
                                        </div>

                                        {/* =================================================
                                            IMAGE
                                        ================================================== */}

                                        <div
                                            className="
                                                leader-image
                                                relative
                                                flex
                                                h-[400px]
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                sm:h-[480px]
                                                lg:h-[560px]
                                            "
                                        >
                                            {/* Image glow */}

                                            <div
                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    left-1/2
                                                    top-1/2
                                                    h-[350px]
                                                    w-[350px]
                                                    -translate-x-1/2
                                                    -translate-y-1/2
                                                    rounded-full
                                                    bg-emerald-400/[0.08]
                                                    blur-[100px]
                                                    transition-all
                                                    duration-700
                                                    group-hover:bg-emerald-400/[0.14]
                                                "
                                            />

                                            {/* Image */}

                                            <motion.img
                                                src={leader.image}
                                                alt={
                                                    leader.name
                                                        .en
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.96,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                }}
                                                className="
                                                    relative
                                                    z-10
                                                    h-full
                                                    w-full
                                                    object-contain
                                                    object-center
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-[1.035]
                                                "
                                            />

                                            {/* Soft blend */}

                                            <div
                                                className={`
                                                    pointer-events-none
                                                    absolute
                                                    inset-0
                                                    z-20
                                                    ${
                                                        isEven
                                                            ? "bg-gradient-to-r"
                                                            : "bg-gradient-to-l"
                                                    }
                                                    from-[#02170c]
                                                    via-[#02170c]/20
                                                    to-transparent
                                                `}
                                            />

                                            {/* Bottom blend */}

                                            <div
                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    inset-x-0
                                                    bottom-0
                                                    z-20
                                                    h-28
                                                    bg-gradient-to-t
                                                    from-[#02170c]
                                                    to-transparent
                                                "
                                            />
                                        </div>
                                    </div>

                                    {/* Very subtle separator — NOT a border */}

                                    {index !==
                                        leaders.length - 1 && (
                                        <div
                                            className="
                                                mx-auto
                                                h-px
                                                w-[75%]
                                                bg-gradient-to-r
                                                from-transparent
                                                via-emerald-300/[0.07]
                                                to-transparent
                                            "
                                        />
                                    )}
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FULL STORY MODAL
            ====================================================== */}

            <AnimatePresence>
                {selectedLeader !== null && (
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
                            z-[200]
                            flex
                            items-center
                            justify-center
                            bg-black/85
                            p-3
                            backdrop-blur-xl
                            sm:p-6
                        "
                        onClick={closeLeader}
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
                                shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                                lg:grid
                                lg:grid-cols-[0.9fr_1.1fr]
                            "
                        >
                            {/* CLOSE */}

                            <button
                                type="button"
                                onClick={closeLeader}
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-30
                                    grid
                                    h-10
                                    w-10
                                    place-items-center
                                    rounded-full
                                    bg-black/50
                                    text-white/70
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:bg-emerald-400
                                    hover:text-[#02170c]
                                "
                                aria-label={t.close}
                            >
                                <X size={18} />
                            </button>

                            {/* =================================================
                                DESKTOP IMAGE
                            ================================================== */}

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
                                        bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.16),transparent_55%)]
                                    "
                                />

                                <img
                                    src={
                                        leaders[
                                            selectedLeader
                                        ].image
                                    }
                                    alt={
                                        leaders[
                                            selectedLeader
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
                                        h-40
                                        bg-gradient-to-t
                                        from-[#041a10]
                                        to-transparent
                                    "
                                />
                            </div>

                            {/* =================================================
                                CONTENT
                            ================================================== */}

                            <div
                                className="
                                    flex
                                    max-h-[94vh]
                                    flex-col
                                    overflow-hidden
                                "
                            >
                                {/* Mobile image */}

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
                                            leaders[
                                                selectedLeader
                                            ].image
                                        }
                                        alt={
                                            leaders[
                                                selectedLeader
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
                                            pointer-events-none
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

                                {/* Reading content */}

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
                                        {t.continue}
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
                                            leaders[
                                                selectedLeader
                                            ].name[
                                                currentLanguage
                                            ]
                                        }
                                    </h2>

                                    <p
                                        className="
                                            mt-3
                                            font-medium
                                            text-emerald-300
                                        "
                                    >
                                        {
                                            leaders[
                                                selectedLeader
                                            ].role[
                                                currentLanguage
                                            ]
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
                                        {leaders[
                                            selectedLeader
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
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            index *
                                                            0.04,
                                                    }}
                                                >
                                                    {
                                                        paragraph
                                                    }
                                                </motion.p>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* =================================================
                                    MODAL FOOTER
                                ================================================== */}

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
                                    {/* Previous */}

                                    <button
                                        type="button"
                                        onClick={
                                            previousLeader
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

                                    {/* Close */}

                                    <button
                                        type="button"
                                        onClick={closeLeader}
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

                                    {/* Next */}

                                    <button
                                        type="button"
                                        onClick={
                                            nextLeader
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
                                            transition-all
                                            duration-300
                                            hover:bg-emerald-300
                                            hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]
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

export default Leaders;