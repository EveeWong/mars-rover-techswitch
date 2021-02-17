import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/weather';

function Home() {
  return (
    <div>
      Home page
      <PicOfTheDay />
      <Weather />
    </div>
  )
}

export { Home }