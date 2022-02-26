import About from "../components/about"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"
import { getProjectsData } from "../lib/projects"

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects data={allProjectsData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = getProjectsData()

  return {
    props: {
      allProjectsData,
    },
  }
}
