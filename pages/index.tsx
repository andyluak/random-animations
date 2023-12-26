import { useEffect } from "react"
import Image from "next/image"
import {
  AnimationDefinition,
  motion,
  useAnimationControls,
} from "framer-motion"

const cardSwipeVariants = {
  cardVariant: {
    rotate: [0, -20, -10, 10, 0],
    transition: {
      duration: 0.5,
      damping: 10,
    },
  },
  swipeVariant: {
    width: "100%",
    zIndex: 1,
    opacity: [0, 0.5, 1],
    transition: {
      delay: 0.3,
      duration: 1,
      bounce: 0.5,
      type: "spring",
      mass: 0.2,
    },
  },
  circleVariant: {
    zIndex: 10,
    x: 294,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
      bounce: 0.2,
    },
  },
  lineVariant: {
    width: "110%",
    zIndex: 10,
    opacity: [1, 0.7, 0.5, 0],
    x: 50,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.2,
    },
  },
  svgVariant: {
    opacity: 1,
    x: [0, 30, 0],
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
  imageVariant: {
    x: 294,
    opacity: [1, 0.5, 0],
    transition: {
      delay: 0.2,
      duration: 1.1,
      type: "spring",
      bounce: 0.2,
    },
  },
} as { [key: string]: AnimationDefinition }

const useCardSwipeAnimation = () => {
  const cardControls = useAnimationControls()
  const swipeControls = useAnimationControls()
  const circleControls = useAnimationControls()
  const lineControls = useAnimationControls()
  const svgControls = useAnimationControls()
  const imageControls = useAnimationControls()

  useEffect(() => {
    cardControls.start(cardSwipeVariants.cardVariant)
    swipeControls.start(cardSwipeVariants.swipeVariant)
    circleControls.start(cardSwipeVariants.circleVariant)
    lineControls.start(cardSwipeVariants.lineVariant)
    svgControls.start(cardSwipeVariants.svgVariant)
    imageControls.start(cardSwipeVariants.imageVariant)
  }, [])

  return {
    cardControls,
    swipeControls,
    circleControls,
    lineControls,
    svgControls,
    imageControls,
  }
}

export default function Home() {
  const {
    cardControls,
    swipeControls,
    circleControls,
    lineControls,
    svgControls,
    imageControls,
  } = useCardSwipeAnimation()

  return (
    <section className="min-h-dvh flex flex-col gap-10 items-center justify-center">
      <button
        onClick={() => {
          cardControls.start(cardSwipeVariants.cardVariant)
          swipeControls.start(cardSwipeVariants.swipeVariant)
          circleControls.start(cardSwipeVariants.circleVariant)
          lineControls.start(cardSwipeVariants.lineVariant)
          svgControls.start(cardSwipeVariants.svgVariant)
          imageControls.start(cardSwipeVariants.imageVariant)
        }}
      >
        Start Animation
      </button>
      <button
        onClick={() => {
          cardControls.start({ rotate: 0 })
          swipeControls.start({ width: 0, opacity: 0, zIndex: -1 })
          circleControls.start({ x: 0, zIndex: -1 })
          lineControls.start({ width: 0, opacity: 0, zIndex: -1, x: 0 })
          svgControls.start({ opacity: 0, x: -100 })
          imageControls.start({ x: 0, opacity: 1 })
        }}
      >
        Reset Animation
      </button>
      <motion.div
        initial={{ rotate: 0 }}
        animate={cardControls}
        className="p-4  border space-y-4 border-gray-200 w-96 rounded-3xl"
      >
        <div className="relative">
          <div className="w-full py-4 bg-gray-200 rounded-full flex items-center justify-center">
            <span>Slide to connect</span>
          </div>
          <motion.div
            initial={{ width: 0, zIndex: -1, opacity: 0 }}
            animate={swipeControls}
            className="absolute inset-0 bg-green-400 py-6 -z-10 w-1 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0, zIndex: -1 }}
            animate={circleControls}
            className="absolute inset-0 w-[56px] z-10 h-full rounded-full bg-green-700"
          ></motion.div>
          <motion.div
            initial={{ x: 0, zIndex: -1 }}
            animate={circleControls}
            className="absolute inset-0 w-[56px] z-10 h-full flex items-center justify-center rounded-full bg-green-700"
          >
            <motion.svg
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={svgControls}
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.79237 12.6385L1.94511 9.27961L0.799545 10.9204L7.29743 15.423L16.9632 1.47407L15.3242 0.338343L6.79237 12.6385Z"
                fill="white"
              />
            </motion.svg>
          </motion.div>
          <motion.div
            initial={{ x: 0, zIndex: 10 }}
            animate={imageControls}
            className="absolute inset-0 w-[56px] z-10 h-full rounded-full bg-gray-100"
          >
            <Image alt="" src="earth.svg" width={56} height={56} />
          </motion.div>
          <motion.div
            initial={{ width: 0, zIndex: -1, opacity: 1, x: 0 }}
            animate={lineControls}
            className="absolute inset-0 w-full h-[2px] bg-pink-900 z-10 -mt-1 ml-4"
          ></motion.div>
          <motion.div
            initial={{ width: 0, zIndex: -1, opacity: 1, x: 0 }}
            animate={lineControls}
            className="absolute inset-0 top-full w-full h-[2px] bg-pink-900 z-10  ml-4"
          ></motion.div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-xl/10">ICICI Bank</p>
          <div className="flex flex-row items-center gap-8 justify-between w-full">
            <p>ACCOUNT NUMBER</p>
            <p>****5286</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
