import React from 'react';
import {
    ScrollView,View,Text
} from 'react-native';
import SettingsCards from '../../components/SettingsCards';
const Settings = () => {
    return (
        <ScrollView>
            <SettingsCards title={"Oynat ve İndir"} Info={"Kalite ve Wi-Fi yönetimi"}></SettingsCards>
            <SettingsCards title={"Bildirimler"} Info={"Açık"}></SettingsCards>
            <SettingsCards title={"Otomatik Oynatma"} keys={"dsafsd"} Info={"Sonraki bölümü otomatik olarak başlatır"}></SettingsCards>
            <SettingsCards title={"Ebeveyn Kontrolleri"} Info={"İzlenebilecek içerikleri kontrol edin"}></SettingsCards>
            <SettingsCards title={"Kayıtlı cihazlar"} Info={"Tüm kayıtlı cihazları görün"}></SettingsCards>
            <SettingsCards title={"Çerez tercihleri"} Info={""}></SettingsCards>
            <SettingsCards title={"Video arama geçmişini temizle"} Info={""}></SettingsCards>
            <SettingsCards title={"Goktug Fevzi Ozcelik olarak giriş yapıldı"} Info={"Tüm Amazon uygulamalarından çıkış yapın"}></SettingsCards>
            <SettingsCards title={"Hesabı Yönet"} Info={"Üyelik bilgilerine ve ödeme yöntemlerine erişin"}></SettingsCards>
            <SettingsCards title={"Gizli videolar"} Info={""}></SettingsCards>
            <SettingsCards title={"Dil"} Info={"Türkçe"}></SettingsCards>
            <SettingsCards title={"Yardım ve Geri Bildirim"} Info={""}></SettingsCards>
            <SettingsCards title={"Hakkında ve Yasal Hususlar"} Info={""}></SettingsCards>
        </ScrollView>
    );
};

export default Settings;

