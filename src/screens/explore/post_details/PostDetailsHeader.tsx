import { scaleSize } from '@core/utils';
import { COLORS, FONTS } from '@src/assets/const';
import { Stack } from '@src/components';
import Button from '@src/components/Button';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import { useNavigation } from '@react-navigation/native';
import { PostDetailsScreenProps } from '@src/navigation/ExploreStackScreen';

interface IProps {
  route?: 'Post' | 'Event';
  navigate?: (_: 'Event' | 'Post') => void;
}
const PostDetailsHeader: React.FC<IProps> = (props) => {
  const { route, navigate } = props;
  const { canGoBack, goBack } =
    useNavigation<PostDetailsScreenProps['navigation']>();
  return (
    <View style={styles.header}>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          left: 2,
        }}>
        <Neumorph
          style={{
            backgroundColor: COLORS.white_3,
            width: scaleSize(36),
            height: scaleSize(36),
            borderRadius: scaleSize(36) / 2,
          }}>
          <IconButton
            size={scaleSize(36)}
            icon={
              <Ionicons name='close' size={24} color={COLORS.dark_gray_2} />
            }
            onPress={() => {
              if (canGoBack()) goBack();
            }}
          />
        </Neumorph>
      </View>

      <Stack direction='row' space={scaleSize(10)}>
        <Button
          title={'Post'}
          selected={route === 'Post'}
          onPress={() => {
            // navigate('Post');
          }}
        />
        <Button
          title={'Event'}
          selected={route === 'Event'}
          onPress={() => {
            // navigate('Event');
          }}
        />
      </Stack>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          right: 2,
        }}>
        <Neumorph
          style={{
            backgroundColor: COLORS.white_3,
            width: scaleSize(36),
            height: scaleSize(36),
            borderRadius: scaleSize(36) / 2,
          }}>
          <IconButton
            size={scaleSize(36)}
            icon={
              <Ionicons name='search' size={24} color={COLORS.dark_gray_2} />
            }
          />
        </Neumorph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gray_1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleSize(24),
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black_1,
  },
  headerLeft: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: scaleSize(10),
  },
  headerRight: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: scaleSize(10),
    backgroundColor: 'red',
  },
});
export default PostDetailsHeader;
