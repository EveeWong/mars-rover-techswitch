import React from 'react';
import { render } from '@testing-library/react';
import { RoverPhoto } from './RoverPhoto';

const roverPhotoData = [{
    img_src : "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03032/opgs/edr/ncam/NLB_666664401EDR_F0861456NCAM00278M_.JPG",
    camera:{full_name:"Navigation Camera"},
    earth_date:"2021-02-15",
    sol: "3032"}]

test('renders the rover photo component without errors', () => {
  render(<RoverPhoto photoData={roverPhotoData}/>);
});