export const convertImgUrl = (url: string) => {
  if (!url) return "";

  if (url.match(/ipfs:\/\//g)) {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  }

  return url;
};
