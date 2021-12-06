import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Yesterday from './components/Yesterday';

function App() {
    const [modalVisible, setModalVisible] = useState(false);

    const [todos, setTodos] = useState([
        { id: 1, text: 'meet with Jane', done: true },
        { id: 2, text: 'study science', done: false },
        { id: 3, text: 'go to the school', done: false },
    ]);

    const onToggle = id => {
        const nextTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo, );
        setTodos(nextTodos);

    };
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide" 
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                } }
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>There are some rest plans!</Text>
                        <Text style={styles.modalText}>If you want, you can add plans for tommorow by checking</Text>

                        <Yesterday todos={todos} onToggle={onToggle} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close Menu</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Open Menu</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;