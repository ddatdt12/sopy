import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {FEELS} from './EditPost';
import LabelCheckBox from './LabelCheckBox';

type Props = {
    value?: string;
    onChange: (value: string) => void;
};

const TagsCheckbox: React.FC<Props> = props => {
    const {value, onChange} = props;
    const {t} = useTranslation();
    return (
        <>
            <View style={styles.tagWrapper}>
                <Text style={styles.subtitle}>{t('Tag')}:</Text>
                <View style={styles.checkboxWrapper}>
                    <View>
                        {FEELS.slice(0, 4).map(tag => (
                            <LabelCheckBox
                                key={tag}
                                label={tag}
                                disabled={false}
                                value={value === tag}
                                onValueChange={() => onChange(tag)}
                            />
                        ))}
                    </View>

                    <View>
                        {FEELS.slice(4, 7).map(tag => (
                            <LabelCheckBox
                                key={tag}
                                label={tag}
                                disabled={false}
                                value={value === tag}
                                onValueChange={() => onChange(tag)}
                            />
                        ))}
                    </View>
                </View>
            </View>
            {!value && <Text style={styles.error}>{t('Please choose tag')}</Text>}
        </>
    );
};

const styles = StyleSheet.create({
    tagWrapper: {
        flexDirection: 'row',
        marginTop: scaleSize(10),
    },
    checkboxWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    subtitle: {
        ...FONTS.h3,
        color: COLORS.dark_gray_2,
        marginVertical: scaleSize(6),
        marginRight: scaleSize(20),
        marginLeft: scaleSize(6),
    },
    error: {
        color: COLORS.error_1,
        fontSize: scaleSize(16),
        marginTop: scaleSize(4),
        marginLeft: scaleSize(8),
    },
});
export default TagsCheckbox;
