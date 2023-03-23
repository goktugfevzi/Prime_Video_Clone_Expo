import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default ProfileButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProfileStack")}>
      <Image style={{ width: 80, height: 40, resizeMode: "contain", marginRight: -15 }}
        source={require('../../../assets/profile-img.png')} />
    </TouchableOpacity>
  )
}


