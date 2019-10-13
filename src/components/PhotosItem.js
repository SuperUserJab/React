import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PhotosItem extends Component {
    getStyle=()=>{
        return{
          background: '#f4f4f4',
          padding:'10px',
          borderBottom:'1px #ccc dotted',
          textDecoration:this.props.photo.completed ? 'line-through' : 'none'
        }
      }
    render() {
        const {id, albumId, title, url, thumbnailUrl}=this.props.photo;
        return (
            <div style={this.getStyle()}>
                 
                <div className="row" style={rowStyle}>
                  <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}

                    <div className="column">
                      <div><strong>ID:</strong>{id}</div>
                      <div><strong>albumId:</strong>{albumId}</div>
                      <div><strong>title:</strong>{albumId}{title}</div>
                      <div> <a href={url}><img src={thumbnailUrl}/></a></div>
                      <button onClick={this.props.delPhotos.bind(this, id)} style={btnStyle}>DELETE</button>

                    </div>
                </div>
                 
                
                
                
              
               
            </div>
        )
    }
}

PhotosItem.propTypes=
{photo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delPhotos:PropTypes.func.isRequired,}


    const btnStyle={
        background:'red',
        color:'#fff',
        border:'none',
        cursor:'pointer',
    }
    
    
    
    const rowStyle={
        margin:'auto',
        width:'50%',
     }
 
   

export default PhotosItem
