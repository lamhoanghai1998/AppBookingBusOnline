import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Ticket = (props) => {
  return (
    <View style={{ ...styles.items, ...props.style }}>
      <View style={styles.mainInfo}>
        <View style={styles.info}>
          <Text style={styles.name}>{props.item.name}</Text>
          <Text style={styles.owner}>{props.item.owner}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.time}>{props.item.time}</Text>
          <Text style={styles.date}> {props.item.date} </Text>
        </View>
      </View>
      <View style={styles.location}>
        <Text style={{ ...styles.grid, ...styles.source }}>
          {props.item.source}
        </Text>
        <FontAwesome
          style={{ ...styles.grid, ...styles.arrowIcon }}
          name="long-arrow-right"
          size={24}
        />
        <Text style={{ ...styles.grid, ...styles.destination }}>
          {props.item.destination}
        </Text>
      </View>
      <View style={styles.amountWrapper}>
        {props.qty ? (
          <Text style={styles.amount}>{`${
            props.item.price * props.qty
          } VNĐ`}</Text>
        ) : (
          <Text style={styles.amount}>{`€${props.item.price}`}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    height: 180,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 5,
    borderLeftColor: Colors.primary,
    borderRightColor: Colors.danger,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  mainInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    // flex: 1,
    // alignSelf: "flex-end",
  },
  details: {
    // flex: 1,
  },
  name: {
    fontSize: wp("6%"),
    fontFamily: "roboto-bold",
    color: Colors.dark,
  },
  owner: {
    fontSize: wp("3%"),
    fontFamily: "roboto-light",
  },
  time: {
    fontSize: wp("5%"),
    fontFamily: "roboto-light",
  },
  date: {
    fontSize: wp("3%"),
    textAlign: "right",
    fontFamily: "roboto",
  },
  location: {
    flexDirection: "row",
    marginVertical: 10,
  },
  grid: {
    width: "33%",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "bebas",
    fontSize: wp("5%"),
  },
  amountWrapper: {
    alignItems: "center",
  },
  amount: {
    fontFamily: "bebas",
    fontSize: wp("7%"),
    color: Colors.primary,
  },
  source: {
    color: Colors.primary,
  },
  destination: {
    color: Colors.danger,
  },
  arrowIcon: {
    color: Colors.dark,
  },
  stations: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  midway: {
    color: Colors.ltGray,
    fontFamily: "roboto-light",
    flexWrap: "wrap",
  },
  midwayStation: {
    color: Colors.ltGray,
    fontFamily: "roboto",
  },
});

export default Ticket;
