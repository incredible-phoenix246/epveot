import { FiEdit, FiTrash, FiShare, FiPlusSquare } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { cn } from '@/utils'
import { useStateCtx } from '@/context/stateCtx'

export const StaggeredDropDown = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx()

  return (
    <>
      <div
        className={cn(
          'fixed left-0 top-0 z-[99] min-h-screen w-full bg-black/5 transition-all md:hidden',
          showMobileMenu
            ? 'opacity-100 duration-500'
            : 'pointer-events-none opacity-0 duration-300'
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <motion.div
        animate={showMobileMenu ? 'open' : 'closed'}
        className="relative z-[500]"
      >
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-brand-white shadow-xl absolute top-[0] left-[80%] w-32 overflow-hidden"
        >
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiTrash}
            text="Home"
            href="/?path="
          />
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiEdit}
            text="About Us"
            href="about/?path=about"
          />
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiPlusSquare}
            text="Services"
            href="services/?path=services"
          />
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiShare}
            text="gallery"
            href="gallery/?path=gallery"
          />
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiShare}
            text="faq"
            href="faq/?path=faq"
          />
          <Option
            setShowMobileMenu={setShowMobileMenu}
            Icon={FiShare}
            text="team"
            href="team/?path=team"
          />
        </motion.ul>
      </motion.div>
    </>
  )
}

const MotionLink = motion.create(Link)

const Option = ({
  text,
  Icon,
  setShowMobileMenu,
  href,
}: {
  text: string
  Icon: IconType
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  href: string
}) => {
  return (
    <MotionLink
      variants={itemVariants}
      onClick={() => setShowMobileMenu(false)}
      href={`/${href}`}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-brand-blue/70 transition-colors cursor-pointer"
    >
      {/* <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span> */}
      <span className="capitalize">{text}</span>
    </MotionLink>
  )
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
}
