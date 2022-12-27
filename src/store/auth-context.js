import { React, useEffect, useState } from 'react'

const AuthContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem : (item) => { },
    removeItem : (id) => {}
})

const AuthContextProvider = (props) => {
    const 
}