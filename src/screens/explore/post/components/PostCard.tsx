import { scaleSize } from '@core/utils';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '@src/assets/const';
import Card from '@src/components/Card';
import { ExploreScreenProps } from '@src/navigation/ExploreStackScreen';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IPostCard {
  title: string;
  author: string;
  image: string;
  style?: {
    width?: number;
    margin?: number;
  };
}
const PostCard: React.FC<IPostCard> = (props) => {
  const navigation = useNavigation<ExploreScreenProps['navigation']>();
  const { title, author, image, style } = props;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PostDetails');
        }}>
        <Card
          style={[styles.card, { width: style?.width, margin: style?.margin }]}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode='cover'
          />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{author}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;

const width = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
  card: {
    height: scaleSize(225),
    backgroundColor: COLORS.white_1,
    //shadow
    borderRadius: scaleSize(6),
    overflow: 'hidden',
    // flex: 1,
    minWidth: width - scaleSize(24),
    maxWidth: width - scaleSize(24),
    marginBottom: scaleSize(20),
    marginHorizontal: scaleSize(6),
  },

  image: {
    width: '100%',
    height: scaleSize(150),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(16),
  },
  title: {
    ...FONTS.h4,
    color: COLORS.black_2,
  },
  subtitle: {
    fontSize: scaleSize(14),
    color: COLORS.dark_gray_2,
  },
});
