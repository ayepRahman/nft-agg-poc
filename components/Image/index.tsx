// https://github.com/chakra-ui/chakra-ui/discussions/2475#discussioncomment-1186993

import { Box, BoxProps, chakra, layout, Skeleton } from "@chakra-ui/react";
import NextImage, { ImageProps, ImageLoaderProps } from "next/image";
import brokenImg from "public/images/broken_image.png";
import React from "react";

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
      "layout",
      "onLoad",
      "onError",
      "borderRadius",
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#4A5568" offset="20%" />
      <stop stop-color="#3f495a" offset="50%" />
      <stop stop-color="#4A5568" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#4A5568" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

type ChakraNextImageProps = ImageProps & BoxProps;

const ChakraNextImage: React.FC<ChakraNextImageProps> = ({
  src,
  alt,
  width,
  quality,
  height,
  layout,
  ...props
}) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [onError, setOnError] = React.useState<boolean>(false);

  const handleOnLoad = () => {
    setImageLoading(false);
  };

  const handleOnError = () => {
    setImageLoading(false);
    setOnError(true);
  };

  const imgSrc = onError ? brokenImg : src || brokenImg;

  return (
    <Skeleton isLoaded={!imageLoading}>
      <Box
        pos="relative"
        cursor="pointer"
        height={height}
        width={width}
        {...props}
      >
        <ChakraNextUnwrappedImage
          w="auto"
          h="auto"
          loader={myLoader}
          height={height}
          width={width}
          quality={quality}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          src={imgSrc}
          alt={alt}
          layout={layout}
          transition="all 0.2s"
          onLoad={handleOnLoad}
          onError={handleOnError}
        />
      </Box>
    </Skeleton>
  );
};

export default ChakraNextImage;
