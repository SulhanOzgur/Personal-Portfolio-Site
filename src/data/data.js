export const data = {
  en: {
    heroSection: {
      name: 'Sulhan Özgür',
      title: 'I am a Full-Stack Developer...',
      description:
        '...who builds robust, scalable, and user-friendly web applications from frontend to backend.',
      profileImage: 'GirisFotografi.jpeg',
      socials: [
        {
          name: 'GitHub',
          icon: 'logo_github_icon.png',
          url: 'https://github.com/SulhanOzgur',
        },
        {
          name: 'LinkedIn',
          icon: 'logo_linkedin_icon.png',
          url: 'https://www.linkedin.com/in/sulhan-%C3%B6zg%C3%BCr-085b28322/',
        },
      ],
    },

    skillsSection: {
      title: 'Skills',
      skills: [
        { name: 'HTML', icon: 'logo_html_icon.png' },
        { name: 'CSS', icon: 'logo_css_icon.png' },
        { name: 'JAVASCRIPT', icon: 'logo_javascript_icon.png' },
        { name: 'REACT', icon: 'logo_react_icon.png' },
        { name: 'REDUX', icon: 'logo_redux_icon.png' },
        { name: 'JAVA', icon: 'logo_java_icon.png' },
        { name: 'NODE', icon: 'logo_nodejs_icon.png' },
        { name: 'VS CODE', icon: 'logo_vscode_icon.png' },
        { name: 'FIGMA', icon: 'logo_figma_icon.png' },
      ],
    },

    profileSection: {
      sectionTitle: 'Profil',
      title: 'Basic Information',
      basicInfo: {
        fullName: 'Sulhan Özgür',
        birthday: 'January 22, 1998',
        location: 'Adana, Turkey',
        education: 'Law Degree - Çağ University',
        role: 'Full-Stack Developer',
      },
      aboutMe:
        "I'm a passionate developer who transitioned from law to tech. I enjoy building modern, user-friendly web applications.",
      aboutImage: 'AboutMe.jpeg',
    },

    projectsSection: [
      {
        id: 1,
        title: 'Pizza Ordering Website',
        description:
          'Built a responsive pizza ordering interface using React and CSS, enabling users to select pizza sizes, toppings, and submit their orders. Implemented page navigation between homepage, order page, and success confirmation using React Router. Simulated order submission functionality via mock API requests with Axios. Wrote end-to-end (E2E) tests using Cypress to verify the pizza ordering flow and form validation',
        image: 'ProjectsOrnekFoto2.jpg',
        tags: ['react', 'redux', 'vercel'],
        url: 'https://pizza-ordering-frontend-website.vercel.app/',
        github:
          'https://github.com/SulhanOzgur/Pizza-Ordering-Frontend-Website',
      },
      {
        id: 2,
        title: 'Portfolio Website',
        description:
          'Built a responsive personal portfolio website using React and TailwindCSS to showcase skills, projects, and contact information.Implemented dynamic theme (light/dark) and language (EN/TR) switching with Context API and localStorage. Managed content data such as hero, skills, projects, profile, and contact sections using Redux for scalable state handling. Structured content in a centralized static data file and dynamically populated components based on selected language. Ensured a smooth user experience with modern UI styling and section-based component architecture.',
        image: 'ProjectsOrnekFoto1.jpg',
        tags: ['react', 'redux', 'vercel'],
        url: 'https://personal-portfolio-site-jet.vercel.app/',
        github: 'https://github.com/SulhanOzgur/Personal-Portfolio-Site',
      },
    ],

    contactSection: {
      title: 'Send me a message!',
      description:
        'Got a question or proposal, or just want to say hello? Go ahead.',
      email: 'sulhan_ozgur@hotmail.com',
      socials: [
        {
          name: 'Twitter',
          icon: 'logo_twitter_icon.png',
          url: 'https://twitter.com/',
        },
        {
          name: 'CodePen',
          icon: 'logo_codepen_icon.png',
          url: 'https://codepen.io/',
        },
        {
          name: 'Email',
          icon: 'logo_email_icon.png',
          url: 'mailto:sulhan_ozgur@hotmail.com',
        },
        {
          name: 'Instagram',
          icon: 'logo_instagram_icon.png',
          url: 'https://instagram.com/',
        },
      ],
    },
  },

  tr: {
    heroSection: {
      name: 'Sulhan Özgür',
      title: 'Ben bir Full-Stack Geliştiriciyim...',
      description:
        '...front-end ve back-end alanlarında sağlam, ölçeklenebilir ve kullanıcı odaklı yazılım çözümleri geliştiririm.',
      profileImage: 'GirisFotografi.jpeg',
      socials: [
        {
          name: 'GitHub',
          icon: 'logo_github_icon.png',
          url: 'https://github.com/SulhanOzgur',
        },
        {
          name: 'LinkedIn',
          icon: 'logo_linkedin_icon.png',
          url: 'https://www.linkedin.com/in/sulhan-%C3%B6zg%C3%BCr-085b28322/',
        },
      ],
    },

    skillsSection: {
      title: 'Yetenekler',
      skills: [
        { name: 'HTML', icon: 'logo_html_icon.png' },
        { name: 'CSS', icon: 'logo_css_icon.png' },
        { name: 'JAVASCRIPT', icon: 'logo_javascript_icon.png' },
        { name: 'REACT', icon: 'logo_react_icon.png' },
        { name: 'REDUX', icon: 'logo_redux_icon.png' },
        { name: 'JAVA', icon: 'logo_java_icon.png' },
        { name: 'NODE', icon: 'logo_nodejs_icon.png' },
        { name: 'VS CODE', icon: 'logo_vscode_icon.png' },
        { name: 'FIGMA', icon: 'logo_figma_icon.png' },
      ],
    },

    profileSection: {
      sectionTitle: 'Profil',
      title: 'Temel Bilgiler',
      basicInfo: {
        fullName: 'Sulhan Özgür',
        birthday: '22 Ocak 1998',
        location: 'Adana, Türkiye',
        education: 'Hukuk Mezunu - Çağ Üniversitesi',
        role: 'Full-Stack Geliştirici',
      },
      aboutMe:
        'Hukuktan yazılıma geçiş yapmış tutkulu bir geliştiriciyim. Modern, kullanıcı dostu web uygulamaları geliştirmeyi severim.',
      aboutImage: 'AboutMe.jpeg',
    },

    projectsSection: [
      {
        id: 1,
        title: 'Pizza Sipariş Web Sitesi',
        description:
          'React ve CSS kullanarak kullanıcıların pizza boyutu, malzeme vb. opsiyonları seçip sipariş verebildiği responsive bir arayüz geliştirdim. React Router kullanarak anasayfa, sipariş sayfası ve başarı sayfası arasında geçişleri sağladım. Mock API kullanarak sipariş gönderimi işlevini Axios ile simüle ettim. Pizza siparişi akışı ve form doğrulamasını uygulamak için Cypress ile uçtan uca (E2E) testler yazdım.',
        image: 'ProjectsOrnekFoto2.jpg',
        tags: ['react', 'redux', 'vercel'],
        url: 'https://pizza-ordering-frontend-website.vercel.app/',
        github:
          'https://github.com/SulhanOzgur/Pizza-Ordering-Frontend-Website',
      },
      {
        id: 2,
        title: 'Portfolyo Web Sitesi',
        description:
          'Yetenekleri, projeleri ve iletişim bilgilerini sergilemek amacıyla React ve TailwindCSS kullanarak duyarlı (responsive) bir kişisel portfolyo sitesi geliştirildi. Tema (açık/koyu) ve dil (EN/TR) geçişleri Context API ve localStorage kullanılarak dinamik şekilde uygulandı. Giriş bölümü, yetenekler, projeler, profil ve iletişim gibi içerik bölümleri Redux ile yönetilerek ölçeklenebilir bir durum yönetimi sağlandı. Tüm içerik merkezi bir statik veri dosyasında tanımlanarak seçilen dile göre bileşenler dinamik olarak beslendi. Modern kullanıcı arayüzü ve bileşen bazlı yapı ile akıcı bir kullanıcı deneyimi sağlandı.',
        image: 'ProjectsOrnekFoto1.jpg',
        tags: ['react', 'redux', 'vercel'],
        url: 'https://personal-portfolio-site-jet.vercel.app/',
        github: 'https://github.com/SulhanOzgur/Personal-Portfolio-Site',
      },
    ],

    contactSection: {
      title: 'Benimle iletişime geç!',
      description:
        'Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin!',
      email: 'sulhan_ozgur@hotmail.com',
      socials: [
        {
          name: 'Twitter',
          icon: 'logo_twitter_icon.png',
          url: 'https://twitter.com/',
        },
        {
          name: 'CodePen',
          icon: 'logo_codepen_icon.png',
          url: 'https://codepen.io/',
        },
        {
          name: 'Email',
          icon: 'logo_email_icon.png',
          url: 'mailto:sulhan_ozgur@hotmail.com',
        },
        {
          name: 'Instagram',
          icon: 'logo_instagram_icon.png',
          url: 'https://instagram.com/',
        },
      ],
    },
  },
};
