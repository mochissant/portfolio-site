
import { StaticImageData } from 'next/image';

// Import your images
let nazosuiImage, maitsukiImage, towerushImage, lightriddlefesImage;

try {
  nazosuiImage = require('../../public/images/nazosui.jpg');
  maitsukiImage = require('../../public/images/maitsuki.jpg');
  towerushImage = require('../../public/images/towerush.jpg');
  lightriddlefesImage = require('../../public/images/lightriddlefes.jpg');
} catch (e) {
  // If images don't exist, use null
  console.warn('Some project images could not be loaded');
}

const projectImages: { [key: string]: StaticImageData } = {
  nazosui: nazosuiImage,
  maitsuki: maitsukiImage,
  towerush: towerushImage,
  lightriddlefes: lightriddlefesImage,
};

export default projectImages;
