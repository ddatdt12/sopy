import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

type Props = {
    center?: boolean;
    size?: number | 'small' | 'large' | undefined;
};

const Loading = (props: Props) => {
    const {center = true, size} = props;
    return (
        <View
            style={[
                center && {
                    flex: 1,
                    alignItems: 'center',
                },
            ]}>
            <ActivityIndicator size={size ?? 'large'} style={{marginTop: scaleSize(20)}} color={COLORS.dark_gray_2} />
        </View>
    );
};

export default Loading;
