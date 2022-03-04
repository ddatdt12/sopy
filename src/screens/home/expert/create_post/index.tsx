import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import {CreatePostScreenProps} from '@src/navigation/expert/NavigatorParams';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import CheckBox from '@react-native-community/checkbox';
import Neumorph from '@src/components/Neumorph';
const CreatePostScreen: React.FC<CreatePostScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <Box container bgColor={COLORS.gray_1} safeArea>
            <Header />
            <Box container paddingHorizontal={scaleSize(10)}>
                <View>
                    <Text style={styles.title}>Title</Text>
                </View>

                <View>
                    <TextInput style={styles.input} />
                </View>

                <View></View>
                <View>
                    <TextInput
                        style={styles.input2}
                        placeholder="Write something here..."
                        placeholderTextColor="#8F9BB2"
                        multiline={true}
                        numberOfLines={10}
                        textAlignVertical="top"
                    />
                </View>

                <TouchableOpacity style={styles.add}>
                    <Text style={styles.pic}> Add picture </Text>
                </TouchableOpacity>
            </Box>
        </Box>
    );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        backgroundColor: '#E9F0F7',
        borderRadius: 100,
        color: 'black',
        textAlign: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },

    main: {
        color: '#193566',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    bgdone: {
        backgroundColor: '#E9F0F7',
        borderRadius: 30,
        shadowColor: '#FFFFFF',
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    done: {
        margin: 1,
        color: '#193566',
        fontSize: 20,
        fontStyle: 'normal',
        justifyContent: 'center',
        textAlign: 'center',
    },

    title: {
        color: '#8F9BB2',
        marginLeft: 0,
        fontSize: 20,
        paddingTop: 30,
        paddingBottom: 5,
    },

    input: {
        backgroundColor: '#E9F0F7',
        color: '#1D325E',
        paddingTop: 4,
        marginLeft: 4,
        marginRight: 4,
        borderColor: '#8F9BB2',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },

    text: {
        color: '#1D325E',
        fontSize: 22,
        margin: 8,
    },

    input2: {
        height: 200,
        fontSize: 20,
        backgroundColor: '#E9F0F7',
        color: '#193566',
        paddingHorizontal: 10,
        marginLeft: 2,
        marginRight: 2,
        borderColor: '#8F9BB2',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },

    add: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
        shadowColor: '#D6E5F2',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },
    pic: {
        color: '#193566',
        fontSize: 24,
        fontStyle: 'normal',
        justifyContent: 'center',
        textAlign: 'center',
    },
});
