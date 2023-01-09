// Styled-Components
import { ActivityIndicator } from 'react-native';
import { Container, CategoriesContainer, MenuContainer, CenteredContainer } from './styles';

// Components
import { Text } from '../components/text';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { HotelMenu } from '../components/HotelMenu';

// Hooks
import { useState, useEffect } from 'react';

// Utils
import { api } from '../utils/api';

// Types
import { Category } from '../types/category';
import { Hotel } from '../types/hotel';
import { CartItem } from '../types/cartItem';

//Images
import { Empty } from '../assets/images/empty';

export function Main() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [hotel, setHotel] = useState<Hotel[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isLoadingApp, setIsLoadingApp] = useState(true);
  const [isLoadingHotel, setIsLoadingHotel] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/category'),
      api.get('/hotel'),
    ]).then(([categoriesResponse, hotelResponse]) => {
      setCategories(categoriesResponse.data);
      setHotel(hotelResponse.data);
      setIsLoadingApp(false);
    });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/hotel' : `/category/${categoryId}/hotel`;

    setIsLoadingHotel(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    const category = await api.get(route);

    setHotel(category.data);
    setIsLoadingHotel(false);
  }

  function handleResetCartItems() {
    setCartItems([]);
  }

  function handleAddToCart(hotel: Hotel) {

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.hotel._id === hotel._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          hotel,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  return (
    <Container>
      {isLoadingApp ? (
        <CenteredContainer>
          <ActivityIndicator
            size='large'
            color='black'
          />
        </CenteredContainer>
      ) : (
        <>
          <Header />
          <CategoriesContainer>
            <Categories
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />
          </CategoriesContainer>

          {isLoadingHotel ? (
            <CenteredContainer>
              <ActivityIndicator
                size='large'
                color='black'
              />
            </CenteredContainer>
          ) : (
            <>
              {hotel.length > 0 ? (
                <MenuContainer>
                  <HotelMenu
                    hotel={hotel}
                    cartItems={cartItems}
                    onResetCartItems={handleResetCartItems}
                    onAddCartItems={handleAddToCart}
                  />
                </MenuContainer>
              ) : (
                <CenteredContainer>
                  <Empty />
                  <Text weight='400' style={{ marginTop: 10 }}>Nenhum hotel cadastrado nessa categoria!</Text>
                </CenteredContainer>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
}
