const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const category = {
  web: {
    title: "Desarrollo Web",
    images: [
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React.js", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", alt: "Angular", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", alt: "Vue.js", class: "" },
      { image: `${base}/assets/icons/dj.svg`, alt: "Django", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", alt: "Node js", class: "" },
    ]
  },
  "data-analysis": {
    title: "Análisis de Datos",
    images: [
      { image: `${base}/assets/icons/kobo.svg`, alt: "Kobotoolbox", class: "" },
      { image: `${base}/assets/icons/enketo.svg`, alt: "Enketo", class: "" },
      { image: `${base}/assets/icons/ona.svg`, alt: "ONA", class: "" },
      { image: `${base}/assets/icons/odk.svg`, alt: "ODK Collect", class: "" },
      { image: `${base}/assets/icons/power_bi.svg`, alt: "Power BI", class: "" },
      { image: `${base}/assets/icons/looker.svg`, alt: "Looker", class: "" },
      { image: `${base}/assets/icons/tableau.svg`, alt: "Tableau", class: "" },
      { image: `${base}/assets/icons/g_analitics.svg`, alt: "Google Analytics", class: "" },
    ]
  },
  advertising: {
    title: "Publicidad",
    images: [
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", alt: "Adobe Photoshop", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg", alt: "Adobe Aftereffects", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg", alt: "Adobe Premier", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg", alt: "Adobe Illustrator", class: "" },
      { image: `${base}/assets/icons/audition.svg`, alt: "Audition", class: "" },
      { image: `${base}/assets/icons/audacity.svg`, alt: "Audacity", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg", alt: "Blender", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", alt: "Canva", class: "" },
    ]
  },
  "base-de-datos": {
    title: "Base de datos",
    images: [
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", class: "" },
      { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", alt: "SQLite", class: "" },
    ]
  }
};

export const services = [
  {
    id: "1",
    slug: "recoleccion-y-analisis-de-datos",
    category: "data-analysis",
    title: "🔎 Análisis de Datos para Empresas",
    logo: `${base}/assets/images/pagina13.webp`,
    description: "Los datos son clave para el éxito de cualquier empresa. Convertimos información en conocimiento, ayudándote a tomar decisiones basadas en datos reales.",
    aditional: "<br><br>📊 <strong>¿Qué hacemos?</strong>",
    items: [
      "<strong>Recolección y procesamiento de datos</strong> con herramientas avanzadas como <strong>Kobotoolbox y Ona.</strong>",
      "<strong>Visualización de información en tiempo real</strong> con <strong>Power BI y Looker Studio.</strong>",
      "<strong>Desarrollo de dashboards interactivos</strong> para informes y análisis detallado.",
      "<strong>Optimización de datos</strong> para identificar oportunidades y mejorar procesos empresariales.",
    ],
    technologies: [
      { name: "Looker studio", icono: `${base}/assets/icons/looker.svg` },
      { name: "Power BI", icono: `${base}/assets/icons/power_bi.svg` },
      { name: "Tableau", icono: `${base}/assets/icons/tableau.svg` },
      { name: "Kobotoolbox", icono: `${base}/assets/icons/kobo.svg` },
      { name: "ONA", icono: `${base}/assets/icons/ona.svg` },
      { name: "ODK Collect", icono: `${base}/assets/icons/odk.svg` },
      { name: "Enketo", icono: `${base}/assets/icons/enketo.svg` },
      { name: "MySql", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    images: [
      { image: `${base}/assets/images/pagina13.webp`, alt: "Dashboard de análisis financiero empresarial con métricas y gráficos interactivos" },
      { image: `${base}/assets/images/pagina14.webp`, alt: "Panel de control y reportes de rendimiento para empresas" },
      { image: `${base}/assets/images/pagina16.webp`, alt: "Interfaz de monitoreo y gestión de datos con análisis de tendencias" },
      { image: `${base}/assets/images/pagina15.webp`, alt: "Mapa interactivo para análisis geoespacial de datos empresariales" },
    ],
  },
  {
    id: "2",
    slug: "desarrollo-web-a-medida",
    category: "web",
    title: "🌐 Desarrollo Web a Medida",
    logo: `${base}/assets/images/pagina4.webp`,
    description: "Tu sitio web es tu carta de presentación digital. Diseñamos páginas web <strong>modernas, funcionales y optimizadas</strong> para que tu empresa tenga la mejor presencia en línea.",
    aditional: "<br><br>📌 <strong>Beneficios de un desarrollo web profesional:</strong>",
    items: [
      "<strong>Diseño personalizado y responsivo</strong> (adaptado a móviles y tablets).",
      "<strong>Optimización SEO</strong> para mejorar la visibilidad en Google.",
      "<strong>Seguridad web avanzada</strong> con HTTPS y certificados SSL.",
      "<strong>Integración con bases de datos y plataformas empresariales.</strong>",
      "<strong>Carga rápida y experiencia de usuario optimizada.</strong>"
    ],
    technologies: [
      { name: "Python", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "PHP", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
      { name: "Node JS", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" },
    ],
    images: [
      { image: `${base}/assets/images/pagina1.webp`, alt: "Página web de heladería con diseño moderno y atractiva experiencia de usuario" },
      { image: `${base}/assets/images/pagina4.webp`, alt: "Sitio web para cafetería con estilo elegante y optimizado para negocios" },
      { image: `${base}/assets/images/pagina8.webp`, alt: "Portafolio web profesional para freelancers y creativos" },
      { image: `${base}/assets/images/pagina11.webp`, alt: "Sitio web de bodas con diseño personalizado y elegante" },
    ],
  },
  {
    id: "3",
    slug: "automatizacion-bases-de-datos",
    category: "base-de-datos",
    title: "🗂 Gestión y Administración de Bases de Datos",
    logo: `${base}/assets/images/pagina19.webp`,
    description: "Una base de datos eficiente mejora la organización y la seguridad de la información empresarial. En <strong>Innova Systems Center</strong>, diseñamos sistemas robustos para almacenar, gestionar y proteger datos clave de tu negocio.",
    aditional: "<br><br>📌 <strong>Servicios de administración de bases de datos:</strong>",
    items: [
      "<strong>Análisis, diseño e implementación de bases de datos</strong> personalizadas.",
      "<strong>Integración con aplicaciones y plataformas</strong> para optimizar procesos.",
      "<strong>Automatización de copias de seguridad</strong> para evitar pérdida de información.",
      "<strong>Seguridad y control de acceso</strong> para proteger datos confidenciales.",
      "<strong>Optimización del rendimiento</strong> para una gestión más rápida y eficiente."
    ],
    technologies: [
      { name: "MySql", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "ODK", icono: `${base}/assets/icons/odk.svg` },
      { name: "Enketo", icono: `${base}/assets/icons/enketo.svg` },
      { name: "PostgreSQL", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    images: [
      { image: `${base}/assets/images/pagina20.webp`, alt: "Interfaz de inicio de sesión seguro para plataforma" },
      { image: `${base}/assets/images/pagina19.webp`, alt: "Panel de análisis de datos con gráficos y reportes estadísticos" },
      { image: `${base}/assets/images/pagina18.webp`, alt: "Sistema de administración de bases de datos con visualización de registros" },
      { image: `${base}/assets/images/pagina17.webp`, alt: "Diagrama entidad-relación para modelado y diseño de bases de datos" },
    ],
  },
  {
    id: "4",
    slug: "produccion-contenido-digital",
    category: "advertising",
    title: "🎨 Producción de Contenido Digital",
    logo: `${base}/assets/images/pagina23.webp`,
    description: "El contenido digital es una herramienta poderosa para conectar con tu público. Creamos materiales visuales y audiovisuales que impulsan la presencia de tu empresa en el mercado.",
    aditional: "<br><br>📌 <strong>¿Qué ofrecemos?</strong>",
    items: [
      "Edición de videos corporativos, educativos y publicitarios.",
      "Creación y edición de contenido para redes sociales y campañas digitales.",
      "Diseño gráfico profesional y retoque fotográfico.",
      "Animación y producción de objetos 3D."
    ],
    technologies: [
      { name: "Adobe Photoshop", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: "Adobe Aftereffects", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" },
      { name: "Adobe Premier", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
      { name: "Adobe Illustrator", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg" },
      { name: "Audition", icono: `${base}/assets/icons/audition.svg` },
      { name: "Audacity", icono: `${base}/assets/icons/audacity.svg` },
      { name: "Blender", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
    ],
    images: [
      { image: `${base}/assets/images/pagina23.webp`, alt: "Fotografía creativa con enfoque artístico y composición visual" },
      { image: `${base}/assets/images/pagina22.webp`, alt: "Diseño gráfico de anuncio publicitario para promoción de hamburguesas" },
      { image: `${base}/assets/images/pagina21.webp`, alt: "Edición de video profesional en software de postproducción" },
      { image: `${base}/assets/images/pagina24.webp`, alt: "Modelado y animación 3D en software de diseño digital" },
    ],
  }
];

export const projects = [
  {
    id: "1",
    category: "web",
    title: "REDCICLAR",
    logo: `${base}/assets/images/projects/icrese.png`,
    name_client: "Fundación CRESE",
    description: "Sistema web para la gestión eficiente de la recolección de residuos en la ciudad de Cali, Colombia. Gracias a su integración con inteligencia de negocios, la plataforma mejora la planificación, reduce costos operativos y facilita la sostenibilidad ambiental.",
    client: [
      { image: `${base}/assets/images/projects/icrese.png`, alt: "Fundación CRESE", class: "h-25" },
    ],
    images: [
      { image: `${base}/assets/images/projects/cliente3.webp`, alt: "Sistema REDCICLAR - Dashboard de conteo y seguimiento por productos reciclados" },
      { image: `${base}/assets/images/projects/cliente4.webp`, alt: "Sistema REDCICLAR - Gestión de recolecciones y soporte de recibos para reciclaje eficiente" },
    ]
  },
  {
    id: "3",
    category: "base-de-datos",
    title: "Gestión de datos",
    logo: `${base}/assets/images/projects/imakikuna.png`,
    name_client: "Fundación Makikuna",
    description: 'Procesamiento integral de la base de datos del proyecto "Ven y Juega", incluyendo limpieza, organización, estandarización y análisis gráfico, para la generación de informes finales, facilitando la toma de decisiones y la evaluación del impacto del proyecto.',
    client: [
      { image: `${base}/assets/images/projects/imakikuna.png`, alt: "Fundación Makikuna", class: "h-25" }
    ],
    images: [
      { image: `${base}/assets/images/projects/clientes9.webp`, alt: "Diseño de dashboard interactivo para el seguimiento de indicadores clave" },
      { image: `${base}/assets/images/projects/clientes10.webp`, alt: "Dashboard interactivo - Salidas gráficas para presentación y análisis de informes" },
    ]
  },
  {
    id: "4",
    category: "advertising",
    title: "Casa del bosque",
    logo: `${base}/assets/images/projects/icasa_de_bosque.png`,
    name_client: "Casa del bosque",
    description: "Edición de video educativo diseñado especialmente para niños, aplicando estrategias de contenido infantil que fomentan el aprendizaje de manera dinámica, interactiva y atractiva.",
    client: [
      { image: `${base}/assets/images/projects/casa_de_bosque.webp`, alt: "Case del bosque", class: "h-20" },
      { image: `${base}/assets/images/projects/ifabrica_cuentos.png`, alt: "Fabrica_Cuentos", class: "h-22 w-40" }
    ],
    images: [
      { image: `${base}/assets/images/projects/clientes11.webp`, alt: "Diseño de introducción visual para el proyecto Casa del Bosque" },
      { image: `${base}/assets/images/projects/clientes12.webp`, alt: "Proceso de edición de contenido audiovisual profesional" },
    ]
  },
];
