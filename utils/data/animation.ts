import { MotionProps, Variants } from 'framer-motion';

export const textBlurVariant: Variants = {
  visible: { filter: `blur(0rem)` },
  hidden: { filter: `blur(0.23rem)` },
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

export const textFadeUpVariant: Variants = {
  visible: { y: '0px', opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: '50px', opacity: 0, transition: { duration: 0.5 } },
};

export const textFadeUpAnimationProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    margin: '0px 0px -27% 0px',
  },
  variants: textFadeUpVariant,
};

export const textFadeLeftVariant: Variants = {
  visible: { x: '0px', opacity: 1, transition: { duration: 0.6 } },
  hidden: { x: '50px', opacity: 0, transition: { duration: 0.6 } },
};

export const textFadeLeftAnimationProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    margin: '0px 0px -27% 0px',
  },
  variants: textFadeLeftVariant,
};

export const textFadeRightVariant: Variants = {
  visible: { x: '0px', opacity: 1, transition: { duration: 0.6 } },
  hidden: { x: '-50px', opacity: 0, transition: { duration: 0.6 } },
};

export const textFadeRightAnimationProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    margin: '0px 0px -27% 0px',
  },
  variants: textFadeRightVariant,
};

export const speakerImageScaleVariant: Variants = {
  initial: { scale: 1 },
  animate: { position: 'absolute', scale: [1, 1.2, 1] },
};

export const goodsFadeUpVariant: Variants = {
  visible: {
    y: '0px',
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 },
  },
  hidden: { y: '50px', opacity: 0 },
};

export const goodsContainerFadeUpVariant: Variants = {
  visible: {
    y: '0px',
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
  hidden: { y: '50px', opacity: 0 },
};

export const goodsContainerFadeUpAnimationProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    margin: '0px 0px -27% 0px',
  },
  variants: goodsContainerFadeUpVariant,
};
