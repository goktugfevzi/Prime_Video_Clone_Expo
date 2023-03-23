import { createSlice } from '@reduxjs/toolkit';

export const watchSlice = createSlice({
    name: 'watch',
    initialState: {
        watchList: [{
            id: 533
        },
        {
          "id": 596,
        },
        {
          "id": 595,
        },
        {
          "id": 594,
        }],
    },
    reducers: {
        Add_WatchList: (state, action) => {
            var isInclude = false;
            [...state.watchList].map(function (item) {
                (item.id == action.payload.id) ? isInclude = true : isInclude = isInclude;
            });
            if (!isInclude) {
                var newMovies = {};
                newMovies.id = action.payload.id;
                newMovies.title = action.payload.title;
                newMovies.poster_path = action.payload.poster_path;
                return { ...state, watchList: [...state.watchList, newMovies] }
            }
            else {
                return state;
            }
        },
        Remove_WatchList: (state, action) => {
            state.watchList = [
                ...state.watchList.filter(movie => movie.id !== action.payload.id),
            ]
        },
    },
});

export const { Add_WatchList, Remove_WatchList } = watchSlice.actions;

export const selectWatch = state => state.watchList;

export default watchSlice.reducer;
