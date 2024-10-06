import React from 'react';
import CustomSlick from '../CustomSlick/CustomSlick';
import { PlaceWithCount } from '@/inerfaces/Place.interface';
const TopCountryRow = (props: { topCountries: PlaceWithCount[] }) => {
   
      return (
        <div>
          <CustomSlick topCountries={props.topCountries} />
        </div>
      );
    };

export default TopCountryRow;
