import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import ButtonIcon from '../../components/buttonIcon';
import { color } from '../../utils/Constants';
import { styles } from './style';

const IllustrationImg = require('../../assets/illustration.png')

export default function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={color.blue} />
      <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
      <View style={styles.content} >
        <Text style={styles.title}>Organize{`\n`}suas jogatinas{`\n`}facilmente</Text>
        <Text style={styles.subTitle}>Crie grupos para jogar seus games{`\n`}favoritos com seus amigos</Text>
        <ButtonIcon title={"Entrar com Discord"} activeOpacity={0.7}/>
      </View>
    </View>
  )
}
