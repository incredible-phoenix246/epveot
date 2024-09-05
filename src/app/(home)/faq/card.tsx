import React from 'react'

export const ContactUs: React.FC = () => {
  const inputFields = [
    { label: 'Your Name', type: 'text' },
    { label: 'Your Email', type: 'email' },
    { label: 'Phone Number', type: 'tel' },
    { label: 'Website', type: 'url' },
  ]

  return (
    <main className="flex flex-col items-center">
      <ContactHeader />
      <form className="flex flex-col items-center mt-10 w-full max-md:max-w-full">
        <div className="flex flex-col items-center w-full text-lg text-zinc-500 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
            {inputFields.slice(0, 2).map((field, index) => (
              <InputField key={index} label={field.label} type={field.type} />
            ))}
          </div>
          <div className="flex flex-wrap gap-8 items-start mt-9 w-full max-md:max-w-full">
            {inputFields.slice(2).map((field, index) => (
              <InputField
                key={index + 2}
                label={field.label}
                type={field.type}
              />
            ))}
          </div>
          <div className="flex flex-col items-center mt-9 max-w-full w-[1199px]">
            <InputField label="Subject" type="text" fullWidth />
            <TextArea label="Your Message" />
          </div>
        </div>
        <SubmitButton />
      </form>
    </main>
  )
}

const ContactHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center max-w-full text-blue-950 w-[610px]">
      <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
        <div className="flex gap-2.5 items-center min-h-[29px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1460683983ba14af3528e129b95c41e10d25f21202b5a4cf17099fc51125c8?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
            alt=""
          />
          <span className="self-stretch my-auto">Contact Us</span>
        </div>
      </div>
      <h1 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl">
        Get In Touch
      </h1>
    </header>
  )
}

interface InputFieldProps {
  label: string
  type: string
  fullWidth?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  fullWidth = false,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div
      className={`flex flex-col ${
        fullWidth ? 'w-full' : 'grow shrink min-w-[240px] w-[468px]'
      } max-md:max-w-full`}
    >
      <div className="px-8 py-6 bg-white border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
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

const TextArea: React.FC<TextAreaProps> = ({ label }) => {
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
        ></textarea>
      </div>
    </div>
  )
}

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="gap-2.5 self-stretch px-16 pt-5 pb-5 mt-9 text-xl font-semibold text-center bg-amber-400 text-blue-950 max-md:px-5"
    >
      Ask Question
    </button>
  )
}

export default SubmitButton
