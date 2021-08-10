import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  getListContactById,
  resetDetail,
  createContact,
  updateContact
} from '../../services/actions/contactActions';
import {resetAlert} from '../../services/actions/alertActions';
import { Card, Input, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const initState = {
  age: 0,
  firstName: '',
  lastName: '',
  photo: 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
}

export const DetailScreen = (props) => {
  const { resetalert, route, navigation, getDetail, detail, resetdetail, create, update, alert } = props;
  const [state, setstate] = React.useState(initState)
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    let mounted = true
    if (route.params.id) {
      getDetail(route.params.id)
    }
    return () => {
      mounted = false
      setstate(initState)
      setDisabled(false)
      resetdetail()
      resetalert()
    }
  }, [])

  React.useEffect(() => {
    if (Object.keys(detail).length > 0) {
      setstate({
        ...state,
        age: detail.age,
        firstName: detail.firstName,
        lastName: detail.lastName,
        photo: detail.photo
      })
    }
  }, [detail])
  React.useEffect(() => {
    if (alert.type == 'success') {
      navigation.goBack()
    } else {
      setDisabled(false)
    }
  }, [alert])

  const handleSubmit = () => {
    setDisabled(true)
    if (route.params.id) {
      update(route.params.id, state)
    } else {
      create(state)
    }
  }

  return (
    <View>
      <Card>
        <Card.Image source={{ uri: state.photo }} />
        <Card.Divider />
        <Input
          disabledInputStyle={{ background: "#ddd" }}
          label="Nama depan"
          leftIcon={<Icon name="account-outline" size={20} />}
          placeholder="contoh: Jhon"
          value={state.firstName}
          name="firstName"
          onChangeText={(e) => setstate({ ...state, firstName: e })}
        />
        <Input
          disabledInputStyle={{ background: "#ddd" }}
          label="Nama belakang"
          leftIcon={<Icon name="account-outline" size={20} />}
          placeholder="contoh: Jhon"
          value={state.lastName}
          name="lastName"
          onChangeText={(e) => setstate({ ...state, lastName: e })}
        />
        <Input
          disabledInputStyle={{ background: "#ddd" }}
          label="Umur"
          leftIcon={<Icon name="account-outline" size={20} />}
          placeholder="contoh: 17"
          value={state.age.toString()}
          name="age"
          onChangeText={(e) => setstate({ ...state, age: e })}
        />
        <Button
          title="Simpan"
          disabled={disabled}
          onPress={handleSubmit}
        />
      </Card>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    detail: state.contact.dataById,
    alert: state.alert
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: (id) => dispatch(getListContactById(id)),
    resetdetail: () => dispatch(resetDetail()),
    create: (payload) => dispatch(createContact(payload)),
    update: (id, payload) => dispatch(updateContact(id, payload)),
    resetalert: () => dispatch(resetAlert())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
