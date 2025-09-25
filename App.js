import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [suwat, setSuwat] = useState('');
  const [mensahe, setMensahe] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Add new message
  const handleSendMessage = () => {
    if (suwat.trim()) {
      setMensahe([...mensahe, suwat]);
      setSuwat('');
    }
  };

  // Add new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Reusable message renderer
  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Messenger Section */}
      <View style={styles.panelContainer}>
        <Text style={styles.header}>Messenger</Text>
        <View style={styles.panel}>
          <FlatList
            data={mensahe}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={suwat}
              onChangeText={setSuwat}
            />
            <Button title="Send" color="#1565c0" onPress={handleSendMessage} />
          </View>
        </View>
      </View>

      {/* Comment Section */}
      <View style={styles.panelContainer}>
        <Text style={styles.header}>Comment</Text>
        <View style={styles.panel}>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Button title="Post" color="#1565c0" onPress={handleAddComment} />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e3f2fd', // light blue background
    flexGrow: 1,
  },
  panelContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '600',
    color: '#0d47a1', // deep blue text
  },
  panel: {
    width: 320,
    height: 220,
    borderColor: '#90caf9', // light blue border
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  messages: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#1565c0', // blue for messages
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#90caf9',
    borderWidth: 1,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#f1f8ff',
  },
});