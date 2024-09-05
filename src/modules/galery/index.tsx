'use client'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/utils'

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20])

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)
  return (
    <div
      className={cn(
        'h-screen items-start overflow-y-auto w-full hide-scroll',
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={'grid-1' + idx}
            >
              <Image
                src={`/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={'grid-2' + idx}>
              <Image
                src={`/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={'grid-3' + idx}
            >
              <Image
                src={`/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const gallery = [
  'gallery/image1.jpg',
  'gallery/image10.jpg',
  'gallery/image100.jpg',
  'gallery/image101.jpg',
  'gallery/image102.jpg',
  'gallery/image103.jpg',
  'gallery/image104.jpg',
  'gallery/image105.jpg',
  'gallery/image106.jpg',
  'gallery/image107.jpg',
  'gallery/image108.jpg',
  'gallery/image109.jpg',
  'gallery/image11.jpg',
  'gallery/image110.jpg',
  'gallery/image111.jpg',
  'gallery/image112.jpg',
  'gallery/image113.jpg',
  'gallery/image114.jpg',
  'gallery/image115.jpg',
  'gallery/image116.jpg',
  'gallery/image117.jpg',
  'gallery/image118.jpg',
  'gallery/image119.jpg',
  'gallery/image12.jpg',
  'gallery/image120.jpg',
  'gallery/image121.jpg',
  'gallery/image122.jpg',
  'gallery/image123.jpg',
  'gallery/image124.jpg',
  'gallery/image125.jpg',
  'gallery/image126.jpg',
  'gallery/image127.jpg',
  'gallery/image128.jpg',
  'gallery/image129.jpg',
  'gallery/image13.jpg',
  'gallery/image130.jpg',
  'gallery/image131.jpg',
  'gallery/image132.jpg',
  'gallery/image133.jpg',
  'gallery/image134.jpg',
  'gallery/image135.jpg',
  'gallery/image136.jpg',
  'gallery/image137.jpg',
  'gallery/image138.jpg',
  'gallery/image139.jpg',
  'gallery/image14.jpg',
  'gallery/image140.jpg',
  'gallery/image141.jpg',
  'gallery/image142.jpg',
  'gallery/image143.jpg',
  'gallery/image144.jpg',
  'gallery/image145.jpg',
  'gallery/image146.jpg',
  'gallery/image147.jpg',
  'gallery/image148.jpg',
  'gallery/image149.jpg',
  'gallery/image15.jpg',
  'gallery/image150.jpg',
  'gallery/image151.jpg',
  'gallery/image152.jpg',
  'gallery/image153.jpg',
  'gallery/image154.jpg',
  'gallery/image155.jpg',
  'gallery/image156.jpg',
  'gallery/image157.jpg',
  'gallery/image158.jpg',
  'gallery/image159.jpg',
  'gallery/image16.jpg',
  'gallery/image160.jpg',
  'gallery/image161.jpg',
  'gallery/image162.jpg',
  'gallery/image163.jpg',
  'gallery/image164.jpg',
  'gallery/image165.jpg',
  'gallery/image166.jpg',
  'gallery/image167.jpg',
  'gallery/image168.jpg',
  'gallery/image169.jpg',
  'gallery/image17.jpg',
  'gallery/image170.jpg',
  'gallery/image171.jpg',
  'gallery/image172.jpg',
  'gallery/image173.jpg',
  'gallery/image174.jpg',
  'gallery/image175.jpg',
  'gallery/image176.jpg',
  'gallery/image177.jpg',
  'gallery/image18.jpg',
  'gallery/image19.jpg',
  'gallery/image2.jpg',
  'gallery/image20.jpg',
  'gallery/image21.jpg',
  'gallery/image22.jpg',
  'gallery/image23.jpg',
  'gallery/image24.jpg',
  'gallery/image25.jpg',
  'gallery/image26.jpg',
  'gallery/image27.jpg',
  'gallery/image28.jpg',
  'gallery/image29.jpg',
  'gallery/image3.jpg',
  'gallery/image30.jpg',
  'gallery/image31.jpg',
  'gallery/image32.jpg',
  'gallery/image33.jpg',
  'gallery/image35.jpg',
  'gallery/image36.jpg',
  'gallery/image37.jpg',
  'gallery/image38.jpg',
  'gallery/image39.jpg',
  'gallery/image4.jpg',
  'gallery/image40.jpg',
  'gallery/image41.jpg',
  'gallery/image42.jpg',
  'gallery/image43.jpg',
  'gallery/image44.jpg',
  'gallery/image47.jpg',
  'gallery/image48.jpg',
  'gallery/image49.jpg',
  'gallery/image5.jpg',
  'gallery/image50.jpg',
  'gallery/image51.jpg',
  'gallery/image52.jpg',
  'gallery/image53.jpg',
  'gallery/image55.jpg',
  'gallery/image56.jpg',
  'gallery/image57.jpg',
  'gallery/image58.jpg',
  'gallery/image59.jpg',
  'gallery/image6.jpg',
  'gallery/image60.jpg',
  'gallery/image61.jpg',
  'gallery/image62.jpg',
  'gallery/image63.jpg',
  'gallery/image64.jpg',
  'gallery/image65.jpg',
  'gallery/image66.jpg',
  'gallery/image67.jpg',
  'gallery/image68.jpg',
  'gallery/image69.jpg',
  'gallery/image7.jpg',
  'gallery/image70.jpg',
  'gallery/image71.jpg',
  'gallery/image72.jpg',
  'gallery/image73.jpg',
  'gallery/image74.jpg',
  'gallery/image75.jpg',
  'gallery/image76.jpg',
  'gallery/image77.jpg',
  'gallery/image78.jpg',
  'gallery/image79.jpg',
  'gallery/image8.jpg',
  'gallery/image80.jpg',
  'gallery/image81.jpg',
  'gallery/image82.jpg',
  'gallery/image83.jpg',
  'gallery/image84.jpg',
  'gallery/image85.jpg',
  'gallery/image86.jpg',
  'gallery/image87.jpg',
  'gallery/image88.jpg',
  'gallery/image89.jpg',
  'gallery/image9.jpg',
  'gallery/image90.jpg',
  'gallery/image91.jpg',
  'gallery/image92.jpg',
  'gallery/image93.jpg',
  'gallery/image94.jpg',
  'gallery/image95.jpg',
  'gallery/image96.jpg',
  'gallery/image97.jpg',
  'gallery/image98.jpg',
  'gallery/image99.jpg',
]

export const GalleryPage = () => {
  return (
    <>
      <ParallaxScrollSecond images={gallery} />
    </>
  )
}
