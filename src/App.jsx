import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Анимационный пресет для появления элементов при скролле
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isMenuOpen || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, selectedProject]);

  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Контакты', href: '#contact' },
  ];

  const projects = [
    { id: 1, title: "Crypto Dash", category: "Web Exchange", video: "/video1crypto.mp4", year: "2024", desc: "Полноценная платформа для анализа крипторынка с живыми графиками и интеграцией кошельков." },
    { id: 2, title: "Photo-grapher", category: "Private",  video: "/video2.mp4", year: "2023", desc: "Оригинальный сайт для профессионального фотографа" },
    { id: 3, title: "Pure", category: "Branding",  video: "/video3.mp4", year: "2024", desc: "Сайт презентация коллекции часов ручной работы." },
    { id: 4, title: "NFT art", category: "ART",  video: "/video4.mp4", year: "2024", desc: "Площадка для продажи ART-ов в NFT." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden relative selection:bg-blue-200">
      {/* ==================================================== */}
      {/* ШАПКА ТОЛЬКО ДЛЯ МОБИЛОК (Liquid Glass bg-blue-500) */}
      {/* ==================================================== */}
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:hidden fixed top-0 left-0 w-full z-50 bg-blue-900/20 backdrop-blur-2xl px-6 py-4 flex justify-between items-center shadow-lg shadow-blue-500/10"
      >
        <div className="flex flex-col items-start text-left">
          <h1 className="text-xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-sm">Adam Maks</h1>
          <span className="text-[8px] font-bold text-white/90 uppercase tracking-[0.2em] mt-1">Creative Developer</span>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="p-2 text-white focus:outline-none active:scale-95 transition-transform drop-shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </motion.header>

      {/* МОБИЛЬНОЕ МЕНЮ (Попап) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] lg:hidden bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
             <button onClick={() => setIsMenuOpen(false)} className="absolute right-6 top-6 text-4xl text-gray-900">&times;</button>
             {navLinks.map((link, i) => (
               <motion.a 
                 key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}
                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                 className="text-3xl font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
               >
                 {link.name}
               </motion.a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        {/* ==================================================== */}
        {/* 1. ПЕРВЫЙ БЛОК (HERO) */}
        {/* ==================================================== */}
        <section className="flex flex-col lg:flex-row min-h-[100dvh] lg:h-screen relative pt-[70px] lg:pt-0">
          
          {/* ЛЕВАЯ ПАНЕЛЬ: Навигация (Десктоп) */}
          <aside className="hidden lg:flex w-full lg:w-1/5 p-6 lg:p-10 flex-col justify-between items-start lg:border-r border-gray-100 bg-white relative z-20 shrink-0">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-start text-left">
              <h1 className="text-2xl font-black uppercase tracking-tighter leading-none text-gray-900">Adam Maks</h1>
              <span className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em] mt-1.5">Creative Developer</span>
            </motion.div>
            
            <nav className="flex flex-col gap-6 mt-20 w-full">
              {navLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + (i * 0.1) }} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-all">{link.name}</motion.a>
              ))}
            </nav>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mt-auto w-full">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Связаться со мной</p>
              <div className="flex gap-3 justify-start">
                <a href="https://instagram.com/adam_maks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all group"><svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="https://t.me/adam_maks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all group"><svg className="w-4 h-4 group-hover:scale-110 transition-transform -ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.096l-6.405 4.032-2.76-.863c-.6-.185-.614-.6.125-.89l10.736-4.138c.5-.186.945.115.83.996z"/></svg></a>
                <a href="https://vk.com/adam_maks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all group"><svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.254 13.918c.642.668 1.348 1.272 1.905 2.012.355.467.683.957.94 1.48.223.453.072.846-.432.883-.93.07-1.865.048-2.8.033-.67-.01-.176-.328-.507-.643-.585-.56-1.144-1.15-1.728-1.713-.243-.233-.505-.443-.805-.614-.423-.24-.805-.137-1.01.296-.28.59-.344 1.23-.362 1.872-.01.35-.11.464-.464.475-1.854.053-3.568-.3-5.12-1.334-1.637-1.088-2.88-2.52-3.87-4.14-1.29-2.114-2.227-4.407-2.92-6.793-.13-.45.02-.612.49-.624.97-.025 1.94-.02 2.91-.005.35.006.54.17.67.5 1.01 2.58 2.37 4.9 4.3 6.84.23.23.46.3.73.13.3-.18.4-.48.42-.81.04-1.28.02-2.56-.12-3.83-.06-.52-.3-.87-.8-1.04-.3-.1-.28-.24-.07-.36.33-.2.72-.28 1.1-.3h2.36c.4.08.53.28.57.68.08 1.23.06 2.47.01 3.7-.01.38.16.63.53.7.35.07.6-.08.82-.32.96-1.05 1.66-2.28 2.22-3.58.2-.46.36-.94.52-1.42.1-.33.3-.47.66-.46.97.02 1.93.01 2.9.01.12 0 .25 0 .42 0-.2.32-.42.63-.62.96-.83 1.26-1.74 2.45-2.54 3.72-.25.4-.24.73.06 1.09z"/></svg></a>
                <a href="https://dprofile.ru/adam_maks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all group"><span className="text-[12px] font-black tracking-tighter group-hover:scale-110 transition-transform">DP</span></a>
              </div>
            </motion.div>
          </aside>

          {/* ЦЕНТРАЛЬНАЯ ПАНЕЛЬ: Синий блок (bg-blue-500) */}
          <div className="flex-1 lg:w-2/5 bg-blue-500 text-white p-6 sm:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden z-10">
            
            {/* ФОТО НА МОБИЛКЕ: Сильная прозрачность (blue-500/50), фото хорошо видно */}
            <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
              <img src="/photo.jpg" alt="Background" className="w-full h-full object-cover grayscale opacity-80" />
              <div className="absolute inset-0 bg-blue-500/50 backdrop-blur-[3px]"></div>
              {/* Градиент снизу, чтобы текст читался лучше */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-block self-start px-4 py-2 mb-6 lg:mb-8 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                Web Adam®
              </motion.div>
              
              <motion.h2 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-[2.75rem] leading-[0.9] sm:text-6xl lg:text-7xl font-black mb-6 lg:mb-8 tracking-tighter uppercase text-left drop-shadow-lg">
                Разработка,<br/>которая дышит.
              </motion.h2>
              
              <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-white/95 mb-10 lg:mb-12 text-sm sm:text-base lg:text-lg font-medium max-w-md leading-relaxed text-left text-balance drop-shadow-md">
                Создаю современные веб-проекты с чистого нуля. Закрываю полный цикл: от проектирования интерфейса до финальных React-анимаций.
              </motion.p>
              
              {/* Кнопки */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto">
                <a 
                  href="https://t.me/adam_maks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 lg:py-5 rounded-full font-black text-[10px] tracking-[0.15em] uppercase bg-white text-blue-500 shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center"
                >
                  Сотрудничать
                </a>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 lg:py-5 rounded-full font-black text-[10px] tracking-[0.15em] uppercase bg-white/10 border border-white/30 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all backdrop-blur-md text-white text-center flex items-center justify-center shadow-lg"
                >
                  Проекты
                </button>
              </motion.div>
            </div>
          </div>

          {/* ПРАВАЯ ПАНЕЛЬ: Фото (Скрыто на мобилках) */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="hidden lg:block w-full lg:w-2/5 h-full bg-blue-500 overflow-hidden relative z-0">
            <img 
              src="/photo.jpg" 
              alt="Adam Maks" 
              className="w-full h-full object-cover object-left grayscale-[20%] hover:grayscale-0 transition-all duration-700 opacity-90 shadow-2xl" 
            />
          </motion.div>
        </section>

        {/* ==================================================== */}
        {/* 2. ВТОРОЙ БЛОК (ОБО МНЕ) - С АНИМАЦИЯМИ */}
        {/* ==================================================== */}
        <section id="about" className="flex flex-col lg:flex-row w-full bg-white">
          <div className="w-full lg:w-2/5 bg-blue-500 text-white p-8 sm:p-16 lg:p-20 flex flex-col justify-between min-h-[60vh] lg:min-h-screen">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-left">
               <h2 className="text-5xl sm:text-7xl lg:text-6xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">Дизайн и код.<br/>Одно целое.</h2>
               <div className="flex gap-6 text-[10px] uppercase tracking-[0.4em] opacity-60 font-bold"><span>[ UI / UX ]</span><span>[ FRONTEND ]</span></div>
             </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-12 overflow-hidden shadow-2xl rounded-3xl">
               <img src="/photo3.jpg" alt="About" className="w-full aspect-[5/5] object-cover" />
             </motion.div>
              <p className="text-3xl sm:text-5xl lg:text-1xl self-center font-black leading-[1] mt-10 tracking-tighter uppercase">Адамов Максим</p>
          </div>
          <div className="w-full lg:w-1/2 bg-white text-gray-900 p-8 sm:p-16 lg:p-24 flex flex-col justify-center min-h-[60vh] lg:min-h-screen border-l border-gray-100">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mt-10 text-left">
               <p className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1] mb-12 tracking-tighter uppercase">На фрилансе я закрываю всю боль клиента разом.</p>
               <div className="flex gap-6 sm:gap-10 text-[10px] uppercase tracking-[0.1em] text-gray-300 font-bold mb-3 flex-wrap"><span>[ REACT ]</span><span>[ TAILWIND ]</span><span>[ MOTION ]</span></div>
             </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col sm:flex-row gap-12 items-end mt-10">
                <div className="w-full text-sm text-gray-500 font-medium leading-relaxed text-left space-y-4">
                  <p className="italic">Я создаю полноценные digital-продукты, где каждая деталь работает как часть единой системы. От идеи и визуальной концепции до UI/UX, frontend-разработки и финального запуска.</p>
                  <p>Моя работа не ограничивается только созданием сайта. Я разрабатываю визуальную айдентику бренда: логотипы, цветовые палитры, типографику, интерфейсы, анимации и общее визуальное направление проекта, создавая цельный и узнаваемый образ.</p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 text-black font-black uppercase tracking-widest text-[10px] border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors inline-block">К созданию продукта ↗</button>
                </div>
             </motion.div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 3. ТРЕТИЙ БЛОК (ПОРТФОЛИО) */}
        {/* ==================================================== */}
        <section id="portfolio" className="w-full bg-white border-t border-gray-100 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
                key={project.id} layoutId={`card-${project.id}`} onClick={() => setSelectedProject(project)} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}
                className="relative h-[450px] lg:h-[600px] border-b lg:border-b-0 lg:border-r border-gray-100 p-8 lg:p-10 flex flex-col justify-between cursor-pointer group bg-white overflow-hidden"
              >
                <div className="relative z-10 flex justify-between items-start w-full">
                  <span className={`mt-2 text-[12px] font-black tracking-widest uppercase transition-colors ${hoveredProject === project.id ? 'text-white/60' : 'text-gray-300'}`}>{project.year}</span>
                  <span className={`text-6xl lg:text-7xl font-thin tracking-tighter transition-colors ${hoveredProject === project.id ? 'text-white/20' : 'text-gray-100'}`}>0{project.id}</span>
                </div>
                <motion.div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[30%]" />
                  <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply" />
                </motion.div>
                <div className="relative z-10">
                  <motion.h3 layoutId={`title-${project.id}`} className={`text-4xl font-black uppercase tracking-tighter mb-4 leading-none transition-colors ${hoveredProject === project.id ? 'text-white' : 'text-gray-900'}`}>{project.title}</motion.h3>
                  <div className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em] transition-colors ${hoveredProject === project.id ? 'text-white/80' : 'text-blue-600'}`}>{project.category} <span className="text-sm leading-none">↗</span></div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
                <motion.div layoutId={`card-${selectedProject.id}`} className="relative w-full h-full md:h-[90vh] md:w-[90vw] bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row z-[210]">
                  <div className="w-full lg:w-3/5 h-[40vh] lg:h-full bg-gray-900">
                    <motion.video layoutId={`media-${selectedProject.id}`} src={selectedProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full lg:w-2/5 p-8 lg:p-20 flex flex-col justify-center overflow-y-auto">
                    <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 lg:top-10 lg:right-10 text-4xl font-light hover:rotate-90 transition-transform bg-white/50 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center z-50">&times;</button>
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4 mt-8 lg:mt-0">{selectedProject.year} / {selectedProject.category}</span>
                    <motion.h2 layoutId={`title-${selectedProject.id}`} className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-6 lg:mb-8 leading-none">{selectedProject.title}</motion.h2>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 lg:mb-12">{selectedProject.desc}</p>
                    <div className="flex gap-4">
                      <button className="w-full sm:w-auto px-8 py-5 bg-blue-600 text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-blue-200 hover:scale-105 transition-transform">Посмотреть проект</button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* ==================================================== */}
        {/* 4. БЛОК: БЕГУЩАЯ СТРОКА */}
        {/* ==================================================== */}
        <section className="w-full py-8 lg:py-12 bg-white border-t border-b border-gray-100 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-ticker gap-8 lg:gap-12 items-center">
            {[1, 2, 3].map((group) => (
              <div key={group} className="flex gap-8 lg:gap-12 items-center px-4 lg:px-6 whitespace-nowrap">
                <div className="flex items-center gap-3 group"><span className="text-2xl lg:text-4xl font-black text-gray-200 group-hover:text-blue-600 transition-colors duration-500 tracking-tighter uppercase italic">React</span></div>
                <div className="flex items-center gap-3 group"><span className="text-2xl lg:text-4xl font-black text-gray-200 group-hover:text-black transition-colors duration-500 tracking-tighter uppercase italic">Next.js</span></div>
                <div className="flex items-center gap-3 group"><span className="text-2xl lg:text-4xl font-black text-gray-200 group-hover:text-cyan-400 transition-colors duration-500 tracking-tighter uppercase italic">Tailwind</span></div>
                <div className="flex items-center gap-3 group"><span className="text-2xl lg:text-4xl font-black text-gray-200 group-hover:text-purple-600 transition-colors duration-500 tracking-tighter uppercase italic">Framer</span></div>
                <div className="flex items-center gap-3 group"><span className="text-2xl lg:text-4xl font-black text-gray-200 group-hover:text-orange-500 transition-colors duration-500 tracking-tighter uppercase italic">Figma</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================== */}
        {/* 5. БЛОК: УСЛУГИ (GLASSMORPHISM) */}
        {/* ==================================================== */}
        <section id="services" className="w-full py-20 lg:py-32 bg-[#0c1117] relative">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.1 }} className="relative h-[500px] lg:h-[700px] rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 z-0">
                  <img src="/photo1.jpg" alt="bg" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1117]/90 via-[#0c1117]/40 to-transparent"></div>
                </div>
                <div className="relative z-10 flex justify-start">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase">Дизайн</div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-wide uppercase leading-snug text-left">Дизайн, который <br /> <span className="font-black italic">чувствует.</span></h3>
                </div>
                <div className="relative z-10 flex flex-col items-end text-right">
                  <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed mb-4 max-w-[220px]">Первый импульс никогда не бывает четким. Это смесь эмоций, смыслов и фрагментов.</p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-colors">Написать мне лично ↗</button>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }} className="relative h-[500px] lg:h-[700px] rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#111827] group">
                <div className="relative z-10 flex justify-start">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase">Архитектура</div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4"><span className="text-[10px] text-white/50 uppercase">Чистый код:</span><span className="text-[10px] text-white/90 font-mono tracking-widest">100%</span></div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4"><span className="text-[10px] text-white/50 uppercase">Дизайн:</span><span className="text-[10px] text-white/90 font-mono tracking-widest">Индивидуальный</span></div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4"><span className="text-[10px] text-white/50 uppercase">Айдентика:</span><span className="text-[10px] text-white/90 font-mono tracking-widest">Залог успеха</span></div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4"><span className="text-[10px] text-white/50 uppercase">Технологии:</span><span className="text-[10px] text-white/90 font-mono tracking-widest">React.js</span></div>
                </div>
                <div className="relative z-10 flex flex-col items-end text-right mt-10">
                  <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed mb-4 max-w-[220px]">Не всё заслуживает отдельной папки. Но каждый проект заслуживает безупречной реализации.</p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-colors">Начать создание проекта ↗</button>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="relative h-[500px] lg:h-[700px] rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 z-0">
                  <img src="/photo5.jpg" alt="bg" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1117]/90 via-[#0c1117]/40 to-transparent"></div>
                </div>
                <div className="relative z-10 flex justify-start">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase">Идея</div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-center items-end text-right">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white/40 tracking-wide mb-1 lg:mb-2">Форма.</h3>
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white/60 tracking-wide mb-1 lg:mb-2">Стиль.</h3>
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white/80 tracking-wide mb-1 lg:mb-2">Смысл.</h3>
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black italic text-white tracking-wide">В память.</h3>
                </div>
                <div className="relative z-10 flex flex-col items-end text-right">
                  <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed mb-4 max-w-[220px]">Каждая идея, которую вы придумали, осуществим вместе.</p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-colors">Поделись идеей ↗</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 6. БЛОК: ПАКЕТЫ УСЛУГ (ТАРИФЫ) */}
        {/* ==================================================== */}
        <section className="w-full py-20 lg:py-32 bg-[#f9f9f9] relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mb-16 lg:mb-24">
              <h2 className="text-5xl sm:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900">Мои <br /> <span className="text-blue-600">Услуги.</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "Landing Page", price: "от 10.000₽", days: "от 14 рабочих дней", desc: "— одностраничный сайт для продажи и продвижения услуги или товара." },
                { title: "Многостраничный Сайт", price: "от 18.000₽", days: "от 20 рабочих дней", desc: "— сайт с несколькими разделами, подходит для бизнеса с разными направлениями." },
                { title: "Сайт под ключ", price: "от 120.000₽", days: "индивидуально", desc: "— Полный цикл дизайна и кода: от идеи до запуска.", isPremium: true },
                { title: "Интернет-Магазин", price: "от 85.000₽", days: "от 35 рабочих дней", desc: "— сайт с каталогом товаров, корзиной и онлайн-оплатой." }
              ].map((tariff, i) => (
                <motion.div 
                  key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }} 
                  className={`${tariff.isPremium ? 'bg-blue-600' : 'bg-white'} rounded-[2.5rem] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between group cursor-default`}
                >
                  <div className={`flex justify-between items-center mb-8 border-b ${tariff.isPremium ? 'border-white/20' : 'border-gray-50'} pb-4`}>
                    <span className={`text-2xl sm:text-3xl font-light ${tariff.isPremium ? 'text-white' : 'text-gray-300 group-hover:text-blue-600'} transition-colors`}>0{i+1}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${tariff.isPremium ? 'text-white' : 'text-gray-400'}`}>{tariff.days}</span>
                  </div>
                  <div>
                    <h3 className={`text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 ${tariff.isPremium ? 'text-white' : 'text-gray-900'}`}>{tariff.title}</h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${tariff.isPremium ? 'text-blue-50' : 'text-gray-500'}`}>{tariff.desc}</p>
                    <span className={`inline-flex mt-6 items-center justify-center px-5 py-2.5 rounded-full border ${tariff.isPremium ? 'border-white/20 bg-white text-blue-600' : 'border-transparent bg-blue-600 text-white'} text-[10px] font-black tracking-[0.2em] uppercase shadow-lg`}>
                      {tariff.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
{/* ==================================================== */}
        {/* 7. БЛОК: ОБРАТНАЯ СВЯЗЬ (CONTACT) */}
        {/* ==================================================== */}
        <section id="contact" className="w-full py-20 lg:py-40 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="bg-[#f0f4f8] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-100">
              
              {/* ЛЕВАЯ ЧАСТЬ (СИНЯЯ ПАНЕЛЬ) */}
              <div className="lg:w-[40%] bg-blue-600 p-10 lg:p-14 text-white flex flex-col justify-between min-h-[400px]">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">Обратная связь</h2>
                  <p className="text-blue-100 text-sm font-medium opacity-90">Давай создадим нечто крутое.</p>
                </div>

                <div className="space-y-6">
                  {/* Почта */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-50 break-all">maksim_adamov@adammaks.ru</span>
                  </div>
                  
                  {/* Телефон */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-50 break-all">+7 (918)-021-81-52</span>
                  </div>

                  {/* Локация */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 2.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-50">Москва, Российская Федерация</span>
                  </div>

                  {/* СОЦСЕТИ В ФУТЕРЕ */}
                  <div className="flex items-center gap-3 pt-4">
                    <a href="https://instagram.com/adam_maks" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all group">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://t.me/adam_maks" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all group">
                      <svg className="w-5 h-5 -ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.096l-6.405 4.032-2.76-.863c-.6-.185-.614-.6.125-.89l10.736-4.138c.5-.186.945.115.83.996z"/></svg>
                    </a>
                    <a href="https://vk.com/adam_maks" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all group">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.254 13.918c.642.668 1.348 1.272 1.905 2.012.355.467.683.957.94 1.48.223.453.072.846-.432.883-.93.07-1.865.048-2.8.033-.67-.01-.176-.328-.507-.643-.585-.56-1.144-1.15-1.728-1.713-.243-.233-.505-.443-.805-.614-.423-.24-.805-.137-1.01.296-.28.59-.344 1.23-.362 1.872-.01.35-.11.464-.464.475-1.854.053-3.568-.3-5.12-1.334-1.637-1.088-2.88-2.52-3.87-4.14-1.29-2.114-2.227-4.407-2.92-6.793-.13-.45.02-.612.49-.624.97-.025 1.94-.02 2.91-.005.35.006.54.17.67.5 1.01 2.58 2.37 4.9 4.3 6.84.23.23.46.3.73.13.3-.18.4-.48.42-.81.04-1.28.02-2.56-.12-3.83-.06-.52-.3-.87-.8-1.04-.3-.1-.28-.24-.07-.36.33-.2.72-.28 1.1-.3h2.36c.4.08.53.28.57.68.08 1.23.06 2.47.01 3.7-.01.38.16.63.53.7.35.07.6-.08.82-.32.96-1.05 1.66-2.28 2.22-3.58.2-.46.36-.94.52-1.42.1-.33.3-.47.66-.46.97.02 1.93.01 2.9.01.12 0 .25 0 .42 0-.2.32-.42.63-.62.96-.83 1.26-1.74 2.45-2.54 3.72-.25.4-.24.73.06 1.09z"/></svg>
                    </a>
                    <a href="https://dprofile.ru/adam_maks" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all group">
                      <span className="text-[13px] font-black tracking-tighter group-hover:scale-110 transition-transform">DP</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ПРАВАЯ ЧАСТЬ (ФОРМА) */}
              <div className="flex-1 p-10 lg:p-14 bg-[#f0f4f8]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-900 ml-2">Ваше имя и фамилия</label>
                    <input type="text" placeholder="Имя и Фамилия" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-300"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-900 ml-2">Email адрес</label>
                    <input type="email" placeholder="Email адрес" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-300"/>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-900 ml-2">Номер телефона</label>
                    <input type="text" placeholder="Номер телефона" className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-300"/>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-900 ml-2">Соц. сеть</label>
                    <input type="text" placeholder="Телеграм или ВК" className="w-full px-6 py-5 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-300"/>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-900 ml-2">Сообщение</label>
                    <textarea rows={4} placeholder="Ваше сообщение" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-5 rounded-[2rem] bg-white border border-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-300 resize-none"/>
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <button type="button" className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Отправить сообщение</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;