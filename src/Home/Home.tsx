import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';

function Home() {
  return (
    <div>
      <MobileNavbar />
      Home page
      <PicOfTheDay />
    </div>
  )
}

export { Home }