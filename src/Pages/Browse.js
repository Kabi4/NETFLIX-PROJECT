import React from 'react';
import { useContent } from './../Hooks/index';
const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    console.log(series);
    console.log(films);
    return <div>BROWSE</div>;
};

export default Browse;
