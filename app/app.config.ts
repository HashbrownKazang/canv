export default defineAppConfig({
  global: {
    meetingLink: '',
    available: false,
  },
  profile: {
    name: 'spuntentertainment',
    job: 'chaos creator',
    email: 'admin@spuntentertainment.com',
    phone: '(904)385-0886',
    picture: 'https://avatars.githubusercontent.com/u/122352176?v=4',
  },
  socials: {
    github: 'https://github.com/spuntentertainment',
    twitter: 'https://twitter.com/T33M_N0_5L33P',
    linkedin: 'https://www.linkedin.com/in/spuntentertainment',
    instagram: 'https://www.instagram.com/spuntentertainment',
    spotify: 'https://open.spotify.com/playlist/77LYhFxY3Tbnm6Go14QAZv?si=nW_loEvbQ2SlLBjszJLPUg&pi=J658FX8KSJOU7',
  },
  seo: {
    title: 'spuntentertainment (we are nor sorry)',
    description: 'spuntentertainment is not responsible ',
    url: 'https://spuntentertainment.com',
    lang: 'en',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})