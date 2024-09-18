import React from 'react'

interface ProfileHeaderProps {
  name: string
  position: string
  company: string
  year: string
  description: string
  contactInfo: {
    phone: string
    email: string
    website: string
  }
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  position,
  company,
  year,
  description,
  contactInfo,
}) => {
  return (
    <header className="flex flex-wrap gap-10 items-end w-full max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bae54dcc03096dd6b0b1918f3ff09728290cd3dfa1b649c6571b2e3ae9c67f65?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
        alt={`${name}'s profile picture`}
        className="object-contain grow shrink aspect-[0.98] min-w-[240px] w-[432px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink min-w-[240px] w-[495px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[603px]">
          <h1 className="text-3xl font-extrabold text-blue-950 max-md:max-w-full">
            {name} is a professional {position} for <br /> {company} since{' '}
            {year}
          </h1>
          <p className="mt-8 text-lg text-zinc-500 max-md:max-w-full">
            {description}
          </p>
        </div>
        <hr className="mt-11 max-w-full border border-solid border-blue-950 border-opacity-20 min-h-[1px] w-[600px] max-md:mt-10" />
        <div className="flex flex-col mt-11 max-w-full w-[295px] max-md:mt-10">
          <dl className="flex flex-col items-start w-full text-lg max-w-[295px]">
            <div className="flex gap-10 max-w-full rounded-none w-[266px]">
              <dt className="font-bold text-blue-950">Phone :</dt>
              <dd className="grow shrink w-36 text-zinc-500">
                {contactInfo.phone}
              </dd>
            </div>
            <div className="flex gap-10 mt-5 max-w-full rounded-none w-[264px]">
              <dt className="font-bold text-blue-950">Email :</dt>
              <dd className="grow shrink w-36 text-zinc-500">
                {contactInfo.email}
              </dd>
            </div>
            <div className="flex gap-7 self-stretch mt-5 w-full rounded-none">
              <dt className="font-bold text-blue-950">Website :</dt>
              <dd className="grow shrink text-zinc-500 w-[170px]">
                {contactInfo.website}
              </dd>
            </div>
          </dl>
          <SocialIcons />
          <button className="gap-2.5 self-start px-10 pt-5 pb-5 mt-11 text-xl font-semibold text-center bg-amber-400 text-blue-950 max-md:px-5 max-md:mt-10">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  )
}

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-6 items-center mt-9 max-w-full w-[109px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d088587f24c41be91b83cc0242392c34dfb196810f563b4d4ad3ab9f2890cf0?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
        alt="Social media icon"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b17bd5e9aa86938947deb631e90e39d5028a1323f3e7c999f9f2c4d95228ece?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
        alt="Social media icon"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.11]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66573388efac5134abdde2df54a076305289f795adac28a2e2b656557a13c397?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
        alt="Social media icon"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.25]"
      />
    </div>
  )
}

interface QualificationExperienceProps {
  title: string
  description: string
  keyPoints: string[]
}

const QualificationExperience: React.FC<QualificationExperienceProps> = ({
  title,
  description,
  keyPoints,
}) => {
  return (
    <section className="flex flex-col mt-9 max-w-full w-[1200px]">
      <div className="flex flex-col w-full">
        <h2 className="text-5xl font-extrabold text-blue-950 max-md:max-w-full max-md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-7 text-zinc-500 max-md:max-w-full">
          {description}
        </p>
      </div>
      <ul className="flex flex-col mt-8 max-w-full text-lg font-medium leading-none text-zinc-500 w-[408px]">
        {keyPoints.map((point, index) => (
          <li key={index} className={index > 0 ? 'mt-7' : ''}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  )
}

interface ServiceDescriptionProps {
  title: string
  description: string
  features: string[]
  additionalInfo: string
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description,
  features,
  additionalInfo,
}) => {
  return (
    <section className="flex flex-col mt-10 w-full text-lg text-zinc-500">
      <h3 className="self-stretch text-3xl font-bold text-blue-950 max-md:max-w-full">
        {title}
      </h3>
      <p className="mt-4 max-w-full leading-7 w-[767px] max-md:max-w-full">
        {description}
      </p>
      <ul className="flex flex-col mt-4 max-w-full font-medium leading-none w-[747px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className={
              index > 0 ? 'mt-5 max-md:max-w-full' : 'max-md:max-w-full'
            }
          >
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-8 leading-7 max-md:max-w-full">{additionalInfo}</p>
    </section>
  )
}

const ProfilePage: React.FC = () => {
  const profileData = {
    name: 'Devid',
    position: 'Engineer',
    company: 'BlueCollar',
    year: '2010',
    description:
      'Hello! to the table win survival strategy ensure to proactive domination At the end of the day, going forward new normal that has evolved from user generated content will have touch points shoring hanging fruits to identify a ballpark value-added activity to beta.',
    contactInfo: {
      phone: '(+01) 123 456 789',
      email: '@davidjames.com',
      website: 'www.davidjames.com',
    },
  }

  const qualificationData = {
    title: 'Qualification & Experience',
    description:
      'Efficiently myocardinate market driven innovation open source alignments dramatically engaged high pay off infomediaries rather than client centric imperatives. Efficiently initiates world class applications after client centric infomediaries phosfluorescently expedite impactful supply chains via focused results holistically generated open source applications through bleeding edges sources compellingly supply just in time to catalysts for change through top-line potentialities.',
    keyPoints: [
      '1. Listen to what they say about you',
      '2. Randomised words which.',
      '3. Internet tend to repeat predefined chunks',
    ],
  }

  const serviceData = {
    title: 'Make real time a day services',
    description:
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    features: [
      'Interactively procrastinate high-payoff content',
      "2. Randomised words which don't look even slightly believable.",
      '3. Your best work, together in one package that works seamlessly from your computer',
      '4. Delivers the tools you need to save time Improve field performance always',
    ],
    additionalInfo:
      'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximize the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
  }

  return (
    <main className="flex flex-col">
      <ProfileHeader {...profileData} />
      <QualificationExperience {...qualificationData} />
      <ServiceDescription {...serviceData} />
    </main>
  )
}

export default ProfilePage
