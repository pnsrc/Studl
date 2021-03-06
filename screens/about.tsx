import * as React from 'react';
import { StyleSheet,Image,ToastAndroid, TouchableOpacity,WebBrowser,Button,DevSettings, Linking,Alert, ScrollView, Pressable } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Colors from '../constants/Colors';
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
      <Text style={styles.getStartedText}>Версия <Badge value="0.0.12b" status="warning" /> </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.getStartedText}>Приложение разработано с использованием многих других проектов с исходным кодом</Text>
    </View>
    </ScrollView>
  );

}
console.log('Запуск модуля Исхожники')

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
