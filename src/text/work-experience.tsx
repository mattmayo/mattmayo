import { FluidObject } from 'gatsby-image';

interface CompanyExperience {
  photo: undefined | (() => FluidObject | FluidObject[]);
  photoAltText: string;
  name: string;
  companyDescription: string;
  workDescription: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getExperience(data): Array<CompanyExperience> {
  return [
    {
      photo: data.mattCarta1.childImageSharp.fluid,
      photoAltText: 'Matt at Carta',
      name: 'Carta',
      companyDescription:
        "Carta provides a platform for private equity that is popular with startups. When I applied at Carta I didn't realize I already had account because of my time at FiveStars - it was called eShares at the time!",
      workDescription:
        'I started as staff engineer and quickly moved into management to lead Internal Tools. My charter was to automate critical business processes. To do this my domains spanned subscriptions, sales contracts, Salesforce, Avalara sales tax, Netsuite, and customer support integrations. I built and managed several teams including two different contracting teams in Belarus and Brazil. At the end of my tenure I had a local team of five in San Francisco and a remote of five in based in Waterloo, Canada with a manager that reported to me. I was able to work on tons of interesting high value projects. One of my favorites was building a self-service upgrade experience for customers that were on free plans going to paid plans. It was a full stack project that required integrations with contracts, subscriptions, payments, and Salesforce.',
    },
    {
      photo: data.mattEBay1.childImageSharp.fluid,
      photoAltText: 'Matt at eBay',
      name: 'eBay',
      companyDescription:
        'eBay is an online marketplace with billions of live product listings at any given moment. It got its start in the early days as an auction site and was considered an Internet darling in its hay day.',
      workDescription:
        "Working in eBay's new product development group, I help with two product initiatives aimed at growing eBay's user base working full stack, but specializing in React web application development. We wanted millennials since the average user at the time was in their 40's. The first product was a shopping bot integrated with FaceBook's Messenger and then later Google Home. I lead the human curation domain that allowed humans to create collections of eBay items based on intelligent search. The second product I worked on was a shopping experience for China featuring luxury goods.",
    },
    {
      photo: data.mattFiveStars1.childImageSharp.fluid,
      photoAltText: 'Matt at FiveStars',
      name: 'FiveStars',
      companyDescription:
        "FiveStars is a loyalty rewards program for small businesses, something analogous to Starbucks rewards, but for the Mom and Pop's shops in your neighborhood. The offer capabilities like a marketing platform and after I left in-store payments.",
      workDescription:
        'I led their iPhone development team, starting out by myself at first by taking over an existing app and then ramping up other developers. I was able to help dramatically expand its features and functionalities to drive more subscriptions per user. I also built a selfie capture experience and first in industry hardware in-store check-in experience using iBeacon.',
    },
    {
      photo: data.mattRocketLawyer1.childImageSharp.fluid,
      photoAltText: 'Matt at Rocket Lawyer',
      name: 'Rocket Lawyer',
      companyDescription:
        'Rocket Lawyer was very much about making legal services affordable at scale.',
      workDescription:
        'I worked as a Java back-end engineer working on a major effort to re-platform a legal question and answer product. The product was brought to Rocket Lawyer through an acquisition written in Django and a major goal was to put in into a new data model and use our micro-service architecture with Java services, RabbitMQ message queue, and ElasticSearch for searching for qualified lawyers.',
    },
    {
      photo: data.mattZynga1.childImageSharp.fluid,
      photoAltText: 'Matt at Zynga',
      name: 'Zynga',
      companyDescription:
        'Known for popular games like FarmVille and Words with Friends, Zynga was one of the early game studios that built games on the FaceBook platform. In their hay day they had taken over the old Sega building in San Francisco and had more than a dozen studios working on various games for web and mobile.',
      workDescription:
        'I spent a little under a year working at Zynga having worked on 3 projects. I worked on a game called PirateVille that ultimately was not released, their developer portal that was designed for in-house and external developers to use to build their games, and a few months on Words with Friends.',
    },
    {
      photo: data.mattPayPal1.childImageSharp.fluid,
      photoAltText: 'Matt at PayPal',
      name: 'PayPal',
      companyDescription:
        'The simple way to pay and get paid, PayPal was one of the early online payment products that eventually got acquired by eBay and then later spun off back to being its own entity.',
      workDescription:
        "My time at PayPal was when they were still owned by eBay, but largely operating independently. I started in their Scottsdale, Arizona office and ended up worked out of headquarters in San Jose, CA. For the majority of my time I worked on a large re-platforming effort of their reporting system. At the time in only supported their 100,000's of merchants and needed to support their millions of customers due to legal and complicance requirements.",
    },
    {
      photo: data.mattSynApps1.childImageSharp.fluid,
      photoAltText: 'Matt at Syn-Apps',
      name: 'Syn-Apps',
      companyDescription:
        'A notification and announcement system that was used for places like schools and hospitals. The system worked was built as a windows server and client application using C# that integrated with Cisco IP telephones. The whole company was about 15 people.',
      workDescription:
        'I spent a good amount of my time their working on getting their integration to work with another popular phone system by ShoreTel. I also worked on building features, working with customers directly to handle their issues, and I got to travel a trade show to show off their new ShoreTel integration to setup the equipment and act a technical resource.',
    },
    {
      photo: data.mattITRACS1.childImageSharp.fluid,
      photoAltText: 'Matt at iTRACS',
      name: 'iTRACS',
      companyDescription:
        'iTRACS makes data center infrastructure management software that is used to manage workflows like build-outs, connectivity management, and replacement of equipment in the data center like servers.',
      workDescription:
        "My role started out as their SDK (software development kit) developer. My time was roughly split into 3 areas of focus (a) software development, (b) technical documentation, and (c) conducting three to five day training courses on-site or customer's location. After doing that for sometime I moved into management of a couple developers and two technical writers.",
    },
    {
      photo: data.mattInterTel1.childImageSharp.fluid,
      photoAltText: 'Matt at Inter-Tel',
      name: 'Inter-Tel',
      companyDescription:
        'Inter-Tel, now known as Mitel through acquisition, built and sold business communication systems to small and medium-sized companies.',
      workDescription:
        'This was my first job out of college and I worked as an embedded developer for IP telephones writing firmware code in C/C++. I learned a lot about phone systems by helping to tune them for acoustic echo cancellation. I also worked on the configuration database for a next generation phone that was built on top of SQLite. Unfortunately the phone was never released, but it was a great experience.',
    },
  ];
}
