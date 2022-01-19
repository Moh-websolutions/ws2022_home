import Layout from '@/components/Layout'
import Header_intro from '@/components/Header_intro'
import Testmonials from '@/components/Testmonials'
import Services from '@/components/Services'
import CaseStudies from '@/components/CastStudies'
import Cta from '@/components/Cta'
import List from '@/components/List'
import { API_URL } from 'url.config';



export default function Home({testimonials, services, casestudies}) {

  return (
    <Layout title={"Intro | websolutions.ca"}>
      {/* {console.log(services)} */}
      <>
        <Header_intro />
        <Testmonials testimonials={testimonials} />
        <Services services={services}/>
        <CaseStudies casestudies={casestudies} />
        <Cta title={"Ready to start a new project together?"} btn={"Let's Get Started"} />
        <List services={services}/>
      </>
    </Layout>
  )
}


//Fetching multiple API queries with getStaticProps
export async function getStaticProps() {
  const res1 = await fetch(`${API_URL}/api/testimonials`)
  const res2 = await fetch(`${API_URL}/api/services`)
  const res3 = await fetch(`${API_URL}/api/casestudies`)
  const testimonials = await res1.json()
  const services = await res2.json()
  const casestudies = await res3.json()
  return {
    props: {
      testimonials,
      services,
      casestudies,
    },
    revalidate: 10, // In seconds
  }
}