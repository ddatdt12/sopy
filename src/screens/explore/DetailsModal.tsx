import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import PostDetailsHeader from './post_details/PostDetailsHeader';

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

const DetailsModal: React.FC<Props> = props => {
    const {isVisible, onClose, children} = props;
    const [touchY, setTouchY] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            setFullScreen(false);
        }
    }, [isVisible]);

    return (
        <ReactNativeModal
            isVisible={isVisible}
            onSwipeComplete={() => {
                onClose();
            }}
            swipeDirection={!fullScreen ? ['down'] : undefined}
            style={{margin: 0, justifyContent: 'flex-end'}}
            backdropOpacity={0.4}>
            <View
                style={[
                    styles.modal,
                    fullScreen && {
                        height: '100%',
                        borderTopEndRadius: 0,
                        borderTopStartRadius: 0,
                    },
                ]}
                onTouchStart={e => setTouchY(e.nativeEvent.pageY)}
                onTouchEnd={e => {
                    if (touchY - e.nativeEvent.pageY > 50) {
                        setFullScreen(true);
                    }
                }}>
                <PostDetailsHeader closeModal={onClose} />
                {children}
            </View>
        </ReactNativeModal>
    );
};

export default DetailsModal;

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '92%',
        backgroundColor: COLORS.gray_1,
        borderTopEndRadius: scaleSize(20),
        borderTopStartRadius: scaleSize(20),
        overflow: 'hidden',
    },
});
