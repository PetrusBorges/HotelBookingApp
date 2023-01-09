// Styled-Components
import { Modal, FlatList } from 'react-native';
import { Image, CloseButton, ModalBody, Header, Review, InteriorImage, Separator } from './styles';

// Components
import { Text } from '../text';
import { Button } from '../Button';
import { OrderModal } from '../OrderModal';

// Types
import { Hotel } from '../../types/hotel';
import { Interior } from '../../types/interior';
import { CartItem } from '../../types/cartItem';

// Images
import { Close } from '../../assets/images/close';
import { HalfStar } from '../../assets/images/halfStar';
import { Star } from '../../assets/images/fullStar';

// Hooks
import { useState, useEffect } from 'react';
import { api } from '../../utils/api';

interface HotelMenuModalProps {
  visible: boolean;
  hotel: null | Hotel;
  onClose: () => void;
  cartItems: CartItem[];
  onResetCartItems: () => void;
  onAddCartItems: (hotel: Hotel) => void;
}

export function HotelMenuModal({ visible, hotel, onClose, cartItems, onResetCartItems, onAddCartItems }: HotelMenuModalProps) {

  if (!hotel) {
    return null;
  }

  const [interiorHotel, setInteriorHotel] = useState<Interior[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<null | Hotel>(null);

  function handleHotelMenuModal(hotel: Hotel) {
    setIsModalVisible(true);
    setSelectedHotel(hotel);
    onAddCartItems(hotel);
  }

  useEffect(() => {
    api.get(`/hotel/${hotel._id}/interior`)
      .then(({ data }) => {
        setInteriorHotel(data);
      });
  }, []);

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        hotel={selectedHotel}
        onClose={() => setIsModalVisible(false)}
        onCloseHotelMenuModal={onClose}
        cartItems={cartItems}
        onResetCartItems={onResetCartItems}
      />

      <Modal
        visible={visible}
        animationType='slide'
        presentationStyle='pageSheet'
        onRequestClose={onClose}
      >
        <Image
          source={{
            uri: `http://192.168.1.6:3001/uploads/${hotel.imagePath}`
          }}
        >
          <CloseButton onPress={onClose}>
            <Close color='black'/>
          </CloseButton>
          <ModalBody>
            <Header>
              <Text weight='400' size={23}>
                {hotel.name}
              </Text>
              <Text weight='400' opacity={0.5}>
                {hotel.description}
              </Text>

              <Review>
                <Star />
                <Star />
                <Star />
                <Star />
                <HalfStar />
                <Text weight='400' opacity={0.5} style={{ marginLeft: 10 }}>
                  {hotel.review}  Reviews
                </Text>
              </Review>
            </Header>

            <FlatList
              style={{ marginVertical: 22 }}
              ItemSeparatorComponent={Separator}

              horizontal
              showsHorizontalScrollIndicator={false}
              data={interiorHotel}
              keyExtractor={interiorHotel => interiorHotel._id}
              renderItem={({ item: interiorHotel }) => {

                return (
                  <InteriorImage
                    source={{
                      uri: `http://192.168.1.6:3001/uploads/${interiorHotel.imagePath}`
                    }}
                  />
                );
              }}
            />
            <Button onPress={() => handleHotelMenuModal(hotel)}>
            Reservar
            </Button>
          </ModalBody>
        </Image>
      </Modal>
    </>
  );
}
