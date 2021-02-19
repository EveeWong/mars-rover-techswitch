import { render, waitFor } from '@testing-library/react';
import { RoverSummary } from './RoverSummary';

const fakerover= {
    name: 'fakerover', 
    imagesrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/520px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg',
    launchdate: '03/03/1997',
    speed: '100 mph',
    speedstars: 'null',
    size: '1 cubic meter',
    sizestars:'null',
    lifespan: '10 weeks',
    lifespanstars:'null',
    numberofcameras: 2,
    numberofcamerasstars:'null',
    weight: '10g',
    weightstars:'null'
}

describe("RoverSummary", () => {
    it('Should print 10 weeks', async () => {
        const component = render(<RoverSummary rover={fakerover}/>);
        await waitFor(() => component.getByText('10 weeks'))
    });
    it('Should print 1 cubic meter', async () => {
        const component = render(<RoverSummary rover={fakerover}/>);
        await waitFor(() => component.getByText('1 cubic meter'))
    });
    it('Should print 10g', async () => {
        const component = render(<RoverSummary rover={fakerover}/>);
        await waitFor(() => component.getByText('10g'))
    });
    it('Should print 100 mph', async () => {
        const component = render(<RoverSummary rover={fakerover}/>);
        await waitFor(() => component.getByText('100 mph'))
    });
 
})




