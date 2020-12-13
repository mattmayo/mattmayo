import { FluidObject } from 'gatsby-image';

const sampleCompanyDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';

const sampleWorkDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
        'I started as staff engineer and quickly moved into management to lead Internal Tools. My charter was to automate critical business processes. To do this my domains spanned subscriptions, sales contracts, Salesforce, Avalara sales tax, Netsuite, and customer support integrations. I built and managed several teams including two different contracting teams in Belarus and Brazil. At the end of my tenure I had a local team of five in San Francisco and a remote of five in based in Waterloo, Canada with a manager that reported to me. I was able to work on tons of interesting high value projects. One of my favorites was building a self-service upgrade experience for customers that were on free plans going to paid plans. It was a full stack project that required integrations with contracts, subscriptions, payments, and Saleforce.',
    },
    {
      photo: data.mattEBay1.childImageSharp.fluid,
      photoAltText: 'Matt at eBay',
      name: 'eBay',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattFiveStars1.childImageSharp.fluid,
      photoAltText: 'Matt at FiveStars',
      name: 'FiveStars',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattRocketLawyer1.childImageSharp.fluid,
      photoAltText: 'Matt at RocketLawyer',
      name: 'Rocket Lawyer',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattZynga1.childImageSharp.fluid,
      photoAltText: 'Matt at Zynga',
      name: 'Zynga',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattPayPal1.childImageSharp.fluid,
      photoAltText: 'Matt at PayPal',
      name: 'PayPal',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattSynApps1.childImageSharp.fluid,
      photoAltText: 'Matt at Syn-Apps',
      name: 'Syn-Apps',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattITRACS1.childImageSharp.fluid,
      photoAltText: 'Matt at iTRACS',
      name: 'iTRACS',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
    {
      photo: data.mattInterTel1.childImageSharp.fluid,
      photoAltText: 'Matt at Inter-Tel',
      name: 'Inter-Tel',
      companyDescription: sampleCompanyDescription,
      workDescription: sampleWorkDescription,
    },
  ];
}
