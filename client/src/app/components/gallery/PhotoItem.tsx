import React from 'react';
import propTypes from 'prop-types';

const PhotoItem = ({ url, title }) => (
        <img src={url} alt={title} />
);

PhotoItem.propTypes = {
        url: propTypes.string.isRequired,
        title: propTypes.string.isRequired
}

export default PhotoItem;