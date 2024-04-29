import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ίδρυμα',
      links: [
        {
          text: 'Διοικητικό Συμβούλιο',
          href: getPermalink('/about'),
        },
        {
          text: 'Καταστατικό',
          href: getPermalink('/about'),
        },
        {
          text: 'Ποιοί είμαστε',
          href: getPermalink('/about'),
        },
        {
          text: 'Ιστορία',
          href: getPermalink('/about'),
        },
        {
          text: 'Εγκαταστάσεις',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Έργο',
      links: [
        {
          text: 'Προγράμματα',
          href: getPermalink('/services'),
        },
        {
          text: 'Κοινοτικά Προγράμματα',
          href: getPermalink('/services'),
        },
        // {
        //   text: 'Pricing',
        //   href: getPermalink('/pricing'),
        // },
        // {
        //   text: 'About us',
        //   href: getPermalink('/about'),
        // },
        // {
        //   text: 'Επικοινωνία',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Τρόποι Στήριξης',
      links: [
        {
          text: 'Εθελοντισμός',
          href: getPermalink('/about'),
        },
        {
          text: 'Υλική Στήριξη',
          href: getPermalink('/about'),
        },
        {
          text: 'Οικονομική Στήριξη',
          href: getPermalink('/about'),
        },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      text: 'Χορηγοί',
      href: getPermalink('/about'),
    },
    {
      text: 'Νέα',
      links: [
        {
          text: 'Τελευταία νέα',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      text: 'Επικοινωνία',
      href: getPermalink('/contact'),
    },
  ],
// actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/pressIAA#' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCRVd-EgdICyav-ktAbpktZQ' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/iaath/' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/logo_arxiepiskopi.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.omikronpsikappa.gr"> ΟΨΚ</a>
  `,
};
