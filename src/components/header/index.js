import * as React from "react";
import { Header } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const Headers = () => {
    const navigation = useNavigation();
    const goTo = () => {
        navigation.navigate('Tambah', { id: null })
    }
    return (
        <Header
            centerComponent={{ text: 'KONTAK', style: { color: '#fff' } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress: goTo }}
        />
    );
}

export default Headers;