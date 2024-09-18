import React from 'react'
import Image from 'next/image'

export const faqs = [
  {
    id: 1,
    name: 'Engineer ERNEST CHIBUIKE',
    image: 'image168.jpg',
    position: 'Professional Builder, Project Manager, Real Estate Consultant',
    description:
      'Engineer Ernest Chibuike is a seasoned professional builder and project manager with over 10 years of hands-on experience in the field. His expertise also extends to real estate consultancy, backed by numerous successful projects and glowing testimonials from clients and organizations alike.',
  },
  {
    id: 2,
    name: 'Engineer IZUCHUKWU INNOCENT',
    image: 'image177.jpg',
    position: 'Professional Plumber and Land Surveyor',
    description:
      'With over 10 years of experience, Engineer Izuchukwu Innocent has mastered the art of plumbing and land surveying. His skills are proven in countless successful projects, where his precision and professionalism shine through.',
  },
  {
    id: 3,
    name: 'Engineer Priscilla',
    image: 'image23.jpg',
    position: 'Real Estate Consultant and Marketing Expert',
    description:
      'Known as the "Singing Realtor," Engineer Priscilla is a dynamic real estate consultant with a flair for both online and offline marketing. Her personalized approach and in-depth knowledge of the real estate market make her a standout professional in her field.',
  },
  {
    id: 8,
    name: 'Engineer Joshua Chukwuebuka',
    image: 'image166.jpg',
    position: 'Professional Electrician',
    description:
      'Engineer Joshua Chukwuebuka is a skilled electrician with over 5 years of experience in electrical engineering and installation. His work is known for its precision and safety, ensuring top-quality results for his clients.',
  },
  {
    id: 4,
    name: 'Architect Victor Nzube',
    image: 'image167.jpg',
    position: 'Experienced Architect',
    description:
      'Architect Victor Nzube, the mastermind behind "Vicks Design," is an experienced architect with a specialty in building design. His innovative and functional designs have transformed spaces and brought clients’ visions to life with unmatched creativity and expertise.',
  },
  {
    id: 5,
    name: 'Engineer Jethro',
    image: 'image169.jpg',
    position: 'Interior Designer and Project Manager',
    description:
      'With over 10 years of experience, Engineer Jethro is a highly sought-after interior designer and project manager. His meticulous attention to detail and commitment to client satisfaction have earned him a reputation as a top professional in his field.',
  },
  {
    id: 6,
    name: 'Engineer VICTOR AGOZIE (Victor Kings)',
    image: 'image173.jpg',
    position: 'Real Estate Consultant and Coach',
    description:
      'Engineer Victor Agozie, also known as Victor Kings, is a real estate consultant and coach with over 5 years of experience. His expertise is reflected in the glowing testimonials from clients who have benefited from his knowledge and dedication to excellence.',
  },
]

interface ProfileHeaderProps {
  id?: number
  name?: string
  position?: string
  //   company: string
  //   year: string
  image?: string
  description?: string
  //   contactInfo: {
  //     phone: string
  //     email: string
  //     website: string
  //   }
}

const ProfileBody = ({
  name,
  position,
  //   company,
  //   year,
  description,
  //   contactInfo,
  image,
}: ProfileHeaderProps) => {
  return (
    <header className="flex flex-wrap gap-2 w-full max-md:max-w-full">
      <Image
        src={`/team/${image!}`}
        alt="name"
        width={240}
        height={300}
        className="object-contain grow shrink aspect-[0.98] min-w-[240px] w-[432px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink min-w-[240px] w-[495px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[603px]">
          <h1 className="text-3xl font-extrabold text-blue-950 max-md:max-w-full">
            {name}
          </h1>
          <h1 className="text-3xl font-extrabold text-blue-950 max-md:max-w-full">
            {position}
          </h1>
          <p className="mt-8 text-lg text-zinc-500 max-md:max-w-full">
            {description}
          </p>
        </div>
        <hr className="mt-11 max-w-full border border-solid border-blue-950 border-opacity-20 min-h-[1px] w-[600px] max-md:mt-10" />
        {/* <div className="flex flex-col mt-11 max-w-full w-[295px] max-md:mt-10">
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
            is a professional {position} for <br /> EPEVOT
          </button>
        </div> */}
      </div>
    </header>
  )
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

const Profile = ({ id }: { id?: number }) => {
  const user = faqs.find((faq) => faq.id === id)

  return (
    <section className="">
      <ProfileBody {...user} />
      <ServiceDescription {...serviceData} />
    </section>
  )
}

export default Profile
