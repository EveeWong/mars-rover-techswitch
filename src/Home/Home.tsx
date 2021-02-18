
import '../Fonts.scss'; 
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/Weather';

function Home() {
  return (
    <div>
      <MobileNavbar />
      <p>Home page</p>
      <PicOfTheDay />
      <Weather />

    </div>
  )
}

export { Home }