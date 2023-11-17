import { View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const AddButton = ({press}) => {
  return (
    <View style={{alignSelf:'flex-end'}}>
    <TouchableOpacity onPress={press}>
    <Image style={{height:50,width:50}} source={imagePath.icPlus} /> 
    </TouchableOpacity>
    </View>
  )
}

export default AddButton