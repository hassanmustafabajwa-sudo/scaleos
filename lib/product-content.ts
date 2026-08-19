export type ProductContent = {
  headline: string
  subhead: string
  intro: string
  problem: {
    title: string
    body: string
    pains: string[]
  }
  solution: {
    title: string
    body: string
    points: { title: string; body: string }[]
  }
  moduleNote: string
  howItWorks: { step: string; title: string; body: string }[]
  ctaLabel: string
}

export const productContent: Record<string, ProductContent> = {
  bagh: {
    headline: 'Run your restaurant from one place.',
    subhead: 'Bagh — Restaurant Operating System',
    intro:
      'Bagh brings point of sale, orders, inventory, staff and finance into one connected system — designed around the way restaurants actually operate.',
    problem: {
      title: 'Restaurants run on too many disconnected tools.',
      body: 'A POS here, a spreadsheet there, a separate app for delivery and another for staff. Information lives in silos, and nothing talks to each other.',
      pains: [
        'Sales, inventory and staff data live in separate systems',
        'Manual reconciliation at the end of every shift',
        'No single view of how the restaurant is really performing',
      ],
    },
    solution: {
      title: 'One connected system, built for restaurants.',
      body: 'Bagh unifies every part of the operation so the whole restaurant runs from a single source of truth.',
      points: [
        { title: 'Front of house', body: 'Fast point of sale, table and order management built for service speed.' },
        { title: 'Back of house', body: 'Inventory, recipes and suppliers connected directly to sales.' },
        { title: 'Business', body: 'Staff, customers, loyalty and finance in one clear picture.' },
      ],
    },
    moduleNote:
      'Every module is connected — a sale updates inventory, informs finance and feeds analytics automatically.',
    howItWorks: [
      { step: '01', title: 'Set up your restaurant', body: 'Add your menu, tables, staff and suppliers in a guided setup.' },
      { step: '02', title: 'Run daily operations', body: 'Take orders, manage the floor and track inventory in real time.' },
      { step: '03', title: 'Understand the business', body: 'See sales, costs and performance in one connected dashboard.' },
    ],
    ctaLabel: 'Get Early Access',
  },
  property: {
    headline: 'One system for the entire property lifecycle.',
    subhead: 'Property OS — Property & Real Estate Operating System',
    intro:
      'Property OS connects listings, leasing, tenants, maintenance and finance so property teams manage their whole portfolio from one place.',
    problem: {
      title: 'Property operations are spread across too many tools.',
      body: 'Listings in one place, contracts in another, maintenance over email and finance in spreadsheets. Nothing connects across the portfolio.',
      pains: [
        'Fragmented records across properties and units',
        'Slow, manual leasing and maintenance workflows',
        'No consolidated view of portfolio performance',
      ],
    },
    solution: {
      title: 'The connected operating layer for property.',
      body: 'Property OS brings the full lifecycle — from listing to lease to maintenance — into one coherent system.',
      points: [
        { title: 'Leasing', body: 'Listings, applications and contracts in one connected flow.' },
        { title: 'Operations', body: 'Maintenance, documents and communication in one place.' },
        { title: 'Finance', body: 'Payments, statements and reporting across the portfolio.' },
      ],
    },
    moduleNote:
      'Designed to scale from a handful of units to a full portfolio without adding more disconnected tools.',
    howItWorks: [
      { step: '01', title: 'Add your portfolio', body: 'Bring properties, units and tenants into one structured system.' },
      { step: '02', title: 'Manage the lifecycle', body: 'Handle leasing, maintenance and payments from a single workspace.' },
      { step: '03', title: 'See the whole picture', body: 'Track occupancy, income and performance across every property.' },
    ],
    ctaLabel: 'Request Early Access',
  },
  ecommerce: {
    headline: 'Run the entire online business in one place.',
    subhead: 'E-commerce OS — E-commerce Business Operating System',
    intro:
      'E-commerce OS unifies catalog, orders, fulfilment, customers and performance so your online store operates as one connected system.',
    problem: {
      title: 'Online stores are stitched together from many tools.',
      body: 'A storefront, a separate order tool, another for fulfilment and disconnected marketing. Growth means more tools and more complexity.',
      pains: [
        'Orders, inventory and fulfilment scattered across apps',
        'Customer data disconnected from operations',
        'No unified view of what is actually driving growth',
      ],
    },
    solution: {
      title: 'One operating system for online retail.',
      body: 'E-commerce OS connects the storefront to operations so the entire business runs from a single system.',
      points: [
        { title: 'Storefront', body: 'Catalog, products and merchandising in one connected core.' },
        { title: 'Operations', body: 'Orders, fulfilment and inventory kept perfectly in sync.' },
        { title: 'Growth', body: 'Customers, marketing and analytics working together.' },
      ],
    },
    moduleNote:
      'Every order, customer and campaign connects — so operations and growth share the same source of truth.',
    howItWorks: [
      { step: '01', title: 'Connect your catalog', body: 'Bring products, inventory and customers into one system.' },
      { step: '02', title: 'Operate end to end', body: 'Manage orders, fulfilment and marketing from one workspace.' },
      { step: '03', title: 'Grow with clarity', body: 'Understand performance and customers in one connected view.' },
    ],
    ctaLabel: 'Request Early Access',
  },
  sports: {
    headline: 'The operating layer for sports businesses.',
    subhead: 'Sports OS — Sports Business Operating System',
    intro:
      'Sports OS coordinates memberships, scheduling, facilities, teams and payments for clubs, academies and sports venues.',
    problem: {
      title: 'Running a sports business means juggling too many systems.',
      body: 'Memberships in one tool, bookings in another, payments elsewhere and communication over messages. Coordination becomes the hardest part.',
      pains: [
        'Members, bookings and schedules in separate places',
        'Manual coordination of facilities and teams',
        'Payments and membership data disconnected',
      ],
    },
    solution: {
      title: 'One system to run the sports business.',
      body: 'Sports OS brings members, scheduling, facilities and payments together into one connected operation.',
      points: [
        { title: 'Members', body: 'Memberships, profiles and communication in one place.' },
        { title: 'Scheduling', body: 'Facilities, sessions and teams coordinated seamlessly.' },
        { title: 'Payments', body: 'Bookings, subscriptions and payments fully connected.' },
      ],
    },
    moduleNote:
      'Built to fit clubs, academies and venues — with the flexibility each sports business needs.',
    howItWorks: [
      { step: '01', title: 'Set up your organisation', body: 'Add members, facilities, teams and schedules.' },
      { step: '02', title: 'Coordinate operations', body: 'Manage bookings, sessions and payments in one workspace.' },
      { step: '03', title: 'Grow the community', body: 'Understand membership and engagement in one clear view.' },
    ],
    ctaLabel: 'Request Early Access',
  },
  coffee: {
    headline: 'Built for the pace of a coffee shop.',
    subhead: 'Coffee Shop OS — Coffee Shop Operating System',
    intro:
      'Coffee Shop OS brings fast point of sale, mobile orders, inventory and loyalty into one system designed for the speed of coffee service.',
    problem: {
      title: 'Coffee shops move fast — their tools should too.',
      body: 'Slow point of sale, disconnected mobile orders and manual stock tracking get in the way of fast, consistent service.',
      pains: [
        'Point of sale and mobile orders on separate systems',
        'Manual inventory and stock tracking',
        'Loyalty disconnected from everyday service',
      ],
    },
    solution: {
      title: 'One fast system for coffee service.',
      body: 'Coffee Shop OS connects the counter, mobile orders and inventory so service stays fast and consistent.',
      points: [
        { title: 'Counter', body: 'Fast point of sale designed for peak-time speed.' },
        { title: 'Mobile', body: 'Mobile orders that flow directly into service.' },
        { title: 'Loyalty', body: 'Inventory and loyalty connected to every order.' },
      ],
    },
    moduleNote:
      'Designed for the rhythm of a coffee shop — quick to use, easy to run, built for regulars.',
    howItWorks: [
      { step: '01', title: 'Set up your shop', body: 'Add your menu, staff and inventory in minutes.' },
      { step: '02', title: 'Serve at speed', body: 'Take counter and mobile orders in one fast flow.' },
      { step: '03', title: 'Keep customers coming back', body: 'Run loyalty and understand your regulars in one place.' },
    ],
    ctaLabel: 'Request Early Access',
  },
}
