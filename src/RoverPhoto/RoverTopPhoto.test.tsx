import React from 'react';
import { RoverTopPhoto } from './RoverTopPhoto';
import { render, waitFor } from '@testing-library/react';

test('renders the rover top photo component without errors', () => {
  render(<RoverTopPhoto img_src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03032/opgs/edr/ncam/NLB_666664401EDR_F0861456NCAM00278M_.JPG"
   full_name="Navigation Camera" earth_date="2021-02-15" sol= "3032" />);
});


const imgSrc = 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03032/opgs/edr/ncam/NLB_666664401EDR_F0861456NCAM00278M_.JPG';
const fullName= 'Navigation Camera'; 
const earthDate ='2021-02-15';
const sol = '3032';


describe("RoverTopPhoto", () => {
  it('Should print Navigation Camera, earthDate = 2021-02-15, Sol = 3032', async () => {
      const component = render(<RoverTopPhoto img_src={imgSrc} full_name={fullName} earth_date={earthDate} sol={sol}/>);
      await waitFor(() => component.getByText('Camera : Navigation Camera Earth date : 2021-02-15 Sol : 3032')) 
  });
})