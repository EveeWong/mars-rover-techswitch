import './RoverSelection.scss'
import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";
import { Link } from 'react-router-dom';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { Header } from '../Header/Header';

function RoverSelection() {

  return (
    <div>
      <MobileNavbar />
      <Header 
      imgSource = {`${process.env.PUBLIC_URL}/images/garage.png`}
      altTag = 'Garage'
      />
      <div className='CuriosityRover'>
        <RoverSummary rover={roverData.curiosity} />
        <Link to='/rovers/curiosity'> Explore Curiosity Rover! </Link>
      </div>
      <div className='OpportunityRover'>
        <RoverSummary rover={roverData.opportunity} />
        <Link to='/rovers/opportunity'> Explore Opportunity Rover! </Link>
      </div>
      <div className='SpiritRover'>
        <RoverSummary rover={roverData.spirit} />
        <Link to='/rovers/spirit'> Explore Spirit Rover! </Link>
      </div>
    </div>
  )
}

export { RoverSelection }

