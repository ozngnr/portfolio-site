import localFont from "next/font/local";

export const bodyFF = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "900",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-MediumItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal/NeueMontreal-BoldItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});
export const headingFF = localFont({
  src: [
    {
      path: "../public/fonts/RoxboroughCF-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/RoxboroughCF-Heavy.woff2",
      weight: "900",
    },
    {
      path: "../public/fonts/RoxboroughCF-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});
