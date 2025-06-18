import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const isClientside = typeof window !== 'undefined';

// Really quick ease in, and Slow ease Out (recommended duration 0.8-1s)
const vinnieInOut = isClientside ? CustomEase.create('vinnieInOut', 'M0,0 C0.2,0 0,1 1,1') : null;

// Quick ease in (more than vinnieInOut) and slow ease out (less then vinnieInOut) (recommended duration 0.8-1s)
const jorisInOut = isClientside ? CustomEase.create('jorisInOut', 'M0,0 C0.3,0 0.25,1 1,1') : null;

// Super Heavy easeOut (recommended duration 0.8-1s)
const jorisOut = isClientside
  ? CustomEase.create('jorisOut', 'M0,0 C0.1,0.495 0.105,0.715 0.25,0.845 0.405,0.978 0.505,1 1,1')
  : null;

const eases = {
  vinnieInOut,
  jorisInOut,
  jorisOut,
};

export default eases;
