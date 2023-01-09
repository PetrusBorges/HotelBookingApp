//Styled-Components
import { HotelContainer, HotelImage, HotelDetails, HotelInfo, HotelReview, Separator } from './styles';

// FlatList
import { FlatList } from 'react-native';

// Components
import { Text } from '../text';
import { HotelMenuModal } from '../HotelMenuModal';

// Types
import { Hotel } from '../../types/hotel';
import { CartItem } from '../../types/cartItem';

// Images
import { Star } from '../../assets/images/fullStar';

// Utils
import { formatCurrency } from '../../utils/formatCurrency';

// Hooks
import { useState } from 'react';

interface HotelMenuProps {
  hotel: Hotel[];
  cartItems: CartItem[];
  onResetCartItems: () => void;
  onAddCartItems: (hotel: Hotel) => void;
}

export function HotelMenu({ hotel, cartItems, onResetCartItems, onAddCartItems }: HotelMenuProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<null | Hotel>(null);

  function handleHotelMenuModal(hotel: Hotel) {
    setIsModalVisible(true);
    setSelectedHotel(hotel);
  }

  return (
    <>
      <HotelMenuModal
        visible={isModalVisible}
        hotel={selectedHotel}
        onClose={() => setIsModalVisible(false)}
        cartItems={cartItems}
        onResetCartItems={onResetCartItems}
        onAddCartItems={onAddCartItems}
      />

      <FlatList
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}

        data={hotel}
        keyExtractor={hotel => hotel._id}
        renderItem={({ item: hotel }) => {
          return (
            <HotelContainer onPress={() => handleHotelMenuModal(hotel)}>
              <HotelImage
                source={{
                  uri: `http://192.168.1.6:3001/uploads/${hotel.imagePath}`
                }}
              />

              <HotelDetails>
                <Text weight='400'>{hotel.name}</Text>
                <Text weight='400' color='#ccc'>{hotel.description}</Text>
              </HotelDetails>

              <HotelInfo>
                <Text weight='400'>{formatCurrency(hotel.price)}</Text>

                <HotelReview>
                  <Star />
                  <Text weight='400' style={{ marginLeft: 4 }}>{hotel.review}</Text>
                </HotelReview>
              </HotelInfo>
            </HotelContainer>
          );
        }}
      />
    </>
  );
}
