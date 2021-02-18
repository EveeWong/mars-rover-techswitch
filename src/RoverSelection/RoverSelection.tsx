import './RoverSelection.scss'
import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";
import { Link } from 'react-router-dom';

function RoverSelection() {

  return (
    <div>
      <h1> Rover selection page </h1>
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