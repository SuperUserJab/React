import React, { Component } from 'react';



class PhotosList extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      albumId:'',
      title:'',
      url:'',
      thumbnailUrl:'',
      newpts:{},
      ptsList:[],
      arr: []
    }
  }

  async componentDidMount() {
    try{
      const result = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=55')
      const data = await result.json()
      this.setState({arr:data})

    }catch(err){
      console.log(err)
    }
  }


  onChangeInput = (e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  newSubmit = (e) =>{
    e.preventDefault();

    this.setState(Object.assign(this.state.newpts,{id:this.state.id,id:this.state.albumId,title:this.state.title, url:this.state.url,thumbnailUrl:this.state.thumbnailUrl}), ()=>{
        console.log('newcpts', this.state.newpts)
        this.addPhotos();            
    });

    }



    addPhotos = ()=>{
        let newptsList = [...this.state.ptsList];
        newptsList.push({...this.state.newpts});
        console.log('new addphotos', this.state.newpts);
        console.log('newptslist',newptsList);

      this.setState({ ctcList: newptsList }, ()=>{
        console.log(this.state.ptsList);
        this.clearInput();
      });

    };




    clearInput = ()=>{
      this.setState({id:'',albumId:'', title:'',url:'', thumbnailUrl:''});
      this.setState(Object.assign(this.state.newpts,{id:'',albumId:'', title:'',url:'', thumbnailUrl:''}));
    };

  render() {


    return (
      <div style={divStyle}>




      <form onSubmit = {this.newSubmit}>

      <h1>ADD NEW PHOTO</h1>
      
      <input type='text' name={'id'} value={this.state.id} onChange = {this.onChangeInput}/>id <br></br>
       
       <input  name={'albumId'} value={this.state.albumId} onChange = {this.onChangeInput}/>albumID <br></br>

      
      <input type='text' name={'title'} value={this.state.title} onChange = {this.onChangeInput} 


        />title  <br></br>
      
      <input type='text' name={'url'} value={this.state.url}  onChange = {this.onChangeInput}

        />url <br></br>
      

      <input type='text' name={'thumbnailUrl'} value={this.state.thumbnailUrl} onChange = {this.onChangeInput}/>thumbnailUrl<br></br>

      <button type='submit'> submit </button>
      </form>

    </div> 
    )
  }
}

const divStyle={
  margin:'auto',
  width:'50%',
}
export default PhotosList;