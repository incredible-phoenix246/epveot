'use client'

import React from 'react'
import Image from 'next/image'
import * as Icon from '@/components/Icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/utils'

export const Hero = () => {
  return (
    <Image
      src="/faqbg.png"
      alt="banner"
      className="object-cover w-full md:container"
      loading="lazy"
      height={1920}
      width={435}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Project Scope and Vision',
    answer:
      'Can you share the details of your project and your vision for the final outcome?',
  },
  {
    question: 'Timeline and Deadlines',
    answer: 'Do you have a specific timeline or deadline for this project?',
  },
  {
    question: 'Budget Constraints',
    answer:
      'What is your budget for this project? We can tailor our services to fit within your financial plans.',
  },
  {
    question: 'Design Preferences',
    answer:
      'Do you have any particular design styles or specific requirements in mind?',
  },
  {
    question: 'Previous Issues',
    answer:
      'Have you faced any challenges with previous construction projects that we should be aware of?',
  },
  {
    question: 'Materials and Sustainability',
    answer:
      'Are there specific materials you prefer to use, or any sustainability goals you want to achieve?',
  },
  {
    question: 'Communication Preferences',
    answer:
      "How would you like us to keep you updated on the project's progress?",
  },
  {
    question: 'Permits and Regulations',
    answer:
      'Do you need assistance with obtaining permits and ensuring regulatory compliance?',
  },
  {
    question: 'References and Portfolio',
    answer:
      'Would you like to see examples of our previous work or speak with past clients for references?',
  },
  {
    question: 'Post-Construction Services',
    answer:
      'Are you interested in post-construction services such as maintenance or support?',
  },
]

export const FAQ = () => {
  return (
    <section className="flex flex-col items-center w-full bg-white py-20">
      <div className="flex flex-col items-center max-w-full w-[1199px] md:container px-2">
        <div className="flex flex-col items-center max-w-full w-[687px]">
          <div className="flex flex-col items-center max-w-full text-brand-blue">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-brand-white  min-h-[45px]">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                  <Icon.EditIcon />
                </div>
                <span className="self-stretch my-auto">
                  Pre-Service Questions
                </span>
              </div>
            </div>
            <h2 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl font-unica">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="mt-5 text-lg text-center text-zinc-500 max-md:max-w-full">
            These question are to make you understand that the reason why we are
            here is because of you, we are not just to help you but also help
            you achive your dreams
          </p>
        </div>
        <Accordion
          type="multiple"
          className="w-full md:max-w-[70%] py-5 gap-3 flex flex-col mt-5"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-brand-white border px-2 rounded-md"
            >
              <AccordionTrigger className="font-unica text-brand-blue font-semibold text-[18px] leading-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base max-md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export const ContactUsForm = () => {
  const inputFields = [
    { label: 'Your Name', type: 'text' },
    { label: 'Your Email', type: 'email' },
    { label: 'Phone Number', type: 'tel' },
    { label: 'Website', type: 'url' },
  ]
  return (
    <section className="flex flex-col items-center md:container px-2">
      <div className="flex flex-col items-center max-w-full w-[687px]">
        <div className="flex flex-col items-center max-w-full text-brand-blue">
          <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white  min-h-[45px]">
            <div className="flex gap-2.5 items-center min-h-[29px]">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                <Icon.EditIcon />
              </div>
              <span className="self-stretch my-auto">Contact Us</span>
            </div>
          </div>
          <h2 className="mt-2.5 text-6xl font-extrabold text-center max-md:text-4xl font-unica">
            Get In Touch
          </h2>
        </div>
      </div>
      <div className=" w-[1199px]">
        <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
          {inputFields.slice(0, 2).map((field, index) => (
            <Input key={index} label={field.label} type={field.type} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-start mt-9 w-full max-md:max-w-full">
          {inputFields.slice(2).map((field, index) => (
            <Input key={index + 2} label={field.label} type={field.type} />
          ))}
        </div>
        <div className="flex flex-col items-center mt-9 max-w-full">
          <Input label="Subject" type="text" fullWidth />
          <TextArea label="Your Message" />
          <button
            type="submit"
            className="gap-2.5 self-stretch px-16 pt-5 pb-5 mt-9 text-xl font-semibold text-center bg-amber-400 text-blue-950 max-md:px-5"
          >
            Ask Question
          </button>
        </div>
      </div>
    </section>
  )
}

interface InputField {
  label: string
  type: string
  fullWidth?: boolean
}

const Input = ({ label, type, fullWidth = false }: InputField) => {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div
      className={cn(
        'flex flex-col max-md:max-w-full',
        fullWidth ? 'w-full' : 'grow shrink min-w-[240px] w-[468px]'
      )}
    >
      <div className="px-4 py-4 bg-white border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={label}
          className="w-full bg-transparent outline-none"
          aria-label={label}
        />
      </div>
    </div>
  )
}

interface TextAreaProps {
  label: string
}

const TextArea = ({ label }: TextAreaProps) => {
  const id = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col mt-9 w-full">
      <div className="px-8 pt-5 pb-20 bg-white border border-solid border-zinc-300 max-md:px-5 max-md:pb-28 max-md:max-w-full">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          placeholder={label}
          className="w-full h-full bg-transparent outline-none resize-none"
          aria-label={label}
        />
      </div>
    </div>
  )
}
