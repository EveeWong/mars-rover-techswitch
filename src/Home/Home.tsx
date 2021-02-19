import '../Fonts.scss'; 
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/Weather';
import './Home.scss'
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';



function Home() {
  return (
    <div>
      <MobileNavbar />
      <Header 
      imgSource = {`${process.env.PUBLIC_URL}/images/motherbase.png`}
      altTag = 'MotherBase'
      />
      <PicOfTheDay />
      <Weather />
      <p className='clickRover'>Click on the rover to explore Mars!</p>
      <Link to='/rovers'><img className='roverButton' src={`${process.env.PUBLIC_URL}/images/mars-rover.png`} /></ Link>
      <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export { Home }