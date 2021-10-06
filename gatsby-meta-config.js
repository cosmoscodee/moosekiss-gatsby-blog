module.exports = {
  title: `moosekiss.com`,
  description: `김현우의 개발일지`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://moosekiss.netlify.app/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김현우`,
    bio: {
      role: ``,
      description: ['Creative Technologist'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/moosekiss`, // `https://github.com/moosekiss`,
      linkedIn: `https://www.linkedin.com/in/hyunwoo-kim-885b56115/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `gusdn6526@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.06 ~ 2021.09',
        activity: '오티아이',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          'Web Software Engiineer',
        techStack: ['spring', 'java', 'oracle'],
        thumbnailUrl: 'aboutme.jpg',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
