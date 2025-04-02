import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Alert,StatusBar, Platform } from 'react-native';

export default function App() {
  let x = 0;
  console.log("app executed");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      //button that shows title with confirmation message with 2 buttons
      <Button
        title="Press me"
        onPress={() => Alert.alert('Mytitle','My message',[
          {text: 'Yes', onPress: () => console.log('Ok Pressed')},
          {text: 'No', onPress: () => console.log('canceled Pressed')},
        ])}
        />
        //button that shows title with confirmation message and textfield to write somthing with 2 buttons
        <Button
        title="Press me"
        onPress={() => Alert.prompt('Mytitle','My message',text=>console.log(text),[
          {text: 'Yes', onPress: () => console.log('Ok Pressed')},
          {text: 'No', onPress: () => console.log('canceled Pressed')},
        ])}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
