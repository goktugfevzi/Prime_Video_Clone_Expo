import React from 'react';
import { ScrollView } from 'react-native';
import SettingsCards from '../../components/Cards/SettingsCards';

export default Settings = () => {
    return (
        <ScrollView>
            <SettingsCards title={"Play and Download"} Info={"Quality and Wi-Fi Management"}></SettingsCards>
            <SettingsCards title={"Notifications"} Info={"On"}></SettingsCards>
            <SettingsCards title={"Auto Play"} keys={"dsafsd"} Info={"Automatically Starts The Next Episode"}></SettingsCards>
            <SettingsCards title={"Parental Controls"} Info={"Check Viewable Content"}></SettingsCards>
            <SettingsCards title={"Registered Devices"} Info={"See All Registered Devices"}></SettingsCards>
            <SettingsCards title={"Cookie Preferences"} Info={""}></SettingsCards>
            <SettingsCards title={"Clear Video Call History"} Info={""}></SettingsCards>
            <SettingsCards title={"Login as Goktug Fevzi Ozcelik"} Info={"Sign Out of All Amazon Apps"}></SettingsCards>
            <SettingsCards title={"Manage Account"} Info={"Access Membership Information and Payment Methods"}></SettingsCards>
            <SettingsCards title={"Hidden Videos"} Info={""}></SettingsCards>
            <SettingsCards title={"Language"} Info={"English"}></SettingsCards>
            <SettingsCards title={"Help and Feedback"} Info={""}></SettingsCards>
            <SettingsCards title={"About and Legal Considerations"} Info={""}></SettingsCards>
        </ScrollView>
    );
};