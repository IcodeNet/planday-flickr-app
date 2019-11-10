import React from 'react';
import PhotoItem from './PhotoItem';
import FlickrImage from '../../domain/flickr-image';
import propTypes from 'prop-types';

const PhotoList = ({ photos }) => {

  const photoItems = photos.map((photo: FlickrImage) => {
    const url = photo.url
    return <PhotoItem
      key={photo.id}
      url={url}
      title={photo.title} />;
  });

  return (
    <div className={"photos"}>
      {
        (photos.length > 0) ? photoItems : null
      }
    </div>
  );
};

PhotoList.propTypes = {
  photos: propTypes.array.isRequired
}

export default PhotoList;