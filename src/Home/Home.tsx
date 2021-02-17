import { PicOfTheDay } from './PicOfTheDay/PicOfTheDay';

function Home() {
  return (
    <div>
      Home page
      <PicOfTheDay />
      <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='100%' height='650'  scrolling='no' frameborder='0'></iframe>
    </div>
  )
}

export { Home }