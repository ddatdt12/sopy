import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import IconButton from '@src/components/IconButton';
import {EmotionDiaryScreenProps} from '@src/navigation/AuthStackParams';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Arrow from './components/Arrow';
import DiaryCard from './components/DiaryCard';
import ListDiary from './components/ListDiary';
import {diaryList} from './data';

type Props = {};

const EmotionDiaryScreen: React.FC<Props> = props => {
    const {t} = useTranslation();
    const navigation = useNavigation<EmotionDiaryScreenProps['navigation']>();

    const [selectedDate, setSelectedDate] = useState<DateData | null>(null);

    const renderArrow = (direction: 'left' | 'right') => <Arrow variant={direction} />;

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={false}>
            <ScrollView style={{paddingHorizontal: scaleSize(10)}} contentContainerStyle={{justifyContent: 'center'}}>
                <View style={{flexDirection: 'row-reverse', marginTop: scaleSize(12)}}>
                    <Button
                        title={t('Dashboard')}
                        onPress={() => navigation.push('DashboardEmotionDiary')}
                        textStyle={{color: COLORS.black_1}}
                    />
                </View>
                <Calendar
                    theme={{
                        backgroundColor: COLORS.gray_1,
                        calendarBackground: COLORS.gray_1,
                        todayTextColor: COLORS.black_1,
                        dayTextColor: COLORS.dark_gray_2,
                        textMonthFontWeight: '900',
                        textDayHeaderFontWeight: '900',
                        textDayHeaderFontSize: SIZES.h4,
                    }}
                    minDate={'2022-01-01'}
                    onDayPress={day => {
                        setSelectedDate(day);
                    }}
                    monthFormat={'MMMM yyyy'}
                    firstDay={1}
                    enableSwipeMonths={true}
                    renderArrow={renderArrow}
                    markingType={'custom'}
                    markedDates={
                        selectedDate
                            ? {
                                  [selectedDate.dateString]: {
                                      customStyles: {
                                          container: {
                                              backgroundColor: COLORS.white_2,
                                              elevation: 2,
                                              borderWidth: 1,
                                              borderColor: COLORS.dark_gray_2,
                                          },
                                      },
                                  },
                              }
                            : {}
                    }
                    // displayLoadingIndicator={true}
                    style={styles.calendar}
                />
                {/* <ListDiary data={diaryList} /> */}
                {diaryList.map(diary => (
                    <DiaryCard key={diary.id} {...diary} />
                ))}
            </ScrollView>
        </Box>
    );
};

export default EmotionDiaryScreen;

const styles = StyleSheet.create({
    calendar: {
        marginBottom: scaleSize(10),
        marginTop: scaleSize(20),
        borderRadius: scaleSize(12),
        width: '97.5%',
        alignSelf: 'center',
        ...STYLES.shadow,
    },
});
