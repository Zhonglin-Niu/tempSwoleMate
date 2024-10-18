import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    name: "John Smith",
    message: "Hey, how's your workout going?",
    time: "13.18",
    avatar: require("@/assets/avatars/1.png"),
  },
  {
    id: "2",
    name: "Emily Johnson",
    message: "Want to meet up at the gym later?",
    time: "12.13",
    avatar: require("@/assets/avatars/2.png"),
  },
  {
    id: "3",
    name: "Michael Brown",
    message: "Thanks for the protein shake recipe!",
    time: "13.31",
    avatar: require("@/assets/avatars/3.png"),
  },
  {
    id: "4",
    name: "Sarah Davis",
    message: "How was your run this morning?",
    time: "11.31",
    avatar: require("@/assets/avatars/4.png"),
  },
  {
    id: "5",
    name: "David Wilson",
    message: "Let's plan our next hiking trip!",
    time: "10.21",
    avatar: require("@/assets/avatars/5.png"),
  },
];

type ChatItemType = {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
};

const ChatItem = ({ item }: { item: ChatItemType }) => (
  <View style={styles.chatItem}>
    <Image source={item.avatar} style={styles.avatar} />
    <View style={styles.chatInfo}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
    <Text style={styles.time}>{item.time}</Text>
  </View>
);

const RecentChatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Chats</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        {["Matched", "Pending", "Requests"].map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, index === 0 && styles.activeTab]}
          >
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatItem item={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.bottomNav}>
        {["Home", "Message", "Profile"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.navItem, index === 1 && styles.activeNavItem]}
          >
            <Text style={[styles.navText, index === 1 && styles.activeNavText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  activeTab: {
    backgroundColor: "#6A5ACD",
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#FFF",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E6E6FA",
    marginBottom: 8,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    color: "#666",
  },
  time: {
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeNavItem: {
    backgroundColor: "#6A5ACD",
  },
  navText: {
    color: "#000",
  },
  activeNavText: {
    color: "#FFF",
  },
});

export default RecentChatsScreen;
