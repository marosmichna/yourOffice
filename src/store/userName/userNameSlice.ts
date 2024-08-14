import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserNameState {
    firstName: string;
    lastName: string;
    email: string;
}

const initialState: UserNameState = {
    firstName: "",
    lastName: "",
    email: "",
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
    },
});

export const { setFirstName, setLastName, setEmail } = userNameSlice.actions;

export default userNameSlice.reducer;