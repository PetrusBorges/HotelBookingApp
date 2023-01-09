// Styled-Components
import { CategoryContainer, Icon, Separator } from './styles';

// FlatList
import { FlatList } from 'react-native';

// Components
import { Text } from '../text';

// Types
import { Category } from '../../types/category';

// Hooks
import { useState } from 'react';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {

  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectedCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: 22 }}

      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {

        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer onPress={() => handleSelectedCategory(category._id)}>
            <Icon>
              <Text weight='400' opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </Icon>
          </CategoryContainer>
        );
      }}
    />
  );
}
