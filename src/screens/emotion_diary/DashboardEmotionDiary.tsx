import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Box from '@src/components/Box';
import Stack from '@src/components/Stack';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {VictoryContainer, VictoryLabel, VictoryPie} from 'victory-native';
import data, {Feeling} from './components/data';
import Marker from './components/Marker';
import TimeRangeDropdown from './components/TimeRangeDropdown';
type Props = {};

const size = scaleSize(SIZES.WindowWidth) - 100;
const DashboardEmotionScreen: React.FC<Props> = props => {
    const {t} = useTranslation();
    const [feelingStatistic, setFeelingStatistic] = useState<Feeling[]>([]);
    const [selectedTimeRange, setSelectedTimeRange] = useState<string | null>(null);

    useEffect(() => {
        setFeelingStatistic(calculatePercent(data));
    }, []);

    const calculatePercent = (statistics: Feeling[]): Feeling[] => {
        const total = statistics.reduce((a, b) => a + (b.value || 0), 0);
        return statistics.map(feel => {
            return {...feel, y: feel.value !== 0 ? feel.value / total : 0};
        });
    };
    const handleChange = (value: string) => {
        setFeelingStatistic(
            calculatePercent(
                data.map(feel => {
                    return {...feel, value: Math.random() * 10 + 20};
                }),
            ),
        );
    };
    return (
        <Box bgColor={COLORS.gray_1} safeArea={false} container>
            <ScrollView style={{paddingHorizontal: scaleSize(20)}}>
                <TimeRangeDropdown onChanged={handleChange} />
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: scaleSize(20),
                        backgroundColor: 'white',
                        borderRadius: size / 2,
                        width: size,
                        height: size,
                        alignSelf: 'center',
                        position: 'relative',
                    }}>
                    <VictoryPie
                        cornerRadius={scaleSize(8)}
                        innerRadius={size / 4.5}
                        colorScale={feelingStatistic.map(feel => feel.color)}
                        padAngle={scaleSize(2)}
                        data={feelingStatistic}
                        labels={({datum}) => `${(datum.y * 100).toFixed(2)}%`}
                        // radius={100}
                        width={size + scaleSize(60)}
                        height={size + scaleSize(60)}
                        containerComponent={
                            <VictoryContainer
                                style={{
                                    backgroundColor: 'transparent',
                                    width: size + scaleSize(100),
                                    height: size + scaleSize(100),
                                }}
                            />
                        }
                        origin={{
                            x: size / 2 + scaleSize(30),
                            y: size / 2 + scaleSize(30),
                        }}
                        // labelRadius={100}
                        labelPosition={'centroid'}
                        labelPlacement="perpendicular"
                        labelComponent={<VictoryLabel verticalAnchor="middle" style={{zIndex: 1000, ...FONTS.h4}} />}
                        animate={{
                            duration: 500,
                            easing: 'exp',
                        }}
                    />
                    <Text style={styles.text}>Dashboard</Text>
                </View>

                <Stack direction="row" justifyContent="center" style={{marginTop: scaleSize(20)}}>
                    <View style={styles.column}>
                        <View
                            style={{
                                alignItems: 'flex-start',
                            }}>
                            {feelingStatistic.slice(0, 4).map(feel => (
                                <Marker key={feel.name} text={t(feel.name)} color={feel.color} />
                            ))}
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View
                            style={{
                                alignItems: 'flex-start',
                            }}>
                            {feelingStatistic.slice(4, feelingStatistic.length).map(feel => (
                                <Marker key={feel.name} text={t(feel.name)} color={feel.color} />
                            ))}
                        </View>
                    </View>
                </Stack>
            </ScrollView>
        </Box>
    );
};

export default DashboardEmotionScreen;

const styles = StyleSheet.create({
    column: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text: {
        ...FONTS.h2,
        color: COLORS.black_1,
        position: 'absolute',
    },
});
