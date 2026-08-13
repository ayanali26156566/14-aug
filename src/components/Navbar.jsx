import { useEffect, useRef, useState } from "react";
import {
    Menu,
    X,
    Globe2,
    ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content.js";

const Navbar = ({ language, setLanguage }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const navbarRef = useRef(null);

    const t = content[language];

    /* =====================================================
       LANGUAGES
    ===================================================== */

    const languages = [
        {
            id: "en",
            label: "English",
            short: "EN",
        },
        {
            id: "roman",
            label: "Roman Urdu",
            short: "RO",
        },
        {
            id: "ur",
            label: "اردو",
            short: "اردو",
        },
    ];

    /* =====================================================
       LANGUAGE CHANGE
    ===================================================== */

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setLanguageOpen(false);
        setMobileOpen(false);

        localStorage.setItem(
            "pakistan-language",
            lang
        );
    };

    /* =====================================================
       NAV ITEMS
    ===================================================== */

    const navItems = [
        {
            label: t.nav.leaders,
            href: "#leaders",
        },
        {
            label: t.nav.born,
            href: "#how-pakistan-was-born",
        },
        {
            label: t.nav.heroes,
            href: "#more-heroes",
        },
        {
            label: t.nav.learn,
            href: "#what-we-learn",
        },
    ];

    /* =====================================================
       CLOSE EVERYTHING
    ===================================================== */

    const closeMenus = () => {
        setMobileOpen(false);
        setLanguageOpen(false);
    };

    /* =====================================================
       LOGO
    ===================================================== */

    const handleLogoClick = () => {
        closeMenus();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /* =====================================================
       SCROLL TO SECTION
       
       Is function se mobile navigation reliable rahegi.
       Navbar ki height automatically calculate hogi.
    ===================================================== */

    const handleNavClick = (event, href) => {
        event.preventDefault();

        closeMenus();

        const targetId = href.replace("#", "");
        const target = document.getElementById(targetId);

        if (!target) {
            console.warn(
                `Navigation target #${targetId} was not found.`
            );

            return;
        }

        const navbarHeight =
            navbarRef.current?.offsetHeight || 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            16;

        window.scrollTo({
            top: Math.max(targetPosition, 0),
            behavior: "smooth",
        });

        /* URL hash update */
        window.history.replaceState(
            null,
            "",
            href
        );
    };

    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeMenus();
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

    /* =====================================================
       BODY SCROLL LOCK
       
       Mobile menu open hone par background page scroll
       nahi karega.
    ===================================================== */

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    /* =====================================================
       CLICK OUTSIDE LANGUAGE DROPDOWN
    ===================================================== */

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setLanguageOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    return (
        <>
            {/* =================================================
                MOBILE BACKDROP

                Menu open hone par page ke peeche dark layer.
                Is par kahin bhi click karne se menu close.
            ================================================= */}

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeMenus}
                        className="
                            fixed
                            inset-0
                            z-40
                            bg-black/40
                            backdrop-blur-[2px]
                            lg:hidden
                        "
                    />
                )}
            </AnimatePresence>

            {/* =================================================
                NAVBAR
            ================================================= */}

            <header
                ref={navbarRef}
                className="
                    fixed
                    left-0
                    top-0
                    z-50
                    w-full
                    px-2
                    pt-2
                    sm:px-4
                    sm:pt-4
                "
            >
                {/* =================================================
                    MAIN NAV
                ================================================= */}

                <nav
                    className="
                        mx-auto
                        flex
                        h-14
                        w-full
                        max-w-7xl
                        items-center
                        justify-between
                        gap-2
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#03150b]/90
                        px-2.5
                        shadow-2xl
                        shadow-black/20
                        backdrop-blur-2xl

                        sm:h-16
                        sm:px-4

                        md:h-[68px]

                        lg:h-[72px]
                        lg:px-5
                    "
                >
                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <button
                        type="button"
                        onClick={handleLogoClick}
                        className="
                            group
                            flex
                            min-w-0
                            shrink-0
                            items-center
                            gap-2
                        "
                    >
                        <div
                            className="
                                relative
                                grid
                                h-9
                                w-9
                                shrink-0
                                place-items-center
                                overflow-hidden
                                rounded-xl
                                bg-gradient-to-br
                                from-[#08733a]
                                to-[#0dbb61]
                                shadow-lg
                                shadow-emerald-900/40
                                transition-transform
                                duration-300
                                group-hover:scale-105

                                sm:h-10
                                sm:w-10
                            "
                        >
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-white/10
                                    opacity-0
                                    transition-opacity
                                    group-hover:opacity-100
                                "
                            />

                            <span
                                className="
                                    relative
                                    text-base
                                    sm:text-lg
                                "
                            >
                                ★
                            </span>
                        </div>

                        <div className="hidden min-[400px]:block">
                            <p
                                className="
                                    text-[10px]
                                    font-black
                                    tracking-[0.18em]
                                    text-white
                                    sm:text-xs
                                "
                            >
                                PAKISTAN
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[6px]
                                    tracking-[0.14em]
                                    text-emerald-200/50
                                    sm:text-[8px]
                                "
                            >
                                14 AUGUST 2026
                            </p>
                        </div>
                    </button>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-4
                            lg:flex
                            xl:gap-7
                        "
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(event) =>
                                    handleNavClick(
                                        event,
                                        item.href
                                    )
                                }
                                className="
                                    group
                                    relative
                                    whitespace-nowrap
                                    py-2
                                    text-xs
                                    font-medium
                                    text-white/55
                                    transition-colors
                                    duration-300
                                    hover:text-white
                                "
                            >
                                {item.label}

                                <span
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-px
                                        w-0
                                        bg-emerald-400
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                                />
                            </a>
                        ))}
                    </div>

                    {/* =================================================
                        RIGHT ACTIONS
                    ================================================= */}

                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-1.5
                            sm:gap-2
                        "
                    >
                        {/* =================================================
                            LANGUAGE
                        ================================================= */}

                        <div className="relative">
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();

                                    setLanguageOpen(
                                        (current) =>
                                            !current
                                    );
                                }}
                                className="
                                    flex
                                    h-9
                                    items-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-2
                                    text-[10px]
                                    font-semibold
                                    text-white/80
                                    transition-all
                                    duration-300
                                    hover:border-emerald-400/30
                                    hover:bg-white/[0.08]

                                    sm:h-10
                                    sm:gap-1.5
                                    sm:px-2.5
                                    sm:text-xs
                                "
                            >
                                <Globe2
                                    size={14}
                                    className="text-emerald-300"
                                />

                                <span>
                                    {
                                        languages.find(
                                            (x) =>
                                                x.id ===
                                                language
                                        )?.short
                                    }
                                </span>

                                <ChevronDown
                                    size={12}
                                    className={`
                                        transition-transform
                                        duration-300
                                        ${languageOpen
                                            ? "rotate-180"
                                            : ""
                                        }
                                    `}
                                />
                            </button>

                            {/* =================================================
                                LANGUAGE DROPDOWN
                            ================================================= */}

                            <AnimatePresence>
                                {languageOpen && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -8,
                                            scale: 0.96,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -8,
                                            scale: 0.96,
                                        }}
                                        transition={{
                                            duration: 0.18,
                                        }}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                        className="
                                            absolute
                                            right-0
                                            top-11
                                            z-50
                                            w-32
                                            overflow-hidden
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-[#062514]/95
                                            p-1.5
                                            shadow-2xl
                                            shadow-black/40
                                            backdrop-blur-2xl

                                            sm:top-12
                                            sm:w-36
                                        "
                                    >
                                        {languages.map(
                                            (item) => (
                                                <button
                                                    key={
                                                        item.id
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        changeLanguage(
                                                            item.id
                                                        )
                                                    }
                                                    className={`
                                                        flex
                                                        w-full
                                                        items-center
                                                        rounded-lg
                                                        px-2.5
                                                        py-2.5
                                                        text-left
                                                        text-[11px]
                                                        transition-colors

                                                        sm:px-3
                                                        sm:text-xs

                                                        ${language ===
                                                            item.id
                                                            ? "bg-emerald-500/15 text-emerald-300"
                                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                                        }
                                                    `}
                                                >
                                                    {
                                                        item.label
                                                    }
                                                </button>
                                            )
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* =================================================
                            MOBILE MENU BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={() => {
                                setMobileOpen(
                                    (current) =>
                                        !current
                                );

                                setLanguageOpen(false);
                            }}
                            className="
                                grid
                                h-9
                                w-9
                                shrink-0
                                place-items-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                text-white
                                transition-all
                                duration-300
                                hover:border-emerald-400/30
                                hover:bg-white/[0.08]

                                sm:h-10
                                sm:w-10

                                lg:hidden
                            "
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={
                                        mobileOpen
                                            ? "close"
                                            : "menu"
                                    }
                                    initial={{
                                        opacity: 0,
                                        rotate: -90,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: 90,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.18,
                                    }}
                                >
                                    {mobileOpen ? (
                                        <X size={19} />
                                    ) : (
                                        <Menu size={19} />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>

                {/* =================================================
                    MOBILE MENU
                ================================================= */}

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -10,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.22,
                            }}
                            className="
                                relative
                                z-50
                                mx-auto
                                mt-2
                                w-full
                                max-w-7xl
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-[#03150b]/95
                                p-1.5
                                shadow-2xl
                                shadow-black/40
                                backdrop-blur-2xl

                                sm:p-2

                                lg:hidden
                            "
                        >
                            {navItems.map(
                                (item, index) => (
                                    <motion.a
                                        key={
                                            item.href
                                        }
                                        href={
                                            item.href
                                        }
                                        onClick={(event) =>
                                            handleNavClick(
                                                event,
                                                item.href
                                            )
                                        }
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay:
                                                index *
                                                0.05,
                                            duration:
                                                0.25,
                                        }}
                                        className="
                                            block
                                            w-full
                                            rounded-xl
                                            px-3
                                            py-3
                                            text-left
                                            text-xs
                                            font-medium
                                            text-white/65
                                            transition-all
                                            duration-200
                                            hover:bg-emerald-400/10
                                            hover:text-white
                                            active:bg-emerald-400/15

                                            sm:px-4
                                            sm:py-3.5
                                            sm:text-sm
                                        "
                                    >
                                        {item.label}
                                    </motion.a>
                                )
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;