import React from "react";
import { ScrollView } from 'react-native';
import { styles } from './style';
import { categories } from "../../utils/Categories";
import Category from "../category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}
export default function CategorySelect({ categorySelected, hasCheckBox = false, setCategory }: Props) {

    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}  >
            {categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))}
        </ScrollView>
    )
}