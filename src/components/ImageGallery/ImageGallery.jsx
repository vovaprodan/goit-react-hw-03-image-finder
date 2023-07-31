import React from "react";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({pictureNew, onToggle}) => {
    return <ul onClick={onToggle} className={css.ImageGallery}>
        {pictureNew.map(pictur => {
         return <ImageGalleryItem key={pictur.id}
          pictureId={pictur.id}
          webformatURL={pictur.webformatURL}
        />
       })}
</ul>
}

ImageGallery.propTypes = {
   pictureNew: PropTypes.array,
  }