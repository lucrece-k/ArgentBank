import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  "usernames/fetchUserProfile",
  async (token, { rejectWithValue }) => {
    const apiProfile = "http://localhost:3001/api/v1/user/profile";
    try {
      const response = await fetch(apiProfile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.message || "Erreur lors de la récupération du profil"
        );
      }
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userNameSlice = createSlice({
  name: "usernames",
  initialState: {
    firstName: "",
    lastName: "",
    loading: false,
    error: null,
    userName: "",
    token: null,
  },
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    loagout: (state) => {
      state.userName = "";
      state.lastName = "";
      state.userName = "";
      state.token = null;
    },
    loaginOk: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Erreur inconnue";
      });
  },
});

export const { updateUserName, loaginOk, loagout } = userNameSlice.actions;

export default userNameSlice.reducer;
