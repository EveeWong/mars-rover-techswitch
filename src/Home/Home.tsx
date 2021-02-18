import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';

function Home() {
  return (
    <div>
      <MobileNavbar />
      <p>Home page</p>
      <PicOfTheDay />
    </div>
  )
}

export { Home }