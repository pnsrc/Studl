import * as React from 'react';
import { StyleSheet,Image,Button,NativeModules,DevSettings, TouchableOpacity,WebBrowser, Linking,Alert, ScrollView, Pressable } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';


export default function Tab4Screen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../assets/images/122.gif')}
      />
      <Text style={styles.title}>EXPEREMENTAL</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.helpLinkText}>Данное меню является эксперементальным, и любое действие может повлиять на работоспособность приложения. ВСЕ ДЕЙСТВИЯ НА ВАШ СТРАХ И РИСК!</Text>
      <Text style={styles.helpLinkText}>Все названия кликабельные.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={reloadtest}>
      <Text style={styles.helpLinkText}>Принудительный перезапуск приложения</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={crashtest}>
      <Badge value="ОПАСНО !" status="warning" />
      <Text style={styles.helpLinkText}>Иммитировать краш приложения</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={onsettins}>
      <Text style={styles.helpLinkText}>Открыть "О приложении"</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </ScrollView>
  );

}
function onsettins() {
console.log('Открываем о приложение')
Linking.openSettings();
}
function reloadtest(){
console.log('Принудительный перезапуск приложения')
DevSettings.reload()
}
function crashtest() {
Alert.alert('Внимание !', 'Приложение сейчас закроется !')
console.log('Запуск краштест приложения')
NativeModules.DevSettings.setLiveReloadEnabled(bool) 
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
