import React from "react";
import { motion } from "framer-motion";
import {
  Skeleton,
  ImageProps as ChakraImageProps,
  Image as ChakraImage,
} from "@chakra-ui/react";
import brokeImage from "public/images/mintable_logo.jpeg";

export interface ImageProps extends ChakraImageProps {
  isLoading?: boolean;
}

const Image: React.FC<ImageProps> = ({ height, src, ...props }) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [onError, setOnError] = React.useState<boolean>(false);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  const handleOnError = () => {
    setImageLoading(false);
    setOnError(true);
  };

  return (
    <Skeleton isLoaded={!imageLoading}>
      <ChakraImage
        src={!onError ? src : brokeImage.src}
        as={motion.img}
        initial={{
          height: height,
          opacity: 0,
        }}
        animate={{
          height: imageLoading ? height : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        onLoad={imageLoaded}
        onError={handleOnError}
        {...props}
      />
    </Skeleton>
  );
};

export default Image;
