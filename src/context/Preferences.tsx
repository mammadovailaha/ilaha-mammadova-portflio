import { createContext, useContext } from "react";

export type Language = "en" | "ru" | "az";
export type Theme = "light" | "dark";

export interface PreferencesValue {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const PreferencesContext = createContext<PreferencesValue | null>(null);

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used within PreferencesProvider");
  return context;
};

export const translations = {
  en: {
    home: "Home", about: "About", skillsNav: "Skills", experienceNav: "Experience", projects: "Projects", contact: "Contact", letsTalk: "Let’s talk",
    role: "FRONTEND DEVELOPER · BAKU, AZERBAIJAN", heroTitle: "Building digital", heroAccent: "experiences, differently.",
    heroBody: "I’m İlaha Mammadova, a frontend developer shaping responsive, user-friendly digital experiences with a designer’s eye for detail.",
    resume: "Download CV", hire: "Let’s connect", selectedWork: "Explore selected work", buildPurpose: "Build with purpose", creating: "Currently creating", forWeb: "Useful things for the web",
    education: "Education", difference: "Where I’ve made a difference", experience: "Experience", degree: "Bachelor’s Degree in Mathematics Education", educationDescription: "Developed a strong foundation in mathematical logic, pedagogical methods, problem-solving, curriculum design, and student engagement.",
    turingCourse: "Frontend Development Program", turingDescription: "Hands-on training in HTML5, CSS3, JavaScript, React, and TypeScript. Focused on responsive web design, component-based architecture, version control, and collaborative workflows using Git and GitHub.",
    networkCourse: "IT Essentials Course", networkDescription: "Gained foundational knowledge in IT systems, computer hardware, software, networking basics, and troubleshooting, with practical understanding of IT support, digital security, and system maintenance.",
    internRole: "Frontend Developer (Intern)", internDescription: "Built interactive user interfaces using HTML5, CSS3, JavaScript, and React.js. Participated in daily stand-ups and sprint planning, and practiced collaborative development with Git and GitHub in a professional team.",
    flupDescription: "Contributed to B2B, BPM, ERP, e-commerce, OMS, and landing page projects. Built and maintained frontend components using HTML, CSS, Sass, Bootstrap, JavaScript, jQuery, and UI libraries; collaborated on integration, performance, browser compatibility, and responsive design.",
    isHesabiDescription: "Contributed to frontend development of an ERP system by building responsive, reusable UI components. Worked with the team to improve the application interface, optimize performance, and fix UI-related issues.",
    design: "UI/UX & Web Design", designRole: "UI/UX and Web Designer", designDescription: "Designed clear, responsive interfaces and website visuals, with a focus on user experience, usability, and consistency.",
    frontend: "Frontend Development", frontendRole: "Frontend Developer", frontendDescription: "Built reusable, responsive interfaces across ERP, B2B, BPM, e-commerce, order management, and landing page projects. Collaborated with cross-functional teams and supported UI improvements.",
    agileDescription: "Contributed to a scalable platform using React, Vite, and Tailwind CSS, building interactive interfaces alongside designers and backend engineers in an Agile team.",
    selected: "Selected work · 01—03", projectTitle: "A few things I’ve helped bring to life.", projectIntro: "From full-stack learning platforms to considered product interfaces, every project starts with making the experience feel simple.",
    avtohesab: "Avtohesab", binahesabi: "Binahesabi", businessPlatform: "BUSINESS ECOSYSTEM · B2B / BPM / OMS", propertyPlatform: "PROPERTY MANAGEMENT · DASHBOARD", avtohesabDescription: "I work on B2B, BPM, manager, B4B, and OMS products within Avtohesab’s business software ecosystem, building and improving interfaces for operational workflows.", binahesabiDescription: "I work on the Binahesabi dashboard, adapting interface content and workflows for multiple languages to support property and building management.",
    educationProject: "Educational Platform", agile: "Agile Pulse", portfolio: "Graphic & Motion Portfolio", fullstack: "FULL-STACK · EDUCATION", saas: "SAAS · TEAM PRODUCT", creative: "CREATIVE · PORTFOLIO",
    projectOneDescription: "Full-stack educational platform clone with responsive UI, authentication, and REST APIs. Built with React, Redux, React Router, Tailwind CSS, Node.js, Express, MongoDB, and JWT.",
    projectTwoDescription: "A scalable web platform for learning and applying Agile methods. Built responsive, interactive interfaces with React, Vite, and Tailwind CSS in collaboration with designers and backend engineers.",
    projectThreeDescription: "A responsive portfolio website showcasing graphic and motion design work in a modern, user-friendly interface. Built with React, Tailwind CSS, and JavaScript.",
    skillsLabel: "What I work with", skillsTitle: "Tools & skills", skillHint: "Swipe or use the arrows to explore", designExperience: "DESIGN EXPERIENCE", designBlurb: "In addition to frontend development, I bring a graphic and motion design perspective to web interfaces, with a focus on clear visual hierarchy, usability, and responsive layouts.",
    contactEyebrow: "Have a project in mind?", contactTitle: "Let’s make something meaningful.", contactBody: "I’m open to thoughtful collaborations and frontend opportunities. Drop me a note and tell me what you’re working on.", startConversation: "Start a conversation", contactDetails: "Contact details", location: "Khatai, Baku, Azerbaijan",
    footerEyebrow: "Have something in mind?", footerTitle: "Let’s build it thoughtfully.", getInTouch: "Get in touch", footerRole: "Frontend developer · Baku",
    aboutHeadline: "Engineering responsive digital products.", aboutBody: "I’m İlaha Mammadova, a frontend developer focused on React, TypeScript, and modern JavaScript. I build reusable component systems, integrate REST APIs, manage client-side state, and optimize responsive interfaces across ERP, B2B, BPM, e-commerce, and order-management products.",
    certificatesEyebrow: "Continuous learning", certificatesTitle: "Training & certifications", certificateMeta: "Meta React Specialization Certificate", certificateNode: "Developing Back-End Apps with Node.js and Express", certificateTypescript: "Ultimate TypeScript Course 2024", certificateVersion: "Version Control", certificateUx: "Foundations of UX Design", certificateBuild: "Build Websites with HTML, JavaScript, AngularJS & React", certificateNext: "Learn Next.js", certificateProvider: "Meta · Coursera", certificateDate: "June 2025",
    skillsIntro: "A practical toolkit for clear, reliable interfaces across modern web products.", projectsHome: "Selected work", projectsHomeIntro: "Projects, experiments, and interfaces I’ve helped bring to life.", exploreAll: "Explore all projects", experienceIntro: "Frontend delivery and design contributions across business platforms and product teams.",
    bannerTitle: "No noise. Just thoughtful code.", bannerBody: "Clean, responsive interfaces built around real people and useful details.",
  },
  ru: {
    home: "Главная", about: "Обо мне", skillsNav: "Навыки", experienceNav: "Опыт", projects: "Проекты", contact: "Контакты", letsTalk: "Написать мне",
    role: "FRONTEND-РАЗРАБОТЧИК · БАКУ, АЗЕРБАЙДЖАН", heroTitle: "Создаю цифровые", heroAccent: "впечатления с характером.",
    heroBody: "Я Илаха Мамедова, frontend-разработчик. Создаю адаптивные и удобные цифровые продукты, уделяя внимание деталям, как дизайнер.",
    resume: "Скачать CV", hire: "Связаться", selectedWork: "Посмотреть проекты", buildPurpose: "Создаю с целью", creating: "Сейчас создаю", forWeb: "Полезные решения для веба",
    education: "Образование", difference: "Мой профессиональный вклад", experience: "Опыт", degree: "Бакалавр математического образования", educationDescription: "Изучала математическую логику, педагогику и решение задач; получила опыт в разработке учебных программ и вовлечении учащихся.",
    turingCourse: "Программа Frontend-разработки", turingDescription: "Практическое обучение HTML5, CSS3, JavaScript, React и TypeScript. Изучала адаптивный веб-дизайн, компонентную архитектуру, контроль версий и командную разработку с Git и GitHub.",
    networkCourse: "Курс IT Essentials", networkDescription: "Получила базовые знания об IT-системах, компьютерном оборудовании и ПО, сетях и диагностике неисправностей, а также об IT-поддержке, цифровой безопасности и обслуживании систем.",
    internRole: "Frontend-разработчик (стажёр)", internDescription: "Создавала интерактивные интерфейсы на HTML5, CSS3, JavaScript и React.js. Участвовала в ежедневных встречах и планировании спринтов, работала в команде с Git и GitHub.",
    flupDescription: "Участвовала в проектах B2B, BPM, ERP, электронной коммерции, OMS и лендингах. Создавала frontend-компоненты на HTML, CSS, Sass, Bootstrap, JavaScript, jQuery и UI-библиотеках; работала над интеграцией, производительностью, кроссбраузерностью и адаптивностью.",
    isHesabiDescription: "Участвовала во frontend-разработке ERP-системы: создавала адаптивные переиспользуемые UI-компоненты, улучшала интерфейс приложения, производительность и исправляла ошибки UI.",
    design: "UI/UX и веб-дизайн", designRole: "UI/UX и веб-дизайнер", designDescription: "Создавала понятные адаптивные интерфейсы и визуальный стиль сайтов, уделяя внимание удобству и целостности пользовательского опыта.",
    frontend: "Frontend-разработка", frontendRole: "Frontend-разработчик", frontendDescription: "Создавала переиспользуемые адаптивные интерфейсы для ERP, B2B, BPM, электронной коммерции, OMS и лендингов. Работала с разнопрофильными командами и улучшала интерфейсы.",
    agileDescription: "Участвовала в разработке масштабируемой платформы на React, Vite и Tailwind CSS, создавая интерактивные интерфейсы вместе с дизайнерами и backend-инженерами в Agile-команде.",
    selected: "Избранные проекты · 01—03", projectTitle: "Проекты, которые я помогла воплотить.", projectIntro: "От образовательных full-stack платформ до продуманных продуктовых интерфейсов — каждый проект начинается с простого и удобного опыта.",
    avtohesab: "Avtohesab", binahesabi: "Binahesabi", businessPlatform: "БИЗНЕС-ЭКОСИСТЕМА · B2B / BPM / OMS", propertyPlatform: "УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ · DASHBOARD", avtohesabDescription: "Работаю над продуктами B2B, BPM, manager, B4B и OMS в экосистеме бизнес-систем Avtohesab, создавая и улучшая интерфейсы для операционных процессов.", binahesabiDescription: "Работаю над dashboard Binahesabi, адаптирую интерфейс и процессы для нескольких языков в сфере управления недвижимостью и зданиями.",
    educationProject: "Образовательная платформа", agile: "Agile Pulse", portfolio: "Портфолио графического дизайна и анимации", fullstack: "FULL-STACK · ОБРАЗОВАНИЕ", saas: "SAAS · КОМАНДНЫЙ ПРОДУКТ", creative: "ДИЗАЙН · ПОРТФОЛИО",
    projectOneDescription: "Full-stack клон образовательной платформы с адаптивным UI, авторизацией и REST API. React, Redux, React Router, Tailwind CSS, Node.js, Express, MongoDB и JWT.",
    projectTwoDescription: "Масштабируемая веб-платформа для изучения Agile. Создавала адаптивные интерактивные интерфейсы на React, Vite и Tailwind CSS совместно с дизайнерами и backend-инженерами.",
    projectThreeDescription: "Адаптивный сайт-портфолио графического и motion-дизайна с современным и удобным интерфейсом. React, Tailwind CSS и JavaScript.",
    skillsLabel: "Мой инструментарий", skillsTitle: "Навыки и технологии", skillHint: "Прокрутите или используйте стрелки", designExperience: "ОПЫТ В ДИЗАЙНЕ", designBlurb: "Помимо frontend-разработки, я использую знания графического и motion-дизайна при создании веб-интерфейсов, уделяя внимание визуальной иерархии, удобству и адаптивности.",
    contactEyebrow: "Есть идея для проекта?", contactTitle: "Давайте создадим что-то важное.", contactBody: "Открыта к интересному сотрудничеству и frontend-возможностям. Напишите и расскажите, над чем вы работаете.", startConversation: "Написать мне", contactDetails: "Контакты", location: "Хатаинский район, Баку, Азербайджан",
    footerEyebrow: "Есть идея?", footerTitle: "Создадим её с вниманием к деталям.", getInTouch: "Связаться", footerRole: "Frontend-разработчик · Баку",
    aboutHeadline: "Разработка адаптивных цифровых продуктов.", aboutBody: "Я Илаха Мамедова, frontend-разработчик, специализирующийся на React, TypeScript и современном JavaScript. Создаю переиспользуемые компонентные системы, интегрирую REST API, управляю состоянием интерфейса и оптимизирую адаптивные решения для ERP, B2B, BPM, электронной коммерции и управления заказами.",
    certificatesEyebrow: "Постоянное обучение", certificatesTitle: "Курсы и сертификаты", certificateMeta: "Сертификат Meta React Specialization", certificateNode: "Разработка backend-приложений на Node.js и Express", certificateTypescript: "Полный курс TypeScript 2024", certificateVersion: "Контроль версий", certificateUx: "Основы UX-дизайна", certificateBuild: "Создание сайтов на HTML, JavaScript, AngularJS и React", certificateNext: "Изучение Next.js", certificateProvider: "Meta · Coursera", certificateDate: "Июнь 2025",
    skillsIntro: "Практичный набор технологий для понятных и надёжных современных веб-продуктов.", projectsHome: "Избранные проекты", projectsHomeIntro: "Проекты и интерфейсы, в воплощении которых я участвовала.", exploreAll: "Все проекты", experienceIntro: "Frontend-разработка и дизайн в бизнес-платформах и продуктовых командах.",
    bannerTitle: "Без лишнего. Только продуманный код.", bannerBody: "Чистые адаптивные интерфейсы, созданные с вниманием к людям и деталям.",
  },
  az: {
    home: "Ana səhifə", about: "Haqqımda", skillsNav: "Bacarıqlar", experienceNav: "Təcrübə", projects: "Layihələr", contact: "Əlaqə", letsTalk: "Əlaqə saxla",
    role: "FRONTEND DEVELOPER · BAKI, AZƏRBAYCAN", heroTitle: "Rəqəmsal", heroAccent: "təcrübələri fərqli qururam.",
    heroBody: "Mən İlaha Məmmədova, dizayner baxışı ilə responsiv və istifadəsi rahat rəqəmsal təcrübələr yaradan frontend developerəm.",
    resume: "CV-ni yüklə", hire: "Əlaqə saxla", selectedWork: "Layihələrə bax", buildPurpose: "Məqsədlə yaradıram", creating: "Hazırda yaradıram", forWeb: "Veb üçün faydalı həllər",
    education: "Təhsil", difference: "Töhfə verdiyim işlər", experience: "Təcrübə", degree: "Riyaziyyat müəllimliyi üzrə bakalavr", educationDescription: "Riyazi məntiq, pedaqogika və problem həlli üzrə biliklər qazandım; tədris proqramı və şagirdlərin iştirakı sahəsində təcrübə topladım.",
    turingCourse: "Frontend Development proqramı", turingDescription: "HTML5, CSS3, JavaScript, React və TypeScript üzrə praktiki təlim. Responsiv veb dizayn, komponent əsaslı arxitektura, versiyaların idarə edilməsi və Git/GitHub ilə komanda işinə fokuslanmışdır.",
    networkCourse: "IT Essentials kursu", networkDescription: "IT sistemləri, kompüter avadanlığı və proqram təminatı, şəbəkə əsasları və nasazlıqların aradan qaldırılması üzrə baza bilikləri qazandım; IT dəstəyi, rəqəmsal təhlükəsizlik və sistemlərin texniki xidməti ilə tanış oldum.",
    internRole: "Frontend developer (təcrübəçi)", internDescription: "HTML5, CSS3, JavaScript və React.js ilə interaktiv istifadəçi interfeysləri hazırladım. Gündəlik görüşlərdə və sprint planlamasında iştirak etdim, Git və GitHub ilə komanda işində təcrübə qazandım.",
    flupDescription: "B2B, BPM, ERP, e-commerce, OMS və landing page layihələrinə töhfə verdim. HTML, CSS, Sass, Bootstrap, JavaScript, jQuery və UI kitabxanaları ilə frontend komponentləri hazırlayıb saxladım; inteqrasiya, performans, brauzer uyğunluğu və responsiv dizayn üzərində işlədim.",
    isHesabiDescription: "ERP sisteminin frontend inkişafına responsiv və təkrar istifadə olunan UI komponentləri ilə töhfə verdim. Tətbiqin interfeysini təkmilləşdirmək, performansı optimallaşdırmaq və UI problemlərini həll etmək üçün komanda ilə işlədim.",
    design: "UI/UX və veb dizayn", designRole: "UI/UX və veb dizayner", designDescription: "İstifadəçi təcrübəsi, rahatlıq və ardıcıllığa diqqət yetirərək aydın, responsiv interfeyslər və veb vizualları hazırladım.",
    frontend: "Frontend proqramlaşdırma", frontendRole: "Frontend developer", frontendDescription: "ERP, B2B, BPM, e-commerce, sifariş idarəetməsi və landing page layihələri üçün təkrar istifadə olunan responsiv interfeyslər hazırladım. Müxtəlif komandalarla işləyərək UI təkmilləşdirmələrinə töhfə verdim.",
    agileDescription: "React, Vite və Tailwind CSS ilə miqyaslana bilən platformanın hazırlanmasında iştirak etdim; Agile komandasında dizaynerlər və backend mühəndisləri ilə interaktiv interfeyslər qurdum.",
    selected: "Seçilmiş işlər · 01—03", projectTitle: "Həyata keçməsinə töhfə verdiyim layihələr.", projectIntro: "Full-stack təhsil platformalarından düşünülmüş məhsul interfeyslərinə qədər hər layihədə məqsəd istifadəni sadələşdirməkdir.",
    avtohesab: "Avtohesab", binahesabi: "Binahesabi", businessPlatform: "BİZNES EKOSİSTEMİ · B2B / BPM / OMS", propertyPlatform: "ƏMLAK İDARƏETMƏSİ · DASHBOARD", avtohesabDescription: "Avtohesab biznes proqramları ekosistemində B2B, BPM, manager, B4B və OMS tipli məhsullar üzərində işləyir, əməliyyat prosesləri üçün interfeyslər hazırlayıb təkmilləşdirirəm.", binahesabiDescription: "Binahesabi dashboard-u üzərində işləyir, bina və əmlak idarəetmə prosesləri üçün interfeys məzmununu və istifadəçi axınlarını müxtəlif dillərə uyğunlaşdırıram.",
    educationProject: "Təhsil platforması", agile: "Agile Pulse", portfolio: "Qrafik və motion dizayn portfolio", fullstack: "FULL-STACK · TƏHSİL", saas: "SAAS · KOMANDA MƏHSULU", creative: "DİZAYN · PORTFOLİO",
    projectOneDescription: "Responsiv UI, autentifikasiya və REST API-ləri olan full-stack təhsil platforması klonu. React, Redux, React Router, Tailwind CSS, Node.js, Express, MongoDB və JWT ilə hazırlanıb.",
    projectTwoDescription: "Agile metodlarını öyrənmək və tətbiq etmək üçün miqyaslana bilən platforma. Dizayner və backend mühəndisləri ilə React, Vite və Tailwind CSS istifadə edərək interaktiv interfeyslər hazırladım.",
    projectThreeDescription: "Qrafik və motion dizayn işlərini nümayiş etdirən, müasir və istifadəsi rahat responsiv portfolio. React, Tailwind CSS və JavaScript ilə hazırlanıb.",
    skillsLabel: "İstifadə etdiyim alətlər", skillsTitle: "Bacarıqlar və texnologiyalar", skillHint: "Sürüşdürün və ya oxlardan istifadə edin", designExperience: "DİZAYN TƏCRÜBƏSİ", designBlurb: "Frontend proqramlaşdırma ilə yanaşı, veb interfeyslərdə qrafik və motion dizayn yanaşmasından istifadə edir, vizual iyerarxiya, rahatlıq və responsivliyə diqqət yetirirəm.",
    contactEyebrow: "Layihə ideyanız var?", contactTitle: "Gəlin mənalı bir iş yaradaq.", contactBody: "Maraqlı əməkdaşlıqlara və frontend imkanlarına açığam. Yazın, üzərində işlədiyiniz işdən danışın.", startConversation: "Söhbətə başla", contactDetails: "Əlaqə məlumatları", location: "Xətai, Bakı, Azərbaycan",
    footerEyebrow: "Ağlınızda layihə var?", footerTitle: "Gəlin onu düşünərək yaradaq.", getInTouch: "Əlaqə saxla", footerRole: "Frontend developer · Bakı",
    aboutHeadline: "Responsiv rəqəmsal məhsulların hazırlanması.", aboutBody: "Mən İlaha Məmmədova, React, TypeScript və müasir JavaScript üzrə çalışan frontend developerəm. Təkrar istifadə olunan komponent sistemləri qurur, REST API inteqrasiyası və client-side state idarəetməsi ilə işləyir, ERP, B2B, BPM, e-commerce və sifariş idarəetmə məhsullarında responsiv interfeysləri optimallaşdırıram.",
    certificatesEyebrow: "Davamlı öyrənmə", certificatesTitle: "Təlimlər və sertifikatlar", certificateMeta: "Meta React Specialization sertifikatı", certificateNode: "Node.js və Express ilə backend tətbiqlərinin hazırlanması", certificateTypescript: "Ultimate TypeScript Course 2024", certificateVersion: "Versiyaların idarə olunması", certificateUx: "UX dizaynının əsasları", certificateBuild: "HTML, JavaScript, AngularJS və React ilə vebsaytların hazırlanması", certificateNext: "Learn Next.js", certificateProvider: "Meta · Coursera", certificateDate: "İyun 2025",
    skillsIntro: "Müasir veb məhsullar üçün aydın və etibarlı interfeyslər yaratmağa yönəlmiş praktik texnologiya dəsti.", projectsHome: "Seçilmiş işlər", projectsHomeIntro: "Həyata keçirilməsinə töhfə verdiyim layihə və interfeyslər.", exploreAll: "Bütün layihələrə bax", experienceIntro: "Biznes platformaları və məhsul komandalarında frontend və dizayn töhfələri.",
    bannerTitle: "Artıq səs-küy yox. Düşünülmüş kod.", bannerBody: "İnsanlara və faydalı detallara əsaslanan təmiz, responsiv interfeyslər.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export const useT = () => {
  const { language } = usePreferences();
  return (key: TranslationKey) => translations[language][key];
};
