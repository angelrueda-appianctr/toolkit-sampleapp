import React, { useCallback, useRef } from 'react';
import {
  stackTransition,
  Gallery,
  type GalleryRefType,
} from 'react-native-zoom-toolkit';

import GalleryImage from './GalleryImage';

const images = [
  'https://cdn.britannica.com/02/132502-050-F4667944/macaw.jpg',
  'https://assets-global.website-files.com/63634f4a7b868a399577cf37/64665685a870fadf4bb171c2_labrador%20americano.jpg',
  'https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2023/05/052323-Foxes-in-Millennium-Park-Colin-Boyle-9124.jpg?fit=1650%2C1099&ssl=1',
  'http://192.168.86.184:8000/anya-chernykh-_jdxAdh4ENg-unsplash.jpg',
  'http://192.168.86.184:8000/branden-skeli-D9SM1xvemOw-unsplash.jpg'
];

const GalleryExample = () => {
  const ref = useRef<GalleryRefType>(null);

  // Remember to memoize your callbacks properly to keep a decent performance
  const renderItem = useCallback((item: string, index: number) => {
    return <GalleryImage uri={item} index={index} />;
  }, []);

  const keyExtractor = useCallback((item: string, index: number) => {
    return `${item}-${index}`;
  }, []);

  const onTap = useCallback((_, index: number) => {
    console.log(`Tapped on index ${index}`);
  }, []);

  const transition = useCallback(stackTransition, []);

  return (
    <Gallery
      ref={ref}
      data={images}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onTap={onTap}
      customTransition={transition}
    />
  );
};

export default GalleryExample;