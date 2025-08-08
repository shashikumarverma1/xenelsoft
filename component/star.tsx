import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import Ystar from '../assets/icons/ystar.png'; // example path
import Gstar from '../assets/icons/gstar.png'; // example path

export default function StarRating({ rating = 4 }) {
  const stars = useMemo(() => {
    return [1, 2, 3, 4, 5].map((item, index) => (
      <Image
        key={index}
        source={index < rating ? Ystar : Gstar}
        style={{ width: 24, height: 24, marginRight: 5 }}
      />
    ));
  }, [rating]);

  return <View style={{ flexDirection: 'row' }}>{stars}</View>;
}
