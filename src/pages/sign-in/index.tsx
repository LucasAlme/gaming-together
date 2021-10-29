import React from 'react';
import { Image, Text, View } from 'react-native';
import ButtonIcon from '../../components/buttonIcon';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/background';

const IllustrationImg = require('../../assets/illustration.png')

export default function SignIn() {

  const navigation = useNavigation();

  function signIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
        <View style={styles.content} >
          <Text style={styles.title}>Connect and{`\n`}organize your games</Text>
          <Text style={styles.subTitle}>Create groups to play your favorite{`\n`}games with your friends</Text>
          <ButtonIcon title={"Login with Discord"} onPress={signIn} />
        </View>
      </View>
    </Background>
  )
}
