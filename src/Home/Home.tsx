
import '../Fonts.scss'; 
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/Weather';

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