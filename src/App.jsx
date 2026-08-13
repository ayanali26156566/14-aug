import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Leaders from "./components/Leaders.jsx";
import MoreHeroes from "./components/MoreHeroes.jsx";
import HowPakistanWasBorn from "./components/HowPakistanWasBorn";
import WhatWeLearn from "./components/WhatWeLearn";
import Footer from "./components/Footer";
import Responsibility from "./components/Responsibility";
function App() {
    const [language, setLanguage] = useState(() => {
        return (
            localStorage.getItem("pakistan-language") ||
            "en"
        );
    });

    useEffect(() => {
        document.documentElement.lang =
            language === "ur" ? "ur" : "en";

        document.documentElement.dir =
            language === "ur" ? "rtl" : "ltr";
    }, [language]);

    return (
        <div className="min-h-screen bg-[#03150b] text-white">
            <Navbar
                language={language}
                setLanguage={setLanguage}
            />

            <main>
                <Hero language={language} />

                <Countdown language={language} />



                <Leaders language={language} />



                <MoreHeroes language={language} />

                <HowPakistanWasBorn language={language} />

                <WhatWeLearn language={language} />
                    
                <Responsibility language={language} />

                <Footer language={language} />

                {/* Next sections will come here */}
            </main>
        </div>
    );
}

export default App;