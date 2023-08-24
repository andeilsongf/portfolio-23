import hboLogo from '../../../public/static/images/andeilson-ferreira-hbo-app-logo.svg'
import hboClone from '../../../public/static/images/andeilson-ferreira-hbo-clone.png'

import todoApp from '../../../public/static/images/andeilson-ferreira-todo-app.png'
import todoAppLogo from '../../../public/static/images/andeilson-ferreira-todo-app-logo.svg'

import jobFinderApp from '../../../public/static/images/andeilson-ferreira-job-finder.png'
import jobFinderLogo from '../../../public/static/images/andeilson-ferreira-job-finder-logo.png'

import papoMobileLogo from '../../../public/static/images/andeilson-ferreira-papo-mobile-logo.png'
import papoMobileApp from '../../../public/static/images/andeilson-ferreira-papo-mobile.png'

import chuvaDeSeguidoresLogo from '../../../public/static/images/andeilson-ferreira-chuva-de-seguidores-logo.webp'
import chuvaDeSeguidoresApp from '../../../public/static/images/andeilson-ferreira-chuva-de-seguidores-portfolio.png'

import pinionLogo from '../../../public/static/images/andeilson-ferreira-pinion-logo.svg'
import pinionApp from '../../../public/static/images/andeilson-ferreira-pinion-app.png'

import netflixLogo from '../../../public/static/images/andeilson-ferreira-netflix-logo.png'
import netflixApp from '../../../public/static/images/andeilson-ferreira-netflix-clone.png'

import goFinancesLogo from '../../../public/static/images/andeilson-ferreira-go-finances-logo.svg'
import goFinancesApp from '../../../public/static/images/andeilson-ferreira-go-finances.png'

import linktreeLogo from '../../../public/static/images/andeilson-ferreira-linktree-logo.png'
import linktreeApp from '../../../public/static/images/andeilson-ferreira-linktree-clone.png'

const projectDATA = [
  {
    id: '1',
    name: 'HBO Clone',
    description:
      'The HBO Clone Project is an innovative web endeavor that replicates the HBO streaming platform using advanced technologies. It utilizes NodeJS, NextJS framework for web development, TailwindCSS and PostCSS for styling, and TypeScript for enhanced JavaScript. The project integrates ESLint for code quality and Axios for seamless API interaction with themoviedb. This results in a user-friendly, visually appealing, and responsive platform that provides real-time movie and TV show data, showcasing the potential of modern web development tools.',
    logo: hboLogo,
    image: hboClone,
    alt: 'Hbo Clone',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/hbo-clone',
    isMobile: false,
  },
  {
    id: '2',
    name: 'ToDo App',
    description:
      'TodoApp is an advanced task management project that utilizes NodeJS, NextJS framework, TypeScript, and Firebase database integration. With a dynamic blend of Next Themes, TailwindCSS, and PostCSS, it offers a visually appealing and customizable interface. The app ensures code quality with ESLint and provides real-time task synchronization across devices, presenting a cutting-edge solution for intuitive and efficient task management.',
    logo: todoAppLogo,
    image: todoApp,
    alt: 'ToDo App',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/todo',
    isMobile: true,
  },
  {
    id: '3',
    name: 'Papo Móbile',
    description:
      'TodoApp is an advanced task management project that utilizes NodeJS, NextJS framework, TypeScript, and Firebase database integration. With a dynamic blend of Next Themes, TailwindCSS, and PostCSS, it offers a visually appealing and customizable interface. The app ensures code quality with ESLint and provides real-time task synchronization across devices, presenting a cutting-edge solution for intuitive and efficient task management.',
    logo: papoMobileLogo,
    image: papoMobileApp,
    alt: 'ToDo App',
    linkTitle: 'See project on Github',
    link: 'https://papomobile.com/',
    isMobile: false,
  },
  {
    id: '4',
    name: 'Chuva de Seguidores',
    description:
      'Chuva de Seguidores" is a cutting-edge social growth application that empowers users to expand their reach on platforms like Instagram, TikTok, Kwai, and Threads. Built on WordPress, the project boasts a responsive design crafted with HTML, CSS3, and TailwindCSS. It incorporates PHP and JavaScript for dynamic functionality, offering users a seamless and engaging experience. With a focus on enhancing social media influence, this project redefines the way users connect and grow on various platforms.',
    logo: chuvaDeSeguidoresLogo,
    image: chuvaDeSeguidoresApp,
    alt: 'Chuva de Seguidores App',
    linkTitle: 'See project',
    link: 'https://chuvadeseguidores.com.br',
    isMobile: false,
  },
  {
    id: '5',
    name: 'Job Finder',
    description:
      'TodoApp is an advanced task management project that utilizes NodeJS, NextJS framework, TypeScript, and Firebase database integration. With a dynamic blend of Next Themes, TailwindCSS, and PostCSS, it offers a visually appealing and customizable interface. The app ensures code quality with ESLint and provides real-time task synchronization across devices, presenting a cutting-edge solution for intuitive and efficient task management.',
    logo: jobFinderLogo,
    image: jobFinderApp,
    alt: 'Job Finder',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/JobFinderApp',
    isMobile: true,
  },
  {
    id: '6',
    name: 'PiniOn',
    description:
      'PiniOn is a dynamic project that seamlessly blends HTML5, Bootstrap, PHP, HubSpot, React, NextJS, and TailwindCSS. This fusion of technologies results in an innovative and functional platform with a visually captivating frontend, robust PHP backend, and enhanced marketing capabilities through HubSpot. PiniOn represents a harmonious balance of innovation and usability, redefining user engagement and experience.',
    logo: pinionLogo,
    image: pinionApp,
    alt: 'PiniOn App',
    linkTitle: 'See project',
    link: 'https://pinion.app',
    isMobile: false,
  },
  {
    id: '7',
    name: 'Netflix Clone',
    description:
      'The Netflix Clone project redefines mobile entertainment using React Native, Styled-Components, React Native Gesture Handler, React Navigation, TypeScript, Expo, and Axios. This innovative project offers a native-like experience with responsive design, seamless navigation, and real-time content access. It showcases a harmonious blend of technologies that deliver an immersive entertainment platform, seamlessly connecting users to their favorite shows and movies on the go.',
    logo: netflixLogo,
    image: netflixApp,
    alt: 'Netflix Clone App',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/Netflix-IMDBApp',
    isMobile: true,
  },
  {
    id: '8',
    name: 'Go Finances',
    description:
      'GoFinances is anfinance application designed to streamline financial management. This project, offers insights into incoming and outgoing transactions while allowing easy upload through CSV files. The front-end employs ReactJS and TypeScript, along with styled-components, while the back-end utilizes Node.js and TypeScript with Express and TypeORM. With its comprehensive features and cutting-edge stack, GoFinances aims to provide users with a user-friendly and efficient financial management solution.',
    logo: goFinancesLogo,
    image: goFinancesApp,
    alt: 'GoFinances App',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/gofinances',
    isMobile: true,
  },
  {
    id: '9',
    name: 'Linktree',
    description:
      'Linktree is a project that simplifies link management by consolidating multiple links into a single landing page. Built using Vite, PostCSS, and TailwindCSS, it offers efficient development, optimized styling, and a sleek design. Linktree streamlines the process of sharing and accessing multiple links, showcasing the capabilities of modern web technologies in creating a user-friendly solution.',
    logo: linktreeLogo,
    image: linktreeApp,
    alt: 'Linktree App',
    linkTitle: 'See project on Github',
    link: 'https://github.com/andeilsongf/personal-links',
    isMobile: true,
  },
]

export default projectDATA
