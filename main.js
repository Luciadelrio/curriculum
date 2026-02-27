const content = {
  es: {
    hero: {
      role: 'ESTUDIANTE DE PERIODISMO',
      summary:
        'Soy una persona activa, responsable y con gran capacidad de aprendizaje. Actualmente estudio Periodismo y me apasiona la comunicación y el trabajo en equipo. Me destaco por mi actitud positiva, creatividad y facilidad para adaptarme a nuevos entornos.',
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
    education: [
      '2020–2022 · Bachillerato de Ciencias Sociales, IES Cabo Ortegal',
      '2022–Actualidad · Grado en Periodismo, Universidade de Santiago de Compostela',
      'Curso de Google sobre verificación de información',
    ],
    languages: ['Castellano · Nativo', 'Inglés · B2 (Oxford Certificate)', 'Francés · B1 (DELF)'],
    skills: [
      'Investigación y documentación',
      'Escritura y edición de contenidos en blog (WordPress, Wix)',
      'Creación y redacción de contenidos digitales',
      'Redacción y ejecución de noticias para televisión',
      'Gestión de redes sociales',
      'Edición de vídeo y foto (InDesign, Photoshop, CapCut)',
      'Aprendizaje rápido de idiomas y técnicas',
    ],
    hobbies: {
      text:
        'Participo en iniciativas sociales, lo que fortalece mi liderazgo y trabajo en equipo. También me gusta formarme constantemente en nuevos idiomas para ampliar conocimientos y disfruto del diseño y la edición para potenciar mi creatividad.',
    },
    footer: {
      text: 'Disponible para prácticas y oportunidades junior en periodismo y comunicación.',
    },
  },
  en: {
    hero: {
      role: 'JOURNALISM STUDENT',
      summary:
        'I am an active, responsible person with strong learning skills. I am currently studying Journalism and I am passionate about communication and teamwork. I stand out for my positive attitude, creativity, and ability to adapt to new environments.',
      viewCv: 'View PDF CV',
      downloadCv: 'Download CV',
    },
    sections: {
      education: 'Education',
      languages: 'Languages',
      skills: 'Skills',
      hobbies: 'Hobbies & interests',
      contact: 'Contact',
    },
    education: [
      '2020–2022 · Social Sciences High School, IES Cabo Ortegal',
      '2022–Present · BA in Journalism, University of Santiago de Compostela',
      'Google course on information verification',
    ],
    languages: ['Spanish · Native', 'English · B2 (Oxford Certificate)', 'French · B1 (DELF)'],
    skills: [
      'Research and information gathering',
      'Blog writing and content editing (WordPress, Wix)',
      'Online content creation and writing',
      'TV news writing and production',
      'Social media management',
      'Video and photo editing (InDesign, Photoshop, CapCut)',
      'Fast learner of languages and techniques',
    ],
    hobbies: {
      text:
        'I take part in social initiatives, which strengthens my leadership and teamwork skills. I also enjoy continuously learning new languages and I like design and editing, which helps me develop my creativity.',
    },
    footer: {
      text: 'Open to internships and junior opportunities in journalism and communication.',
    },
  },
};

const languageButtons = {
  es: document.getElementById('btn-es'),
  en: document.getElementById('btn-en'),
};

function setList(selector, items) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  container.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

function applyLanguage(language) {
  const t = content[language];
  if (!t) {
    return;
  }

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const parts = key.split('.');
    let value = t;

    parts.forEach((part) => {
      value = value?.[part];
    });

    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  setList('#education-list', t.education);
  setList('#languages-list', t.languages);
  setList('#skills-list', t.skills);

  Object.entries(languageButtons).forEach(([key, btn]) => {
    btn.classList.toggle('active', key === language);
  });

  localStorage.setItem('cv-language', language);
}

languageButtons.es.addEventListener('click', () => applyLanguage('es'));
languageButtons.en.addEventListener('click', () => applyLanguage('en'));

const browserLanguage = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
const savedLanguage = localStorage.getItem('cv-language');
const defaultLanguage = savedLanguage || browserLanguage;
applyLanguage(defaultLanguage);