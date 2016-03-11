import {fitBounds} from 'google-map-react/utils';

class SimpleMap extends React.Component {
  state = {
    zoom: 2,
    center: {
      lat: 12,
      lng: 12
    }
  };

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.adjustGoogleMapToFitBounds();
  }

  _onChange = ({center, zoom}) => {
    if (zoom != 2){
      zoom = 2;
      center = {lat: 39.36, lng: 4.57};
      this.setState = {
        zoom,
        center,
        ...this.state
      }
    }
  }


  adjustGoogleMapToFitBounds() {
    console.log('adjustGoogleMapToFitBounds');
    const bounds = {
      nw: {
        lat: 79.81230227,
        lng: -175.25390625
      },
      se: {
        lat: -40.17887331,
        lng: 168.57421875,
      }
    };

    const {center, zoom} = fitBounds(bounds);
}

  render() {
    return (
       <GoogleMapReact
        onChange={this._onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
      </GoogleMapReact>
    );
  }
}


ReactDOM.render(
  <div style={{width: '100%', height: 400}}>
    <SimpleMap/>
  </div>,
  document.getElementById('main')
);

