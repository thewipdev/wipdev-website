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
                    company: 'İleriOkul',
                    period: 'September 2025 - Current',
                    description: 'Leading the end-to-end development of the platform architecture while overseeing strategic marketing and advertising operations. Designed and implemented a proprietary AI-powered analysis system to deliver personalized student insights, bridging the gap between technical execution and business growth.',
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
                    role: 'Technology & Game Editor',
                    company: 'Siyah Dergi',
                    period: 'November 2025 - Current',
                    description: 'Producing in-depth content on game technologies, hardware trends, and digital culture. Moving beyond fast-consumption media, I focus on objective, data-driven research and technical analysis. My work adheres to strict editorial neutrality, prioritizing deep knowledge and impartial insight over popular trends.',
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
                    company: 'İleriOkul',
                    period: 'Eylül 2025 - Günümüz',
                    description: 'Platform mimarisinin uçtan uca geliştirilmesine liderlik ederken stratejik pazarlama ve reklam operasyonlarını yönetiyorum. Teknik uygulama ile iş büyümesi arasındaki boşluğu doldurarak kişiselleştirilmiş öğrenci içgörüleri sunmak için yapay zeka destekli özel bir analiz sistemi tasarladım ve uyguladım.',
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
                    role: 'Teknoloji & Oyun Editörü',
                    company: 'Siyah Dergi',
                    period: 'Kasım 2025 - Günümüz',
                    description: 'Oyun teknolojileri, donanım trendleri ve dijital kültür üzerine derinlemesine içerikler üretiyorum. Hızlı tüketim medyasının ötesine geçerek objektif, veri odaklı araştırma ve teknik analize odaklanıyorum. Çalışmalarım, popüler trendler yerine derin bilgi ve tarafsız içgörüyü önceliklendiren katı editoryal tarafsızlığa bağlıdır.',
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
