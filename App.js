import React, { Component } from 'react';
import { SafeAreaView, ScrollView, ToolbarAndroid, StyleSheet, StatusBar, Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Updates from 'expo-updates';


export default class App extends Component {
  render() {
    const hideElements = `
    document.getElementById('#container.yt-masthead').style.display = 'none !important';
    document.querySelector('[data-comp-id="30000"]').style.display = 'none';
    document.querySelector('[data-comp-id="30001"]').style.paddingTop = '0';
    document.querySelector('[data-action-id="32700"]').style.display = 'none';
    document.querySelector('[data-action-id="32699"]').style.display = 'none';
    document.querySelector('.x1pi30zi').style.display = 'none'; 
    document.querySelector('#sidebar-primary').style.display = 'none';
    document.querySelector('#sub-footer').style.display = 'none';
    document.querySelector('#footer').style.display = 'none';
    document.querySelector('.grecaptcha-badge').style.display = 'none';
    document.querySelector('#fb-root').style.display = 'none';
    true; // note: this is required, or you'll sometimes get silent failures
  `;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%", 
          height: 50, 
          backgroundColor: '#3b7498',
          padding: '3%'
          }}  >
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 700, fontSize: 18 }}>{ TASKBARTEXT }</Text>
        </View>
        <View style={{ 
          flex: 1, 
          height: 'auto',
          alignItem: "center",
          textAlign: "center", 
          backgroundColor: '#3b7498',
          padding: '0%'
          }}  >
        <WebView
          ref={(r) => (this.webref = r)}
          injectedJavaScript={hideElements}
          style={{ flex: 1, flexGrow: 4 }}
          onMessage={(event) => {}}
          originWhitelist={['*']}
          mixedContentMode={'always'}
          javascriptEnabledAndroid={true}
          source={{uri: WEBSITEADDRESS }}
          onError={(event) => alert("This app is Not Supported on your device. Please visit the " + { WEBSITEADDRESS } + " website.")}
          startInLoadingState
          renderLoading={() => (
            <View style={{ flex: 1 }}>
              <ActivityIndicator size="large" color="lightskyblue" />
            </View>
          )}
        />
        </View>
        <View style={{ width: "100%", 
          height: 100,
          textAlign: "center", 
          alignItem: "center",
          backgroundColor: '#3b7498',
          padding: '0%'
          }}  >
             <WebView
                ref={(ad) => (this.webref = ad)}
                scrollEnabled={false}
                style={{ width: "100%", 
                  height: 100,
                  textAlign: "center", 
                  alignItem: "center",
                  backgroundColor: '#3b7498',
                  padding: '0%'  }}
                injectedJavaScript={hideElements}
                onMessage={(event) => {}}
                originWhitelist={['*']}
                mixedContentMode={'always'}
                javascriptEnabledAndroid={true}
                source={{uri: GOOGLEADSURL }}
                onError={(event) => alert("This app is Not Supported on your device. Please visit the " + { WEBSITEADDRESS } + " website.")}
                startInLoadingState
                renderLoading={() => (
                  <View style={{ flex: 1 }}>
                    <ActivityIndicator size="large" color="lightskyblue" />
                  </View>
               )}
             />
            <Text style={styles.AdvertisementText}>ADVERTISEMENT</Text>
        </View>
        <StatusBar style="dark" />
      </View>
    );
  }
}

const TASKBARTEXT = "Police Pursuits"
const WEBSITEADDRESS = "https://www.youtube.com/watch?v=IP3a3cbz62Q&list=PLgUAhkrRGTKo75tSt3xBdVWSlFZS1h-ru"
// const WEBSITEADDRESS = 'https://www.facebook.com/groups/policepursuitsandbreakingnews/'
const GOOGLEADSURL = 'https://watch.worldtelevision.tv/google-ads/'

const styles = StyleSheet.create({
  AdvertisementText: {
    color: 'lightgrey',
    textAlign: "center"
  }
});
