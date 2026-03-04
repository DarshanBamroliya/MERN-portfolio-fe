export interface Project {
  id: number;
  slug: string;
  title: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  year?: string;
  client?: string;
  scope?: string[];
  role?: string;
  link?: string;
  playstoreLink?: string;
  appStoreLink?: string;
  adminLink?: string;
  apiLink?: string;
  webLink?: string;
  webLinks?: string[];
  technologies?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'moby-cashback',
    title: 'Moby Cashback',
    categories: ['Mobile App', 'E-commerce'],
    description: 'Instant Cashback across over 17,000 Offline Store Outlets, over 700 Online Brands & 12,000 Offline Eateries, Pan India!',
    fullDescription: `Instant Cashback across over 17,000 Offline Store Outlets, over 700 Online Brands & 12,000 Offline Eateries, Pan India! No more waiting, just pay using our voucher, and get Instant credit Everytime. All you need to have is little MyCash (Loyalty Cash) balance to convert to Real Cashback, & for This Month you get it Free on Registering.

We show you all relevant coupons for-
Visiting Nearby Stores (+17,000 Pan India) – Get Instant Cashback!

1. Search the brand coupon on Moby & your MyCash (Loyalty Cash) is auto-applied to discount it as much as possible.
2. Buy the coupon code & your applied Mycash converts to Instant Cashback, you can withdraw or reuse, ie Nike Cashback use on Swiggy to make order free.
3. Share the voucher code, with the cashier & you get full credit for your shopping.
4. Incase you have a problem to redeem, just whatsapp or call us, we promise no bots or canned replies, only resolves or refunds in 24 hrs, no questions asked.

Our INSTANT Cashback is Extra over most ongoing store Offers & Deals.

Online Brands (+700 Pan India) - Instant Cashback!

1. Shop Online or Order Food Online from your favorite brands & Order In Apps like Swiggy & Zomato.
2. Search the brand coupon on Moby & your MyCash (Loyalty Cash) is auto applied to discount it as much as possible.
3. Buy the coupon code & your applied Mycash converts to “Instant” Cashback, that you can withdraw or reuse, ie Nike Cashback use on Swiggy & get the order free!
4. Pay online using the option “Pay using vouchers/Gift cards “ when you check out and reach the Payment Gateway.
5. Incase you have a problem to redeem, just whatsapp or call us, we promise no bots or canned replies, only resolves or refunds in 24 hrs, no questions asked.

Our INSTANT Cashback is Extra over most ongoing store Offers & Deals

Nearby Eatery (+10,000 Pan India) - Instant Discounts
Visit Nearby Eateries, & simply pay your bills via our platform to avail Instant discounts of 10% - 30% Pan India, no reservation required. You will need MyCash (Loyalty cash) to redeem as Instant Discounts, so must have balance in your wallet.

Usual Cashbacks - Not Instant, But always Extra & Exact
Some of the brands, say about 5% don’t give INSTANT Cashback, then we have no choice but to go the old fashion way,,, the usual cashback coupons, where cash credit is given in about 60 days after your product Return/Exchange option expires. To qualify, you simply need to click any button from our platform to reach brand site & Shop as usual. You might see below click options on these coupons -
(Shop Now - Main Site Page), (Get Offer - Timely Promo),
(Buy Now - Exclusive Code), You can use any to land on the relevant and shop.

Exclusive Top Deals -
Cashback Coupon with the “Buy Now” option is our exclusive deals option & you would see this getting crowded as you shop more with us. Here you can buy a Promo Code that would get you an Exclusive discount when applied & in combination, you would ALSO get your listed cashback on the coupon on the bill amount you pay!

What is MyCash?
Yes that’s the fuel that lights the fire, you need MyCash (Loyalty Cash) to apply and convert into Real Cashback, so how do you get it?

1. For the next 1 Month, a small amount is free once your register
2. To earn more, you can check the top menu for Earn Cash Category
3. If you need it quick, just buy at a nominal price of Rs 10 for Rs 1000 MyCash.

Look you anyways shop every week & we have all those products & categories for you from your favorite brands, so why not Earn our MyCash, Apply it to coupons for your usual shopping and convert it to Real Cashback?`,
    year: '2024',
    client: 'Moby Ads',
    scope: ['PWA Development', 'UI/UX Design', 'Full Stack Development'],
    role: 'Frontend Developer - React & PWA Developer',
    technologies: ['React', 'PWA', 'Shopify', 'PHP', 'Razorpay', 'Stripe', 'Split Payment'],
    features: [
      'Instant Cashback (17,000+ Stores)',
      '700+ Online Brands',
      '12,000+ Offline Eateries',
      'MyCash Loyalty System',
      'Real-time Gift Voucher Redemption'
    ],
    image: '/img/moby.png',
    images: [
      '/img/moby.png'
    ],
    playstoreLink: 'https://play.google.com/store/apps/details?id=com.mobyads&hl=en_IN',
    webLink: 'https://app.mobyads.in/',
    webLinks: [
      'https://app.mobyads.in/',
      'https://mobycashback.com/'
    ]
  },
  {
    id: 2,
    slug: 'klaynice',
    title: 'Klaynice',
    categories: ['Mobile App', 'Relationship'],
    description: 'Bring you and your partner closer every day with Klaynice. Explore fun shared activities, quick mood check-ins, and guided conversations that strengthen your bond.',
    fullDescription: `Klaynice – The Couples App for Stronger, Happier Relationships

Klaynice is the all-in-one relationship app that helps couples stay connected, communicate better, and keep their bond strong—no matter how busy life gets. Whether you’re dating, engaged, or married, Klaynice makes it easy to nurture your relationship through shared activities, fun challenges, and open conversations.

Strengthen Your Relationship with Klaynice:
Daily Mood Check-ins
Stay in sync with your partner’s feelings using quick and easy mood updates—perfect for understanding each other better every day.

Couples Games & Shared Activities
Discover fun challenges, interactive games, and bonding activities to bring you closer, whether you’re together or long-distance.

Guided Conversations & Relationship Advice
Enjoy meaningful conversation starters and expert-inspired prompts that help you communicate openly and deepen your connection.

Relationship Tracker
Watch your love grow over time with tools to track your emotional closeness and shared moments.

For Every Stage of Love
From new relationships to long-term partnerships and marriage, Klaynice supports you in building a happy, healthy love life.

If you’re looking for a couples communication app, a fun marriage app to rekindle romance, or a relationship tracker to celebrate your journey together, Klaynice is here to help.

Download Klaynice today and start building the relationship you’ve always dreamed of—one shared moment at a time.`,
    year: '2024',
    client: 'Klaynice',
    role: 'Backend Developer - Node.js & Nestjs',
    technologies: ['Node.js', 'Nestjs', 'MySQL', 'Sequelize ORM', 'Apple Pay', 'OpenAI'],
    features: [
      'Daily Mood Check-ins',
      'Couples Games & Activities',
      'Guided Conversations',
      'Relationship Tracker',
      'Apple Pay Integration',
      'OpenAI Based Insights'
    ],
    image: '/img/klaynice.png',
    images: [
      '/img/klaynice.png'
    ],
    playstoreLink: '',
    appStoreLink: 'https://apps.apple.com/us/app/klaynice/id6742018067',
    adminLink: 'http://adkl.klaynice.com/',
    apiLink: 'https://api.klaynice.com/api#/',
    webLink: 'https://klaynice.com/',
    webLinks: [
      'https://klaynice.com/'
    ]
  },
  {
    id: 3,
    slug: 'gocart',
    title: 'GoCart',
    categories: ['Web Application', 'E-commerce'],
    description: 'A powerful multi-vendor e-commerce platform that allows vendors to register, manage their own products, and sell on a single platform with ease.',
    fullDescription: `GoCart is a comprehensive multi-vendor e-commerce solution designed to empower both vendors and customers. It provides a seamless shopping experience through a beautiful, responsive storefront while offering robust management tools for platform owners and independent sellers.

The platform streamlines the complexities of multi-vendor operations, from vendor registration and product management to sales analytics and commission tracking. With a focus on modern user experience and performance, GoCart offers a scalable architecture suitable for growing digital marketplaces.

Key Highlights:
- Multi-Vendor Architecture: Scalable system allowing multiple vendors to operate independently under one roof.
- Professional Storefront: Highly optimized and responsive customer interface built with Next.js.
- Vendor Empowerment: Detailed dashboards for inventory management and sales tracking.
- Operational Excellence: Centralized admin control for total platform oversight and governance.`,
    year: '2025',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Lucide React', 'React'],
    features: [
      'Multi-Vendor Architecture',
      'Customer-Facing Storefront',
      'Vendor Dashboards',
      'Admin Panel & Commission Management',
      'Responsive UI Design',
      'Modern State Management'
    ],
    image: '/img/gocart.png',
    images: [
      '/img/gocart.png'
    ],
    webLink: 'https://www.gocart.cloud/',
  },
  {
    id: 4,
    slug: 'farmstayhub',
    title: 'FarmStayHub',
    categories: ['Web Application', 'Travel & Hospitality'],
    description: 'A dedicated platform for farm house stays that connects nature-loving travelers directly with farm owners for seamless bookings and authentic experiences.',
    fullDescription: `FarmStayHub is a specialized hospitality platform designed to simplify the discovery and booking of farm house stays. It provides a unique bridge between travelers seeking rustic getaways and farm owners looking to showcase their properties.

The platform focuses on direct communication, eliminating complex payment gateways in favor of a personal touch. When a user finds their perfect escape, the "Book Now" feature facilitates an immediate connection with the farm owner, sharing all necessary stay details to finalize the booking via direct message.

Key Highlights:
- Direct-to-Owner Booking: Streamlined booking process that initiates direct communication with property owners.
- Comprehensive Farm Listings: Detailed property profiles with everything a traveler needs to know before their stay.
- Real-time Authentication: Secure login and verification using OTP and JWT for a safe user experience.
- Management Suite: Robust admin and API infrastructure to handle property data and user interactions efficiently.`,
    year: '2024',
    client: 'FarmStayHub',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'NestJS', 'Node.js', 'MySQL', 'Sequelize ORM', 'Firebase', 'JWT', 'OTP Auth'],
    features: [
      'Direct Farm Owner Communication',
      'OTP-based Authentication',
      'Advanced Property Search & Filters',
      'Comprehensive Admin Dashboard',
      'Secure API Architecture',
      'Real-time Notifications'
    ],
    image: '/img/farmstayhub.png',
    images: [
      '/img/farmstayhub.png'
    ],
    webLink: 'https://farmstayhub.com/',
    adminLink: 'http://admin.farmstayhub.com/',
    apiLink: 'http://api.farmstayhub.com/api'
  },
  {
    id: 5,
    slug: 'idurar',
    title: 'IDURAR',
    categories: ['Web Application', 'ERP & CRM'],
    description: 'A modern Open Source ERP / CRM software built with MERN Stack for small to medium-sized businesses.',
    fullDescription: `IDURAR is a sophisticated Open Source ERP and CRM solution designed to help businesses manage their operations with modern efficiency. Built on the powerful MERN stack, it offers a modular and highly customizable architecture suitable for varied business needs.

The platform provides an integrated suite of business applications, including invoicing, lead management, and inventory tracking. With a clean, professional user interface and a focus on performance, IDURAR simplifies complex business workflows into manageable digital processes.

Key Highlights:
- Comprehensive Business Management: Features for quotation, invoice, and payment tracking in one unified dashboard.
- Advanced Lead & CRM Engine: Sophisticated customer relationship management tools to drive business growth.
- Highly Customizable Framework: Modular architecture allowing easy adaptation to specific industry requirements.
- Enterprise-Ready UI: A premium, professional interface designed for daily operational use.`,
    year: '2024',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Ant Design', 'Redux'],
    features: [
      'Inventory Management',
      'Invoicing & Payment Tracking',
      'Customer Relationship Management (CRM)',
      'Human Resource Management (HRM)',
      'Task & Project Management',
      'Cloud-Based Access'
    ],
    image: '/img/idurar.png',
    images: [
      '/img/idurar.png'
    ],
    webLink: 'https://cloud.idurarapp.com/'
  },
  {
    id: 6,
    slug: 'base-camp-trading',
    title: 'Base Camp Trading',
    categories: ['Web Application', 'FinTech', 'Education'],
    description: 'A comprehensive trading ecosystem providing real-time coaching, proprietary indicators, and high-conviction trade ideas for traders at all levels.',
    fullDescription: `Base Camp Trading is a premier educational platform and tool provider for the financial markets. It empowers traders with a proven process, real-time coaching, and a suite of proprietary indicators designed to simplify complex market decisions.

The platform's integrated ecosystem includes Live Trading Rooms where members trade alongside professionals, vetted trade alerts with precise entry and exit points, and intensive masterclasses. Whether it's mastering options for retirement or spotting high-probability setups, Base Camp Trading provides the complete arsenal for trading with confidence.

Key Highlights:
- Live Professional Coaching: Real-time trading rooms for direct apprenticeship and strategy execution.
- Proprietary Market Indicators: Custom-built tools to identify high-probability setups and simplify market analysis.
- High-Conviction Alerts: Vetted trade ideas delivered with clear entry, target, and stop-loss levels.
- Comprehensive Education: Step-by-step workshops and masterclasses focused on skill mastery rather than just theory.`,
    year: '2024',
    role: 'Frontend Developer',
    technologies: ['Angular', 'SCSS', 'WordPress', 'PHP', 'ActiveCampaign', 'MemberPress'],
    features: [
      'Live Trading Rooms',
      'Proprietary Indicators',
      'Trade Alerts & Signals',
      'Trading Workshops & Education',
      'Retirement Strategy Guides'
    ],
    image: '/img/btc.png',
    images: [
      '/img/btc.png'
    ],
    webLink: 'https://basecamptrading.com/'
  },
  {
    id: 7,
    slug: 'tomato-food',
    title: 'Tomato Food',
    categories: ['Web Application', 'E-commerce'],
    description: 'A modern, user-centric food ordering and delivery platform designed for a seamless culinary experience.',
    fullDescription: `Tomato Food is a premium food delivery application that streamlines the journey from craving to doorstep. It offers a vibrant and intuitive interface for browsing diverse cuisines, managing orders with a dynamic cart system, and completing transactions with bank-grade security.

The platform is designed to handle high-traffic food ordering workflows, providing real-time updates and a frictionless checkout process. With its responsive architecture, Tomato Food ensures that users can satisfy their hunger on any device, anywhere.

Key Highlights:
- Dynamic Menu Exploration: Interactive dishes categorized for effortless browsing and selection.
- Real-time Order Management: Seamlessly adjust quantities and manage your meal selection with an intuitive cart.
- Secure Stripe Checkout: Fully integrated with Stripe for safe, global payment processing.
- Elegant Responsive UI: A modern design language optimized for high conversion and user retention.`,
    year: '2025',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Interactive Food Categories',
      'Real-time Cart Updates',
      'Secure Stripe Payments',
      'Order Status Tracking',
      'Fully Responsive Layout'
    ],
    image: '/img/food.png',
    images: [
      '/img/food.png'
    ],
    webLink: 'https://tomatofood.vercel.app/'
  },
  {
    id: 8,
    slug: 'prescripto',
    title: 'Prescripto',
    categories: ['Web Application', 'Healthcare'],
    description: 'A professional healthcare appointment booking platform that connects patients with medical specialists seamlessly.',
    fullDescription: `Prescripto is a modern health-tech solution designed to bridge the gap between patients and specialized medical care. It provides a comprehensive directory of doctors across multiple specialties, paired with a robust booking system that simplifies medical scheduling.

The application empowers patients to take control of their healthcare through a dedicated dashboard for managing appointments and history. For providers, it offers a streamlined way to manage their availability and patient interactions, all while ensuring secure transaction handling for consultation fees.

Key Highlights:
- Specialist Directory: Find and filter qualified doctors by specialty including General Physicians, Dermatologists, and more.
- Instant Appointment Booking: Choose your preferred time slot and book consultations in seconds.
- Integrated Payment System: Secure handling of consultation fees via Stripe.
- Comprehensive Patient Portal: A centralized hub for users to track and manage their medical appointments.`,
    year: '2024',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    features: [
      'Doctor Specialty Filtering',
      'Appointment Slot Management',
      'Secure Consultation Payments',
      'Personalized Patient Dashboard',
      'Real-time Booking Confirmation'
    ],
    image: '/img/doc_app.png',
    images: [
      '/img/doc_app.png'
    ],
    webLink: 'https://prescriptoapp-wheat.vercel.app/'
  },
  {
    id: 9,
    slug: 'imagify',
    title: 'Imagify',
    categories: ['Web Application', 'AI & Creative'],
    description: 'An advanced AI-powered text-to-image generator that turns creative prompts into high-quality visual art.',
    fullDescription: `Imagify is at the intersection of creativity and artificial intelligence. This sophisticated application leverages powerful AI models to translate simple text descriptions into stunning, high-definition visual assets, democratizing professional-grade art creation.

The platform features a professional credit-based economy, allowing users to purchase generation credits and build their own galleries of AI-generated content. With its sleek interface and rapid generation capabilities, Imagify serves as the ultimate tool for designers, marketers, and creative hobbyists.

Key Highlights:
- AI-Driven Generation: Seamlessly convert prompts into professional images using state-of-the-art AI APIs.
- Credit-Based Ecosystem: A complete subscription and credit management system for premium features.
- Dynamic Image Gallery: Showcase and manage your AI-generated portfolio in a high-performance visual grid.
- Global Payment Integration: Securely purchase credits using the integrated Stripe payment gateway.`,
    year: '2025',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'OpenAI API', 'Stripe', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'AI Text-to-Image Generation',
      'Credit Management System',
      'Stripe Subscription Billing',
      'Personal User Gallery',
      'High-Speed Visual Processing'
    ],
    image: '/img/imagefy.png',
    images: [
      '/img/imagefy.png'
    ],
    webLink: 'https://imagify-master.vercel.app/'
  },
  {
    id: 10,
    slug: 'quickshow',
    title: 'QuickShow',
    categories: ['Web Application', 'Entertainment'],
    description: 'A modern movie ticketing platform offering a seamless booking experience with live seat selection, secure payments, and real-time notifications.',
    fullDescription: `QuickShow is a cutting-edge movie booking application designed to bring the cinema experience to your fingertips. Built with a focus on speed, reliability, and user ease, it offers a full-featured platform for movie enthusiasts to discover, select, and book their favorite shows in seconds.

The application features a sophisticated live seat selection engine, allowing users to choose their preferred spots in real-time. With deep integrations for secure payments and automated background processes, QuickShow handles the entire lifecycle of a ticket booking from selection to confirmation and post-booking analytics.

Key Highlights:
- Live Seat Management: Dynamic seat selection interface providing real-time availability and visual theater mapping.
- Seamless Authentication: Secure and modern user management integrated with Clerk.
- Automated Orchestration: Robust background job management using Inngest for handling emails and state updates.
- Data-Driven Revenue Tracking: Comprehensive admin analytics for monitoring platform performance and monthly earnings.`,
    year: '2025',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'Clerk', 'Stripe', 'Inngest', 'Nodemailer', 'Tailwind CSS', 'React'],
    features: [
      'Live Seat Selection & Booking',
      'Secure Stripe Payment Integration',
      'Automated Email Notifications',
      'Background Job Management',
      'Advanced Admin Dashboard',
      'Real-time Revenue Analytics'
    ],
    image: '/img/quickshow.png',
    images: [
      '/img/quickshow.png'
    ],
    webLink: 'https://quickshow.vercel.app/'
  },
  {
    id: 11,
    slug: 'car-rental',
    title: 'Car Rental',
    categories: ['Web Application', 'Transportation'],
    description: 'A modern and intuitive car rental platform designed to provide a seamless vehicle booking experience for travelers.',
    fullDescription: `Car Rental is a comprehensive vehicle booking solution that combines a sleek user interface with powerful search and filter capabilities. It simplifies the process of finding and reserving the perfect vehicle, whether for a quick city trip or a long-distance journey.

The platform offers a high-performance browsing experience with real-time availability and detailed vehicle profiles. With its focus on user convenience, Car Rental streamlines everything from initial discovery to the final booking confirmation, making transportation planning effortless.

Key Highlights:
- Advanced Search & Filtering: Effortlessly find vehicles based on brand, type, and rental duration.
- Detailed Vehicle Profiles: High-quality imagery and comprehensive specifications for every car in the fleet.
- Seamless Booking Workflow: A frictionless step-by-step process for secure vehicle reservations.
- Modern Responsive Design: A premium, mobile-first interface optimized for users on the move.`,
    year: '2024',
    role: 'Full Stack Developer',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Interactive Vehicle Showcase',
      'Advanced Search Filters',
      'Real-time Availability Tracking',
      'Comprehensive Car Specifications',
      'Frictionless Booking System'
    ],
    image: '/img/car_rent.png',
    images: [
      '/img/car_rent.png'
    ],
    webLink: 'https://car-rental-gs.vercel.app/'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
