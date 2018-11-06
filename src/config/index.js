module.exports = {
  siteTitle: 'Alpha Squads | A dedicated business and web development agency.',
  siteDescription:
    'Alpha Squads is a promising business consultancy and development agency dedicated to help clients build and run their business effortlessly.',
  siteKeywords:
    'web app, business, ca, agency, software engineer, front-end engineer, web developer, javascript, indian,web design, gst, accounting, ai, analytics, web development, ui/ux, ar, vr, api, offers, backend, frontend, business, design,  creative, modern,  portfolio, blog, templates, corporate, start-up, agency, branding, designer, freelancer',
  siteUrl: 'https://alphasquads.com',
  siteLanguage: 'en_US',
  siteImage: 'https://alphasquads.com/og.png',

  googleVerification: 'TYWR01CGzxaxvFFRsVS8r2ZgCKYVprVFTK11bYPs75g',

  name: 'Akshay Amle',
  location: 'Chandrapur, MH',
  email: 'alphasquadsofficial@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/alphasquads/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alpha-squads-34b919174/',
    },
   
    
    {
      name: 'Twitter',
      url: 'https://twitter.com/Alpha_Squads',
    },
  ],

  nav: [
   
    {
      name: 'SERVICES',
      url: '/services',
    },
    {
      name: 'PACKAGES',
      url: '/packages',
    },
    {
      name: 'PROCESS',
      url: '/process',
    },
    {
      name: 'CAREERS',
      url: '/careers',
    },
  ],

  twitterHandle: '@Alpha_Squads',
  googleAnalyticsID: 'UA-128758762-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
