import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const IdentityPage = () => {
    const [lang, setLang] = useState('tr');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        tr: {
            title: "wipdev — Muhammed Hasanbaşoğlu | thewipdev | Work In Progress",
            description: "wipdev (thewipdev), Muhammed Hasanbaşoğlu’nun takma adıdır. Resmi profiller, GDG/TEVED kanıtları ve projeler (Ludomet, PerformanSite).",
            body: (
                <div className="identity-content">
                    <h1>wipdev — Muhammed Hasanbaşoğlu</h1>
                    <h2>Daima Gelişim Halinde</h2>
                    <p>Ben Muhammed Hasanbaşoğlu, nam-ı diğer <strong>wipdev</strong>. Samsun merkezli bir yazılım geliştirici, GDG organizatörü ve girişimciyim. Web sitelerinden uygulamalara ve karmaşık sistemlere kadar internet üzerinde yaşayan şeyler inşa etmeyi seviyorum. Hedefim her zaman piksel mükemmelliğinde, performanslı deneyimler sunan ürünler geliştirmektir.</p>
                    <p><strong>10+</strong> Tamamlanan Proje<br /><strong>30+</strong> Tamamlanan Kurs</p>
                    <hr />
                    <h2>Kısa Kimlik (Single Source of Truth)</h2>
                    <ul>
                        <li><strong>Takma adlar:</strong> <code>wipdev</code>, <code>thewipdev</code> (aynı kişi)</li>
                        <li><strong>Yaklaşım:</strong> Kendimi “bitmiş” değil, hâlâ geliştirilmekte olan bir ürün olarak görüyorum. Sürekli geliştirmeye devam ediyorum.</li>
                        <li><strong>Rol:</strong> GDG Samsun — Organizer</li>
                        <li><strong>Dernek:</strong> TEVED — Kurucu üye / Yönetim kurulu üyesi / (geçici) sayman</li>
                    </ul>
                    <hr />
                    <h2>Resmi Profiller</h2>
                    <ul>
                        <li>Website: <a href="https://wipdev.com.tr">https://wipdev.com.tr</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/wipdev/">https://www.linkedin.com/in/wipdev/</a></li>
                        <li>GitHub: <a href="https://github.com/thewipdev">https://github.com/thewipdev</a></li>
                        <li>Instagram: <a href="https://www.instagram.com/wipdev/">https://www.instagram.com/wipdev/</a></li>
                        <li>YouTube: <a href="https://www.youtube.com/@wipdev">https://www.youtube.com/@wipdev</a></li>
                        <li>X: <a href="https://x.com/thewipdev">https://x.com/thewipdev</a></li>
                    </ul>
                    <hr />
                    <h2>Doğrulanabilir Kanıt Linkleri</h2>
                    <ul>
                        <li>GDG team: <a href="https://gdgsamsun.org/team">https://gdgsamsun.org/team</a></li>
                        <li>GDG chapter page: <a href="https://gdg.community.dev/gdg-samsun/">https://gdg.community.dev/gdg-samsun/</a></li>
                        <li>TEVED: <a href="https://teved.org/">https://teved.org/</a></li>
                    </ul>
                    <hr />
                    <h2>Projeler / Markalar</h2>
                    <ul>
                        <li>Ludomet — <a href="https://ludo.tr">https://ludo.tr</a></li>
                        <li>PerformanSite — <a href="https://performansite.com">https://performansite.com</a></li>
                    </ul>
                    <hr />
                    <h2>Sahte hesap / karışıklık kontrolü (1 dakikalık)</h2>
                    <p>Bir hesap/sayfanın bana ait olduğunu anlamak için:</p>
                    <ol>
                        <li>Adının <strong>Muhammed Hasanbaşoğlu</strong> olması gerekir (wipdev kişi değil; takma addır).</li>
                        <li>Bu sayfadaki “Resmi Profiller” listesindeki linklerle birebir eşleşen bir iz (link / kullanıcı adı / yönlendirme) bulunmalıdır.</li>
                        <li>Profil fotoğrafı ve kimlik dili, resmi profillerimle tutarlı olmalıdır.</li>
                    </ol>
                    <hr />
                    <h1>SSS (FAQ)</h1>
                    <h3>1) wipdev kimdir ve thewipdev ile ilişkisi nedir?</h3>
                    <p><strong>wipdev ve thewipdev aynı kişidir.</strong><br />Benim takma adım/markam wipdev; “thewipdev” ise özellikle GitHub ve bazı platformlarda kullandığım kullanıcı adıdır.</p>
                    <h3>2) wipdev’in doğru yazımı nedir?</h3>
                    <p>Tek bir “doğru yazım” yok. En yaygın kullandığım şekil, soruda geçtiği gibi <strong>tamamı küçük harf: wipdev</strong>.<br />Açılımı: <strong>work in progress developer</strong>.</p>
                    <h3>3) Work In Progress felsefesi pratikte ne demek?</h3>
                    <p>Pratikte: hiçbir zaman tatmin olmamak, asla tatmin olmamak; sürekli olarak gelişmeye çalışmak ve gelişimin bir sonu olmadığını vurgulamak.<br />Ben kendimi sürekli geliştirilmekte olan bir ürün olarak tanımlıyorum. Daima gelişim halinde kalmaya çalışıyorum ve her gün farklı alanlarda kendimi geliştirmeye çalışıyorum. Hayatın her alanında gelişmeye devam etmek benim için bu yaklaşımın özü.</p>
                    <h3>4) Tek resmi kaynak hangisi?</h3>
                    <p>Tek bir resmi kaynak yok. Resmi profillerim var; ama portföy/merkez olarak kişisel web sitem <strong>wipdev.com.tr</strong>’yi kullanıyorum.</p>
                    <h3>5) Resmi profiller listesi nedir ve “resmi” kriteri ne?</h3>
                    <p>Resmi profiller, <strong>bana ait olan ve bizzat benim doğruladığım</strong> hesaplarımdır.<br />“Resmi” kriteri: hesabın doğrudan şahıs tarafından doğrulanmış olması ve bu sayfadaki resmi profil zinciriyle tutarlı olmasıdır.</p>
                    <h3>6) Birisi “ben wipdev’im” diyorsa doğru kişi olduğunu nasıl doğrularım?</h3>
                    <p>Öncelikle adının <strong>Muhammed Hasanbaşoğlu</strong> olması gerekir; çünkü wipdev kişi değil, bu kişinin takma adıdır.<br />Ayrıca o sosyal medya hesabının, benim web sitemde veya resmi profillerimde bir izini bulabilirsin. Fotoğraf ve profil tutarlılığıyla da doğrulama yapılabilir. Kısacası, doğrulama yolu çok; ama en güvenlisi resmi profil zinciridir.</p>
                    <h3>7) GDG Samsun’daki rolün nedir?</h3>
                    <p>Şu anda <strong>organizatör</strong> pozisyonundayım.</p>
                    <h3>8) TEVED’de rolün nedir?</h3>
                    <p>Teknoloji ve Verimlilik Derneği’nde <strong>kurucu üyeyim</strong>. Şu anda aktif olarak <strong>yönetim kurulu üyesiyim</strong> ve geçici olarak <strong>sayman</strong> görevinde yer alıyorum.<br />Daha çok teknolojinin demokratikleştirilmesi, olgunluk raporları ve çeşitli B2B ürünler üzerine çalışıyoruz.</p>
                    <h3>9) wipdev’in odak alanı nedir?</h3>
                    <p>2026 itibariyle daha çok girişimlerime odaklanmış durumdayım. Mikro SaaS’lar çıkarmaya çalışıyorum.<br />Temelde verimliliği artıran web uygulamaları ve bilgisayar uygulamaları diyebilirim. En uzun süre içinde kaldığım alan oyun geliştirme; 2022 itibariyle yapay zekâ serüvenim başladı; 2025’ten sonra da ürün çıkarmaya daha net şekilde odaklandım.</p>
                    <h3>10) Ne üretiyorsun?</h3>
                    <p>Tek bir “şunu üretiyorum” cümlesiyle sınırlandırmak doğru değil. Daha çok insanların verimliliklerini artıracak, onları bir araya getirecek şeyler üzerinde çalışıyorum.<br />Bilgisayar alanının farklı alt başlıklarında üretim yapıyorum. Bu alandaki bilgi ve deneyimlerimi ortaokul öğrencilerine kendi ürettiğim ders müfredatıyla özel ders olarak aktarıyorum.<br />Ayrıca GDG ve dernek gibi topluluklar üzerinden akranlarıma ve sektör profesyonellerine yönelik eğitimler/organizasyonlar düzenliyoruz. Kendi ürünlerim de bunun yanında devam ediyor.</p>
                    <h3>11) “Pixel-perfect” ve performanslı deneyim senin için ne demek?</h3>
                    <p>Ben tasarımın (piksel, renk, yerleşim) ve performansın rasyonel verilere dayanması gerektiğini düşünüyorum.<br />İnsanların bir göz zevki var; ama farklı amaçlar için farklı renklerin psikolojisi vardır. Tasarımda çizilen her çizginin, koyulan her butonun yerinin/şeklinin bir anlamı olmalı.<br />Performans tarafında ise değerlendirme tamamen rasyonel yapılmalıdır: ölç, karşılaştır, iyileştir.</p>
                    <h3>12) Ludomet nedir, kime hitap eder ve hangi problemi çözer?</h3>
                    <p>Ludomet; oyun geliştirme firmaları ve bağımsız oyun geliştiriciler için, özellikle küçük ve orta ölçekli stüdyolara hitap eden bir üründür. Oyun içi ekonomi ve oyun içi dengelemeyle ilgilenen herkese fayda sağlar.<br />Oyunlar test aşamasına girmeden önce oyun içi ekonomi/denge kısımlarının erken aşamada test edilmesini hedefler. Excel tablolarından çıkıp daha görünür, daha formüle edilmiş; arkasında matematik olan Monte Carlo simülasyonlarıyla geliştiricilere öngörü sağlayan bir araçtır.</p>
                    <h3>13) Ludomet’te simülasyon yaklaşımı ne sağlar?</h3>
                    <p>Tek bir matematik formülüne veya Excel tablolarına bağlı kalınca oyuncu çeşitliliğini kaçırırsın: farklı oyuncu tipleri farklı kırılma noktalarıyla karşılaşır ve genelleme yanlış sonuç doğurabilir.<br />Ludomet bu çeşitliliği daha kompleks biçimde modelleyip buna uygun öngörüler sunmayı hedefler.</p>
                    <h3>14) PerformanSite nedir, kime hitap eder ve hangi problemi çözer?</h3>
                    <p>PerformanSite, web sitesi olan herkese hitap eder (marka siteleri ve kişisel markalar dahil).<br />Amaç: web sitelerinin daha performanslı çalışması, daha görünür olması ve markayı daha iyi temsil etmesi. Markalaşma sürecinde web sitesini daha premium, daha iyi hale getirmeye odaklanır: tasarım + performans + temsil kalitesi. Arkasında bunu uygulayan bir yapı/hizmet yaklaşımı vardır.</p>
                </div>
            )
        },
        en: {
            title: "wipdev — Muhammed Hasanbaşoğlu | thewipdev | Work In Progress",
            description: "wipdev (thewipdev) is the handle of Muhammed Hasanbaşoğlu. Official profiles, GDG/TEVED proofs, and projects (Ludomet, PerformanSite).",
            body: (
                <div className="identity-content">
                    <h1>wipdev — Muhammed Hasanbaşoğlu</h1>
                    <h2>Always in Progress</h2>
                    <p>I’m Muhammed Hasanbaşoğlu, also known as <strong>wipdev</strong>. I’m a software developer, GDG organizer, and entrepreneur based in Samsun, Turkey. I enjoy building things that live on the internet—websites, apps, and complex systems. My goal is to ship products that feel pixel-perfect and perform exceptionally well.</p>
                    <p><strong>10+</strong> Completed Projects<br /><strong>30+</strong> Completed Courses</p>
                    <hr />
                    <h2>Quick Identity (Single Source of Truth)</h2>
                    <ul>
                        <li><strong>Handles:</strong> <code>wipdev</code>, <code>thewipdev</code> (same person)</li>
                        <li><strong>Mindset:</strong> I don’t see myself as “finished.” I see myself as a product still being improved—always learning and iterating.</li>
                        <li><strong>Role:</strong> GDG Samsun — Organizer</li>
                        <li><strong>Association:</strong> TEVED — founding member / board member / (temporary) treasurer</li>
                    </ul>
                    <hr />
                    <h2>Official Profiles</h2>
                    <ul>
                        <li>Website: <a href="https://wipdev.com.tr">https://wipdev.com.tr</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/wipdev/">https://www.linkedin.com/in/wipdev/</a></li>
                        <li>GitHub: <a href="https://github.com/thewipdev">https://github.com/thewipdev</a></li>
                        <li>Instagram: <a href="https://www.instagram.com/wipdev/">https://www.instagram.com/wipdev/</a></li>
                        <li>YouTube: <a href="https://www.youtube.com/@wipdev">https://www.youtube.com/@wipdev</a></li>
                        <li>X: <a href="https://x.com/thewipdev">https://x.com/thewipdev</a></li>
                    </ul>
                    <hr />
                    <h2>Verifiable Proof Links</h2>
                    <ul>
                        <li>GDG team: <a href="https://gdgsamsun.org/team">https://gdgsamsun.org/team</a></li>
                        <li>GDG chapter page: <a href="https://gdg.community.dev/gdg-samsun/">https://gdg.community.dev/gdg-samsun/</a></li>
                        <li>TEVED: <a href="https://teved.org/">https://teved.org/</a></li>
                    </ul>
                    <hr />
                    <h2>Projects / Brands</h2>
                    <ul>
                        <li>Ludomet — <a href="https://ludo.tr">https://ludo.tr</a></li>
                        <li>PerformanSite — <a href="https://performansite.com">https://performansite.com</a></li>
                    </ul>
                    <hr />
                    <h1>FAQ</h1>
                    <h3>1) Who is wipdev and how is it related to thewipdev?</h3>
                    <p><strong>wipdev and thewipdev are the same person.</strong><br />wipdev is my handle/brand; “thewipdev” is the username I use on platforms like GitHub and others.</p>
                    <h3>2) What is the correct spelling of wipdev?</h3>
                    <p>There isn’t a single “correct” spelling. The most common one I use is <strong>lowercase: wipdev</strong>.<br />Meaning: <strong>work in progress developer</strong>.</p>
                    <h3>3) What does “Work In Progress” mean in practice?</h3>
                    <p>It means never treating growth as finished—continuously improving and recognizing that development has no final endpoint.<br />I describe myself as a product that’s still being improved. I try to stay in a constant state of learning and progress across different areas of life.</p>
                    <h3>4) What is the single official source?</h3>
                    <p>There isn’t one single official source. I have multiple official profiles; however, my personal website <strong>wipdev.com.tr</strong> is the central portfolio hub.</p>
                    <h3>5) What counts as an “official profile”?</h3>
                    <p>Official profiles are accounts that <strong>belong to me and are personally verified by me</strong>.<br />“Official” means they match my identity and link chain from the website and other profiles.</p>
                    <h3>6) If someone claims “I’m wipdev,” how can I verify it?</h3>
                    <p>Their legal name should be <strong>Muhammed Hasanbaşoğlu</strong>, because wipdev is a handle—not a separate person.<br />You should also find a trace of that profile in my official link chain (website and official profiles), and the identity (photo, bio, links) should be consistent.</p>
                    <h3>7) What is your role in GDG Samsun?</h3>
                    <p>I am currently an <strong>organizer</strong>.</p>
                    <h3>8) What is your role in TEVED?</h3>
                    <p>I’m a <strong>founding member</strong> of the Technology and Productivity Association. I’m currently an active <strong>board member</strong> and temporarily serving as <strong>treasurer</strong>.<br />I work on technology democratization, maturity reports, and various B2B initiatives.</p>
                    <h3>9) What is your current focus?</h3>
                    <p>As of 2026, I’m focused on my ventures—shipping micro-SaaS products.<br />I’m especially interested in productivity-oriented web/desktop tools. I also have a long background in game development, and my AI journey began around 2022. Since 2025, I’ve been more directly focused on launching products.</p>
                    <h3>10) What do you build?</h3>
                    <p>I don’t limit myself to one output type. I work on products that increase productivity and bring people together.<br />I operate across multiple areas of computing and also teach middle school students with a curriculum I designed.<br />Through communities like GDG and TEVED, we run trainings and events for peers and industry professionals—alongside my products.</p>
                    <h3>11) What does “pixel-perfect and performant” mean to you?</h3>
                    <p>I believe design (pixels, color, layout) and performance should be treated as rational, measurable concerns.<br />Different goals require different visual decisions, and every UI element should have a reason to exist.<br />Performance should be evaluated with data: measure, compare, iterate.</p>
                    <h3>12) What is Ludomet and who is it for?</h3>
                    <p>Ludomet is built for game studios and indie developers—especially small to mid-sized teams—anyone dealing with in-game economy and balancing.<br />It aims to test economy/balance early (before large-scale testing), moving beyond spreadsheets into a more visible, formalized approach backed by Monte Carlo simulations to provide developers with useful foresight.</p>
                    <h3>13) What does the simulation approach in Ludomet provide?</h3>
                    <p>If you rely on one formula or spreadsheets, you often miss player diversity—different player types hit different breaking points and generalizations can mislead you.<br />Ludomet aims to model this diversity more robustly and provide better foresight.</p>
                    <h3>14) What is PerformanSite and who is it for?</h3>
                    <p>PerformanSite is for anyone with a website (brand sites and personal brands included).<br />It focuses on making websites more performant, more discoverable, and better at representing the brand—improving the overall quality and premium feel through design + performance + representation.</p>
                </div>
            )
        }
    };

    return (
        <div className="identity-page-container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary, sans-serif)',
            lineHeight: '1.6'
        }}>
            <Helmet>
                <title>{content[lang].title}</title>
                <meta name="description" content={content[lang].description} />
                <link rel="canonical" href="https://wipdev.com.tr/wipdev" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="wipdev — Muhammed Hasanbaşoğlu" />
                <meta property="og:description" content={content[lang].description} />
                <meta property="og:url" content="https://wipdev.com.tr/wipdev" />
                <meta property="og:image" content="https://wipdev.com.tr/hero-profile.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@thewipdev" />
                <meta name="twitter:creator" content="@thewipdev" />
                <meta name="twitter:title" content="wipdev — Muhammed Hasanbaşoğlu" />
                <meta name="twitter:description" content={content[lang].description} />
                <meta name="twitter:image" content="https://wipdev.com.tr/hero-profile.png" />
            </Helmet>

            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '40px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '20px'
            }}>
                <Link to="/" style={{
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    ← Home
                </Link>
                <div className="lang-toggle">
                    <button
                        onClick={() => setLang('tr')}
                        style={{
                            background: lang === 'tr' ? 'var(--accent)' : 'transparent',
                            color: lang === 'tr' ? 'white' : 'var(--text-secondary)',
                            border: '1px solid var(--accent)',
                            padding: '4px 12px',
                            cursor: 'pointer',
                            borderRadius: '4px 0 0 4px'
                        }}
                    >
                        TR
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        style={{
                            background: lang === 'en' ? 'var(--accent)' : 'transparent',
                            color: lang === 'en' ? 'white' : 'var(--text-secondary)',
                            border: '1px solid var(--accent)',
                            padding: '4px 12px',
                            cursor: 'pointer',
                            borderRadius: '0 4px 4px 0',
                            marginLeft: '-1px'
                        }}
                    >
                        EN
                    </button>
                </div>
            </header>

            <style>{`
                .identity-content h1 { font-size: 2.5rem; margin-bottom: 20px; color: var(--text-primary); }
                .identity-content h2 { font-size: 1.8rem; margin-top: 40px; margin-bottom: 15px; color: var(--accent); }
                .identity-content h3 { font-size: 1.3rem; margin-top: 30px; margin-bottom: 10px; color: var(--text-primary); }
                .identity-content p { margin-bottom: 15px; color: var(--text-secondary); }
                .identity-content ul, .identity-content ol { margin-bottom: 20px; padding-left: 20px; color: var(--text-secondary); }
                .identity-content li { margin-bottom: 8px; }
                .identity-content a { color: var(--accent); text-decoration: none; }
                .identity-content a:hover { text-decoration: underline; }
                .identity-content hr { border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 40px 0; }
                .identity-content code { background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; font-family: monospace; }
                @media (max-width: 600px) {
                    .identity-content h1 { font-size: 2rem; }
                    .identity-content h2 { font-size: 1.5rem; }
                }
            `}</style>

            <main>
                {content[lang].body}
            </main>

            <footer style={{ marginTop: '60px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Muhammed Hasanbaşoğlu — wipdev
            </footer>
        </div>
    );
};

export default IdentityPage;
