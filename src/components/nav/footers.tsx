'use client'
import React from 'react'
import * as Icon from '../Icons'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-brand-blue">
      <section className="container">
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-background dark:bg-dark-background mt-5 overflow-hidden text-white"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full items-center justify-center flex flex-col">
              <Link href="/?path=" className="bg-brand-white p-4">
                <Image src="/logo.png" alt="image" width={200} height={70} />
              </Link>
              <div className="py-8 text-center">
                <h3 className="font-manrope text-3xl  text-copy dark:text-dark-copy font-bold mb-4">
                  Solving Industrial Problems one at a time
                </h3>
                <p className="text-copy-light dark:text-dark-copy-light">
                  We are focused on delivering solutions that will have a
                  long-term impact on our client&apos;s success or well-being.
                </p>
              </div>
            </div>
            <div className="py-7 mt-5 border-t border-border dark:border-dark-border">
              <div className="flex items-center justify-center flex-col gap-7 lg:justify-between lg:flex-row">
                <span className="text-sm text-copy dark:text-dark-copy ">
                  &copy; {currentYear} EPEVOT, All rights reserved.
                </span>
                <ul className="flex items-center text-sm text-copy dark:text-dark-copy gap-9">
                  <li>
                    <Link href="/">Terms</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.footer>
      </section>
    </footer>
  )
}
