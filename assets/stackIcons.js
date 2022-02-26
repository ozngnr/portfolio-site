import { DiHtml5, DiCss3, DiJavascript1, DiSass, DiReact } from "react-icons/di"
import { SiGatsby, SiNextdotjs } from "react-icons/si"

const icons = {
  html: <DiHtml5 />,
  css: <DiCss3 />,
  JS: <DiJavascript1 />,
  react: <DiReact />,
  sass: <DiSass />,
  next: <SiNextdotjs />,
  gatsby: <SiGatsby />,
}

export default function StackIcon({ name }) {
  const icon = icons[name.toLowerCase()]
  return <>{icon}</>
}
