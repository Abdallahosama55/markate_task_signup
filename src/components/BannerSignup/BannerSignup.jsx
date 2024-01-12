import React, { useState, useEffect } from 'react';

function BannerSignup({ paragraph, Header, Source }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        // Use require within the dynamic import to correctly resolve the path
        const image = await import(`../../assets/${Source}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    importImage();
  }, [Source]);

  return (
    <div>
      <div className='Signup row justify-content-center align-items-center text-white'>
        <div className='w-75'>
          {imageSrc && <div><img src={imageSrc} alt="Banner" /></div>}
          <h1 className='header-signup'>{Header}</h1>
          <p className='paragraph-signup'>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerSignup;
