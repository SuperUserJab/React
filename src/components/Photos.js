import React, { Component } from 'react';
import PhotosItem from './PhotosItem';
import PropTypes from 'prop-types';

export class Photos extends Component {
    render(){
        return this.props.photos.map((photo)=>(
          <PhotosItem key={photo.id} photo={photo} markComplete={this.props.markComplete} delPhotos={this.props.delPhotos} />
          ));
      }
}

Photos.propTypes=
{
  photos:PropTypes.array.isRequired,
  markComplete:PropTypes.func.isRequired,
  delPhotos:PropTypes.func.isRequired,

}

export default Photos
