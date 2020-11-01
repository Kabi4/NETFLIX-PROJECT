import React from 'react';
import BrowseContianer from '../Container/Browse/Browse';
import { filterContent } from '../utils';
import { useContent } from './../Hooks/index';
const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = filterContent(series, films);
    return <BrowseContianer slides={slides} />;
};

export default Browse;
