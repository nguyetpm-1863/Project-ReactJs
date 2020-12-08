import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { InfoCircleFilled } from '@ant-design/icons';

const MapSection = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> */}
    </div>
  </div>
)

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <InfoCircleFilled /> */}
    <p className="pin-text">{text}</p>
  </div>
)

export default MapSection;