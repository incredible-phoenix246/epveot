import React from 'react'

interface TestimonialCardProps {
  testimonial: {
    name: string
    location: string
    quote: string
    imageSrc: string
  }
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="flex flex-col justify-center p-10 mt-6 w-full bg-white border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[503px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full max-w-[503px] max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
              <div className="flex grow shrink gap-3 items-center self-stretch my-auto w-48">
                <img
                  loading="lazy"
                  src={testimonial.imageSrc}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[70px]"
                  alt={`${testimonial.name}'s profile`}
                />
                <div className="flex flex-col self-stretch my-auto w-[122px]">
                  <h3 className="text-xl font-bold text-blue-950">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1.5 text-base text-zinc-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37111492404d59ae0fe41bb99ce97a54128e5a7a7485309b2d775a2a4db2a8ac?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[55px]"
                alt=""
              />
            </div>
            <hr className="mt-5 w-full min-h-0 border border-solid border-zinc-300" />
          </div>
          <blockquote className="mt-4 text-2xl tracking-wider leading-8 text-zinc-500 max-md:max-w-full">
            <span className="italic">{testimonial.quote}</span>
          </blockquote>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed048632380b967d325547becd9560039df8081c4a918dce699e03076c9ca31?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
          className="object-contain mt-8 max-w-full aspect-[2.22] w-[102px]"
          alt="Rating stars"
        />
      </div>
    </article>
  )
}

const CustomerSupportSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-11 py-12 mt-8 w-full bg-amber-400 text-blue-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start w-full max-w-[497px] max-md:max-w-full">
        <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px]">
          <div className="flex gap-2.5 items-center min-h-[29px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/828e3ef92866bb0eaf27988bd5070737ce5d6500b1f3114b605491e3e2bcdd72?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
              alt=""
            />
            <span className="self-stretch my-auto">Any Question</span>
          </div>
        </div>
        <div className="flex flex-col self-stretch mt-6 w-full">
          <h2 className="text-2xl font-extrabold max-md:max-w-full">
            99.9% Customer Satisfaction Based
          </h2>
          <p className="mt-3 text-lg max-md:max-w-full">
            If you have any questions or need help contact <br /> with our team,
            or call
          </p>
        </div>
        <div className="flex gap-2.5 items-center mt-6 max-w-full text-3xl font-extrabold leading-loose text-white w-[334px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dfb8282cfb2037f15ef2bf2c699245753217ee3d7bdecaaad2980dbe1126c57?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]"
            alt="Phone icon"
          />
          <a href="tel:+0031234567890" className="self-stretch my-auto">
            (003) 123 456 7890
          </a>
        </div>
      </div>
    </section>
  )
}

interface TestimonialSectionProps {
  testimonial: {
    name: string
    location: string
    quote: string
    imageSrc: string
  }
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonial,
}) => {
  return (
    <section className="flex flex-col max-w-[581px]">
      <header className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col max-w-full text-blue-950 w-[272px]">
          <div className="flex flex-col justify-center self-start px-4 py-2 text-lg font-medium whitespace-nowrap bg-zinc-100 min-h-[45px]">
            <div className="flex gap-2.5 items-center min-h-[29px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75378656b08bede28886877f0ca15921969835b53f3d2322bddb644cffd7eb66?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                alt=""
              />
              <span className="self-stretch my-auto">Testimonial</span>
            </div>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold">Customers Says</h2>
        </div>
      </header>
      <TestimonialCard testimonial={testimonial} />
      <CustomerSupportSection />
    </section>
  )
}

export default TestimonialSection
