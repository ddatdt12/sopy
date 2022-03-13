import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from '@core/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {STYLES} from '@src/assets/const';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';

type Props = {
    visible?: boolean;
    visibleToggle: () => void;
};

const PopupDropdown: React.FC<Props> = props => {
    const {visibleToggle, visible, children} = props;
    return (
        <View
            style={{
                width: '100%',
                position: 'relative',
                flexDirection: 'row-reverse',
                paddingVertical: scaleSize(16),
                alignItems: 'center',
                paddingHorizontal: scaleSize(16),
                zIndex: 100,
                elevation: 12,
                shadowColor: 'transparent',
            }}>
            <Neumorph circle>
                <IconButton
                    onPress={visibleToggle}
                    style={[STYLES.deepShadow]}
                    icon={<Ionicons name="ellipsis-horizontal" size={30} />}
                    activeOpacity={0.8}
                />
            </Neumorph>

            {visible && (
                <View
                    style={{
                        position: 'absolute',
                        top: scaleSize(56),
                        left: scaleSize(12),
                        zIndex: 100,
                    }}>
                    {children}
                </View>
            )}
        </View>
    );
};

export default PopupDropdown;

const styles = StyleSheet.create({
    editButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        marginTop: scaleSize(16),
        marginRight: scaleSize(16),
        alignSelf: 'flex-end',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        alignItems: 'center',
        justifyContent: 'center',
        ...STYLES.deepShadow,
    },
});
