import React from "react";
import { FlatList } from "react-native";
import SettingsCards from "../../components/Cards/SettingsCards";

const settingsData = [
  { title: "Play and Download", info: "Quality and Wi-Fi Management" },
  { title: "Notifications", info: "On" },
  {
    title: "Auto Play",
    keys: "dsafsd",
    info: "Automatically Starts The Next Episode",
  },
  { title: "Parental Controls", info: "Check Viewable Content" },
  { title: "Registered Devices", info: "See All Registered Devices" },
  { title: "Cookie Preferences", info: "" },
  { title: "Clear Video Call History", info: "" },
  {
    title: "Login as Goktug Fevzi Ozcelik",
    info: "Sign Out of All Amazon Apps",
  },
  {
    title: "Manage Account",
    info: "Access Membership Information and Payment Methods",
  },
  { title: "Hidden Videos", info: "" },
  { title: "Language", info: "English" },
  { title: "Help and Feedback", info: "" },
  { title: "About and Legal Considerations", info: "" },
];

export default Settings = () => {
  const renderSettingsCard = ({ item }) => {
    return (
      <SettingsCards title={item.title} info={item.info} keys={item.keys} />
    );
  };

  return (
    <FlatList
      data={settingsData}
      renderItem={renderSettingsCard}
      keyExtractor={(index) => index.toString()}
    />
  );
};
