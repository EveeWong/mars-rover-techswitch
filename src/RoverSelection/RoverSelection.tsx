import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";

function RoverSelection() {

  return (
     <div>
      <h1> Rover selection page </h1>
        <div className='CuriosityRover'>   
        <RoverSummary rover={roverData.curiosity} />
        </div>
        <div className='OpportunityRover'>   
        <RoverSummary rover={roverData.opportunity} />
        </div>
        <div className='SpiritRover'>   
        <RoverSummary rover={roverData.spirit} />
        </div>
      </div> 
    )
  }
  
  export {RoverSelection}