'use client'

import React from 'react'
import Image from 'next/image'
import * as Icon from '@/components/Icons'
import Link from 'next/link'
import { cn } from '@/utils'

export const Hero = () => {
  return (
    <Image
      src="/teamsbg.png"
      alt="banner"
      className="object-cover w-full md:container"
      loading="lazy"
      height={1920}
      width={435}
    />
  )
}

export const faqs = [
  {
    id: 1,
    name: 'ERNEST CHIBUIKE',
    image: 'image168.jpg',
  },
  {
    id: 2,
    name: 'IZUCHUKWU INNOCENT',
    image: 'image177.jpg',
  },
  {
    id: 3,
    name: 'Joshua Chukwuebuka',
    image: 'image23.jpg',
  },
  {
    id: 8,
    name: 'Priscilla',
    image: 'image166.jpg',
    position: 'Real estate consultant',
  },
  {
    id: 4,
    name: 'Victor Nzube',
    image: 'image167.jpg',
    position: 'Architect',
  },
  {
    id: 5,
    name: 'Jethro',
    image: 'image169.jpg',
  },
  {
    id: 6,
    name: 'VICTOR AGOZIE',
    image: 'image173.jpg',
  },
]
export const TeamSection = () => {
  return (
    <section className="flex flex-col items-center w-full container py-20">
      <div className="flex flex-col items-center max-w-full w-[687px]">
        <div className="flex flex-col items-center max-w-full text-brand-blue">
          <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-brand-white  min-h-[45px]">
            <div className="flex gap-2.5 items-center min-h-[29px]">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                <Icon.EditIcon />
              </div>
              <span className="self-stretch my-auto">Our Team</span>
            </div>
          </div>
          <h2 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl font-unica">
            Meet Our Experts
          </h2>
        </div>
        <p className="mt-5 text-lg text-center text-zinc-500 max-md:max-w-full">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt.
        </p>
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-[40px] max-md:mt-[20px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-y-6 place-content-center">
          {faqs.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TeamCard = ({
  id,
  image,
  name,
  position = 'Engineer',
}: {
  id: number
  image: string
  name: string
  position?: string
}) => (
  <Link
    href={`/team/details?id=${id}`}
    className="flex flex-col items-center justify-center max-md:w-[350px] w-[383px] rounded-lg gap-4 max-md:p-[15px] p-[27px] border border-white hover:scale-105"
  >
    <Image
      src={`/team/${image}`}
      alt="staff"
      width={329}
      height={329}
      className=" aspect-square max-w-[329px] object-cover rounded-md"
    />

    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="font-unica text-brand-blue font-semibold text-[18px] leading-3 capitalize">
        {name}
      </h2>
      <span className="text-base max-md:text-sm">{position}</span>
    </div>
  </Link>
)
