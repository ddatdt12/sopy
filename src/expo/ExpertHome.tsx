import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ExpertHomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/imageTop.png')} style={styles.backgroundTop} />
            <Image source={require('./assets/imageBottom.png')} style={styles.backgroundBottom} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>Hi Tan, </Text>
                <Text style={styles.text}>Have a nice day </Text>

                <View style={styles.spacebetween}>
                    <View style={styles.wrapper}>
                        <View style={styles.dot} />
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.Post}>
                                <Text style={styles.PostText}>Create post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Image source={require('./assets/imageLine.png')} style={styles.backgroundLine} />

                    <View style={styles.wrapper}>
                        <View style={styles.dot} />
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.Post}>
                                <Text style={styles.PostText}> Create event </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#EBF3FA',
    },
    backgroundTop: {
        flex: 1,
        position: 'absolute',
        top: 0,
    },
    backgroundBottom: {
        flex: 1,
        position: 'absolute',
        bottom: -25,
        right: 0,
    },
    textContainer: {
        marginTop: 120,
        marginHorizontal: 8,
    },

    text: {
        marginHorizontal: 30,
        color: '#334C78',
        fontSize: 32,
        fontWeight: 'bold',
    },
    box: {
        // marginTop: 20,
        // marginLeft: 50,
    },
    Post: {
        justifyContent: 'center',
        height: 56,
        width: 250,
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
        elevation: 14,
    },
    PostText: {
        //alignItems:"center",
        //justifyContent: "center",
        textAlign: 'center',
        fontSize: 24,
        color: '#8F9BB2',
        fontWeight: '600',
    },
    inner: {
        backgroundColor: '#F5F9FD',
        borderColor: '#E9F0F7',
        borderWidth: 1,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
    },
    spacebetween: {
        //justifyContent: "space-between",
        marginHorizontal: 30,
        marginTop: 10,
        position: 'relative',
    },
    backgroundLine: {
        position: 'absolute',
        left: 10,
        bottom: 59,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    dot: {
        backgroundColor: '#F5F9FD',
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        marginRight: 20,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
    },
    bottom: {
        marginHorizontal: 110,
        marginTop: 12,
    },
});
export default ExpertHomeScreen;
