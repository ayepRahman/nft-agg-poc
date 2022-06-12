import React from "react";
import { motion } from "framer-motion";
import {
  Skeleton,
  ImageProps as ChakraImageProps,
  Image as ChakraImage,
} from "@chakra-ui/react";

export interface ImageProps extends ChakraImageProps {
  isLoading?: boolean;
}

const Image: React.FC<ImageProps> = ({ height, ...props }) => {
  const [imageLoading, setImageLoading] = React.useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <Skeleton isLoaded={!imageLoading}>
      <ChakraImage
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
        {...props}
      />
    </Skeleton>
  );
};

export default Image;
