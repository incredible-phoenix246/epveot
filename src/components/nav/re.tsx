import React from 'react'

interface FooterDividerProps {
  vertical?: boolean
}

const FooterDivider: React.FC<FooterDividerProps> = ({ vertical = false }) => {
  const className = vertical
    ? 'grow shrink w-0 h-56 border border-solid border-slate-600'
    : 'w-full border border-solid border-slate-600 min-h-[1px] max-md:max-w-full'

  return <div className={className} />
}

interface FooterColumnProps {
  title: string
  links: string[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <nav className="flex flex-col grow shrink rounded-none w-[181px]">
      <h2 className="self-start text-xl font-bold">{title}</h2>
      <ul className="mt-2 text-lg leading-8">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface FooterProps {
  logoSrc: string
}

const Footer: React.FC<FooterProps> = ({ logoSrc }) => {
  const footerColumns = [
    {
      title: 'Explore',
      links: ['About Us', 'Gallery', 'Offers', 'Pricing', 'FAQ'],
    },
    {
      title: 'Quick Links',
      links: [
        'Services',
        'Blog',
        'Contact Us',
        'Service Request',
        'Estimation Calculator',
      ],
    },
    {
      title: 'Uitility Pages',
      links: [
        'Style Guide',
        'Changelog',
        'Licenses',
        'Protected Page',
        '404 Page',
      ],
    },
  ]

  return (
    <footer className="flex flex-col items-center text-white">
      <div className="flex flex-col w-full max-md:max-w-full">
        <FooterDivider />
        <div className="flex flex-wrap gap-10 items-start mt-10 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          <div className="flex flex-col grow shrink text-lg leading-7 min-w-[240px] w-[440px] max-md:max-w-full">
            <p>
              Denouncing pleasure and praising pain was born and I will givg you
              a coghmplete acchount of the system, and expound the actual
            </p>
            <img
              loading="lazy"
              src={logoSrc}
              alt="Company logo"
              className="object-contain mt-16 max-w-full aspect-[4.74] w-[285px] max-md:mt-10"
            />
          </div>
          <FooterDivider vertical />
          {footerColumns.map((column, index) => (
            <React.Fragment key={column.title}>
              <FooterColumn title={column.title} links={column.links} />
              {index < footerColumns.length - 1 && <FooterDivider vertical />}
            </React.Fragment>
          ))}
        </div>
        <FooterDivider />
      </div>
      <p className="mt-5 text-lg leading-none max-md:max-w-full">
        Copyright © BlueCollar | Designed by VictorFlow Templates - Powered by
        Webflow
      </p>
    </footer>
  )
}

export default Footer
