import './App.css';
import {Component} from 'react'

class App extends Component {

  state = {
    giphy: []
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=EJKbdLYnLd7USv4oLrq2DT63aUngOAor&limit=25&rating=g')
    .then(res => res.json())
    .then(json => {
      console.log(json.data)
      this.setState({giphy: json.data})
    })

  }
 


render(){

  return (
<div className="App"> 
<h1>Giphy App</h1>
{
  this.state.giphy.map(g => (
    <div key={g.id}>
      <img src={g.images.original.url} alt={g.title}/>
      <h3>{g.title}</h3>
   </div>
  ))
}
</div>
  )



}

}

export default App;