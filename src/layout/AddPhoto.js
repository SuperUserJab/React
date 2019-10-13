/*import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddPhoto extends Component {
    state={
        id:'',
        albumId:'',
        title:'',
        url:'',
        thumbnailUrl:''
    }

    onSubmit=(e)=>{

        e.preventDefault();
        this.props.addPhotoId(this.state.photos);
    


        this.setState({photos:''})
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                 
            <input type="object"
              name="photos" 
              style={{flex:'10', padding:'5px'}}
              placeholder="Add Photos"
              value={this.state.photos}
              onChange={this.onChange}
              />

             
         
            

          
            <input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
           </form>


            
        )
    }
}

AddPhoto.propTypes=
{
    addPhoto:PropTypes.func.isRequired,
   }

export default AddPhoto

*/
