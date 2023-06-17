import React, { useEffect, useRef } from 'react';
import LightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import 'lightgallery/css/lightgallery.css';

const LightBoxImage = (props) => {
  const galleryRef = useRef(null);
  const { images } = props;

  useEffect(() => {
    const options = {
      mode: 'lg-fade',
      plugins: [lgZoom, lgVideo],
    };

    const lightGalleryInstance = LightGallery(galleryRef.current, options);

    return () => {
      lightGalleryInstance.destroy();
    };
  }, []);

  const openLightbox = (event, imgUrl) => {
    event.preventDefault(); // Prevent default navigation behavior
    galleryRef.current.setAttribute('data-lg-share', false); // Disable share button (optional)
    galleryRef.current.setAttribute('data-src', imgUrl); // Set the image source as the data-src attribute
    LightGallery(galleryRef.current); // Open LightGallery with the updated data
  };

  return (
    <div ref={galleryRef} >
      {Array.isArray(images) && images.length > 0 ? (
        images.map((item) => (
          <div style={{display:"flex"}}>
          <span>{item.image_type}</span>
          <a
            key={item.id}
            href={item.imgurl}
            onClick={(e) => openLightbox(e, item.imgurl)}
            data-sub-html={`<h4>${item.image_type}</h4>`}
          >
            <img src={item.imgurl} alt={item.image_type} width="100px" height="100px"/>
          </a>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default LightBoxImage;
