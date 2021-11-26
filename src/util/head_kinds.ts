import React from "react"
import imageData from "../../public/head_kind_image.json";

type HeadKind = {
  name: string
  expMitigation: number
}

type HeadImage = {
  name: string
  imageURI: string
}

/*
const images = new Map<string, React.ReactNode>([
  imageData.images.map(data => {
    data.imageURI
  })
]);
*/

export type { HeadKind }