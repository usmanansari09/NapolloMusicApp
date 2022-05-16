import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {DEFAULT_IMAGE_URI} from '../../../utils/ImagePicker';

const {width, height} = Dimensions.get('window');

const ArtistContainer = ({
  profilePictureUrl,
  stageName,
  followCount,
  onPress,
  firstName,
  lastName,
  artistIdentity,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? () => onPress() : null}
      activeOpacity={0.6}
      style={[styles.container, {}]}>
      {profilePictureUrl && profilePictureUrl !== 'null' ? (
        <Image
          source={{uri: profilePictureUrl}}
          style={{
            width: '100%',
            height: '70%',
            borderRadius: 350 / 2,
            marginRight: 10,
          }}
        />
      ) : (
        <View style={styles.thumbNail}>
          <Text style={[styles.thumbNailName, {marginRight: 10}]}>
            {firstName ? firstName[0] : null}
          </Text>
          <Text style={styles.thumbNailName}>
            {lastName ? lastName[0] : null}
          </Text>
        </View>
      )}
      {/* BLACK OVERLAY */}
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: '#000',
          opacity: 0.2,
        }}
      />
      <View
        style={{
          marginTop: 8,
          // paddingLeft: 10,
          alignSelf: 'center',
          // flexDirection: 'row',
          // justifyContent: 'space-between',
        }}>
        <Text
          // numberOfLines={1}
          style={{
            color: '#eee',
            textTransform: 'capitalize',
            fontSize: 15,
            fontFamily: 'Helvetica-Bold',
            textAlign: 'center',
          }}>
          {stageName}
        </Text>
        <Text style={{color: '#f68128', fontSize: 12, textAlign: 'center'}}>
          {followCount} followers
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistContainer;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,

    marginRight: 20,
    borderRadius: 350 / 2,
    position: 'relative',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 350 / 2,
  },
  likes: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbNail: {
    width: '100%',
    height: '70%',
    borderRadius: 350 / 2,
    backgroundColor: '#555',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbNailName: {
    fontSize: 40,
    color: '#eee',
    fontFamily: 'Helvetica-Bold',
  },
});
