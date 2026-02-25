import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IdentityPage from './components/IdentityPage';
import SeoHead from './components/SeoHead';

const MainPage = () => (
    <>
        <SeoHead
            title="Muhammed Hasanbaşoğlu | WipDev - Developer, Organizer & Entrepreneur"
            description="Muhammed Hasanbaşoğlu (wipdev) - Yazılım Geliştirici, GDG Organizatörü ve Girişimci. Teknoloji ve yeteneğin birlikte büyüdüğü ekosistemleri destekleyen, karmaşık fikirleri ölçeklenebilir ürünlere dönüştüren bir girişimci."
            canonical="/"
        />
        <Navbar />
        <main>
            <Hero />
            <Experience />
            <About />
            <Contact />
        </main>
        <Footer />
    </>
);

function App() {
    const location = useLocation();
    const isWipDev = location.pathname === '/wipdev';

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/wipdev" element={<IdentityPage />} />
            </Routes>

            {!isWipDev && (
                <Link
                    to="/wipdev"
                    className="help-icon-floating"
                    aria-label="wipdev info"
                >
                    <HelpCircle size={24} />
                </Link>
            )}
        </div>
    );
}

export default App;
