import React, { Component } from 'react';
import Photos from './components/Photos';
//import AddPhoto from './layout/AddPhoto';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PhotosList from './layout/PhotosList';


import axios from 'axios';

export class App extends Component {
  state = {
    photos: []

  }
  


 
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=55`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
        

      })
  }


  markComplete=(id)=>{

    this.setState({photos:this.state.photos.map(photo=>{
      if(photo===id)
      {
        photo.completed=!photo.completed
      }
      return photo;
    })});
  }


  delPhotos=(id)=>{
    axios.delete('https://jsonplaceholder.typicode.com/photos/${id}')
    .then(res=>this.setState({photos:[...this.state.photos.filter(photo=>photo.id!==id)]}));
  }


  addPhotoId=(photos)=>{
    axios.post('https://jsonplaceholder.typicode.com/photos',
    {
      photos,
      completed:false
    })
   
    .then(res=>this.setState({photos:[...this.state.photos, res.data]}));
  }

 
  

  render() {
  
   

    return (
    <Router>
      <div>

      <header style={headerStyle}>
            <h1>SOFTHOUSE TASK</h1>
        </header>
            


            <React.Fragment>
             <PhotosList />
            <Photos photos={this.state.photos} markComplete={this.markComplete}
                 delPhotos={this.delPhotos} />
            </React.Fragment>

           

           


           
            
            
        
        
         </div>

  
      </Router>
       
       


                


                  





    );
  }
}

const headerStyle={

  background:'#333',
  color:'#fff',
  textAlign:'center',
  padding:'10px'
}

export default App

