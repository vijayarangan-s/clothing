import { userActionType } from "../../types/user/user.type"

export const googleSignInStart = () => ({
    type: userActionType.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionType.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  });

export const signInSuccess = user => ({
    type:userActionType.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionType.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionType.CHECH_USER_SESSION
})

export const signOutStart = () => {
    return {
        type: userActionType.SIGN_OUT_START
    }
}

export const signOutSuccess = () => ({
    type: userActionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionType.SIGN_OUT_FAILURE ,
    payload: error
})

export const signUpStart = (userCredential) => {
    console.log({ac:userCredential})
    return{
        type: userActionType.SIGN_UP_START,
        payload: userCredential
    }
}

export const signUpSuccess = ({user, additionalData}) => ({
    type: userActionType.SIGN_UP_SUCCESS,
    payload:{user, additionalData}
})

export const signUpFailure = error => ({
    type: userActionType.SIGN_UP_FAILURE,
    payload: error
})