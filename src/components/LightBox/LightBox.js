import  { useState } from 'react';
import "./lightbox.css"
const LightBoxImage = (props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { images } = props;
  

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <p>No data available</p>;
  }
  console.log(lightboxOpen)

  return (
    <div className='d-flex w-100 flex-wrap' style={{overflow:"hidden"}}>
      {images.map((item, index) => (
        <div key={item.id} style={{ display: 'flex' ,flexDirection:"column-reverse",justifyContent:"center",alignItems:"center"}}>
          <span>{item.image_type}</span>
          <a href={item.imgurl} onClick={(e) => {
            e.preventDefault();
            openLightbox(index);
          }}>
            <img src={item.imgurl} alt={item.image_type} width="100px" height="100px" className='m-2'/>
          </a>
        </div>
      ))}

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={images[lightboxIndex].imgurl} alt={images[lightboxIndex].image_type} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LightBoxImage;
