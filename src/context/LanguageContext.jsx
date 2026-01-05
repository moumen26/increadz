import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    process: "Process",
    contact: "Contact",
    letsContact: "Let's Contact",
    menu: "Menu",

    // Hero Section
    heroLine1: "Your Vision Is",
    heroLine2: "Our Mission.",
    heroSubtitle: "Increase your potential.",

    // About Section
    aboutTitle1: "Who We",
    aboutTitle2: "Are?",
    aboutDescription:
      "At Increadz, we provide professional advertising, custom website creation, captivating design, and high-quality photography and filmmaking to bring your vision to life.",
    aboutMainText:
      "Whether enhancing your digital presence or creating impactful content, we deliver expertise and innovation that transforms ideas into remarkable realities.",

    // Services Section
    servicesSubtitle: "Our Best",
    servicesTitle: "Services!",
    servicesDescription:
      "We deliver comprehensive solutions tailored to your business needs, from visual storytelling to digital transformation.",

    // Service Items
    webDevTitle: "Website & App Development",
    webDevCategory: "Digital Solutions",
    webDevDescription:
      "Tailored digital solutions built for performance, simplicity, and scale. We design and develop websites and mobile applications that align with your business goals.",

    socialMediaTitle: "Social Media Marketing",
    socialMediaCategory: "Brand Growth",
    socialMediaDescription:
      "End-to-end social media management to grow your audience and elevate your brand through strategic content and targeted campaigns.",

    photoVideoTitle: "Photography & Filmmaking",
    photoVideoCategory: "Visual Production",
    photoVideoDescription:
      "High-quality visual production to bring your story to life. From events to product shoots, we deliver impactful content for brands and social media.",

    // Works / Realizations Section (NEW)
    worksTitle: "Selected",
    worksSubtitle: "Works",
    worksIntroDesc:
      "Discover our most recent projects. Modern, high-performance websites designed to convert your visitors into loyal customers.",
    catLogistics: "Logistics",
    catEcommerce: "E-Commerce",
    catWebApp: "Web Application",
    catFashion: "Fashion",
    catRealEstate: "Real Estate",

    // Process Section
    processTitle1: "Our Process",
    processTitle2: "Built For Action",
    processDescription:
      "At increadz, we follow a structured, yet flexible approach to ensure that every website we build achieves its goals.",
    step: "Step",

    // Process Steps
    step1Title: "Goal Alignment Session",
    step1Desc:
      "We learn about your business, your pain points, and your goals. No fluff, just focused exploration to understand exactly what success looks like for you.",
    step2Title: "Design Flow Assessment",
    step2Desc:
      "We assess your operations, market position, and opportunities. We find the gaps and identify the growth levers that will make the biggest impact.",
    step3Title: "Experience Strategy Plan",
    step3Desc:
      "You get a clear, step-by-step strategy designed around your goals. From short-term wins to long-term impact, we map out the journey.",
    step4Title: "Brand Growth Engagement",
    step4Desc:
      "We guide you through implementation, offer expert feedback, and help solve roadblocks. You're never alone—we move together.",
    step5Title: "Launch & Performance Tune-Up",
    step5Desc:
      "Growth isn't a one-time event. We review progress and adapt the plan to stay aligned. We evolve with confidence to ensure sustained results.",

    // FAQ Section (NEW)
    faqTitle1: "Good to",
    faqTitle2: "Know",
    faqDescription:
      "Answers to the questions our clients ask us most often before launching their project.",

    faqQuestion1: "What is the delivery time for a website?",
    faqAnswer1:
      "It depends on the complexity of the project. Generally, a showcase site takes between 2 to 4 weeks, while a more complex platform may require 8 to 12 weeks.",

    faqQuestion2: "How does your creation process work?",
    faqAnswer2:
      "We follow a 5-step agile methodology: Discovery, Strategy, Design, Development, and Launch, with regular validations at each stage.",

    faqQuestion3: "Can I modify my site after launch?",
    faqAnswer3:
      "Absolutely. We train you on using the CMS so you can be autonomous with content, or we can handle maintenance for you.",

    faqQuestion4: "What technologies do you use?",
    faqAnswer4:
      "We mainly use React, Next.js, Node.js, and Tailwind CSS for optimal performance and custom design.",

    faqQuestion5: "Do you offer payment plans?",
    faqAnswer5:
      "Yes, we generally propose a 30% deposit to start, 30% mid-project, and the balance upon delivery. Custom plans are possible.",

    faqQuestion6: "How do feedback and revisions work?",
    faqAnswer6:
      "We work in iterations. At each key stage (Design, Dev), we present progress and gather your feedback. We include revision cycles to ensure the final result perfectly matches your vision.",

    faqQuestion7: "Will my site be well-ranked on Google?",
    faqAnswer7:
      "Absolutely. SEO is at the heart of our development. We optimize structure, loading speed, semantic tagging, and mobile adaptability to ensure the best performance on search engines.",

    // Contact Section
    contactTitle1: "Let's Start",
    contactTitle2: "A Project",
    contactDescription:
      "Reach out to us, and we'll get back to you as soon as possible. We're here to help you take the next step toward success.",

    // Contact Form
    yourName: "Your Name",
    emailAddress: "Email Address",
    message: "Message",
    sendNow: "Send Now",
    interestedIn: "Interested in",
    selectOption: "Select an option",

    // Contact Services
    photography: "Photography & Filmmaking",
    webDesign: "Website Development",
    appDevelopment: "App Development",
    socialMedia: "Social Media Marketing",
    branding: "Branding & Design",
    other: "Other",

    // Form Validation
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email",
    interestRequired: "Please select your interest",
    messageRequired: "Message is required",

    // Form Status
    sending: "Sending...",
    messageSent:
      "Your message has been sent successfully! We'll get back to you soon.",
    messageFailed: "There was an error sending your message. Please try again.",

    // Footer
    footerDescription:
      "We build digital experiences that blend strategy, design, and technology.",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",

    // About Stats
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",
    yearsExperience: "Years Experience",
    clientSatisfaction: "Client Satisfaction",

    // About Values
    innovation: "Innovation",
    innovationDesc:
      "We push creative boundaries to deliver cutting-edge solutions that stand out.",
    quality: "Quality",
    qualityDesc:
      "Excellence is our standard. Every project receives meticulous attention to detail.",
    partnership: "Partnership",
    partnershipDesc:
      "Your success is our mission. We work closely with you at every step.",

    // Paths Section
    pathsTitle1: "Three paths",
    pathsTitle2: "to progress",
    pathsDescription:
      "At the core of our approach are three key areas of expertise. We blend strategy, creativity, and technology to fuel your growth.",

    // Path Cards
    creativeClarity: "Creative Clarity",
    creativeClarityDesc:
      "Focused, innovative design that reflects your brand's essence. We strip away the noise to reveal the core message.",
    technicalPrecision: "Technical Precision",
    technicalPrecisionDesc:
      "Seamless systems and processes for long-term scalability. We build robust foundations that grow with you.",
    strategicThinking: "Strategic Thinking",
    strategicThinkingDesc:
      "Clear, data-driven insights to make every step count. We don't just guess; we calculate your next move.",

    pathBadge1: "Path 01",
    pathBadge2: "Path 02",
    pathBadge3: "Path 03",

    // Testimonials Section
    testimonialsTitle1: "What Our",
    testimonialsTitle2: "Clients Say",

    // Testimonial Items
    testimonial1Quote:
      "From branding to product UI, their work elevated our entire digital experience. The communication was smooth, and the results speak for themselves.",
    testimonial1Name: "Jason Ahmed",
    testimonial1Role: "Founder of BloomCRM",

    testimonial2Quote:
      "They truly understood our brand voice and delivered a website that feels like 'us.' Our users love it, and so do we.",
    testimonial2Name: "Monica Reyes",
    testimonial2Role: "Marketing Director at Fitwise",

    testimonial3Quote:
      "Working with increadz was a game-changer. Their ability to turn abstract ideas into beautiful, functional designs is unmatched.",
    testimonial3Name: "Sarah Lin",
    testimonial3Role: "CEO at Nova Tech",

    testimonial4Quote:
      "The strategic approach to our rebranding was phenomenal. We've seen a 40% increase in engagement since launch.",
    testimonial4Name: "David Miller",
    testimonial4Role: "CTO at NexusStream",

    // General
    toggleLanguage: "Toggle language",
    toggleTheme: "Toggle theme",
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    services: "Services",
    process: "Processus",
    contact: "Contact",
    letsContact: "Contactons-nous",
    menu: "Menu",

    // Hero Section
    heroLine1: "Votre Vision Est",
    heroLine2: "Notre Mission.",
    heroSubtitle: "Augmentez votre potentiel.",

    // About Section
    aboutTitle1: "Qui Nous",
    aboutTitle2: "Sommes ?",
    aboutDescription:
      "Chez Increadz, nous proposons de la publicité professionnelle, la création de sites web personnalisés, un design captivant, et de la photographie et réalisation de haute qualité pour donner vie à votre vision.",
    aboutMainText:
      "Que ce soit pour améliorer votre présence numérique ou créer du contenu percutant, nous apportons expertise et innovation qui transforment les idées en réalités remarquables.",

    // Services Section
    servicesSubtitle: "Nos Meilleurs",
    servicesTitle: "Services !",
    servicesDescription:
      "Nous offrons des solutions complètes adaptées aux besoins de votre entreprise, de la narration visuelle à la transformation numérique.",

    // Service Items
    webDevTitle: "Développement Web & App",
    webDevCategory: "Solutions Numériques",
    webDevDescription:
      "Des solutions numériques sur mesure conçues pour la performance, la simplicité et l'évolutivité. Nous concevons et développons des sites web et des applications mobiles qui s'alignent avec vos objectifs commerciaux.",

    socialMediaTitle: "Marketing des Réseaux Sociaux",
    socialMediaCategory: "Croissance de Marque",
    socialMediaDescription:
      "Gestion complète des réseaux sociaux pour développer votre audience et élever votre marque grâce à du contenu stratégique et des campagnes ciblées.",

    photoVideoTitle: "Photographie & Réalisation",
    photoVideoCategory: "Production Visuelle",
    photoVideoDescription:
      "Production visuelle de haute qualité pour donner vie à votre histoire. Des événements aux séances photo de produits, nous livrons du contenu percutant pour les marques et les réseaux sociaux.",

    // Works / Realizations Section (NEW)
    worksTitle: "Nos",
    worksSubtitle: "Réalisations",
    worksIntroDesc:
      "Découvrez nos projets les plus récents. Des sites web modernes, performants et conçus pour convertir vos visiteurs en clients fidèles.",
    catLogistics: "Logistique",
    catEcommerce: "E-Commerce",
    catWebApp: "Application Web",
    catFashion: "Mode",
    catRealEstate: "Immobilier",

    // Process Section
    processTitle1: "Notre Processus",
    processTitle2: "Conçu Pour l'Action",
    processDescription:
      "Chez increadz, nous suivons une approche structurée mais flexible pour nous assurer que chaque site web que nous créons atteint ses objectifs.",
    step: "Étape",

    // Process Steps
    step1Title: "Session d'Alignement des Objectifs",
    step1Desc:
      "Nous découvrons votre entreprise, vos points douloureux et vos objectifs. Pas de superflu, juste une exploration ciblée pour comprendre exactement à quoi ressemble le succès pour vous.",
    step2Title: "Évaluation du Flux de Conception",
    step2Desc:
      "Nous évaluons vos opérations, votre positionnement sur le marché et vos opportunités. Nous trouvons les lacunes et identifions les leviers de croissance qui auront le plus grand impact.",
    step3Title: "Plan de Stratégie d'Expérience",
    step3Desc:
      "Vous obtenez une stratégie claire, étape par étape, conçue autour de vos objectifs. Des victoires à court terme à l'impact à long terme, nous cartographions le parcours.",
    step4Title: "Engagement de Croissance de Marque",
    step4Desc:
      "Nous vous guidons dans la mise en œuvre, offrons des commentaires d'experts et aidons à résoudre les obstacles. Vous n'êtes jamais seul—nous avançons ensemble.",
    step5Title: "Lancement & Réglage de Performance",
    step5Desc:
      "La croissance n'est pas un événement unique. Nous révisons les progrès et adaptons le plan pour rester alignés. Nous évoluons avec confiance pour assurer des résultats durables.",

    // FAQ Section (NEW)
    faqTitle1: "Tout",
    faqTitle2: "Savoir",
    faqDescription:
      "Les réponses aux questions que nos clients nous posent le plus souvent avant de lancer leur projet.",

    faqQuestion1: "Quel est le délai de livraison pour un site web ?",
    faqAnswer1:
      "Cela dépend de la complexité du projet. En général, un site vitrine prend entre 2 à 4 semaines, tandis qu'une plateforme plus complexe peut nécessiter 8 à 12 semaines.",

    faqQuestion2: "Comment fonctionne votre processus de création ?",
    faqAnswer2:
      "Nous suivons une méthodologie agile en 5 étapes : Découverte, Stratégie, Design, Développement et Lancement, avec des validations régulières à chaque étape.",

    faqQuestion3: "Puis-je modifier mon site après le lancement ?",
    faqAnswer3:
      "Absolument. Nous vous formons à l'utilisation du CMS pour que vous soyez autonome sur les contenus, ou nous pouvons assurer la maintenance pour vous.",

    faqQuestion4: "Quelles technologies utilisez-vous ?",
    faqAnswer4:
      "Nous utilisons principalement React, Next.js, Node.js et Tailwind CSS pour des performances optimales et un design sur-mesure.",

    faqQuestion5: "Proposez-vous des facilités de paiement ?",
    faqAnswer5:
      "Oui, nous proposons généralement un acompte de 30% au démarrage, 30% à mi-projet et le solde à la livraison. Des plans sur mesure sont possibles.",

    faqQuestion6: "Comment se passent les retours et révisions ?",
    faqAnswer6:
      "Nous fonctionnons par itérations. À chaque étape clé (Design, Dev), nous vous présentons l'avancement et recueillons vos retours. Nous incluons des cycles de révision pour garantir que le résultat final soit parfait.",

    faqQuestion7: "Mon site sera-t-il bien référencé sur Google ?",
    faqAnswer7:
      "Absolument. Le référencement naturel (SEO) est au cœur de notre développement. Nous optimisons la structure, la vitesse et le balisage sémantique pour garantir les meilleures performances sur les moteurs de recherche.",

    // Contact Section
    contactTitle1: "Création",
    contactTitle2: "d’un projet",
    contactDescription:
      "Contactez-nous et nous vous répondrons dès que possible. Nous sommes là pour vous aider à franchir la prochaine étape vers le succès.",

    // Contact Form
    yourName: "Votre Nom",
    emailAddress: "Adresse Email",
    message: "Message",
    sendNow: "Envoyer Maintenant",
    interestedIn: "Intéressé par",
    selectOption: "Sélectionner une option",

    // Contact Services
    photography: "Photographie & Réalisation",
    webDesign: "Développement de Site Web",
    appDevelopment: "Développement d'Application",
    socialMedia: "Marketing des Réseaux Sociaux",
    branding: "Image de Marque & Design",
    other: "Autre",

    // Form Validation
    nameRequired: "Le nom est requis",
    emailRequired: "L'email est requis",
    emailInvalid: "Veuillez entrer un email valide",
    interestRequired: "Veuillez sélectionner votre intérêt",
    messageRequired: "Le message est requis",

    // Form Status
    sending: "Envoi en cours...",
    messageSent:
      "Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.",
    messageFailed:
      "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",

    // Footer
    footerDescription:
      "Nous créons des expériences numériques qui allient stratégie, design et technologie.",
    allRightsReserved: "Tous droits réservés",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",

    // About Stats
    projectsCompleted: "Projets Réalisés",
    happyClients: "Clients Satisfaits",
    yearsExperience: "Années d'Expérience",
    clientSatisfaction: "Satisfaction Client",

    // About Values
    innovation: "Innovation",
    innovationDesc:
      "Nous repoussons les limites créatives pour offrir des solutions avant-gardistes qui se démarquent.",
    quality: "Qualité",
    qualityDesc:
      "L'excellence est notre standard. Chaque projet reçoit une attention méticuleuse aux détails.",
    partnership: "Partenariat",
    partnershipDesc:
      "Votre succès est notre mission. Nous travaillons étroitement avec vous à chaque étape.",

    // Paths Section
    pathsTitle1: "Trois voies",
    pathsTitle2: "vers le progrès",
    pathsDescription:
      "Au cœur de notre approche se trouvent trois domaines d'expertise clés. Nous mélangeons stratégie, créativité et technologie pour alimenter votre croissance.",

    // Path Cards
    creativeClarity: "Clarté Créative",
    creativeClarityDesc:
      "Design innovant et ciblé qui reflète l'essence de votre marque. Nous éliminons le bruit pour révéler le message essentiel.",
    technicalPrecision: "Précision Technique",
    technicalPrecisionDesc:
      "Systèmes et processus fluides pour une évolutivité à long terme. Nous construisons des fondations robustes qui grandissent avec vous.",
    strategicThinking: "Réflexion Stratégique",
    strategicThinkingDesc:
      "Insights clairs et basés sur les données pour que chaque étape compte. Nous ne devinons pas ; nous calculons votre prochain mouvement.",

    pathBadge1: "Voie 01",
    pathBadge2: "Voie 02",
    pathBadge3: "Voie 03",

    // Testimonials Section
    testimonialsTitle1: "Ce Que Nos",
    testimonialsTitle2: "Clients Disent",

    // Testimonial Items
    testimonial1Quote:
      "Du branding à l'UI produit, leur travail a élevé toute notre expérience numérique. La communication était fluide, et les résultats parlent d'eux-mêmes.",
    testimonial1Name: "Jason Ahmed",
    testimonial1Role: "Fondateur de BloomCRM",

    testimonial2Quote:
      "Ils ont vraiment compris la voix de notre marque et ont livré un site web qui nous ressemble. Nos utilisateurs l'adorent, et nous aussi.",
    testimonial2Name: "Monica Reyes",
    testimonial2Role: "Directrice Marketing chez Fitwise",

    testimonial3Quote:
      "Travailler avec increadz a changé la donne. Leur capacité à transformer des idées abstraites en designs beaux et fonctionnels est inégalée.",
    testimonial3Name: "Sarah Lin",
    testimonial3Role: "PDG chez Nova Tech",

    testimonial4Quote:
      "L'approche stratégique de notre rebranding était phénoménale. Nous avons vu une augmentation de 40% de l'engagement depuis le lancement.",
    testimonial4Name: "David Miller",
    testimonial4Role: "CTO chez NexusStream",

    // General
    toggleLanguage: "Changer la langue",
    toggleTheme: "Changer le thème",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "fr"; // Default to French
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
