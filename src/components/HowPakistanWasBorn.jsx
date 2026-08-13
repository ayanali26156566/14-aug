import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    Users,
    Lightbulb,
    ScrollText,
    Landmark,
    Map,
    Flag,
    ArrowRight,
    X,
    ChevronDown,
} from "lucide-react";

/* =========================================================
   HOW PAKISTAN WAS BORN
   ---------------------------------------------------------
   Languages:
   en     = English
   roman  = Roman Urdu
   ur     = Urdu
========================================================= */

const historyData = [
    {
        id: 1,
        year: "1857",
        icon: BookOpen,

        title: {
            en: "The Beginning of a New Awakening",
            roman: "Ek Nayi Bedari Ka Aaghaz",
            ur: "ایک نئی بیداری کا آغاز",
        },

        shortText: {
            en: "The events of 1857 changed the political and social landscape of the Indian subcontinent and created the conditions for a new Muslim intellectual and educational awakening.",
            roman:
                "1857 ke waqiat ne Hindustan ke siyasi aur samaji mahaul ko badal diya aur Musalmanon mein taleemi aur fikri bedari ki zaroorat ko numayan kiya.",
            ur: "1857 کے واقعات نے برصغیر کے سیاسی اور سماجی منظرنامے کو بدل دیا اور مسلمانوں میں تعلیمی اور فکری بیداری کی ضرورت کو نمایاں کیا۔",
        },

        detailText: {
            en: "After the upheaval of 1857, Muslims of the subcontinent faced major political, educational and economic challenges. Sir Syed Ahmad Khan emphasized modern education and intellectual development as essential for the community's progress. His educational movement helped create a generation that was increasingly aware of political change and the importance of organized representation.",
            roman:
                "1857 ke baad bar-e-sagheer ke Musalmanon ko siyasi, taleemi aur maashi mushkilaat ka samna tha. Sir Syed Ahmad Khan ne jadeed taleem aur fikri taraqqi ko qaum ki taraqqi ke liye zaroori qarar diya. Unki taleemi tehreek ne ek aisi nasal tayar karne mein kirdar ada ki jo siyasi tabdeeliyon aur munazzam numayindagi ki ahmiyat ko samajhne lagi.",
            ur: "1857 کے بعد برصغیر کے مسلمانوں کو سیاسی، تعلیمی اور معاشی مشکلات کا سامنا تھا۔ سر سید احمد خان نے جدید تعلیم اور فکری ترقی کو قوم کی ترقی کے لیے ضروری قرار دیا۔ ان کی تعلیمی تحریک نے ایسی نسل کی تشکیل میں کردار ادا کیا جو سیاسی تبدیلیوں اور منظم نمائندگی کی اہمیت کو سمجھنے لگی۔",
        },

        cardTitle: {
            en: "Educational Awakening",
            roman: "Taleemi Bedari",
            ur: "تعلیمی بیداری",
        },

        cardText: {
            en: "Education became an important foundation for future political awareness.",
            roman: "Taleem mustaqbil ki siyasi sha'oor ki aham bunyaad bani.",
            ur: "تعلیم مستقبل کے سیاسی شعور کی ایک اہم بنیاد بنی۔",
        },
    },

    {
        id: 2,
        year: "1906",
        icon: Users,

        title: {
            en: "A Political Voice",
            roman: "Ek Siyasi Awaaz",
            ur: "ایک سیاسی آواز",
        },

        shortText: {
            en: "The All-India Muslim League was founded in Dhaka, creating an important platform for Muslim political representation.",
            roman:
                "Dhaka mein All-India Muslim League qaim hui, jis ne Musalmanon ki siyasi numayindagi ke liye ek aham platform faraham kiya.",
            ur: "ڈھاکہ میں آل انڈیا مسلم لیگ قائم ہوئی، جس نے مسلمانوں کی سیاسی نمائندگی کے لیے ایک اہم پلیٹ فارم فراہم کیا۔",
        },

        detailText: {
            en: "The All-India Muslim League was established in Dhaka in 1906. Its early objectives included protecting and advancing Muslim political interests. Over the following decades, the organization developed into the principal political platform of the Pakistan Movement and eventually came under the leadership of Muhammad Ali Jinnah.",
            roman:
                "All-India Muslim League 1906 mein Dhaka mein qaim hui. Is ke ibtidayi maqasid mein Musalmanon ke siyasi mafadaat ka tahaffuz aur taraqqi shamil thi. Agle chand dashkon mein yeh tanzeem Pakistan Movement ka bunyadi siyasi platform bani aur aakhirkar Muhammad Ali Jinnah ki qiyadat mein mazboot hui.",
            ur: "آل انڈیا مسلم لیگ 1906 میں ڈھاکہ میں قائم ہوئی۔ اس کے ابتدائی مقاصد میں مسلمانوں کے سیاسی مفادات کا تحفظ اور ترقی شامل تھی۔ اگلی کئی دہائیوں میں یہ تنظیم تحریک پاکستان کا بنیادی سیاسی پلیٹ فارم بنی اور بالآخر محمد علی جناح کی قیادت میں مضبوط ہوئی۔",
        },

        cardTitle: {
            en: "All-India Muslim League",
            roman: "All-India Muslim League",
            ur: "آل انڈیا مسلم لیگ",
        },

        cardText: {
            en: "An organized political platform for Muslim representation.",
            roman: "Musalmanon ki siyasi numayindagi ka munazzam platform.",
            ur: "مسلمانوں کی سیاسی نمائندگی کے لیے ایک منظم پلیٹ فارم۔",
        },
    },

    {
        id: 3,
        year: "1930",
        icon: Lightbulb,

        title: {
            en: "The Vision of Allama Iqbal",
            roman: "Allama Iqbal Ka Tasawwur",
            ur: "علامہ اقبال کا تصور",
        },

        shortText: {
            en: "Allama Muhammad Iqbal's Allahabad Address presented a political vision for the Muslim-majority regions of north-western India.",
            roman:
                "Allama Muhammad Iqbal ke Allahabad Address ne Hindustan ke shumal-maghribi Muslim aksariyati ilaqon ke liye ek siyasi tasawwur pesh kiya.",
            ur: "علامہ محمد اقبال کے خطبہ الہ آباد نے ہندوستان کے شمال مغربی مسلم اکثریتی علاقوں کے لیے ایک سیاسی تصور پیش کیا۔",
        },

        detailText: {
            en: "In his presidential address at Allahabad in 1930, Allama Iqbal discussed the political future of Muslims in India and expressed his vision of consolidating the Muslim-majority provinces of north-western India into a self-governing unit within a broader constitutional framework. His address became an important intellectual reference point in the development of Muslim political thought.",
            roman:
                "1930 mein Allahabad ke presidential address mein Allama Iqbal ne Hindustan ke Musalmanon ke siyasi mustaqbil par baat ki aur shumal-maghribi Muslim aksariyati subon ko ek khud-mukhtar siyasi unit ki surat mein dekhne ka tasawwur pesh kiya. Unka khitab Muslim siyasi fikr ki taraqqi mein ek aham fikri marhala bana.",
            ur: "1930 میں الہ آباد کے صدارتی خطبے میں علامہ اقبال نے ہندوستان کے مسلمانوں کے سیاسی مستقبل پر گفتگو کی اور شمال مغربی مسلم اکثریتی صوبوں کو ایک خود مختار سیاسی اکائی کی صورت میں دیکھنے کا تصور پیش کیا۔ ان کا خطبہ مسلم سیاسی فکر کی ترقی میں ایک اہم فکری مرحلہ بن گیا۔",
        },

        cardTitle: {
            en: "A Political Vision",
            roman: "Ek Siyasi Tasawwur",
            ur: "ایک سیاسی تصور",
        },

        cardText: {
            en: "Ideas that influenced the intellectual development of the Pakistan Movement.",
            roman:
                "Aise afkar jinhon ne Pakistan Movement ki fikri taraqqi par asar dala.",
            ur: "ایسے افکار جنہوں نے تحریک پاکستان کی فکری ترقی پر اثر ڈالا۔",
        },
    },

    {
        id: 4,
        year: "1940",
        icon: ScrollText,

        title: {
            en: "The Lahore Resolution",
            roman: "Qarardad-e-Lahore",
            ur: "قراردادِ لاہور",
        },

        shortText: {
            en: "On 23 March 1940, the All-India Muslim League adopted the Lahore Resolution, marking a major turning point in the Pakistan Movement.",
            roman:
                "23 March 1940 ko All-India Muslim League ne Qarardad-e-Lahore manzoor ki, jo Pakistan Movement ka ek aham mor tha.",
            ur: "23 مارچ 1940 کو آل انڈیا مسلم لیگ نے قراردادِ لاہور منظور کی، جو تحریک پاکستان کا ایک اہم موڑ تھا۔",
        },

        detailText: {
            en: "The Lahore Resolution was adopted at the Muslim League's annual session in Lahore. It called for the reorganization of geographically contiguous Muslim-majority areas into independent states in which the constituent units would be autonomous and sovereign. The resolution became a defining political milestone and was later closely associated with the demand for Pakistan.",
            roman:
                "Qarardad-e-Lahore Muslim League ke Lahore mein hone wale salana ijlas mein manzoor hui. Is mein Muslim aksariyati ilaqon ki siyasi tanzeem-e-nau aur un ke liye mustaqil riyasaton ka mutalba kiya gaya jahan constituent units khud-mukhtar aur sovereign hon. Yeh qarardad baad mein Pakistan ke mutalbe se gehri tor par munsalik ho gayi.",
            ur: "قراردادِ لاہور مسلم لیگ کے لاہور میں ہونے والے سالانہ اجلاس میں منظور ہوئی۔ اس میں مسلم اکثریتی علاقوں کی سیاسی تنظیمِ نو اور ان کے لیے آزاد ریاستوں کا مطالبہ کیا گیا جہاں تشکیل دینے والی اکائیاں خود مختار اور خود حاکم ہوں۔ یہ قرارداد بعد میں پاکستان کے مطالبے سے گہری طور پر منسلک ہو گئی۔",
        },

        cardTitle: {
            en: "23 March 1940",
            roman: "23 March 1940",
            ur: "23 مارچ 1940",
        },

        cardText: {
            en: "A defining political milestone in the Pakistan Movement.",
            roman: "Pakistan Movement ka ek faisla-kun siyasi marhala.",
            ur: "تحریک پاکستان کا ایک فیصلہ کن سیاسی مرحلہ۔",
        },
    },

    {
        id: 5,
        year: "1940–1947",
        icon: Landmark,

        title: {
            en: "The Final Political Struggle",
            roman: "Aakhri Siyasi Jadd-o-Jehd",
            ur: "آخری سیاسی جدوجہد",
        },

        shortText: {
            en: "The years that followed brought elections, negotiations and political debates over the future of British India.",
            roman:
                "Is ke baad ke saalon mein intikhabat, muzakarat aur Hindustan ke mustaqbil par siyasi behas ka silsila jari raha.",
            ur: "اس کے بعد کے برسوں میں انتخابات، مذاکرات اور ہندوستان کے مستقبل پر سیاسی بحث کا سلسلہ جاری رہا۔",
        },

        detailText: {
            en: "Between 1940 and 1947, the political struggle intensified. The Muslim League expanded its support and performed strongly in the 1945–46 elections in Muslim constituencies. Political negotiations, including the Cabinet Mission discussions, failed to produce an agreed constitutional settlement. Muhammad Ali Jinnah and the Muslim League increasingly argued that Muslims required a separate political arrangement to protect their political interests.",
            roman:
                "1940 se 1947 ke darmiyan siyasi jadd-o-jehad mein shiddat aayi. Muslim League ki himayat barhi aur 1945–46 ke intikhabat mein Muslim constituencies mein is ne mazboot karkardagi dikhayi. Cabinet Mission samet mukhtalif siyasi muzakarat kisi mushtarka aa'ini hal tak na pohanch sake. Muhammad Ali Jinnah aur Muslim League ka moqif mazeed mazboot hua ke Musalmanon ke siyasi mafadaat ke tahaffuz ke liye ek alag siyasi intezam zaroori hai.",
            ur: "1940 سے 1947 کے درمیان سیاسی جدوجہد میں شدت آئی۔ مسلم لیگ کی حمایت میں اضافہ ہوا اور 1945–46 کے انتخابات میں مسلم حلقوں میں اس نے مضبوط کارکردگی دکھائی۔ کابینہ مشن سمیت مختلف سیاسی مذاکرات کسی متفقہ آئینی حل تک نہ پہنچ سکے۔ محمد علی جناح اور مسلم لیگ کا مؤقف مزید مضبوط ہوا کہ مسلمانوں کے سیاسی مفادات کے تحفظ کے لیے ایک الگ سیاسی انتظام ضروری ہے۔",
        },

        cardTitle: {
            en: "Political Leadership",
            roman: "Siyasi Qiyadat",
            ur: "سیاسی قیادت",
        },

        cardText: {
            en: "Elections, negotiations and a growing demand for a separate political future.",
            roman:
                "Intikhabat, muzakarat aur alag siyasi mustaqbil ka barhta hua mutalba.",
            ur: "انتخابات، مذاکرات اور الگ سیاسی مستقبل کا بڑھتا ہوا مطالبہ۔",
        },
    },

    {
        id: 6,
        year: "3 June 1947",
        icon: Map,

        title: {
            en: "The Partition Plan",
            roman: "Taqseem ka Mansuba",
            ur: "تقسیم کا منصوبہ",
        },

        shortText: {
            en: "The British government announced the plan for the partition of British India, setting the framework for two new independent dominions.",
            roman:
                "British hukoomat ne British India ki taqseem ka mansuba pesh kiya, jis ne do naye mustaqil dominions ke qayam ka rasta hamwar kiya.",
            ur: "برطانوی حکومت نے برطانوی ہندوستان کی تقسیم کا منصوبہ پیش کیا، جس نے دو نئی آزاد ڈومینینز کے قیام کی راہ ہموار کی۔",
        },

        detailText: {
            en: "On 3 June 1947, Lord Mountbatten announced the partition plan. The plan provided for the division of British India and the creation of two independent dominions. The process involved difficult decisions concerning provinces, boundaries, institutions and the transfer of power.",
            roman:
                "3 June 1947 ko Lord Mountbatten ne partition plan ka elan kiya. Is mansube ke tehat British India ko taqseem karke do mustaqil dominions qaim kiye jane thay. Is amal mein subon, hudood, idaron aur ikhtiyarat ki muntaqili se mutaliq mushkil faislay shamil thay.",
            ur: "3 جون 1947 کو لارڈ ماؤنٹ بیٹن نے تقسیم کے منصوبے کا اعلان کیا۔ اس منصوبے کے تحت برطانوی ہندوستان کو تقسیم کرکے دو آزاد ڈومینینز قائم کیے جانے تھے۔ اس عمل میں صوبوں، سرحدوں، اداروں اور اختیارات کی منتقلی سے متعلق مشکل فیصلے شامل تھے۔",
        },

        cardTitle: {
            en: "A New Political Map",
            roman: "Ek Naya Siyasi Naqsha",
            ur: "ایک نیا سیاسی نقشہ",
        },

        cardText: {
            en: "The final framework for the transfer of power.",
            roman: "Ikhtiyarat ki muntaqili ka aakhri siyasi framework.",
            ur: "اختیارات کی منتقلی کا آخری سیاسی خاکہ۔",
        },
    },

    {
        id: 7,
        year: "14 August 1947",
        icon: Flag,

        title: {
            en: "Pakistan Emerges",
            roman: "Pakistan Wajood Mein Aaya",
            ur: "پاکستان وجود میں آیا",
        },

        shortText: {
            en: "On 14 August 1947, Pakistan became an independent dominion, beginning a new chapter in the history of the subcontinent.",
            roman:
                "14 August 1947 ko Pakistan ek mustaqil dominion ke taur par wajood mein aaya aur bar-e-sagheer ki tareekh mein ek naya baab shuru hua.",
            ur: "14 اگست 1947 کو پاکستان ایک آزاد ڈومینین کے طور پر وجود میں آیا اور برصغیر کی تاریخ میں ایک نیا باب شروع ہوا۔",
        },

        detailText: {
            en: "On 14 August 1947, Pakistan emerged as an independent dominion. Muhammad Ali Jinnah became its first Governor-General. The new country immediately faced enormous challenges, including the movement and resettlement of millions of people, the establishment of institutions, and the task of building a functioning state.",
            roman:
                "14 August 1947 ko Pakistan ek mustaqil dominion ke taur par wajood mein aaya. Muhammad Ali Jinnah is ke pehle Governor-General bane. Naye mulk ko foran hi bohat se bare challenges ka samna tha, jin mein lakhon logon ki muntaqili aur abadkari, idaron ka qayam aur ek kaam karne wali riyasat ki tameer shamil thi.",
            ur: "14 اگست 1947 کو پاکستان ایک آزاد ڈومینین کے طور پر وجود میں آیا۔ محمد علی جناح اس کے پہلے گورنر جنرل بنے۔ نئے ملک کو فوراً ہی بہت سے بڑے چیلنجز کا سامنا تھا، جن میں لاکھوں لوگوں کی منتقلی اور آبادکاری، اداروں کا قیام اور ایک فعال ریاست کی تعمیر شامل تھی۔",
        },

        cardTitle: {
            en: "A New Beginning",
            roman: "Ek Nayi Shuruaat",
            ur: "ایک نئی شروعات",
        },

        cardText: {
            en: "A new country began its journey with immense hopes and responsibilities.",
            roman:
                "Ek naye mulk ne bohat si umeedon aur zimmedariyon ke saath apna safar shuru kiya.",
            ur: "ایک نئے ملک نے بہت سی امیدوں اور ذمہ داریوں کے ساتھ اپنا سفر شروع کیا۔",
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
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

/* =========================================================
   COMPONENT
========================================================= */

const HowPakistanWasBorn = ({ language = "en" }) => {
    const [selectedStory, setSelectedStory] = useState(null);

    const isUrdu = language === "ur";

    return (
        <>
            <section
                id="how-pakistan-was-born"
                dir={isUrdu ? "rtl" : "ltr"}
                className="relative overflow-hidden bg-[#02170c] py-24 sm:py-28 lg:py-32"
            >
                {/* =================================================
            BACKGROUND EFFECTS
        ================================================= */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                            opacity: [0.25, 0.4, 0.25],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
                    />

                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.2, 0.35, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-3xl"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04),transparent_60%)]" />
                </div>

                {/* =================================================
            MAIN CONTAINER
        ================================================= */}

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    {/* =================================================
              HEADER
          ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto mb-20 max-w-3xl text-center"
                    >
                        {/* Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                            <Flag className="h-4 w-4" />

                            <span>
                                {getText(
                                    {
                                        en: "The Journey to Independence",
                                        roman: "Azadi Tak Ka Safar",
                                        ur: "آزادی تک کا سفر",
                                    },
                                    language
                                )}
                            </span>
                        </div>

                        {/* Heading */}

                        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {getText(
                                {
                                    en: "How Pakistan Was",
                                    roman: "Pakistan Kaise",
                                    ur: "پاکستان کیسے",
                                },
                                language
                            )}{" "}
                            <div className="text-green-400">
                                {getText(
                                    {
                                        en: "Born",
                                        roman: "Wajood Mein Aaya",
                                        ur: "وجود میں آیا",
                                    },
                                    language
                                )}
                            </div>
                        </h2>

                        {/* Description */}

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                            {getText(
                                {
                                    en: "Pakistan's creation was not a single event. It was the result of decades of political struggle, intellectual thought, leadership and determination.",
                                    roman:
                                        "Pakistan ka qayam kisi aik din ka waqia nahi tha. Yeh dashkon ki siyasi jadd-o-jehad, fikri soch, qiyadat aur azm ka nateeja tha.",
                                    ur: "پاکستان کا قیام کسی ایک دن کا واقعہ نہیں تھا۔ یہ دہائیوں کی سیاسی جدوجہد، فکری سوچ، قیادت اور عزم کا نتیجہ تھا۔",
                                },
                                language
                            )}
                        </p>
                    </motion.div>

                    {/* =================================================
              TIMELINE
          ================================================= */}

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08,
                        }}
                        className="relative mx-auto max-w-6xl"
                    >
                        {/* Desktop Center Line */}

                        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-500/40 to-transparent md:block" />

                        {/* Mobile Line */}

                        <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-transparent via-green-500/40 to-transparent md:hidden" />

                        {historyData.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.article
                                    key={item.id}
                                    variants={itemVariants}
                                    className="relative mb-16 last:mb-0 md:mb-24"
                                >
                                    <div
                                        className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-20 ${isEven ? "" : "md:[&>*:first-child]:order-2"
                                            }`}
                                    >
                                        {/* =================================================
                        CONTENT
                    ================================================= */}

                                        <div
                                            className={`pl-12 md:pl-0 ${isEven
                                                ? "md:pr-10 md:text-right"
                                                : "md:pl-10 md:text-left"
                                                }`}
                                        >
                                            {/* Year */}

                                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-400 sm:text-sm">
                                                {item.year}
                                            </span>

                                            {/* Title */}

                                            <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                                                {getText(item.title, language)}
                                            </h3>

                                            {/* Description */}

                                            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                                                {getText(item.shortText, language)}
                                            </p>

                                            {/* Read More */}

                                            <button
                                                type="button"
                                                onClick={() => setSelectedStory(item)}
                                                className={`group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition-colors hover:text-green-300 ${isEven ? "md:flex-row-reverse" : ""
                                                    }`}
                                            >
                                                <span>
                                                    {getText(
                                                        {
                                                            en: "Read Full Story",
                                                            roman: "Mukammal Kahani Parhein",
                                                            ur: "مکمل کہانی پڑھیں",
                                                        },
                                                        language
                                                    )}
                                                </span>

                                                <ArrowRight
                                                    className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isUrdu ? "rotate-180 group-hover:-translate-x-1" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>

                                        {/* =================================================
                        INFO CARD
                    ================================================= */}

                                        <div
                                            className={`pl-12 md:pl-0 ${isEven ? "md:pl-10" : "md:pr-10"
                                                }`}
                                        >
                                            <motion.button
                                                type="button"
                                                onClick={() => setSelectedStory(item)}
                                                whileHover={{
                                                    y: -6,
                                                }}
                                                transition={{
                                                    duration: 0.25,
                                                }}
                                                className="group w-full text-left"
                                            >
                                                <div
                                                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-green-500/30 group-hover:bg-green-500/[0.04] group-hover:shadow-2xl group-hover:shadow-green-500/5 ${item.id === 7
                                                        ? "border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent"
                                                        : ""
                                                        }`}
                                                >
                                                    {/* Glow */}

                                                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                                    <div className="relative flex items-center gap-4">
                                                        {/* Icon */}

                                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-500/10 bg-green-500/10 text-green-400 transition-transform duration-300 group-hover:scale-105">
                                                            <Icon className="h-6 w-6" />
                                                        </div>

                                                        {/* Card text */}

                                                        <div className="min-w-0">
                                                            <h4 className="truncate text-base font-bold text-white sm:text-lg">
                                                                {getText(item.cardTitle, language)}
                                                            </h4>

                                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                                {getText(item.cardText, language)}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Bottom indicator */}

                                                    <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                                                        <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                                                            {item.year}
                                                        </span>

                                                        <span className="flex items-center gap-1 text-xs font-semibold text-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                            {getText(
                                                                {
                                                                    en: "Explore",
                                                                    roman: "Dekhein",
                                                                    ur: "دیکھیں",
                                                                },
                                                                language
                                                            )}

                                                            <ArrowRight className="h-3.5 w-3.5" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* =================================================
                      TIMELINE DOT
                  ================================================= */}

                                    <div className="absolute left-[18px] top-8 -translate-x-1/2 md:left-1/2 md:top-1/2">
                                        <motion.div
                                            whileInView={{
                                                scale: [0.7, 1.15, 1],
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            className={`flex items-center justify-center rounded-full border-4 border-slate-950 bg-green-400 shadow-lg shadow-green-500/40 ${item.id === 7 ? "h-5 w-5" : "h-4 w-4"
                                                }`}
                                        />
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                    {/* =================================================
              CLOSING MESSAGE
          ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mx-auto mt-24 max-w-3xl text-center"
                    >
                        <div className="mx-auto mb-8 h-px w-16 bg-green-500/50" />

                        <p className="text-lg leading-8 text-slate-300 sm:text-2xl sm:leading-10">
                            {getText(
                                {
                                    en: "Pakistan was not created in a single day. It was shaped by decades of ideas, political struggle, leadership and determination.",
                                    roman:
                                        "Pakistan aik din mein nahi bana. Isay dashkon ke afkar, siyasi jadd-o-jehad, qiyadat aur azm ne tashkeel diya.",
                                    ur: "پاکستان ایک دن میں نہیں بنا۔ اسے دہائیوں کے افکار، سیاسی جدوجہد، قیادت اور عزم نے تشکیل دیا۔",
                                },
                                language
                            )}
                        </p>

                        <div className="mt-8 flex justify-center">
                            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-5 py-3 text-sm font-medium text-green-400">
                                <Flag className="h-4 w-4" />

                                <span>
                                    {getText(
                                        {
                                            en: "14 August 1947",
                                            roman: "14 August 1947",
                                            ur: "14 اگست 1947",
                                        },
                                        language
                                    )}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* =====================================================
          FULL STORY MODAL
      ===================================================== */}

            < AnimatePresence >
                {selectedStory && (
                    <motion.div
                        dir={isUrdu ? "rtl" : "ltr"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
                        onClick={() => setSelectedStory(null)}
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
                                duration: 0.3,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
                        >
                            {/* =================================================
                  MODAL HEADER
              ================================================= */}

                            <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-900/90 px-5 py-5 backdrop-blur-xl sm:px-7">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                        {React.createElement(selectedStory.icon, {
                                            className: "h-6 w-6",
                                        })}
                                    </div>

                                    {/* Title */}

                                    <div className="min-w-0 flex-1">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                                            {selectedStory.year}
                                        </span>

                                        <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                                            {getText(selectedStory.title, language)}
                                        </h3>
                                    </div>

                                    {/* Close */}

                                    <button
                                        type="button"
                                        onClick={() => setSelectedStory(null)}
                                        aria-label="Close"
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* =================================================
                  MODAL CONTENT
              ================================================= */}

                            <div className="px-5 py-7 sm:px-8 sm:py-9">
                                {/* Intro */}

                                <p className="text-base font-medium leading-8 text-slate-300 sm:text-lg">
                                    {getText(selectedStory.shortText, language)}
                                </p>

                                {/* Divider */}

                                <div className="my-7 h-px bg-white/10" />

                                {/* Full Story */}

                                <p className="text-sm leading-8 text-slate-400 sm:text-base sm:leading-9">
                                    {getText(selectedStory.detailText, language)}
                                </p>

                                {/* =================================================
                    MODAL FOOTER
                ================================================= */}

                                <div className="mt-8 rounded-2xl border border-green-500/10 bg-green-500/5 p-5">
                                    <div className="flex items-center gap-3">
                                        <Flag className="h-5 w-5 shrink-0 text-green-400" />

                                        <p className="text-sm font-medium leading-6 text-slate-300">
                                            {getText(
                                                {
                                                    en: "Every chapter of this journey contributed to the story of Pakistan.",
                                                    roman:
                                                        "Is safar ka har marhala Pakistan ki kahani ka aik aham hissa bana.",
                                                    ur: "اس سفر کا ہر مرحلہ پاکستان کی کہانی کا ایک اہم حصہ بنا۔",
                                                },
                                                language
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
                }
            </ AnimatePresence>
        </>
    );
};

export default HowPakistanWasBorn;