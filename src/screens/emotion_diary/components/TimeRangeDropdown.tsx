import {scaleSize} from '@core/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '@src/assets/const';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {LayoutChangeEvent, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Option from './Option';

type Props = {
    onChanged: (_: string) => void;
};

const OPTIONS = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'All time'];
const TimeRangeDropdown: React.FC<Props> = props => {
    const {t} = useTranslation();
    const [showDropList, setShowDropList] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(OPTIONS[0]);
    const [optionHeight, setOptionHeight] = useState<number>(0);

    const {onChanged} = props;
    const getDimension = (event: LayoutChangeEvent) => {
        const {height} = event.nativeEvent.layout;
        setOptionHeight(height);
    };

    return (
        <TouchableWithoutFeedback onPress={() => setShowDropList(false)}>
            <View style={styles.container}>
                <Text style={styles.title}>{t('Time range')}:</Text>
                <View style={styles.dropdown}>
                    <View
                        onLayout={event => {
                            getDimension(event);
                        }}>
                        <Option
                            value={selectedOption}
                            rounded={!showDropList}
                            roundedTop={showDropList}
                            onPress={() => setShowDropList(!showDropList)}
                            icon={
                                <Ionicons name="chevron-down-outline" size={scaleSize(20)} color={COLORS.dark_gray_2} />
                            }
                        />
                    </View>
                    {showDropList && (
                        <View
                            style={[
                                styles.dropdownList,
                                {
                                    top: optionHeight,
                                },
                            ]}>
                            {OPTIONS.map((value, index, arr) => {
                                const transValue = t(value);
                                let roundedTemp = false;
                                if (index === OPTIONS.length - 2 && arr[OPTIONS.length - 1] === selectedOption) {
                                    roundedTemp = true;
                                }
                                return (
                                    <Option
                                        key={index}
                                        value={transValue}
                                        selected={value === selectedOption}
                                        roundedBottom={index === OPTIONS.length - 1 || roundedTemp}
                                        onPress={() => {
                                            setShowDropList(false);
                                            setSelectedOption(transValue);
                                            onChanged(transValue);
                                        }}
                                    />
                                );
                            })}
                        </View>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default TimeRangeDropdown;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: scaleSize(20),
        elevation: 10,
        zIndex: 1000,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.black_1,
    },
    dropdown: {
        position: 'relative',
    },
    dropdownList: {
        position: 'absolute',
        top: 32,
        left: 0,
        elevation: 10,
        zIndex: 1000,
    },
});
