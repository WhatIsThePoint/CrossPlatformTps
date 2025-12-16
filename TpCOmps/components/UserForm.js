import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const UserForm = ({ onSubmit, editingUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setEmail(editingUser.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [editingUser]);

    const handleSubmit = () => {
        if (!name || !email) return;
        onSubmit({ id: editingUser?.id, name, email });
        setName('');
        setEmail('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nom"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button
                title={editingUser ? 'Mettre à jour' : 'Ajouter'}
                onPress={handleSubmit}
            />
        </View>
    );
};

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    editingUser: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
};

UserForm.defaultProps = {
    editingUser: null,
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
});

export default UserForm;
