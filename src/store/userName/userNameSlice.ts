import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserNameState {
    firstName: string;
    lastName: string;
    email: string;
    isRegister: boolean;
}

const initialState: UserNameState = {
    firstName: "",
    lastName: "",
    email: "",
    isRegister: false,
}

const userNameSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setIsRegister: (state, action: PayloadAction<boolean>) => {
            state.isRegister = action.payload;
        }
    },
});

export const { setFirstName, setLastName, setEmail, setIsRegister } = userNameSlice.actions;

export default userNameSlice.reducer;