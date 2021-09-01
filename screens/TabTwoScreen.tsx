import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
          <WebView source={{ uri: 'https://do.oatk.org/' }}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            applicationNameForUserAgent={'Studl/0.0.12b'}
           />
  );
}
console.log('Запуск модуля Едукон')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
