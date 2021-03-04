import React from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { forEach } from 'lodash';
import { Container, MapWrapper, GeoWrapper, GetButton, ConfirmButton} from './components/Map';

class Map extends React.Component {
  state = {
    map: null,
    latlngs: null,
    errorMessage: '請圈選區域',
    copySuccess: '',
  }

  initMap = (startPoint = [25.0475613, 121.5173399]) => {
    const mapOptions = {
      center: startPoint,
      zoom: 16
    }
    const controlOptions = {  
      position: 'topleft',
      drawMarker: false,
      drawRectangle: false,
      drawCircle: false,
      drawCircleMarker: false,
      drawPolyline: false,
      cutPolygon: false,
    };
    const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    let map = L.map('map', mapOptions);
    L.tileLayer(tileLayer).addTo(map);
    map.pm.addControls(controlOptions);
    return map;
  }

  addPolygonToMap = (myMap, latlngs) => {
    const polygon = L.polygon(latlngs)
    polygon.addTo(myMap);
  }

  handleGeoJSON = () => {
    const drawLayers = this.state.map.pm.getGeomanLayers(true)._layers
    switch (Object.keys(drawLayers).length) {
      case 0:
        this.setState({errorMessage: '請圈選區域'})
        this.setState({latlngs: null})
        break;
      case 1:
        forEach(drawLayers, (value, key) => {
          if (value._latlngs) {
            let recentLatlngs = JSON.parse(JSON.stringify(value._latlngs[0]))
            recentLatlngs.push(recentLatlngs[0])
            this.setState({latlngs: recentLatlngs})
          }
        })
        break;
      default:
        this.setState({errorMessage: '只能選擇一個區域！'})
        this.setState({latlngs: null})
    }
  }

  handleCopyPoint = () => {
    if (!this.state.latlngs) return
    navigator.clipboard.writeText(JSON.stringify(this.state.latlngs));
    this.setState({copySuccess: 'Copy!'})
  }

  componentDidMount() {
    const map = this.state.latlngs? this.initMap(this.state.latlngs[0]):this.initMap();
    this.state.latlngs && this.addPolygonToMap(map, this.state.latlngs);
    this.setState({map})
  }

	render() {
    const outputValue = this.state.latlngs?JSON.stringify(this.state.latlngs, null, 2):this.state.errorMessage;
    return (
      <Container>
        <MapWrapper id="map"/>
          <GeoWrapper>
            <GetButton onClick={this.handleGeoJSON}>獲取座標</GetButton>
            <textarea value={outputValue} readOnly/>
            <ConfirmButton onClick={this.handleCopyPoint}>{this.state.copySuccess.length? this.state.copySuccess: '複製座標'}</ConfirmButton>
          </GeoWrapper>
      </Container>
    );
  }
}

export default Map;
