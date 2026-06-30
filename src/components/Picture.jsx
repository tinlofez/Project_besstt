import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture} from '../assets';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';
// Add your own images by putting them in the assets folder and import them.
const images = [
 picture,src/assets/80d88dce-69f6-4b77-a8c1-636bc9156143.jpg
 picture,src/assets/66b882d8-a51d-4b4e-8796-4f703ec1966f.jpg
 picture,src/assets/504b5a53-ea63-422e-ae3f-5175d5fc4af8.jpg
 picture,src/assets/5e9f234b-fbb4-4b8c-9846-d181fd9f3330.jpg

];
function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  const allImagesLoaded = loadedImages === images.length;
  return (
    <SectionWrapper>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          You're Getting Old! :P
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
