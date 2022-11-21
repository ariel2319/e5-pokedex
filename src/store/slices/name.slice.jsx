import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
		name: 'name', /* nombre de mi estado */
    initialState: "", /* valor inicial de nuestro estado */
    reducers: {
      
      setSpecificName : (state, action) => {
        const inputValue = action.payload
        return inputValue
      }
      
    }
})

export const { setSpecificName } = nameSlice.actions;

export default nameSlice.reducer;