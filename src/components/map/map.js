import React from 'react';
import './map.scss';

const Map = ({onCloseMap}) => {
    return (
        <div className='map'>
            <span onClick={onCloseMap} className='circle'></span>
            <iframe className='map__adress' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6111873755037!2d30.3232330555347!3d59.938593696523306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1609053997167!5m2!1sru!2sru" width="765" height="560" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    )
}

export default Map;