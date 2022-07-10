import React, {createContext, useState} from "react";

export const UserProfileContext = createContext({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    address: "",
    pet:"",

    setUserProfileContext: infos => {}
})

const UserProfileContextProvider = ({children}) => {
    const userProfileState = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        address: "",
        pet:"",

        setUserProfileContext: infos =>
            setUserProfile(prevState => ({
            ...prevState,
            firstname: infos.firstname,
            lastname: infos.lastname,
            email: infos.email,
            username: infos.username,
            address: infos.address,
            pet: infos.pet
        }))
    }

    const [userProfile, setUserProfile] = useState(userProfileState);
    return (<UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider
