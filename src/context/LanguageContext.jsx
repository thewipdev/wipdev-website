import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        nav: {
            home: 'Home',
            experience: 'Experience',
            about: 'About',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi! I'm Muhammed,",
            roles: ["Developer", "Entrepreneur", "Organizer"],
            description: "Turning complex ideas into scalable products while fostering ecosystems where technology and talent thrive together",
            schedule: "Schedule a Meeting",
            contact: "GET IN TOUCH",
        },
        about: {
            title: "Forever Work In Progress",
            bio: "I'm Muhammed Hasanbaşoğlu, also known as wipdev. I'm a software developer, GDG organizer, and entrepreneur based in Samsun, Turkey. I love building things that live on the internet, from websites and applications to complex systems. My goal is to always build products that provide pixel-perfect, performant experiences.",
            projects: "Projects Completed",
            courses: "Completed Courses",
        },
        experience: {
            title: "Work Experience",
            jobs: [
                {
                    id: 1,
                    role: 'Founder & Lead Developer',
                    company: 'Ludomet',
                    period: 'April 2025 - Current',
                    description: 'Pivoting from İleriOkul, I am currently architecting Ludomet, a "Generative Economic Stress-Testing Engine" for game developers. Moving beyond static spreadsheets, I build algorithms that simulate hundreds of gameplay hours in seconds. My goal is to mathematicalize the abstract concept of "Game Balance," helping studios predict churn risks and optimize time-to-fun metrics before launch.',
                },
                {
                    id: 2,
                    role: 'Organizer',
                    company: 'Google Developer Groups (GDG) Samsun',
                    period: 'April 2024 - Current',
                    description: 'Organizing meetups, hackathons, and conferences regarding the latest Google technologies. As a key organizer of DevFest Samsun, the largest tech festival in the Black Sea region, I support a community of over 1,000+ developers by connecting innovators through impactful events.',
                },
                {
                    id: 3,
                    role: 'Board Member & Treasurer',
                    company: 'TEVED',
                    period: 'December 2025 - Current',
                    description: 'As a Founding Member and current Treasurer of the Technology and Productivity Association (TEVED), I lead organizational strategies to enhance digital literacy. Beyond financial governance, I am co-authoring a "Regional Maturity Report" to analyze the local ecosystem and managing NGO processes for impactful digital transformation projects.',
                },
            ]
        },
        contact: {
            title: "Get In Touch",
            email: "Email",
            telegram: "Telegram",
            location: "Location",
            locationValue: "Samsun, Turkey",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "Failed to send message. Please try again.",
            }
        },
        footer: {
            rights: "All rights reserved.",
        }
    },
    tr: {
        nav: {
            home: 'Ana Sayfa',
            experience: 'Deneyim',
            about: 'Hakkımda',
            contact: 'İletişim',
        },
        hero: {
            greeting: "Merhaba! Ben Muhammed,",
            roles: ["Geliştirici", "Girişimci", "Organizatör"],
            description: "Karmaşık fikirleri ölçeklenebilir ürünlere dönüştürürken, teknoloji ve yeteneğin birlikte geliştiği ekosistemleri destekliyorum.",
            schedule: "Toplantı Planla",
            contact: "İLETİŞİME GEÇ",
        },
        about: {
            title: "Daima Gelişim Halinde",
            bio: "Ben Muhammed Hasanbaşoğlu, nam-ı diğer wipdev. Samsun merkezli bir yazılım geliştirici, GDG organizatörü ve girişimciyim. Web sitelerinden uygulamalara ve karmaşık sistemlere kadar internet üzerinde yaşayan şeyler inşa etmeyi seviyorum. Hedefim her zaman piksel mükemmelliğinde, performanslı deneyimler sunan ürünler geliştirmektir.",
            projects: "Tamamlanan Proje",
            courses: "Tamamlanan Kurs",
        },
        experience: {
            title: "İş Deneyimi",
            jobs: [
                {
                    id: 1,
                    role: 'Kurucu & Baş Geliştirici',
                    company: 'Ludomet',
                    period: 'Nisan 2025 - Günümüz',
                    description: 'İleriOkul girişimini pivot ederek, oyun ekonomilerini statik Excel tablolarından kurtaran Ludomet\'i geliştiriyorum. Bir "Üretken Ekonomi Stres Testi Motoru" olarak, yüzlerce saatlik oynanışı saniyeler içinde simüle eden algoritmalar tasarlıyorum. Vizyonum; "Oyun Dengesi" kavramını formülize ederek geliştiricilere matematiksel öngörüler ve risk analizleri sunmak.',
                },
                {
                    id: 2,
                    role: 'Organizatör',
                    company: 'Google Developer Groups (GDG) Samsun',
                    period: 'Nisan 2024 - Günümüz',
                    description: 'En son Google teknolojileriyle ilgili buluşmalar, hackathonlar ve konferanslar düzenliyorum. Karadeniz bölgesinin en büyük teknoloji festivali olan DevFest Samsun\'un kilit organizatörlerinden biri olarak, yenilikçileri etkili etkinliklerle bir araya getirerek 1.000\'den fazla geliştiriciden oluşan bir topluluğu destekliyorum.',
                },
                {
                    id: 3,
                    role: 'Yönetim Kurulu Üyesi & Sayman',
                    company: 'TEVED',
                    period: 'Aralık 2025 - Günümüz',
                    description: 'Hem Kurucu Üye hem de Yönetim Kurulu Üyesi (Sayman) olduğum Teknoloji ve Verimlilik Derneği (TEVED) çatısı altında, dijital okuryazarlığı artırma stratejilerine liderlik ediyorum. Finansal yönetimin ötesinde, yerel ekosistemi analiz eden "Bölgesel Olgunluk Raporu"na katkı sağlıyor ve dijital dönüşüm projeleri için STK süreçlerini yönetiyorum.',
                },
            ]
        },
        contact: {
            title: "İletişime Geç",
            email: "E-posta",
            telegram: "Telegram",
            location: "Konum",
            locationValue: "Samsun, Türkiye",
            form: {
                name: "Adınız",
                email: "E-posta Adresiniz",
                message: "Mesajınız",
                send: "Mesaj Gönder",
                sending: "Gönderiliyor...",
                success: "Mesaj başarıyla gönderildi!",
                error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
            }
        },
        footer: {
            rights: "Tüm hakları saklıdır.",
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'tr' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
