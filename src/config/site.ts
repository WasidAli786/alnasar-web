export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const benefits = [
  {
    id: 1,
    title: "Annual Dinner with Key Club Reps",
    icon: "/images/annual-dinner.svg",
    bgGradient: "from-blue-900 to-blue-800",
  },
  {
    id: 2,
    title: "Priority Ticket Access",
    icon: "/images/gold-ticket.svg",
    bgGradient: "from-yellow-500 to-yellow-400",
  },
  {
    id: 3,
    title: "Tour of Al Nassr",
    icon: "/images/football-stadium.svg",
    bgGradient: "from-blue-900 to-blue-800",
  },
  {
    id: 4,
    title: "Discounts on Merch",
    icon: "/images/discount.svg",
    bgGradient: "from-blue-700 to-blue-600",
  },
  {
    id: 5,
    title: "Exclusive Credit Card",
    icon: "/images/vip-card.svg",
    bgGradient: "from-gray-500 to-gray-400",
  },
];

export const tierTabs = [
  {
    id: "platinum",
    title: "PLATINUM TIER",
    price: "1,000,000 SAR*",
    duration: "12-MONTH MEMBERSHIP",
    keyBenefits: [
      {
        title: "Annual Dinner With Key Club Representatives",
        icon: "/images/tier1.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
    ],
    perks: [
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
    ],
  },
  {
    id: "gold",
    title: "GOLD TIER",
    price: "500,000 SAR*",
    duration: "6-MONTH MEMBERSHIP",
    keyBenefits: [
      {
        title: "Annual Dinner With Key Club Representatives",
        icon: "/images/tier1.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
    ],
    perks: [
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
    ],
  },
  {
    id: "fan3",
    title: "FAN TIER 3",
    price: "200,000 SAR*",
    duration: "3-MONTH MEMBERSHIP",
    keyBenefits: [
      {
        title: "Annual Dinner With Key Club Representatives",
        icon: "/images/tier1.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
    ],
    perks: [
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
    ],
  },
  {
    id: "fan2",
    title: "FAN TIER 2",
    price: "100,000 SAR",
    duration: "1-MONTH MEMBERSHIP",
    keyBenefits: [
      {
        title: "Annual Dinner With Key Club Representatives",
        icon: "/images/tier1.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
    ],
    perks: [
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
    ],
  },
  {
    id: "fan1",
    title: "FAN TIER 1",
    price: "50,000 SAR*",
    duration: "1-MONTH MEMBERSHIP",
    keyBenefits: [
      {
        title: "Annual Dinner With Key Club Representatives",
        icon: "/images/tier1.svg",
      },
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
    ],
    perks: [
      {
        title: "10,000 Votes",
        icon: "/images/tier2.svg",
      },
      {
        title: "Signed Jerseys",
        icon: "/images/tier3.svg",
      },
      {
        title: "Tours of Al Nassr",
        icon: "/images/tier4.svg",
      },
    ],
  },
];

export const plansHeader = [
  {
    heading: "Fan Tier 1",
    money: "100 SAR*",
  },
  {
    heading: "Fan Tier 2",
    money: "500 SAR*",
  },
  {
    heading: "Fan Tier 3",
    money: "5,000 SAR*",
  },
  {
    heading: "Gold Tier",
    money: "100,000 SAR*",
  },
  {
    heading: "Platinum Tier",
    money: "1,000,000 SAR*",
  },
];

export const plansContent = [
  {
    title: "Voting Right",
    voting: [true, true, true, true, true],
  },
  {
    title: "Membership card",
    memberShipCard: [false, true, true, true, true],
  },
  {
    title: "Access to private web/app",
    subTitle: "(members section) with exclusive content",
    voting: [false, true, true, true, true],
  },
  {
    title: "Discounts on merch",
    discount: ["5%", "10%", "15%", "20%", "25%"],
  },
  {
    title: "Early bird access/priority access to game tickets",
    voting: [false, true, true, true, true],
  },
  {
    title: "Training Sessions",
    entries: [0, 2, 4, 6, 8],
  },
  {
    title: "Welcome Pack - Differentiated",
    voting: [true, true, true, true, true],
  },
];

export const socialIcons = [
  {
    icon: "/images/social/instagram.svg",
  },
  {
    icon: "/images/social/twitter.svg",
  },
  {
    icon: "/images/social/linkedin.svg",
  },
  {
    icon: "/images/social/youtube.svg",
  },
  {
    icon: "/images/social/facebook.svg",
  },
];
