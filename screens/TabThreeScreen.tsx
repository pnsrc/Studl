import * as React from 'react';
import { StyleSheet,Image,ToastAndroid, TouchableOpacity,WebBrowser,Button,DevSettings, Linking,Alert, ScrollView, Pressable } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Colors from '../constants/Colors';
import Constants from 'expo-constants';
import VersionCheck from 'react-native-version-check';

import { Text, View } from '../components/Themed';

var countgit = 0;

export default function TabThreeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../assets/images/adaptive-icon.png')}
      />
      <Text style={styles.title}>Studl</Text>
      <Text style={styles.getStartedText}>Быстрый доступ к ресурсам, для студентов Омского Автотранспортного колледжа. </Text>
      <Text style={styles.getStartedText}>Версия <Badge value={VersionCheck.getCurrentVersion()} status="error" /> </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={aboutdesc}>
      <Text style={styles.helpLinkText}>Разработанно с использованием React Native и других библиотек</Text>      
      </Pressable>      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={github}>
      <Text style={styles.getStartedText}>Made by pnsrc with ❤️</Text>
      </Pressable>  
      <Text style={styles.getStartedText2}>Логотип и SplashScreen by @elliot_alderson01.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.getStartedText2}>Ваши данные не воруются, Альбине не попадут.</Text>
      <Pressable onPress={onPressFunction}>
      <Text style={styles.getStartedText3}>Приложение собирает логи крашей для отладки.</Text>
      </Pressable>
      <Pressable onPress={onPressTelegram}>
        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />
      </Pressable>
      </View>
    </ScrollView>
  );

}
console.log('Запуск модуля О приложении')
function onPressTelegram() {
    Linking.openURL('https://t.me/iforgetmytelephoneinmypocket')
}
function aboutdesc() {
  Alert.alert('Список использованного','React\nReact-Native\nAppCenter\nБиблиотеки: react-native-elements, React-native-webview. \n Отдельное спасибо AppCenter за деплоинг, тестирование, а также сбор логов с приложения.')
}
function github() {
  countgit++
  console.log('Уже нажато:' + countgit)
  if (countgit == 5) {
    console.log('Кто-то захотел потыкать и нашел гитхаб')
    ToastAndroid.show("А мог бы попросить, я бы кинул доступ к гитхаб", ToastAndroid.SHORT);
    Linking.openURL('https://github.com/pnsrc/Studl')
  }
}
function onPressFunction() {
  console.log('Кто-то интересуется о том, что мы собираем')
  Alert.alert('Что собирается?','Данные об использовании приложении, такие данные как имя устройство, какая вкладка была открыта. ')
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
    getStartedText2: {
    fontSize: 10,
    lineHeight: 24,
    textAlign: 'center',
  },
    getStartedText3: {
    fontSize: 7,
    lineHeight: 24,
    textAlign: 'center',
  },
    helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
