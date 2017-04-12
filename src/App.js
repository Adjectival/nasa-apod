export default class Apod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: []
    };
  }

  Apod(){
    return $.getJSON('https://api.nasa.gov/planetary/apod?api_key=Y9lz2eFRkrFM9huTPnkSCSEMnsVaGWtiKkZFB6VO')
      .then((data) => {
        return data.results;
      });
  }


  render() {
    this.Apod().then((res) => {
      this.state = {json: res};
    });
    return (
      <div>
        {this.state.json.map((item, i) => {
          return(
            <h1></h1>
            <span></span>
            <span></span>
          )
        })}
      </div>
    )
  }
}
