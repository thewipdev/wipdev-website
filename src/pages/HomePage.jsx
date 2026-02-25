import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Muhammed Hasanbaşoğlu | WipDev - Developer, Organizer & Entrepreneur</title>
                <meta name="description" content="Muhammed Hasanbaşoğlu (wipdev) - Yazılım Geliştirici, GDG Organizatörü ve Girişimci. Teknoloji ve yeteneğin birlikte büyüdüğü ekosistemleri destekleyen, karmaşık fikirleri ölçeklenebilir ürünlere dönüştüren bir girişimci." />
                <link rel="canonical" href="https://wipdev.com.tr" />
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Muhammed Hasanbaşoğlu | WipDev" />
                <meta property="og:description" content="Yazılım Geliştirici, GDG Organizatörü ve Girişimci - Samsun, Türkiye" />
                <meta property="og:image" content="https://wipdev.com.tr/hero-profile.png" />
                <meta property="og:url" content="https://wipdev.com.tr" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@thewipdev" />
                <meta name="twitter:creator" content="@thewipdev" />
                <meta name="twitter:title" content="Muhammed Hasanbaşoğlu | WipDev" />
                <meta name="twitter:description" content="Yazılım Geliştirici, GDG Organizatörü ve Girişimci" />
                <meta name="twitter:image" content="https://wipdev.com.tr/hero-profile.png" />
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
