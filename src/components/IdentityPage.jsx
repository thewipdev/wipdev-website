import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowLeft, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHead from './SeoHead';

const IdentityPage = () => {
    const [lang, setLang] = useState('tr');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        tr: {
            title: "Muhammed Hasanbaşoğlu | wipdev - Kimlik Sayfası",
            description: "Muhammed Hasanbaşoğlu (wipdev) hakkında kurumsal kimlik, roller ve Sıkça Sorulan Sorular.",
            headline: "Muhammed Hasanbaşoğlu",
            subheadline: "nam-ı diğer wipdev",
            bio: "Yazılım Geliştirici, GDG Organizatörü ve Girişimci. Teknoloji ve yeteneğin birlikte büyüdüğü ekosistemleri destekleyen, karmaşık fikirleri ölçeklenebilir ürünlere dönüştüren bir vizyoner.",
            faqTitle: "Sıkça Sorulan Sorular",
            faqs: [
                { q: "wipdev ne demek?", a: "wipdev, 'Work In Progress Developer' ifadesinin kısaltmasıdır. Her zaman gelişmeye ve öğrenmeye devam eden bir gelişim anlayışını temsil eder." },
                { q: "thewipdev kimdir?", a: "thewipdev, Muhammed Hasanbaşoğlu'nun Twitter (X) ve diğer sosyal mecralardaki kullanıcı adıdır." },
                { q: "Nolan adı nereden geliyor?", a: "Nolan, Muhammed'in topluluklar ve projeler içinde kullandığı takma adıdır; genellikle Muhammed Nolan Hasanbaşoğlu olarak da anılır." }
            ],
            back: "Ana Sayfaya Dön",
            toggle: "English"
        },
        en: {
            title: "Muhammed Hasanbaşoğlu | wipdev - Identity Page",
            description: "Corporate identity, roles, and FAQ regarding Muhammed Hasanbaşoğlu (wipdev).",
            headline: "Muhammed Hasanbaşoğlu",
            subheadline: "aka wipdev",
            bio: "Software Developer, GDG Organizer, and Entrepreneur. A visionary who supports ecosystems where technology and talent grow together, transforming complex ideas into scalable products.",
            faqTitle: "Frequently Asked Questions",
            faqs: [
                { q: "What does wipdev mean?", a: "wipdev stands for 'Work In Progress Developer'. It represents a philosophy of constant growth and continuous learning." },
                { q: "Who is thewipdev?", a: "thewipdev is the username of Muhammed Hasanbaşoğlu on Twitter (X) and other social media platforms." },
                { q: "Where does the name Nolan come from?", a: "Nolan is a pseudonym used by Muhammed within communities and projects; he is often referred to as Muhammed Nolan Hasanbaşoğlu." }
            ],
            back: "Back to Home",
            toggle: "Türkçe"
        }
    };

    const t = content[lang];

    return (
        <div className="identity-page">
            <SeoHead
                title={t.title}
                description={t.description}
                canonical="/wipdev"
            />

            <nav className="identity-nav">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} />
                    <span>{t.back}</span>
                </Link>
                <button
                    onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                    className="lang-toggle"
                >
                    <Globe size={18} />
                    <span>{t.toggle}</span>
                </button>
            </nav>

            <main className="identity-content">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="identity-header"
                >
                    <h1>{t.headline}</h1>
                    <p>{t.subheadline}</p>
                </motion.header>

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="identity-bio"
                >
                    <p>"{t.bio}"</p>
                </motion.section>

                <section className="faq-section">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="faq-title"
                    >
                        <HelpCircle className="text-accent" size={28} />
                        <h2>{t.faqTitle}</h2>
                    </motion.div>

                    <div className="faq-grid">
                        {t.faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="faq-item"
                            >
                                <h3>{faq.q}</h3>
                                <p>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="identity-footer">
                <p>© {new Date().getFullYear()} wipdev.com.tr • {t.title.split('|')[0].trim()}</p>
            </footer>
        </div>
    );
};

export default IdentityPage;
