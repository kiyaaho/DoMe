import React, {useState} from 'react';
import { Pressable, StyleSheet, View, Image, Modal, Text} from 'react-native';
import {theme} from '../theme';
import {images} from '../images';

const Menu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const _sort = id => {
        alert("sort");
    };

    const _delete = id => {
        alert("Delete");
    };

    const _search = id => {
        alert("competion rate");
    };

    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image source={images.menuClose} style={iconStyle.closeIcon}/>
              </Pressable>

              <Pressable
                style={styles.menuItem}
                onPress = {() => _sort()}
              >
                <Text styles = {styles.modalText}>Sort</Text>
              </Pressable>

              <Pressable
                style={styles.menuItem}
                onPress = {() => _delete()}
              >
                <Text styles = {styles.modalText}>Multiple delete</Text>
              </Pressable>

              <Pressable
                style={styles.menuItem}
                onPress = {() => _search()}
              >
                <Text styles = {styles.modalText}>Search</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image source={modalVisible ? images.menuClose : images.menu} style={iconStyle.icon}/>
        </Pressable>
      </View>


    );
};

const iconStyle = StyleSheet.create({
    icon: {
        tintColor: theme.text,
        width: 30,
        height: 30,
        margin: 10,
    },
    closeIcon: {
        tintColor: theme.text,
        width: 15,
        height: 15,
        margin: 5,
    }
});

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
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
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
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      menuItem: {
        borderRadius: 20,
        padding: 10,
      }
})
export default Menu; 