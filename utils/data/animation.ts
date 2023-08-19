import { MotionProps, Variants } from 'framer-motion';

export const textBlurVariant: Variants = {
  visible: { filter: `blur(0rem)` },
  hidden: { filter: `blur(0.2rem)` },
};

export const textBlurAnimationProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: false,
    margin: '0px 0px -27% 0px',
  },
  transition: { duration: 0.5 },
  variants: textBlurVariant,
};
