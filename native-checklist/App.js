import React, { useState } from "react";
import { StyleSheet, View, Switch, Text, Alert } from "react-native";

export default function App() {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const showAlert = () => {
    Alert.alert("Parabéns", "Agora você é um honorário corno!", [
      {
        text: "Confirmar!",
        onPress: () => {
          setCheck(false), setCheck2(false), setCheck3(false), setCheck4(false);
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Você quer testar isso ?</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <Switch
            value={check}
            onValueChange={() => {
              setCheck(!check);
            }}
            onChange={() => {
              setCheck2(false), setCheck3(false), setCheck4(false);
            }}
          />
          <Text style={styles.text}>Sim</Text>
        </View>
        {check ? (
          <View style={styles.item}>
            <Switch
              value={check2}
              onValueChange={() => {
                setCheck2(!check2);
              }}
              onChange={() => {
                setCheck3(false), setCheck4(false);
              }}
            />
            <Text style={styles.text}>Tem certeza ?</Text>
          </View>
        ) : null}
        {check2 ? (
          <View style={styles.item}>
            <Switch
              value={check3}
              onValueChange={() => {
                setCheck3(!check3);
              }}
              onChange={() => {
                setCheck4(false);
              }}
            />
            <Text style={styles.text}>Absoluta ?</Text>
          </View>
        ) : null}
        {check3 ? (
          <View style={styles.item}>
            <Switch
              value={check4}
              onValueChange={() => {
                setCheck4(!check4);
              }}
              onChange={!check4 ? showAlert : null}
            />
            <Text style={styles.text}>Ultima chance ?</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  list: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    marginHorizontal: 4
  }
});
