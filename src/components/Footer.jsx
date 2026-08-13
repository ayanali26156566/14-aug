import React from "react";
import { motion } from "framer-motion";
import {
    Flag,
    ArrowUp,
    Heart,
    MapPin,
} from "lucide-react";

const Footer = ({ language = "en" }) => {
    const isUrdu = language === "ur";

    const text = {
        en: {
            tagline:
                "A digital journey through the history, struggle and birth of Pakistan.",
            menu: "Quick Navigation",
            home: "Home",
            timeline: "Historical Timeline",
            leaders: "Leaders",
            born: "How Pakistan Was Born",
            heroes: "More Heroes",
            learn: "What We Learn",
            independence: "14 August 1947",
            created: "Created with",
            forPakistan: "for Pakistan",
            rights: "All rights reserved.",
            backTop: "Back to top",
            history:
                "Remembering the journey that shaped a nation.",
            pakistan: "Pakistan",
        },

        roman: {
            tagline:
                "Pakistan ki tareekh, jadd-o-jehad aur qayam ke safar ka aik digital safar.",
            menu: "Quick Navigation",
            home: "Home",
            timeline: "Tareekhi Timeline",
            leaders: "Qiyadat",
            born: "Pakistan Kaise Wajood Mein Aaya",
            heroes: "Mazeed Heroes",
            learn: "Hum Kya Seekhte Hain",
            independence: "14 August 1947",
            created: "Banaya gaya",
            forPakistan: "Pakistan ke liye",
            rights: "Tamam huqooq mehfooz hain.",
            backTop: "Upar Jayein",
            history:
                "Us safar ki yaad jo aik qaum ko tashkeel deta hai.",
            pakistan: "Pakistan",
        },

        ur: {
            tagline:
                "پاکستان کی تاریخ، جدوجہد اور قیام کے سفر کو ایک ڈیجیٹل انداز میں پیش کرنے کی کوشش۔",
            menu: "فوری نیویگیشن",
            home: "ہوم",
            timeline: "تاریخی ٹائم لائن",
            leaders: "قائدین",
            born: "پاکستان کیسے وجود میں آیا",
            heroes: "مزید ہیروز",
            learn: "ہم کیا سیکھتے ہیں",
            independence: "14 اگست 1947",
            created: "بنایا گیا",
            forPakistan: "پاکستان کے لیے",
            rights: "تمام حقوق محفوظ ہیں۔",
            backTop: "اوپر جائیں",
            history:
                "اس سفر کی یاد جو ایک قوم کی تشکیل کا باعث بنا۔",
            pakistan: "پاکستان",
        },
    };

    const t = text[language] || text.en;

    /*
    =========================================================
    SCROLL TO SECTION
    =========================================================
    */

    const scrollToSection = (id) => {
        if (!id) return;

        const element = document.getElementById(id);

        /*
        Agar section exist nahi karta to kuch nahi hoga.
        Console error bhi nahi ayega.
        */
        if (!element) {
            console.warn(
                `Footer navigation: #${id} was not found.`
            );

            return;
        }

        /*
        Mobile menu / other UI ko settle hone ka
        thora time dete hain.
        */
        requestAnimationFrame(() => {
            const navbarOffset = 90;

            const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY;

            const targetPosition =
                Math.max(
                    0,
                    elementPosition - navbarOffset
                );

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        });
    };

    /*
    =========================================================
    SCROLL TOP
    =========================================================
    */

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /*
    =========================================================
    FOOTER LINKS
    =========================================================
    */

    const footerLinks = [
        {
            label: t.home,
            id: "home",
        },
        
        {
            label: t.leaders,
            id: "leaders",
        },
        {
            label: t.born,
            id: "how-pakistan-was-born",
        },
        {
            label: t.heroes,
            id: "more-heroes",
        },
        {
            label: t.learn,
            id: "what-we-learn",
        },
    ];

    return (
        <footer
            dir={isUrdu ? "rtl" : "ltr"}
            className="
                relative
                overflow-hidden
                border-t
                border-white/[0.06]
                bg-[#010705]
            "
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
                {/* LEFT GLOW */}

                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -left-40
                        top-0
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-green-500/20
                        blur-[130px]
                    "
                />

                {/* RIGHT GLOW */}

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.07, 0.16, 0.07],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -right-40
                        bottom-0
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-emerald-500/20
                        blur-[140px]
                    "
                />

                {/* CENTER GLOW */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.07),transparent_55%)]
                    "
                />

                {/* DARK GRADIENT */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-green-500/[0.02]
                        via-transparent
                        to-[#010705]
                    "
                />
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-5
                    pb-8
                    pt-16
                    sm:px-6
                    sm:pt-20
                    lg:px-8
                "
            >
                {/* =================================================
                    TOP CONTENT
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-12
                        text-center
                        lg:grid-cols-[1.5fr_1fr_1fr]
                        lg:gap-16
                        lg:text-left
                        rtl:lg:text-right
                    "
                >
                    {/* =================================================
                        BRAND
                    ================================================= */}

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
                            duration: 0.6,
                        }}
                    >
                        {/* LOGO */}

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="
                                group
                                mx-auto
                                flex
                                items-center
                                gap-3
                                lg:mx-0
                            "
                        >
                            {/* LOGO ICON */}

                            <div
                                className="
                                    relative
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-green-500/20
                                    bg-green-500/10
                                    text-green-400
                                    transition-all
                                    duration-300
                                    group-hover:border-green-500/40
                                    group-hover:bg-green-500/15
                                "
                            >
                                <Flag
                                    className="
                                        relative
                                        z-10
                                        h-6
                                        w-6
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        rounded-2xl
                                        bg-green-400/10
                                        opacity-0
                                        blur-xl
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                />
                            </div>

                            {/* LOGO TEXT */}

                            <div
                                className="
                                    text-left
                                    rtl:text-right
                                "
                            >
                                <h2
                                    className="
                                        text-xl
                                        font-black
                                        tracking-tight
                                        text-white
                                    "
                                >
                                    Pakistan
                                    <span className="text-green-400">
                                        .
                                    </span>
                                </h2>

                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.2em]
                                        text-slate-600
                                    "
                                >
                                    {t.pakistan}
                                </p>
                            </div>
                        </button>

                        {/* TAGLINE */}

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-md
                                text-sm
                                leading-7
                                text-slate-500
                                sm:text-base
                                lg:mx-0
                            "
                        >
                            {t.tagline}
                        </p>

                        {/* INDEPENDENCE BADGE */}

                        <div
                            className="
                                mx-auto
                                mt-6
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-green-500/15
                                bg-green-500/5
                                px-4
                                py-2.5
                                lg:mx-0
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-green-500/10
                                    text-green-400
                                "
                            >
                                <Flag className="h-3.5 w-3.5" />
                            </div>

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-green-400
                                    sm:text-sm
                                "
                            >
                                {t.independence}
                            </span>
                        </div>
                    </motion.div>

                    {/* =================================================
                        QUICK NAVIGATION
                    ================================================= */}

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
                            duration: 0.6,
                            delay: 0.1,
                        }}
                    >
                        <h3
                            className="
                                mb-6
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white
                            "
                        >
                            {t.menu}
                        </h3>

                        <nav
                            className="
                                flex
                                flex-col
                                items-center
                                gap-3
                                lg:items-start
                                rtl:lg:items-end
                            "
                        >
                            {footerLinks.map(
                                (link) => (
                                    <button
                                        key={link.id}
                                        type="button"
                                        onClick={() =>
                                            scrollToSection(
                                                link.id
                                            )
                                        }
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-500
                                            transition-all
                                            duration-200
                                            hover:text-green-400
                                        "
                                    >
                                        <span
                                            className="
                                                h-px
                                                w-0
                                                bg-green-400
                                                transition-all
                                                duration-300
                                                group-hover:w-3
                                            "
                                        />

                                        <span>
                                            {
                                                link.label
                                            }
                                        </span>
                                    </button>
                                )
                            )}
                        </nav>
                    </motion.div>

                    {/* =================================================
                        ABOUT / HISTORY
                    ================================================= */}

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
                            duration: 0.6,
                            delay: 0.2,
                        }}
                    >
                        <h3
                            className="
                                mb-6
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white
                            "
                        >
                            {t.history}
                        </h3>

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                gap-4
                                lg:items-start
                                rtl:lg:items-end
                            "
                        >
                            {/* PAKISTAN */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    text-center
                                    lg:text-left
                                    rtl:lg:text-right
                                "
                            >
                                <MapPin
                                    className="
                                        mt-0.5
                                        h-4
                                        w-4
                                        shrink-0
                                        text-green-400
                                    "
                                />

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    {t.pakistan}
                                </p>
                            </div>

                            {/* INDEPENDENCE */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    text-center
                                    lg:text-left
                                    rtl:lg:text-right
                                "
                            >
                                <Flag
                                    className="
                                        mt-0.5
                                        h-4
                                        w-4
                                        shrink-0
                                        text-green-400
                                    "
                                />

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    {t.independence}
                                </p>
                            </div>

                            {/* HISTORY */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    text-center
                                    lg:text-left
                                    rtl:lg:text-right
                                "
                            >
                                <Heart
                                    className="
                                        mt-0.5
                                        h-4
                                        w-4
                                        shrink-0
                                        text-green-400
                                    "
                                />

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    {t.history}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div
                    className="
                        my-12
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                        sm:my-14
                    "
                />

                {/* =================================================
                    BOTTOM AREA
                ================================================= */}

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
                        duration: 0.6,
                    }}
                    className="
                        flex
                        flex-col
                        items-center
                        gap-6
                        text-center
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:text-left
                        rtl:sm:text-right
                    "
                >
                    {/* COPYRIGHT */}

                    <div>
                        <p
                            className="
                                text-xs
                                text-slate-600
                                sm:text-sm
                            "
                        >
                            © {new Date().getFullYear()}{" "}
                            Pakistan.
                            <span
                                className="
                                    ml-1
                                    rtl:mr-1
                                    rtl:ml-0
                                "
                            >
                                {t.rights}
                            </span>
                        </p>

                        <p
                            className="
                                mt-2
                                flex
                                items-center
                                justify-center
                                gap-1.5
                                text-xs
                                text-slate-700
                                sm:justify-start
                                rtl:sm:justify-end
                            "
                        >
                            <span>
                                {t.created}
                            </span>

                            <Heart
                                className="
                                    h-3
                                    w-3
                                    fill-green-500
                                    text-green-500
                                "
                            />

                            <span>
                                {t.forPakistan}
                            </span>
                        </p>
                    </div>

                    {/* BACK TO TOP */}

                    <motion.button
                        type="button"
                        onClick={scrollToTop}
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-slate-500
                            transition-all
                            duration-300
                            hover:border-green-500/30
                            hover:bg-green-500/5
                            hover:text-green-400
                            sm:text-sm
                        "
                    >
                        <span>
                            {t.backTop}
                        </span>

                        <ArrowUp
                            className="
                                h-4
                                w-4
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                            "
                        />
                    </motion.button>
                </motion.div>
            </div>

            {/* =====================================================
                BOTTOM GREEN ANIMATION
            ===================================================== */}

            <div
                className="
                    relative
                    h-1
                    w-full
                    overflow-hidden
                    bg-green-500/10
                "
            >
                <motion.div
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        h-full
                        w-1/3
                        bg-gradient-to-r
                        from-transparent
                        via-green-400/60
                        to-transparent
                    "
                />
            </div>
        </footer>
    );
};

export default Footer;