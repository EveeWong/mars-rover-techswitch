import './RoverSelection.scss'
import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";
import { Link } from 'react-router-dom';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';

function RoverSelection() {

  return (
    <div className='RoverSelection'>
      <MobileNavbar />
      <h1> Rover selection page </h1>
      <div className='CuriosityRover'>
        <RoverSummary rover={roverData.curiosity} />
        <Link to='/rovers/curiosity' className='Link'> Explore Curiosity Rover! </Link>
      </div>
      <div className='OpportunityRover'>
        <RoverSummary rover={roverData.opportunity} />
        <Link to='/rovers/opportunity' className='Link'> Explore Opportunity Rover! </Link>
      </div>
      <div className='SpiritRover'>
        <RoverSummary rover={roverData.spirit} />
        <Link to='/rovers/spirit' className='Link'> Explore Spirit Rover! </Link>
      </div>
      <div className='pagebreak'></div>
    </div>
  )
}

export { RoverSelection }

