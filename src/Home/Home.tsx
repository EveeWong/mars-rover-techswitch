import { PicOfTheDay } from '../PicOfTheDay/PicOfTheDay';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';

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