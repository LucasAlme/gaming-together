import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Background from '../../components/background';
import CategorySelect from '../../components/categorySelect';
import Header from '../../components/header';
import { styles } from './style';
import { color } from '../../utils/Constants';
import GuildIcon from '../../components/guildIcon';
import SmallInput from '../../components/smallInput';
import TextArea from '../../components/textArea';
import Button from '../../components/button';
import ModalView from '../../components/modalView';
import Guilds from '../guilds';
import { GuildProps } from '../../components/guild';


export default function AppointmentsCreate() {

    const [category, setCategory] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleOpenModal() {
        setIsModalOpen(true)
    }

    function handleSelected(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setIsModalOpen(false)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>

                <Background>
                    <Header title="Agendar Partida" />
                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>
                    <CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category} />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenModal}>
                            <View style={styles.select}>
                                {guild.icon ?
                                    <GuildIcon />
                                    :
                                    <View style={styles.image} />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>{guild.name ? guild.name : 'Selecione um servidor'}</Text>
                                </View>
                                <Feather name="chevron-right" color={color.heading} size={18} />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>Dia e mês</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>Hora e minuto</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.limit}>Max 100 carácteres</Text>
                        </View>
                        <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />
                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={isModalOpen}>
                <Guilds handleGuildSelected={handleSelected} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}
