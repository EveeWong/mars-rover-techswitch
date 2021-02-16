function RoverSelection() {
    return (
      <div>
       <h1> Rover selection page </h1>
        <div className='CuriosityRover'>  
          <h2> Curiosity Rover:</h2>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/520px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg' width='200px' height='200px' alt='Image of Curiosity Rover' />
          <h3> Stats</h3>
          <table className='CuriosityTable'>
            <tr>
              <th>Launch Date</th>
              <th>26/11/2011</th>
              
            </tr>
            <tr>
              <th>Speed</th>
              <th> 0.09 mph </th>
              <th> &#9733; &#9733; &#9734; &#9734; &#9734; </th>
            </tr>
            <tr>
              <th>Size</th>
              <th> 630 cubic feet </th>
              <th>&#9733; &#9734; &#9734; &#9734; &#9734;</th>
            </tr>
            <tr>
              <th>Life Span</th>
              <th> 98 weeks </th>
              <th>&#9733; &#9733; &#9734; &#9734; &#9734;</th>
            </tr>
            <tr>
              <th>Number of Cameras</th>
              <th> 7 </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734;</th>
            </tr>
            <tr>
              <th>Weight</th>
              <th> 899kg </th>
              <th> &#9733; &#9734; &#9734; &#9734; &#9734;</th>
            </tr>
          </table>
        </div>
        <div className='OpportunityRover'>
          <h2> Opportunity Rover:</h2>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1200px-NASA_Mars_Rover.jpg' width='200px' height='200px' alt='Image of Opportunity Rover' />
          <h3> Stats</h3>
          <table className='OpportunityTable'>
            <tr>
              <th>Date Landed</th>
              <th>07/07/2003</th>
              
            </tr>
            <tr>
              <th>Speed</th>
              <th> 0.1mph </th>
              <th> &#9733; &#9733; &#9733; &#9734; &#9734; </th>
            </tr>
            <tr>
              <th>Size</th>
              <th> 190 cubic feet </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734; </th>
            </tr>
            <tr>
              <th>Life Span</th>
              <th> 785 weeks </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9733;</th>
            </tr>
            <tr>
              <th>Number of Cameras</th>
              <th> 5 </th>
              <th>&#9733; &#9733; &#9733; &#9734; &#9734;</th>
            </tr>
            <tr>
              <th>Weight</th>
              <th> 180kg </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734;</th>
            </tr>
          </table>
        </div>

        <div className='SpiritRover'> 
          <h2> Spirit Rover:</h2>
          <img src='https://brownspaceman.com/wp-content/uploads/2014/01/spirit-rover.jpg' alt='Image of Spirit Rover' width='200px' height='200px'/>
          <h3> Stats</h3>
          <table className='SpiritTable'>
            <tr>
              <th>Launch Date</th>
              <th>10/06/2003 </th>
             
            </tr>
            <tr>
              <th>Speed</th>
              <th> 0.1mph </th>
              <th> &#9733; &#9733; &#9733; &#9734; &#9734; </th>
            </tr>
            <tr>
              <th>Size</th>
              <th> 190 cubic feet </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734;</th>
            </tr>
            <tr>
              <th>Life Span</th>
              <th> 324 weeks </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734;</th>
            </tr>
            <tr>
              <th>Number of Cameras</th>
              <th> 5 </th>
              <th>&#9733; &#9733; &#9733; &#9734; &#9734;</th>
            </tr>
            <tr>
              <th>Weight</th>
              <th> 180kg </th>
              <th>&#9733; &#9733; &#9733; &#9733; &#9734;</th>
            </tr>
          </table>
        </div>

    

        
      </div>
    )
  }
  
  export {RoverSelection}