// NASA Astronomy Picture of the Day call
var App = React.createClass({
  getInitialState(){
    return { pic: [] };
  },
  getApod(answer){
    $.ajax({
      url: 'https://api.nasa.gov/planetary/apod?api_key=Y9lz2eFRkrFM9huTPnkSCSEMnsVaGWtiKkZFB6VO',
      datatype: 'json',
      data: {
        a: answer,
        type: 'hdurl'
      },
      success(response) {
        this.setState({pic: response.pic.items});
      }.bind(this),
      error(xhr, status, error) {
        console.error('https://api.nasa.gov/planetary/apod?api_key=Y9lz2eFRkrFM9huTPnkSCSEMnsVaGWtiKkZFB6VO', status, error.toString());
      }.bind(this)
    })
  },
  render(){
    return(
      <div>
        <h1>Test</h1>
      </div>
    );
  }
});

React.render( <App />, document.getElementById('root') );
