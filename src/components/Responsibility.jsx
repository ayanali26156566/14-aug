import { motion } from "framer-motion";
import {
    BookOpen,
    Scale,
    HeartHandshake,
    Leaf,
    Code2,
    Users,
    Flag,
    Target,
} from "lucide-react";

const Responsibility = ({ language }) => {
    const currentLanguage =
        language === "roman" || language === "ur"
            ? language
            : "en";

    const content = {
        en: {
            eyebrow: "OUR RESPONSIBILITY",
            title: "As Pakistanis, What Should We Do?",
            intro:
                "14 August is not only a day to celebrate. It is also a day to remember our responsibilities as citizens of Pakistan.",
            description:
                "The generations before us struggled for freedom. Today, our responsibility is to use that freedom wisely and contribute to a better Pakistan through our everyday actions.",

            cards: [
                {
                    icon: BookOpen,
                    title: "Learn & Educate",
                    text:
                        "Take education and useful skills seriously. A country's future becomes stronger when its people continue to learn and grow.",
                },
                {
                    icon: HeartHandshake,
                    title: "Respect One Another",
                    text:
                        "Respect people regardless of their background, language, region or differences. Unity begins with how we treat each other.",
                },
                {
                    icon: Scale,
                    title: "Respect the Law",
                    text:
                        "Follow rules in everyday life and respect the rights of others. Small acts of responsibility can make a real difference.",
                },
                {
                    icon: Leaf,
                    title: "Protect Our Environment",
                    text:
                        "Keep our streets and surroundings clean, avoid unnecessary waste and understand that our environment is everyone's responsibility.",
                },
                {
                    icon: Code2,
                    title: "Build Useful Skills",
                    text:
                        "Learn technology, science, business, arts or any other useful field and use your skills to create something valuable.",
                },
                {
                    icon: Users,
                    title: "Help Others Grow",
                    text:
                        "Share knowledge, support people around you and create opportunities where you can. Progress becomes meaningful when others grow with us.",
                },
                {
                    icon: Flag,
                    title: "Go Beyond Social Media",
                    text:
                        "Patriotism is more than flags and social media posts. Real love for a country is reflected in responsible actions.",
                },
                {
                    icon: Target,
                    title: "Build Your Future",
                    text:
                        "Whatever your profession becomes, aim to do your work honestly and well. Today's students and workers will shape tomorrow's Pakistan.",
                },
            ],

            closingSmall: "THE FUTURE IS OUR RESPONSIBILITY",
            closing:
                "Pakistan does not ask us to be perfect. It asks us to understand our responsibility.",
            final:
                "If we learn, work honestly, respect others and contribute in our own way, even small actions can become part of a better Pakistan.",
            question:
                "What can I do for Pakistan?",
            button:
                "I Will Do My Part",
        },

        roman: {
            eyebrow: "HAMARI ZIMMEDARI",
            title: "Ek Pakistani Hone Ki Haisiyat Se Humein Kya Karna Chahiye?",
            intro:
                "14 August sirf jashn ka din nahi. Ye apni zimmedariyon ko yaad karne ka din bhi hai.",
            description:
                "Ham se pehle ki naslon ne azadi ke liye struggle ki. Aaj hamari zimmedari hai ke is azadi ko samajhdari se istemal karein aur apne rozmarra ke amal se behtar Pakistan banane mein hissa lein.",

            cards: [
                {
                    icon: BookOpen,
                    title: "Ilm Hasil Karein",
                    text:
                        "Education aur useful skills ko seriously lein. Mulk ka mustaqbil tab mazboot hota hai jab us ke log seekhte aur grow karte rehte hain.",
                },
                {
                    icon: HeartHandshake,
                    title: "Ek Doosre Ki Izzat Karein",
                    text:
                        "Logon ki zaban, ilaqe, background ya differences ki wajah se unhein neecha na dikhayein. Ittihad is baat se shuru hota hai ke hum ek doosre ke saath kaisa rawayya rakhte hain.",
                },
                {
                    icon: Scale,
                    title: "Qanoon Ki Pabandi Karein",
                    text:
                        "Rozmarra zindagi mein rules follow karein aur doosron ke huqooq ka khayal rakhein. Choti zimmedariyan bhi bara farq paida kar sakti hain.",
                },
                {
                    icon: Leaf,
                    title: "Apna Environment Bachayein",
                    text:
                        "Apni galiyon aur shehron ko saaf rakhein, unnecessary waste kam karein aur samjhein ke environment hum sab ki zimmedari hai.",
                },
                {
                    icon: Code2,
                    title: "Useful Skills Banayein",
                    text:
                        "Technology, science, business, arts ya kisi bhi useful field ko seekhein aur apni skills se kuch valuable create karne ki koshish karein.",
                },
                {
                    icon: Users,
                    title: "Doosron Ko Grow Karne Mein Madad Dein",
                    text:
                        "Knowledge share karein, apne aas paas ke logon ki madad karein aur jahan mumkin ho opportunities create karein.",
                },
                {
                    icon: Flag,
                    title: "Sirf Social Media Tak Na Rahein",
                    text:
                        "Patriotism sirf flags aur social media posts ka naam nahi. Mulk se asli mohabbat responsible actions mein nazar aati hai.",
                },
                {
                    icon: Target,
                    title: "Apna Future Behtar Banayein",
                    text:
                        "Chahe aap kisi bhi profession mein jayein, apna kaam imaandari aur achay tareeqe se karein. Aaj ke students aur workers kal ke Pakistan ko shape karenge.",
                },
            ],

            closingSmall: "MUSTAQBIL HAMARI ZIMMEDARI HAI",
            closing:
                "Pakistan humse perfect hone ka mutalba nahi karta. Pakistan humse apni zimmedari samajhne ka mutalba karta hai.",
            final:
                "Agar hum ilm hasil karein, imaandari se kaam karein, doosron ke huqooq ka khayal rakhein aur apne tareeqe se contribution dein, to hamari choti koshishein bhi behtar Pakistan ka hissa ban sakti hain.",
            question:
                "Main Pakistan ke liye kya kar sakta hoon?",
            button:
                "Main Apna Hissa Dalunga",
        },

        ur: {
            eyebrow: "ہماری ذمہ داری",
            title: "ایک پاکستانی ہونے کی حیثیت سے ہمیں کیا کرنا چاہیے؟",
            intro:
                "14 اگست صرف جشن کا دن نہیں۔ یہ اپنی ذمہ داریوں کو یاد کرنے کا دن بھی ہے۔",
            description:
                "ہم سے پہلے کی نسلوں نے آزادی کے لیے جدوجہد کی۔ آج ہماری ذمہ داری ہے کہ اس آزادی کو سمجھ داری سے استعمال کریں اور اپنے روزمرہ کے عمل سے ایک بہتر پاکستان بنانے میں اپنا حصہ ڈالیں۔",

            cards: [
                {
                    icon: BookOpen,
                    title: "علم حاصل کریں",
                    text:
                        "تعلیم اور مفید ہنر کو سنجیدگی سے لیں۔ ملک کا مستقبل اس وقت مضبوط ہوتا ہے جب اس کے لوگ مسلسل سیکھتے اور ترقی کرتے ہیں۔",
                },
                {
                    icon: HeartHandshake,
                    title: "ایک دوسرے کی عزت کریں",
                    text:
                        "لوگوں کی زبان، علاقے، پس منظر یا اختلافات کی وجہ سے ان کی تضحیک نہ کریں۔ اتحاد اس بات سے شروع ہوتا ہے کہ ہم ایک دوسرے کے ساتھ کیسا رویہ رکھتے ہیں۔",
                },
                {
                    icon: Scale,
                    title: "قانون کی پابندی کریں",
                    text:
                        "روزمرہ زندگی میں قوانین کی پابندی کریں اور دوسروں کے حقوق کا خیال رکھیں۔ چھوٹی چھوٹی ذمہ داریاں بھی بڑا فرق پیدا کر سکتی ہیں۔",
                },
                {
                    icon: Leaf,
                    title: "اپنے ماحول کی حفاظت کریں",
                    text:
                        "اپنی گلیوں اور شہروں کو صاف رکھیں، غیر ضروری فضلہ کم کریں اور سمجھیں کہ ماحول ہم سب کی مشترکہ ذمہ داری ہے۔",
                },
                {
                    icon: Code2,
                    title: "مفید ہنر سیکھیں",
                    text:
                        "ٹیکنالوجی، سائنس، کاروبار، فنون یا کسی بھی مفید شعبے میں مہارت حاصل کریں اور اپنی صلاحیتوں سے کچھ قیمتی بنانے کی کوشش کریں۔",
                },
                {
                    icon: Users,
                    title: "دوسروں کی ترقی میں مدد کریں",
                    text:
                        "اپنا علم دوسروں کے ساتھ بانٹیں، اپنے آس پاس کے لوگوں کی مدد کریں اور جہاں ممکن ہو دوسروں کے لیے مواقع پیدا کریں۔",
                },
                {
                    icon: Flag,
                    title: "صرف سوشل میڈیا تک محدود نہ رہیں",
                    text:
                        "حب الوطنی صرف جھنڈوں اور سوشل میڈیا پوسٹس کا نام نہیں۔ ملک سے حقیقی محبت ذمہ دارانہ عمل سے ظاہر ہوتی ہے۔",
                },
                {
                    icon: Target,
                    title: "اپنا مستقبل بہتر بنائیں",
                    text:
                        "آپ کسی بھی پیشے میں جائیں، اپنا کام ایمانداری اور بہترین طریقے سے کرنے کی کوشش کریں۔ آج کے طلبہ اور کارکن کل کے پاکستان کو تشکیل دیں گے۔",
                },
            ],

            closingSmall: "مستقبل ہماری ذمہ داری ہے",
            closing:
                "پاکستان ہم سے کامل ہونے کا مطالبہ نہیں کرتا۔ پاکستان ہم سے اپنی ذمہ داری سمجھنے کا مطالبہ کرتا ہے۔",
            final:
                "اگر ہم علم حاصل کریں، ایمانداری سے کام کریں، دوسروں کے حقوق کا خیال رکھیں اور اپنے طریقے سے اپنا حصہ ڈالیں تو ہماری چھوٹی کوششیں بھی ایک بہتر پاکستان کا حصہ بن سکتی ہیں۔",
            question:
                "میں پاکستان کے لیے کیا کر سکتا ہوں؟",
            button:
                "میں اپنا حصہ ڈالوں گا",
        },
    };

    const t = content[currentLanguage];

    return (
        <section
            id="responsibility"
            className="
                relative
                overflow-hidden
                bg-[#02170c]
                px-4
                py-24
                sm:px-6
                sm:py-32
                lg:py-40
            "
        >
            {/* Background */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[600px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                    bg-emerald-500/[0.06]
                    blur-[150px]
                "
            />

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.08, 0.16, 0.08],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-1/3
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-emerald-400/10
                    blur-[120px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}

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
                    className="mx-auto max-w-4xl text-center"
                >
                    <div
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-300/10
                            bg-emerald-300/[0.04]
                            px-4
                            py-2
                            text-[9px]
                            font-bold
                            tracking-[0.3em]
                            text-emerald-300/70
                        "
                    >
                        <Flag size={13} />
                        {t.eyebrow}
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-black
                            leading-[1.05]
                            tracking-tight
                            text-white
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        {t.title}
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-3xl
                            text-base
                            font-medium
                            leading-8
                            text-emerald-100/60
                            sm:text-lg
                        "
                    >
                        {t.intro}
                    </p>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-3xl
                            text-sm
                            leading-7
                            text-white/35
                            sm:text-base
                        "
                    >
                        {t.description}
                    </p>
                </motion.div>

                {/* RESPONSIBILITIES */}

                <div
                    className="
                        mt-20
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {t.cards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
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
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay:
                                        (index % 4) * 0.08,
                                }}
                                whileHover={{
                                    y: -7,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    bg-white/[0.025]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:bg-white/[0.045]
                                "
                            >
                                {/* Hover glow */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-10
                                        -top-10
                                        h-28
                                        w-28
                                        rounded-full
                                        bg-emerald-400/10
                                        opacity-0
                                        blur-3xl
                                        transition
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />

                                <div
                                    className="
                                        relative
                                        grid
                                        h-11
                                        w-11
                                        place-items-center
                                        rounded-xl
                                        bg-emerald-400/10
                                        text-emerald-300
                                        transition
                                        duration-300
                                        group-hover:bg-emerald-400
                                        group-hover:text-[#02170c]
                                    "
                                >
                                    <Icon size={20} />
                                </div>

                                <h3
                                    className="
                                        relative
                                        mt-6
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        relative
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-white/40
                                    "
                                >
                                    {item.text}
                                </p>

                                <div
                                    className="
                                        mt-6
                                        h-px
                                        w-8
                                        bg-emerald-400/30
                                        transition-all
                                        duration-300
                                        group-hover:w-16
                                    "
                                />
                            </motion.article>
                        );
                    })}
                </div>

                {/* CLOSING MESSAGE */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.97,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        relative
                        mt-24
                        overflow-hidden
                        rounded-[2rem]
                        bg-gradient-to-br
                        from-emerald-400/[0.12]
                        via-white/[0.025]
                        to-transparent
                        p-8
                        text-center
                        sm:p-12
                        lg:p-16
                    "
                >
                    {/* Decorative flag glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-0
                            h-40
                            w-72
                            -translate-x-1/2
                            rounded-full
                            bg-emerald-400/10
                            blur-[80px]
                        "
                    />

                    <p
                        className="
                            relative
                            text-[9px]
                            font-bold
                            tracking-[0.3em]
                            text-emerald-300/70
                        "
                    >
                        {t.closingSmall}
                    </p>

                    <h3
                        className="
                            relative
                            mx-auto
                            mt-5
                            max-w-4xl
                            text-2xl
                            font-black
                            leading-tight
                            text-white
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        {t.closing}
                    </h3>

                    <p
                        className="
                            relative
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-sm
                            leading-8
                            text-white/45
                            sm:text-base
                        "
                    >
                        {t.final}
                    </p>

                    {/* Question */}

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
                        transition={{
                            delay: 0.25,
                        }}
                        className="
                            relative
                            mx-auto
                            mt-10
                            max-w-xl
                        "
                    >
                        <p
                            className="
                                text-2xl
                                font-black
                                text-emerald-300
                                sm:text-3xl
                            "
                        >
                            “{t.question}”
                        </p>

                        <div
                            className="
                                mx-auto
                                mt-6
                                h-px
                                w-20
                                bg-emerald-300/30
                            "
                        />

                        <p
                            className="
                                mt-6
                                text-4xl
                            "
                        >
                            🇵🇰
                        </p>
                    </motion.div>

                    {/* Button */}

                    <motion.button
                        type="button"
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
                            relative
                            mt-8
                            rounded-xl
                            bg-emerald-400
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-[#02170c]
                            shadow-[0_15px_40px_rgba(52,211,153,0.12)]
                            transition
                            hover:bg-emerald-300
                        "
                    >
                        {t.button}
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Responsibility;