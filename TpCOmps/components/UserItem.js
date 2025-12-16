import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{user.name} ({user.email})</Text>
      <View style={styles.actions}>
        <Button title="Modifier" onPress={onEdit} />
        <View style={styles.spacer} />
        <Button title="Supprimer" color="red" onPress={onDelete} />
      </View>
    </View>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  spacer: {
    width: 10,
  },
});

export default UserItem;
