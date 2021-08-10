import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { getListContact, deleteContact } from '../../services/actions/contactActions';
import { useNavigation } from '@react-navigation/native';

const ListContact = props => {
  const { getContact, contact, delCont, alert, resetAlert } = props;
  const [state, setstate] = React.useState([]);
  const navigation = useNavigation();

  const showDetail = dt => {
    navigation.navigate('Detail', { id: dt.id });
  };

  const handleDelete = dt => {
    delCont(dt.id)
  };

  React.useEffect(() => {
    getContact();
  }, []);

  React.useEffect(() => {
    setstate(contact);
  }, [contact]);

  React.useEffect(() => {
    if (alert.type !== 'reset') {
      Alert.alert(
        "Informasi",
        alert.message,
        [
          { text: "OK", onPress: () =>  resetAlert() }
        ]
      );
    }

    if (alert.type === 'success') getContact();
  }, [alert]);

  return (
    <View>
      {state.map((l, i) => (
        <ListItem.Swipeable
          key={i}
          bottomDivider
          rightContent={
            <Button
              title="Info"
              icon={{ name: 'info', color: 'white' }}
              buttonStyle={styles.btnDelete}
              onPress={() => showDetail(l)}
            />
          }
          leftContent={
            <Button
              onPress={() => handleDelete(l)}
              title="Hapus"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={styles.btnInfo}
            />
          }>
          <Avatar
            rounded
            source={{ uri: l.photo }}
          />
          <ListItem.Content>
            <ListItem.Title>{`${l.firstName} ${l.lastName}`}</ListItem.Title>
            <ListItem.Subtitle>{l.age} Tahun</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem.Swipeable>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    alert: state.alert,
    contact: state.contact.data ? state.contact.data : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContact: id => dispatch(getListContact(id)),
    delCont: id => dispatch(deleteContact(id)),
    resetAlert: () => dispatch({type: 'ALERT_RESET'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);

const styles = StyleSheet.create({
  btnInfo: {
    minHeight: '100%',
    backgroundColor: 'red',
  },
  btnDelete: {
    minHeight: '100%',
  },
});
