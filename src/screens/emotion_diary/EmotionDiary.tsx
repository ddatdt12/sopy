import { scaleSize } from '@core/utils';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import { EmotionDiaryScreenProps } from '@src/navigation/AuthStackParams';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import DiaryCard from './components/DiaryCard';

type Props = {};

const EmotionDiaryScreen: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const navigation = useNavigation<EmotionDiaryScreenProps['navigation']>();

  const [selectedDate, setSelectedDate] = useState<DateData | null>(null);
  return (
    <Box
      bgColor={COLORS.gray_1}
      container
      safeArea={false}
      marginHorizontal={scaleSize(20)}>
      <View>
        <View
          style={{ flexDirection: 'row-reverse', marginTop: scaleSize(12) }}>
          <Button
            title={t('Dashboard')}
            onPress={() => navigation.push('DashboardEmotionDiary')}
            style={{ elevation: 30 }}
            textStyle={{ color: COLORS.black_1 }}
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
          onDayPress={(day) => {
            setSelectedDate(day);
          }}
          monthFormat={'MMMM yyyy'}
          firstDay={1}
          enableSwipeMonths={true}
          // FIXME: change to icon
          renderArrow={(direction) =>
            direction === 'left' ? <Text>Left</Text> : <Text>Right</Text>
          }
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

        <View>
          <DiaryCard />
          <DiaryCard />
          <DiaryCard />
        </View>
      </View>
    </Box>
  );
};

export default EmotionDiaryScreen;

const styles = StyleSheet.create({
  calendar: {
    marginVertical: scaleSize(20),
    borderRadius: scaleSize(12),
    shadowColor: COLORS.dark_gray_1,
    shadowOffset: {
      width: 4,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 20,
  },
});
