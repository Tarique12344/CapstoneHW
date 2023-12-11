const Attractions = props => (
    <div>
      <p>{props.attractions.title}</p>
      <p>{props.attractions.address}</p>
      <p>{props.attractions.description}</p>
      <p>{props.attractions.ratings}</p>
      {/* <td>
        <Link to={"/edit/"+props.attractions._id}>edit</Link> | <a href="/" onClick={() => { props.deleteAttractions(props.attractions._id) }}>delete</a>
      </td> */}
    </div>
  )
  
   class AttractionsList extends Component {
    constructor(props) {
      super(props);
  
      // this.deleteAttractions = this.deleteAttractions.bind(this)
  
      this.state = {attractions: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/' + 'attractions/')
        .then(response => {
          this.setState({ attractions: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    // deleteAttractions(id) {
    //   axios.delete('http://localhost:5000/' + 'attractions/'+id)
    //     .then(response => { console.log(response.data)});
  
    //   this.setState({
    //     attractions: this.state.attractions.filter(el => el._id !== id)
    //   })
    // }
  
    attractionsList() {
      return this.state.attractions.map(currentattractions => {
        return <Attractions attractions={currentattractions} key={currentattractions._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          
          {/* <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Address</th>
                <th>Description</th>
                <th>ratings</th>
              </tr>
            </thead>
            <tbody>
              { this.attractionsList() }
            </tbody>
          </table> */}
          {/* <div className="attractionsContainer"> */}
          
         
                  <div className='attractionsContainer'>
                  <div class="card">
                  <div class="container">
                  <div className='attractionscard'>
                      <div className='attractionsInnerContainer'></div>
                   
                    
                      </div>
                  </div>
                  {this.attractionsList()}
          </div>
        </div>
      </div>
    
      );
      
    }
   }
  
  export default AttractionsList