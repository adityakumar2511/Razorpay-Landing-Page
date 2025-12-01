// src/components/HeroSection/data.js
// Uses public images: /hero1.jpeg, /hero2.jpeg, /hero3.jpeg

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    img: '/hero1.jpeg',
    title: 'Payments that simply work',
    subtitle: 'Fast integrations · Reliable settlements · Clear dashboards',
    bullets: ['100+ Methods', 'One-click integration', 'Realtime insights'],
    primary: { label: 'Sign Up Now', href: '/signup' },
    secondary: { label: 'Learn More', href: '/features' },
    textColor: 'text-indigo-800',
    btnColor: 'bg-indigo-600',
    cardAccent: '#06b6d4',
  },
  {
    id: 'slide-2',
    img: '/hero2.jpeg',
    title: 'Banking built for scale',
    subtitle: 'Automate payouts • Reconciliation • Global-ready',
    bullets: ['Auto payouts', 'Multi-currency', 'Bank-grade security'],
    primary: { label: 'Get Started', href: '/signup' },
    secondary: { label: 'Banking Plans', href: '/banking' },
    textColor: 'text-emerald-800',
    btnColor: 'bg-emerald-600',
    cardAccent: '#34d399',
  },
  {
    id: 'slide-3',
    img: '/hero3.jpeg',
    title: 'Subscriptions & Billing',
    subtitle: 'Flexible plans, higher retention, easy billing',
    bullets: ['Recurring billing', 'Coupons & trials', 'Dunning support'],
    primary: { label: 'Start Free Trial', href: '/trial' },
    secondary: { label: 'See Pricing', href: '/pricing' },
    textColor: 'text-sky-800',
    btnColor: 'bg-sky-600',
    cardAccent: '#0ea5e9',
  },
];
