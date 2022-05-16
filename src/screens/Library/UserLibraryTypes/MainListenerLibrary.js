import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
// import LibraryComponent from '../../../Components/LibrarySongs/LibrarySongs';
import LibraryHeader from '../component/LibraryHeader';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_All_Playlists,
  get_All_User_Playlist,
  store_Active_Playlist_Details,
} from '../../../redux/actions/MediaActions/PlayListActions/index';
import {get_All_Artist} from '../../../redux/actions/artistActions';
import SmallErrorModalPopUp from '../../../Components/Modal/SmallErrorModalPopUp';
import {CLEAR_PLAYLIST_ERROR} from '../../../redux/constants';
import SingleViewHeader from '../component/SingleViewHeader';
import PlaylistComponent from '../../../Components/LibrarySongs/components/PlaylistComponent';
import AlbumComponent from '../../../Components/LibrarySongs/components/AlbumComponent';
import ArtistComponent from '../../../Components/LibrarySongs/components/ArtistComponent';
import RecentlyDiscovered from '../../../Components/LibrarySongs/components/RecentlyDiscovered';
import LinearGradient from 'react-native-linear-gradient';
import {loadDataFromStorage} from '../../../utils/asyncStorage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DiscoveryImage from '../../../assests/images/onBoarding7.jpg';
import {scale, ScaledSheet} from 'react-native-size-matters';
import DiscoveredSongContainer from '../../../Components/LibrarySongs/components/DiscoveredSongsCont';

const {width, height} = Dimensions.get('window');

const MainListenerLibraryPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(50);
  const getAllUserPlaylist = useSelector(state => state.getAllUserPlaylist);
  const getAllArtists = useSelector(state => state.getAllArtists);
  const {
    loading: playlistLoading,
    error: playlistError,
    data: playlistData,
  } = getAllUserPlaylist;

  const {
    loading: artistLoading,
    error: artistError,
    artists: artistsData,
  } = getAllArtists;

  const dicoveryMedia = [];

  useEffect(() => {
    const getPlaylists = async () => {
      const userPlaylist = await loadDataFromStorage('userPlaylists');
      console.log('LOADING PLAYLIST', userPlaylist);
      if (userPlaylist === null || !userPlaylist) {
        dispatch(get_All_User_Playlist(page, size));
      } else {
        return null;
      }
    };
    getPlaylists();
  }, []);

  const playlistNavigate = val => {
    dispatch(store_Active_Playlist_Details(val));
    navigation.navigate('SinglePlayList');
  };
  // useEffect(() => {
  //   const getArtists = async () => {
  //     const appArtists = await loadDataFromStorage('App_Arists');
  //     if (!appArtists && appArtists === []) {
  //       dispatch(get_All_Artist(page, size));
  //     } else {
  //       return null;
  //     }
  //   };
  //   getArtists();
  //    dispatch(get_All_Artist(page, size));
  // }, []);
  // useEffect(() => {
  //   const getPlaylists = async () => {
  //     const userPlaylist = await loadDataFromStorage('userPlaylists');
  //     console.log(userPlaylist, 'USERPLAYLIST');
  //   };
  //   getPlaylists();
  // }, []);
  // useEffect(() => {
  //   const getArtists = async () => {
  //     const appArtists = await loadDataFromStorage('App_Arists');
  //     console.log(appArtists, 'APPARTISTS');
  //   };
  //   getArtists();
  // }, []);

  const dataList = playlistData
    ?.slice(0, 5)
    .map((data, index) => (
      <PlaylistComponent
        {...data}
        key={index}
        onPress={() => playlistNavigate(data)}
      />
    ));

  const dataList2 = artistsData?.slice(0, 5).map((data, index) => (
    <ArtistComponent
      {...data}
      key={index}
      onPress={() =>
        navigation.navigate('Single_Artist_Profile', {
          screen: 'Single_Artist_Profile',
          params: data,
        })
      }
    />
  ));

  const getPlaylistDataAgain = () => {
    dispatch({
      type: CLEAR_PLAYLIST_ERROR,
    });
    dispatch(get_All_User_Playlist(page, size));
  };

  let playlistErrorView = null;
  let playlistLoadingView = null;
  let artistLoadingView = null;
  let artistErrorView = null;
  if (playlistError) {
    playlistErrorView = (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => getPlaylistDataAgain()}>
        <Text
          style={{
            color: '#999',
            fontSize: 12,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {playlistError}
        </Text>
        <Text
          style={{
            color: '#F68128',
            fontSize: 10,
            textAlign: 'center',
            marginTop: 5,
            fontFamily: 'Helvetica-Bold',
          }}>
          Try Again
        </Text>
      </TouchableOpacity>
    );
  }
  if (artistError) {
    artistErrorView = (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(get_All_Artist(page, size))}>
        <Text style={{color: '#999', fontSize: 12, textAlign: 'center'}}>
          {artistError}
        </Text>
        <Text
          style={{
            color: '#F68128',
            fontSize: 10,
            textAlign: 'center',
            marginTop: 5,
            fontFamily: 'Helvetica-Bold',
          }}>
          Try Again
        </Text>
      </TouchableOpacity>
    );
  }
  if (playlistLoading) {
    playlistLoadingView = <ActivityIndicator size="small" color="#F68128" />;
  }
  if (artistLoading) {
    artistLoadingView = <ActivityIndicator size="small" color="#F68128" />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <LibraryHeader />
        {/* CREATE PLAYLIST BTN */}
        <LinearGradient
          colors={['#feee3e', '#f68128', '#f68128']}
          style={styles.playlistBtn}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistBtn2}
            onPress={() => navigation.navigate('CreatePlaylistForm')}>
            <Text
              style={{
                color: '#fff',
                fontSize: scale(10),
                marginRight: 5,
                fontFamily: 'Helvetica-Bold',
              }}>
              Create Playlist
            </Text>
            <Icon
              name="md-add"
              color="#eee"
              size={scale(18)}
              style={{paddingLeft: 2}}
            />
          </TouchableOpacity>
        </LinearGradient>
        {/* CONTENT */}
        <View style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 50,
              width: '100%',
            }}>
            {/* Playlist View */}
            <SingleViewHeader
              title="Playlists"
              onPress={
                playlistData.length > 0
                  ? () => navigation.navigate('Playlist')
                  : () => navigation.navigate('CreatePlaylistForm')
              }
            />
            {playlistErrorView}
            {playlistLoadingView}
            <ScrollView
              contentContainerStyle={{
                marginBottom: 15,
                marginTop: 10,
              }}
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}>
              <DiscoveredSongContainer
                name="Recently Discovered"
                media={dicoveryMedia}
                discoveryImage={DiscoveryImage}
                onPress={() => navigation.navigate('DiscoveredSongs')}
              />
              {playlistLoading === false && playlistData.length <= 0 && (
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'center',
                    width: '50%',
                    marginTop: '10%',
                  }}>
                  <Text
                    style={{
                      color: '#eee',
                      textAlign: 'center',
                      fontSize: hp('1.9%'),
                    }}>
                    You have no playlist. Please create new playlist
                  </Text>
                </View>
              )}
              {dataList}
            </ScrollView>

            {/* Songs View */}
            <SingleViewHeader
              title="Favourites Songs"
              onPress={() => navigation.navigate('Favorite')}
            />
            <ScrollView
              contentContainerStyle={{
                marginBottom: 15,
                marginTop: 10,
              }}
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}>
              {/* {dataList} */}
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
            </ScrollView>
            {/* ARTIST VIEW */}

            {/* <SingleViewHeader
              title="Artists"
              onPress={() => navigation.navigate('Artist')}
            />
            {artistErrorView}
            {artistLoadingView}
            <ScrollView
              contentContainerStyle={{
                marginBottom: 15,
                marginTop: 10,
              }}
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}>
              {dataList2}
            </ScrollView> */}
            {/* RECENTLY DISCOVERED SONGS*/}
            {/* <SingleViewHeader
              title="Recently Discovered"
              onPress={() => navigation.navigate('Artist')}
            />
            <ScrollView
              contentContainerStyle={{
                marginBottom: 15,
                marginTop: 10,
              }}
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}>
              
              <RecentlyDiscovered />
              <RecentlyDiscovered />
              <RecentlyDiscovered />
              <RecentlyDiscovered />
              <RecentlyDiscovered />
            </ScrollView> */}
            {/* RECENTLY DISCOVERED SONGS*/}
            {/* Songs View */}
            <SingleViewHeader
              title="Albums"
              onPress={() => navigation.navigate('Favorite')}
            />
            <ScrollView
              contentContainerStyle={{
                marginBottom: 15,
                marginTop: 10,
              }}
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}>
              {/* {dataList} */}
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
              <AlbumComponent />
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default MainListenerLibraryPage;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    width,
    height,
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight(),
      },
    }),
  },
  content: {
    flex: 1,
    width,
    height,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  playlistBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 100,

    borderRadius: 5,
    width: '120@s',
    height: '35@s',
  },
  playlistBtn2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
