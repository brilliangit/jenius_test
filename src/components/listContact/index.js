import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://randomuser.me/api/portraits/thumb/men/97.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://randomuser.me/api/portraits/thumb/men/97.jpg',
    subtitle: 'Vice Chairman',
  },
];

const ListContact = props => {
  const showDetail = dt => {
    console.log('lihat', dt);
  };
  const handleDelete = dt => {
    console.log('delete', dt);
  };
  return (
    <View>
      {list.map((l, i) => (
        <ListItem.Swipeable
          key={i}
          bottomDivider
          rightContent={
            <Button
              title="Info"
              icon={{ name: 'info', color: 'white' }}
              buttonStyle={{ minHeight: '100%' }}
              onPress={() => handleDelete(l)}
            />
          }
          leftContent={
            <Button
              onPress={() => showDetail(l)}
              title="Hapus"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
          }>
          <Avatar rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem.Swipeable>
      ))}
    </View>
  );
};

export default ListContact;

const styles = StyleSheet.create({});
