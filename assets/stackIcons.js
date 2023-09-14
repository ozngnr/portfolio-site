import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiSass,
  DiReact,
} from "react-icons/di";
import {
  SiGatsby,
  SiNextdotjs,
  SiStyledcomponents,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const icons = {
  html: <DiHtml5 />,
  css: <DiCss3 />,
  JS: <DiJavascript1 />,
  react: <DiReact />,
  sass: <DiSass />,
  next: <SiNextdotjs />,
  gatsby: <SiGatsby />,
  styled: <SiStyledcomponents />,
  mongodb: <SiMongodb />,
  express: <SiExpress />,
  node: <SiNodedotjs />,
};

export default function StackIcon({ name }) {
  const icon = icons[name.toLowerCase()];
  return icon;
}
