import { useState } from "react"

const useImage = (): [string, (file: File | null | undefined) => void] => {
  const [ imgUrl, setImgUrl ] = useState<string>("");

  const setter = (file: File | null | undefined) => {
    if (imgUrl) URL.revokeObjectURL(imgUrl);
    if (!file) setImgUrl("");
    else setImgUrl(URL.createObjectURL(file));
  }

  return [
    imgUrl,
    setter
  ];
}

export { useImage };