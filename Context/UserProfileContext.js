import React, {createContext, useState} from "react";

const UserProfileContext = createContext({
    firstname: "",
    lastname: "",
    username: "",
    address: "",
    pets:""
})

const UserProfileContextProvider = ({children}) => {
    const userProfileInit = {
        firstname: "Anna",
        lastname: "Pellin",
        username: "anna.pellin@gmail.com",
        address: "7 rue du Mail 75002 Paris",
        pets:"Cannelle"
    }

    const [userProfile, setUserProfile] = useState(userProfileInit);
    
    return (
        <UserProfileContext.Provider value={{userProfile: userProfile, setUserProfile: setUserProfile}}>{children}</UserProfileContext.Provider>
    )
}

export {UserProfileContext}
export default UserProfileContextProvider
