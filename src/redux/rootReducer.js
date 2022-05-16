import {combineReducers} from 'redux';
import {openMusicPlayerReducer} from './reducers/musicPlayerReducer';
import {
  openSongBottomSheetReducer,
  listenElsewhereModalReducer,
  singleArtistModalReducer,
  singleListenerModalReducer,
} from './reducers/songBottomSheetReducer';
import {openGoogleSearchReducer} from './reducers/googleSearchModalReducer';
import {openNotificationFilterReducer} from './reducers/notificationFilterReducer';
import {
  userLoginReducer,
  userRegisterReducer,
  getAccessTokenReducer,
  getUserProfileReducer,
  updateUserProfileReducer,
  updateUserProfilePicsReducer,
  followArtistReducer,
  unFollowArtistReducer,
  storeUserRegisterDataReducer,
  getUserProfileWithIdReducer,
  getAllUsersReducer,
  storeUserLocationReducer,
  logoutUserWhenTokenExpiresReducer,
  storeUserCoordinatesReducer,
  updateUserPasswordReducer,
  updateUserUsernameReducer,
  upgradeUserAccountReducer,
  storeActiveUserDetailsReducer,
  singleUserModalReducer,
  userFollowerListReducer,
  grantLocationPermissionReducer,
} from './reducers/userReducer';

import {
  verifyEmailReducer,
  verifyPhoneNumberReducer,
  resendEmailOtpReducer,
  resendPhoneNumberOtpReducer,
} from './reducers/OtpReducers/index';

import {
  artistRegisterReducer,
  getArtistProfileReducer,
  updateArtistProfileReducer,
  updateArtistProfilePicsReducer,
  getAllArtistsReducer,
} from './reducers/artistReducers';
import {addTrimTrackReducer} from './reducers/trimTrackReducer';
import {
  getGenreListReducer,
  customerTypeReducer,
} from './reducers/getGenreReducer';
import {
  uploadMediaReducer,
  uploadMediaArtReducer,
  uploadTrimMediaReducer,
} from './reducers/MediaReducers/Uploads/uploadReducer';
import {
  mediaUploadToApiReudcer,
  uploadProgressReducer,
} from './reducers/MediaReducers/Uploads/uploadMediaToApiReducer';
import {
  openCommentModalReducer,
  openMediaCommentModalReducer,
} from './reducers/commentModalReducer';
//MEDIAS
import {
  LikeMediaReducer,
  UnLikeMediaReducer,
  userMediaLikedListReducer,
} from './reducers/MediaReducers/Like_Unlike/Like_UnlikeReducer';

import {
  getMediaReducer,
  getTrailerMediaReducer,
  getArtistMediaReducer,
  choosePostSongReducer,
  playMediaReducer,
  getArtistTrendingMediaReducer,
  getTrendingMediaReducer,
  getUserMediaListeningHistoryReducer,
  addMediaToDiscoverPageReducer,
  likeADiscoverMediaReducer,
  getUserDiscoveredMediaReducer,
  increaseCurrentDiscoverPageReducer,
  increaseCurrentDiscoverSizeReducer,
  getSingleArtistMediasReducer,
  getSingleUserMediasHistoryReducer,
} from './reducers/MediaReducers/getAllMedia';

import {
  getAlbumSearchReducer,
  getArtistSearchReducer,
  getGenreSearchReducer,
  getMediaSearchReducer,
  getPlaylistSearchReducer,
  getNewReleasesReducer,
  storeUserSearchValueReducer,
} from './reducers/MediaReducers/SearchReducers/index';

import {
  createPlaylistReducer,
  addMediaToPlaylistReducer,
  deleteMediaFromPlaylistReducer,
  deletePlaylistReducer,
  updatePlaylistDetailsReducer,
  getPlaylistDetailsReducer,
  getAllPlaylistReducer,
  getAllUserPlaylistReducer,
  openMediaPlaylistModalFormReducer,
  openMediaPlaylistModalReducer,
  createPlaylistFromModalReducer,
  storeActivePlaylistDetailsReducer,
} from './reducers/MediaReducers/PlayListReducer/index';
import {
  createAlbumReducer,
  updateAlbumDetailsReducer,
  deleteAlbumReducer,
  getAlbumDetailsReducer,
  getAllUserAlbumReducer,
  storeActiveAlbumDetailsReducer,
} from './reducers/MediaReducers/AlbumReducers/index';

import {
  createMediaCommentReducer,
  getMediaCommentDetailsReducer,
  getMediaCommentsReducer,
  deleteMediaCommentReducer,
  createMediaReplyReducer
} from './reducers/MediaReducers/CommentReducers/index';
import {reducer as network} from 'react-native-offline';

const rootReducer = combineReducers({
  openMusicPlayer: openMusicPlayerReducer,
  openSongBottomSheet: openSongBottomSheetReducer,
  openGoogleSearch: openGoogleSearchReducer,
  openNotificationFilter: openNotificationFilterReducer,
  openMediaPlaylistModalForm: openMediaPlaylistModalFormReducer,
  openMediaPlaylistModal: openMediaPlaylistModalReducer,
  listenElsewhereModal: listenElsewhereModalReducer,
  singleArtistModal: singleArtistModalReducer,
  singleListenerModal: singleListenerModalReducer,
  getAlbumSearch: getAlbumSearchReducer,
  getArtistSearch: getArtistSearchReducer,
  getGenreSearch: getGenreSearchReducer,
  getMediaSearch: getMediaSearchReducer,
  getPlaylistSearch: getPlaylistSearchReducer,
  getNewReleases: getNewReleasesReducer,
  choosePostSong: choosePostSongReducer,
  userLogin: userLoginReducer,
  logoutUserWhenTokenExpires: logoutUserWhenTokenExpiresReducer,
  userRegister: userRegisterReducer,
  verifyEmail: verifyEmailReducer,
  verifyPhoneNumber: verifyPhoneNumberReducer,
  resendEmailOtp: resendEmailOtpReducer,
  resendPhoneNumberOtp: resendPhoneNumberOtpReducer,
  storeUserRegisterData: storeUserRegisterDataReducer,
  storeUserSearchValue: storeUserSearchValueReducer,
  addTrimTrack: addTrimTrackReducer,
  getAccessToken: getAccessTokenReducer,
  getUserProfile: getUserProfileReducer,
  getUserProfileWithId: getUserProfileWithIdReducer,
  getGenreList: getGenreListReducer,
  userMediaLikedList: userMediaLikedListReducer,
  userFollowerList: userFollowerListReducer,
  getUserDiscoveredMedia: getUserDiscoveredMediaReducer,
  artistRegister: artistRegisterReducer,
  customerType: customerTypeReducer,
  increaseCurrentDiscoverPage: increaseCurrentDiscoverPageReducer,
  increaseCurrentDiscoverSize: increaseCurrentDiscoverSizeReducer,
  getArtistProfile: getArtistProfileReducer,
  grantLocationPermission: grantLocationPermissionReducer,
  getMedia: getMediaReducer,
  playMedia: playMediaReducer,
  getSingleArtistMedias: getSingleArtistMediasReducer,
  getSingleUserMediasHistory: getSingleUserMediasHistoryReducer,
  getArtistTrendingMedia: getArtistTrendingMediaReducer,
  getTrendingMedia: getTrendingMediaReducer,
  getUserMediaListeningHistory: getUserMediaListeningHistoryReducer,
  addMediaToDiscoverPage: addMediaToDiscoverPageReducer,
  getAllUsers: getAllUsersReducer,
  likeADiscoverMedia: likeADiscoverMediaReducer,
  uploadMedia: uploadMediaReducer,
  uploadMediaArt: uploadMediaArtReducer,
  uploadTrimMedia: uploadTrimMediaReducer,
  mediaUploadToApi: mediaUploadToApiReudcer,
  LikeMedia: LikeMediaReducer,
  UnLikeMedia: UnLikeMediaReducer,
  openCommentModal: openCommentModalReducer,
  openMediaCommentModal: openMediaCommentModalReducer,
  uploadProgress: uploadProgressReducer,
  updateUserProfile: updateUserProfileReducer,
  updateArtistProfile: updateArtistProfileReducer,
  updateArtistProfilePics: updateArtistProfilePicsReducer,
  updateUserProfilePics: updateUserProfilePicsReducer,
  updateUserUsername: updateUserUsernameReducer,
  updateUserPassword: updateUserPasswordReducer,
  upgradeUserAccount: upgradeUserAccountReducer,
  followArtist: followArtistReducer,
  unFollowArtist: unFollowArtistReducer,
  getAllArtists: getAllArtistsReducer,
  getTrailerMedia: getTrailerMediaReducer,
  getArtistMedia: getArtistMediaReducer,
  createPlaylist: createPlaylistReducer,
  createPlaylistFromModal: createPlaylistFromModalReducer,
  updatePlaylistDetails: updatePlaylistDetailsReducer,
  deletePlaylist: deletePlaylistReducer,
  deleteMediaFromPlaylist: deleteMediaFromPlaylistReducer,
  addMediaToPlaylist: addMediaToPlaylistReducer,
  getPlaylistDetails: getPlaylistDetailsReducer,
  getAllUserPlaylist: getAllUserPlaylistReducer,
  getAllPlaylist: getAllPlaylistReducer,
  storeActivePlaylistDetails: storeActivePlaylistDetailsReducer,
  storeActiveUserDetails: storeActiveUserDetailsReducer,
  singleUserModal: singleUserModalReducer,
  createAlbum: createAlbumReducer,
  updateAlbumDetails: updateAlbumDetailsReducer,
  deleteAlbum: deleteAlbumReducer,
  getAlbumDetails: getAlbumDetailsReducer,
  getAllUserAlbum: getAllUserAlbumReducer,
  storeActiveAlbumDetails: storeActiveAlbumDetailsReducer,
  storeUserLocation: storeUserLocationReducer,
  storeUserCoordinates: storeUserCoordinatesReducer,
  createMediaComment: createMediaCommentReducer,
  createMediaReply: createMediaReplyReducer,
  getMediaCommentDetails: getMediaCommentDetailsReducer,
  getMediaComments: getMediaCommentsReducer,
  deleteMediaComment: deleteMediaCommentReducer,
  network,
});

export default rootReducer;
