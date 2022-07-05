import React from 'react'

function CustomStackScreen(props) {
  return (
    <Stack.Screen {...props} options={{headerShown:false}}/>
  )
}

export default CustomStackScreen