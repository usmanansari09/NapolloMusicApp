import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import OverviewScreen from '../../TabsScreens/OverviewScreens/ProfileOverView';
import SongsScreen from '../../TabsScreens/SongsScreens/ProfileSongs';
import VideoScreen from '../../TabsScreens/VideoScreen/VideoUpLoad';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TabView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const segmentClicked = (index) => {
    return setActiveIndex(index);
  };
  let renderViews;

  if (activeIndex == 0) {
    renderViews = <OverviewScreen />;
  }
  if (activeIndex == 1) {
    renderViews = <SongsScreen />;
  }
  if (activeIndex == 2) {
    renderViews = <VideoScreen />;
  }
  return (
    <View style={{marginTop: 0, height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-evenly',
          backgroundColor: 'rgba(255,255,255,0.061)',
          alignItems: 'center',
          borderRadius: 5,
          height: 50,
          padding: 5,
        }}>
        {/* SECOND TAB */}

        <TouchableOpacity
          hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}
          activeOpacity={0.6}
          onPress={() => segmentClicked(0)}
          style={[
            activeIndex == 0
              ? {
                  backgroundColor: '#F68128',
                  height: '100%',
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                }
              : {
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                },
          ]}>
          <Text
            style={[
              activeIndex == 0
                ? {
                    color: '#fff',
                    // transform: [{translateY: -10}],
                    fontFamily: 'Helvetica-Bold',
                    textAlign: 'center',
                    fontSize: hp('2.3%'),
                  }
                : {
                    color: '#999',
                    fontFamily: 'Helvetica-Bold',
                    fontSize: hp('2%'),
                  },
            ]}>
            Overview
          </Text>
        </TouchableOpacity>
        {/* THIRD TAB */}
        <TouchableOpacity
          hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}
          activeOpacity={0.6}
          onPress={() => segmentClicked(1)}
          style={[
            activeIndex == 1
              ? {
                  backgroundColor: '#F68128',
                  height: '100%',
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                }
              : {
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                },
          ]}>
          <Text
            style={[
              activeIndex == 1
                ? {
                    color: '#fff',
                    // transform: [{translateY: -10}],
                    fontFamily: 'Helvetica-Bold',
                    textAlign: 'center',
                    fontSize: hp('2.3%'),
                  }
                : {
                    color: '#999',
                    fontFamily: 'Helvetica-Bold',
                    fontSize: hp('2%'),
                  },
            ]}>
            Songs
          </Text>
        </TouchableOpacity>
        {/* FOURTH TAB */}
        <TouchableOpacity
          hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}
          activeOpacity={0.6}
          onPress={() => segmentClicked(2)}
          style={[
            activeIndex == 2
              ? {
                  backgroundColor: '#F68128',
                  height: '100%',
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                }
              : {
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '33.3%',
                  justifyContent: 'center',
                },
          ]}>
          <Text
            style={[
              activeIndex == 2
                ? {
                    color: '#fff',
                    // transform: [{translateY: -10}],
                    fontFamily: 'Helvetica-Bold',
                    textAlign: 'center',
                    fontSize: hp('2.3%'),
                  }
                : {
                    color: '#999',
                    fontFamily: 'Helvetica-Bold',
                    fontSize: hp('2%'),
                  },
            ]}>
            Activity
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 10, paddingHorizontal: 5}}>
        {renderViews}
      </View>
      {/* <ScrollView style={{paddingTop: 10, paddingHorizontal: 5}}>
        {renderViews}
      </ScrollView> */}
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({});
