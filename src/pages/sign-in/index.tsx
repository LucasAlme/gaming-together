import React from 'react';
import { Image, Text, View } from 'react-native';
import ButtonIcon from '../../components/buttonIcon';
import { styles } from './style';

const IllustrationImg = require('../../assets/illustration.png')

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
      <View style={styles.content} >
        <Text style={styles.title}>Conecte-se{`\n`}e organize suas jogatinas</Text>
        <Text style={styles.subTitle}>Crie grupos para jogar seus games{`\n`}favoritos com seus amigos</Text>
        <ButtonIcon title={"Entrar com Discord"} activeOpacity={0.7}/>
      </View>
    </View>
  )
}
