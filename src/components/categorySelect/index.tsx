import React from "react";
import { ScrollView } from 'react-native';
import { styles } from './style';
import { categories } from "../../utils/Categories";
import Category from "../category";

type Props = {
    categorySelected: string;
}
export default function CategorySelect({ categorySelected }: Props) {

    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }} >
            {categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                />
            ))}
        </ScrollView>
    )
}