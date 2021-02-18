import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/Weather';
import './Home.scss'

function Home() {
  return (
    <div>
      <h1>MotherBase</h1>
      <PicOfTheDay />
      <Weather />
    </div>
  )
}

export { Home }