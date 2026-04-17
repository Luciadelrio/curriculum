/* ── i18n content ───────────────────────────────────────── */
const content = {
  es: {
    hero: {
      role: 'ESTUDIANTE DE PERIODISMO',
      summary:
        'Soy una persona activa, responsable y con gran capacidad de aprendizaje. Estudio Periodismo y me apasiona la comunicación, la narrativa y el trabajo en equipo. Me destaco por mi actitud positiva, creatividad y facilidad para adaptarme a nuevos entornos y tecnologías.',
      viewCv: 'Ver CV en PDF',
      downloadCv: 'Descargar CV',
    },
    sections: {
      education: 'Formación',
      languages: 'Idiomas',
      skills: 'Habilidades',
      hobbies: 'Hobbies e intereses',
      contact: 'Contacto',
    },
    intros: {
      education:
        'Mi trayectoria académica combina una base sólida en ciencias sociales con una formación especializada en periodismo y comunicación digital.',
      languages:
        'El dominio de varios idiomas es para mí una herramienta profesional clave y una fuente constante de aprendizaje cultural.',
      skills:
        'A lo largo de mi formación he desarrollado competencias técnicas y transversales que me permiten trabajar en entornos periodísticos y comunicativos modernos.',
      hobbies:
        'Fuera del entorno académico, me nutro de actividades que refuerzan mi creatividad, curiosidad y compromiso social.',
      contact:
        'Estoy abierta a prácticas, colaboraciones y oportunidades junior en el ámbito del periodismo y la comunicación. No dudes en escribirme.',
    },
    contact: {
      email: 'Correo electrónico',
      phone: 'Teléfono',
    },
    education: [
      {
        period: '2020 – 2022',
        title: 'Bachillerato de Ciencias Sociales',
        institution: 'IES Cabo Ortegal',
        location: 'Ortigueira, A Coruña',
        description:
          'Especialización en Humanidades y Ciencias Sociales con materias de Economía, Historia de España, Literatura Universal y Geografía. Desarrollé sólidas capacidades analíticas, de síntesis y de expresión escrita que me sirvieron de base para la carrera universitaria.',
      },
      {
        period: '2022 – Actualidad',
        title: 'Grado en Periodismo',
        institution: 'Universidade de Santiago de Compostela',
        location: 'Santiago de Compostela, Galicia',
        description:
          'Formación integral en redacción periodística, comunicación digital y producción audiovisual. He realizado proyectos de reporterismo televisivo, gestionado redes sociales editoriales y trabajado la verificación de información. Materias destacadas: Narrativa Periodística, Periodismo de Datos, Comunicación Política y Producción Televisiva.',
        highlight: true,
      },
      {
        period: '2023',
        title: 'Certificación en verificación de información',
        institution: 'Google News Initiative',
        location: 'Online',
        description:
          'Formación en técnicas avanzadas de fact-checking: búsqueda inversa de imágenes, análisis de metadatos, verificación de fuentes en redes sociales y uso de herramientas especializadas como InVID, TinEye y Google Fact Check Explorer.',
      },
    ],
    languages: [
      {
        name: 'Castellano',
        level: 'Nativo',
        percent: 100,
        detail:
          'Lengua materna. Dominio pleno oral y escrito. Amplia experiencia en redacción periodística, comunicación institucional y creación de contenidos para medios digitales.',
      },
      {
        name: 'Gallego',
        level: 'Nativo',
        percent: 100,
        detail:
          'Lengua cooficial de Galicia hablada desde la infancia. Dominio pleno oral y escrito, con práctica habitual en entornos académicos, universitarios y familiares.',
      },
      {
        name: 'Inglés',
        level: 'B2 — Upper Intermediate',
        cert: 'Oxford Certificate',
        percent: 75,
        detail:
          'Capacidad para leer, escribir y comunicarme en entornos profesionales. Experiencia en redacción de artículos en inglés, comprensión de medios anglosajones y consumo de contenido académico en inglés.',
      },
      {
        name: 'Francés',
        level: 'B1 — Intermediate',
        cert: 'DELF',
        percent: 60,
        detail:
          'Conocimiento funcional del idioma. Comprensión lectora sólida y capacidad de expresión oral y escrita en contextos cotidianos y académicos.',
      },
    ],
    skills: [
      {
        category: 'Periodismo y redacción',
        icon: '✍️',
        items: [
          'Redacción de noticias, crónicas y reportajes',
          'Investigación y documentación de fuentes',
          'Verificación de información y fact-checking',
          'Edición de contenidos para blog (WordPress, Wix)',
          'Guionismo y producción de piezas para televisión',
        ],
      },
      {
        category: 'Digital y redes sociales',
        icon: '📱',
        items: [
          'Gestión de redes sociales (Instagram, X, TikTok)',
          'Creación de contenidos digitales estratégicos',
          'Análisis básico de audiencias y métricas',
          'Community management y calendarios editoriales',
          'Diseño de piezas gráficas para RRSS (Canva)',
        ],
      },
      {
        category: 'Producción audiovisual',
        icon: '🎬',
        items: [
          'Edición de vídeo (CapCut, Premiere básico)',
          'Retoque fotográfico (Adobe Photoshop)',
          'Maquetación y diseño editorial (Adobe InDesign)',
          'Grabación y producción de piezas informativas para TV',
        ],
      },
      {
        category: 'Competencias transversales',
        icon: '🤝',
        items: [
          'Trabajo en equipo y colaboración interdisciplinar',
          'Adaptabilidad y aprendizaje autónomo rápido',
          'Gestión del tiempo y organización de proyectos',
          'Comunicación oral y presentaciones en público',
          'Pensamiento crítico y analítico',
        ],
      },
    ],
    hobbies: [
      {
        icon: '🌍',
        title: 'Aprendizaje de idiomas',
        description:
          'Me apasiona aprender nuevos idiomas como puerta a otras culturas y como herramienta profesional. Actualmente refuerzo mi nivel de inglés y exploro el portugués de forma autodidacta.',
      },
      {
        icon: '🎬',
        title: 'Cine y series',
        description:
          'El cine y las series son para mí una fuente de análisis cultural y narrativo. Disfruto especialmente de los documentales periodísticos, los thrillers políticos y el cine de autor europeo.',
      },
      {
        icon: '✍️',
        title: 'Escritura creativa',
        description:
          'En mi tiempo libre escribo artículos de opinión, microrelatos y reflexiones. Esta práctica me ayuda a mantener vivo el estilo propio y la mirada crítica sobre la actualidad.',
      },
      {
        icon: '🤝',
        title: 'Voluntariado e iniciativas sociales',
        description:
          'Participo en iniciativas comunitarias y proyectos de acción social. Esta faceta ha reforzado mis habilidades de liderazgo, empatía y trabajo en equipo en entornos diversos.',
      },
      {
        icon: '📸',
        title: 'Fotografía',
        description:
          'Aficionada a la fotografía urbana y documental. Uso la imagen como herramienta narrativa para contar historias cotidianas desde una perspectiva periodística.',
      },
      {
        icon: '🎵',
        title: 'Música',
        description:
          'La música acompaña mi rutina creativa. Escucho géneros muy variados y asisto a conciertos y festivales como forma de desconexión, disfrute e inspiración.',
      },
    ],
    footer: {
      text: 'Disponible para prácticas y oportunidades junior en periodismo y comunicación.',
    },
  },

  en: {
    hero: {
      role: 'JOURNALISM STUDENT',
      summary:
        'I am an active, responsible person with strong learning skills. I study Journalism and I am passionate about communication, storytelling and teamwork. I stand out for my positive attitude, creativity, and ability to adapt to new environments and technologies.',
      viewCv: 'View PDF CV',
      downloadCv: 'Download CV',
    },
    sections: {
      education: 'Education',
      languages: 'Languages',
      skills: 'Skills',
      hobbies: 'Hobbies & Interests',
      contact: 'Contact',
    },
    intros: {
      education:
        'My academic path combines a strong foundation in social sciences with specialised training in journalism and digital communication.',
      languages:
        'For me, mastering several languages is both a key professional tool and a constant source of cultural growth.',
      skills:
        'Throughout my degree I have developed technical and transferable skills that allow me to work in modern journalistic and communications environments.',
      hobbies:
        'Outside my academic life, I draw on activities that strengthen my creativity, curiosity and social commitment.',
      contact:
        'I am open to internships, collaborations and junior opportunities in journalism and communications. Feel free to reach out.',
    },
    contact: {
      email: 'Email address',
      phone: 'Phone number',
    },
    education: [
      {
        period: '2020 – 2022',
        title: 'Social Sciences High School (Bachillerato)',
        institution: 'IES Cabo Ortegal',
        location: 'Ortigueira, A Coruña',
        description:
          'Specialisation in Humanities and Social Sciences covering Economics, History of Spain, World Literature and Geography. Developed strong analytical, synthesis and written-expression skills that laid the groundwork for university study.',
      },
      {
        period: '2022 – Present',
        title: 'BA in Journalism',
        institution: 'University of Santiago de Compostela',
        location: 'Santiago de Compostela, Galicia',
        description:
          'Comprehensive training in journalistic writing, digital communication and audiovisual production. Projects include TV news reporting, editorial social-media management and information verification. Key modules: Journalistic Narrative, Data Journalism, Political Communication and TV Production.',
        highlight: true,
      },
      {
        period: '2023',
        title: 'Information Verification Certificate',
        institution: 'Google News Initiative',
        location: 'Online',
        description:
          'Advanced fact-checking techniques: reverse image search, metadata analysis, social-media source verification and specialised tools including InVID, TinEye and Google Fact Check Explorer.',
      },
    ],
    languages: [
      {
        name: 'Spanish',
        level: 'Native',
        percent: 100,
        detail:
          'Mother tongue. Full oral and written proficiency. Extensive experience in journalistic writing, institutional communication and digital content creation.',
      },
      {
        name: 'Galician',
        level: 'Native',
        percent: 100,
        detail:
          'Co-official language of Galicia spoken since childhood. Full oral and written proficiency, regularly used in academic, university and family settings.',
      },
      {
        name: 'English',
        level: 'B2 — Upper Intermediate',
        cert: 'Oxford Certificate',
        percent: 75,
        detail:
          'Able to read, write and communicate in professional settings. Experience writing articles in English and consuming academic content and English-language media.',
      },
      {
        name: 'French',
        level: 'B1 — Intermediate',
        cert: 'DELF',
        percent: 60,
        detail:
          'Functional knowledge of the language. Solid reading comprehension and ability to express myself orally and in writing in everyday and academic contexts.',
      },
    ],
    skills: [
      {
        category: 'Journalism & Writing',
        icon: '✍️',
        items: [
          'Writing news articles, chronicles and reports',
          'Research and source gathering',
          'Information verification and fact-checking',
          'Blog content editing (WordPress, Wix)',
          'Scriptwriting and TV news production',
        ],
      },
      {
        category: 'Digital & Social Media',
        icon: '📱',
        items: [
          'Social media management (Instagram, X, TikTok)',
          'Strategic digital content creation',
          'Basic audience and metrics analysis',
          'Community management and editorial calendars',
          'Graphic design for social media (Canva)',
        ],
      },
      {
        category: 'Audiovisual Production',
        icon: '🎬',
        items: [
          'Video editing (CapCut, basic Premiere)',
          'Photo retouching (Adobe Photoshop)',
          'Layout and editorial design (Adobe InDesign)',
          'Recording and producing TV news pieces',
        ],
      },
      {
        category: 'Transferable Skills',
        icon: '🤝',
        items: [
          'Teamwork and interdisciplinary collaboration',
          'Adaptability and fast autonomous learning',
          'Time management and project organisation',
          'Oral communication and public presentations',
          'Critical and analytical thinking',
        ],
      },
    ],
    hobbies: [
      {
        icon: '🌍',
        title: 'Language Learning',
        description:
          'I am passionate about learning new languages as a gateway to other cultures and as a professional tool. I am currently strengthening my English and exploring Portuguese independently.',
      },
      {
        icon: '🎬',
        title: 'Film & TV Series',
        description:
          'Cinema and series are a source of cultural and narrative analysis for me. I particularly enjoy journalistic documentaries, political thrillers and European art-house cinema.',
      },
      {
        icon: '✍️',
        title: 'Creative Writing',
        description:
          'In my spare time I write opinion articles, short stories and reflections. This practice keeps my personal voice and critical eye on current affairs sharp.',
      },
      {
        icon: '🤝',
        title: 'Volunteering & Social Initiatives',
        description:
          'I take part in community initiatives and social-action projects. This has strengthened my leadership, empathy and teamwork skills across diverse environments.',
      },
      {
        icon: '📸',
        title: 'Photography',
        description:
          'A fan of urban and documentary photography. I use the camera as a narrative tool to tell everyday stories from a journalistic perspective.',
      },
      {
        icon: '🎵',
        title: 'Music',
        description:
          'Music accompanies my creative routine. I listen to a wide range of genres and attend concerts and festivals as a way to disconnect, enjoy myself and find inspiration.',
      },
    ],
    footer: {
      text: 'Open to internships and junior opportunities in journalism and communication.',
    },
  },
};

/* ── Language switcher buttons ──────────────────────────── */
const languageButtons = {
  es: document.getElementById('btn-es'),
  en: document.getElementById('btn-en'),
};

/* ── Render helpers ─────────────────────────────────────── */

function renderEducation(items) {
  const container = document.getElementById('education-cards');
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
    <article class="edu-card${item.highlight ? ' edu-card--highlight' : ''}">
      <div class="edu-card-period">${item.period}</div>
      <div class="edu-card-body">
        <h3 class="edu-card-title">${item.title}</h3>
        <p class="edu-card-institution">
          <span class="edu-card-inst-name">${item.institution}</span>
          <span class="edu-card-sep">·</span>
          <span class="edu-card-location">${item.location}</span>
        </p>
        <p class="edu-card-desc">${item.description}</p>
      </div>
    </article>`
    )
    .join('');
}

function renderLanguages(items) {
  const container = document.getElementById('languages-cards');
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
    <div class="lang-card">
      <div class="lang-card-top">
        <span class="lang-card-name">${item.name}</span>
        <span class="lang-card-level">${item.level}${item.cert ? ' &mdash; ' + item.cert : ''}</span>
      </div>
      <div class="lang-bar" role="progressbar" aria-valuenow="${item.percent}" aria-valuemin="0" aria-valuemax="100">
        <div class="lang-bar-fill" style="width:${item.percent}%"></div>
      </div>
      <p class="lang-card-detail">${item.detail}</p>
    </div>`
    )
    .join('');
}

function renderSkills(groups) {
  const container = document.getElementById('skills-groups');
  if (!container) return;
  container.innerHTML = groups
    .map(
      (g) => `
    <div class="skill-group">
      <h3 class="skill-group-title"><span aria-hidden="true">${g.icon}</span> ${g.category}</h3>
      <ul class="skill-group-list">
        ${g.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>`
    )
    .join('');
}

function renderHobbies(items) {
  const container = document.getElementById('hobbies-grid');
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
    <div class="hobby-card">
      <div class="hobby-icon" aria-hidden="true">${item.icon}</div>
      <h3 class="hobby-title">${item.title}</h3>
      <p class="hobby-desc">${item.description}</p>
    </div>`
    )
    .join('');
}

/* ── Apply language ─────────────────────────────────────── */
function applyLanguage(language) {
  const t = content[language];
  if (!t) return;

  document.documentElement.lang = language;

  // Static i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const parts = key.split('.');
    let value = t;
    parts.forEach((part) => { value = value?.[part]; });
    if (typeof value === 'string') node.textContent = value;
  });

  // Dynamic sections
  renderEducation(t.education);
  renderLanguages(t.languages);
  renderSkills(t.skills);
  renderHobbies(t.hobbies);

  // Language toggle buttons
  Object.entries(languageButtons).forEach(([key, btn]) => {
    btn.classList.toggle('active', key === language);
  });

  localStorage.setItem('cv-language', language);
}

/* ── Hamburger menu ─────────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── Active nav link on scroll ──────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => observer.observe(s));

/* ── Init ───────────────────────────────────────────────── */
languageButtons.es.addEventListener('click', () => applyLanguage('es'));
languageButtons.en.addEventListener('click', () => applyLanguage('en'));

const browserLanguage = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
const savedLanguage   = localStorage.getItem('cv-language');
applyLanguage(savedLanguage || browserLanguage);