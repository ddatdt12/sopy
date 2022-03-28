import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import feelApi from '@src/api/feelApi';
import {COLORS, FONTS, SIZES, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Loading from '@src/components/Loading';
import {useAppSelector} from '@src/store';
import {Feel} from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {Feelings} from '../home/user/feeling';
import DiaryCard from './components/DiaryCard';
import MarkerList from './components/MarkerList';
import {Feeling, feelingStatistics as data} from './data';
//import {Diary, diaryList as listDiary, Feeling, feelingStatistics as data} from './data';
type Props = {};

const size = scaleSize(SIZES.WindowWidth) - 100;
const DashboardEmotionScreen: React.FC<Props> = props => {
    const {t} = useTranslation();
    const [feelingStatistic, setFeelingStatistic] = useState<Feeling[]>([]);
    const [selectedFeel, setSelectedFeel] = useState<Feeling | null>(null);
    const [diaryList, setDiaryList] = useState<Feel[]>([]);
    const user = useAppSelector(state => state.auth.user);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSelectedFeel(prev => feelingStatistic.find(f => f.name === prev?.name) || null);
    }, [feelingStatistic]);

    const calculatePercent = (statistics: Feeling[]): Feeling[] => {
        const total = statistics.reduce((a, b) => a + (b.value || 0), 0);
        return statistics.map(feel => {
            const percentage = feel.value / total;
            return {...feel, y: feel.value !== 0 ? percentage : 0, percentage: `${Math.round(percentage * 100)}%`};
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

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        (async () => {
            try {
                let i = 1;
                const res = await feelApi.getUserFeel(user.firebase_user_id);
                if (mounted && res) {
                    data.map(item => {
                        const feel = res.filter(detail => detail.feel_id === i);
                        item.value = feel.length;
                        i++;
                    });
                    setDiaryList(res);
                    setFeelingStatistic(calculatePercent(data));
                }
            } catch (error) {
                console.log(error);
            }
            if (mounted) {
                setLoading(false);
            }
        })();

        return () => {
            mounted = false;
        };
    }, [user.firebase_user_id]);

    return (
        <Box bgColor={COLORS.gray_1} safeArea={false} container>
            <ScrollView style={{paddingHorizontal: scaleSize(20)}}>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <View style={styles.bigCircle}>
                            <VictoryPie
                                cornerRadius={scaleSize(8)}
                                innerRadius={size / 4.5}
                                colorScale={feelingStatistic.map(feel => feel.color)}
                                padAngle={({datum}) =>
                                    selectedFeel && datum.name === selectedFeel?.name ? 0 : scaleSize(2)
                                }
                                data={feelingStatistic}
                                labels={({datum}) =>
                                    false && datum.y > 0.04 && selectedFeel && datum.name === selectedFeel?.name
                                        ? datum.percentage
                                        : null
                                }
                                radius={({datum}) =>
                                    selectedFeel && datum.name === selectedFeel.name ? size * 0.5 : size * 0.44
                                }
                                width={size + scaleSize(60)}
                                height={size + scaleSize(60)}
                                origin={{
                                    x: size / 2 + scaleSize(30),
                                    y: size / 2 + scaleSize(30),
                                }}
                                style={{
                                    labels: {
                                        fill: 'white',
                                        ...FONTS.h4,
                                    },
                                    parent: {
                                        border: '3px solid blue',
                                        backgroundColor: 'transparent',
                                        width: size + scaleSize(100),
                                        height: size + scaleSize(100),
                                    },
                                }}
                                labelRadius={size * 0.35}
                                labelPosition={'centroid'}
                                labelPlacement="perpendicular"
                                animate={{
                                    easing: 'exp',
                                    // animationWhitelist: ['data'],
                                    onLoad: undefined,
                                    onEnter: undefined,
                                    onExit: {
                                        duration: 100,
                                        before: () => ({
                                            _y: 0,
                                            fill: 'orange',
                                            label: 'BYE',
                                        }),
                                    },
                                }}
                                events={[
                                    {
                                        target: 'data',
                                        eventHandlers: {
                                            onPress: () => {
                                                return [
                                                    {
                                                        target: 'labels',
                                                        mutation: mutationProps => {
                                                            const feel = feelingStatistic[mutationProps.index];
                                                            setSelectedFeel(prev =>
                                                                prev?.name === feel.name ? null : feel,
                                                            );
                                                        },
                                                    },
                                                ];
                                            },
                                        },
                                    },
                                ]}
                            />
                            <View style={styles.centerCircle}>
                                {!selectedFeel ? (
                                    <Text style={[styles.text]}>Dashboard</Text>
                                ) : (
                                    <>
                                        <Text style={[styles.text, {color: selectedFeel?.color}]}>
                                            {selectedFeel?.name}
                                        </Text>
                                        <Text style={{...FONTS.h3}}>{selectedFeel?.percentage}</Text>
                                    </>
                                )}
                            </View>
                        </View>
                    </>
                )}
                {!selectedFeel && <MarkerList />}
                {selectedFeel &&
                    diaryList
                        .filter(diary => Feelings[diary.feel_id - 1].name == selectedFeel.name)
                        .map(diary => (
                            <DiaryCard
                                key={diary.id}
                                time={diary.created_at!}
                                feel={Feelings[diary.feel_id - 1].name}
                                reason={diary.reason}
                            />
                        ))}
            </ScrollView>
        </Box>
    );
};

export default DashboardEmotionScreen;

const styles = StyleSheet.create({
    text: {
        ...FONTS.h3,
        color: COLORS.black_1,
    },
    bigCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scaleSize(20),
        backgroundColor: 'white',
        borderRadius: size / 2,
        width: size,
        height: size,
        alignSelf: 'center',
        position: 'relative',
        ...STYLES.shadow,
    },
    centerCircle: {
        position: 'absolute',
        backgroundColor: '#F5F9FD',
        height: size / 2.5,
        width: size / 2.5,
        borderRadius: size / 5,
        justifyContent: 'center',
        alignItems: 'center',
        ...STYLES.deepShadow,
    },
});
