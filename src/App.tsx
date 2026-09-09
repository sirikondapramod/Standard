import { FloatingCta } from './components/FloatingCta'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Clients } from './sections/Clients'
import { Contact } from './sections/Contact'
import { Equipment } from './sections/Equipment'
import { Hero } from './sections/Hero'
import { Leadership } from './sections/Leadership'
import { MissionVision } from './sections/MissionVision'
import { OrganizationChart } from './sections/OrganizationChart'
import { Projects } from './sections/Projects'
import { Quality } from './sections/Quality'
import { RetrofitSection } from './sections/RetrofitSection'
import { ServicePromise } from './sections/ServicePromise'
import { Services } from './sections/Services'
import { Stats } from './sections/Stats'
import { Team } from './sections/Team'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Leadership />
        <MissionVision />
        <Quality />
        <Services />
        <Equipment />
        <RetrofitSection />
        <Projects />
        <Clients />
        <OrganizationChart />
        <Team />
        <ServicePromise />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
