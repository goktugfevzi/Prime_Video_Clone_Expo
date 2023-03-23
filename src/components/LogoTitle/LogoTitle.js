import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default LogoTitle = () => {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 80, height: 25, resizeMode: "center" }}
        source={require('../../../assets/logo_white.png')}
      />
    </TouchableOpacity>

  )
}