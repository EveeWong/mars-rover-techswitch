
import '../Fonts.scss'; 
import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';
import { Weather } from './Weather/Weather';

function Home() {
  return (
    <div> 
          <h1>h1 NASA FONT</h1>
          <h2>h2 home page</h2>
          <h3>h3 home page</h3>
          <h4>h4 home page</h4>
          <h5>h5 home page</h5>
          <p>p paragraph</p>

      Home page
      <PicOfTheDay />
      <Weather />

    </div>
  )
}

export { Home }