import { createSlice } from "@reduxjs/toolkit";

export const downloadSlice = createSlice({
  name: "download",
  initialState: {
    downloadList: [
      {
        id: 550,
      },
      {
        id: 299536,
      },
      {
        id: 675,
      },
      {
        id: 597,
      },
      {
        id: 19995,
      },
    ],
  },
  reducers: {
    Add_DownloadList: (state, action) => {
      var isInclude = false;
      [...state.downloadList].map(function (item) {
        item.id == action.payload.id
          ? (isInclude = true)
          : (isInclude = isInclude);
      });
      if (!isInclude) {
        var newMovies = {};
        newMovies.id = action.payload.id;
        newMovies.title = action.payload.title;
        newMovies.poster_path = action.payload.poster_path;
        return { ...state, downloadList: [...state.downloadList, newMovies] };
      } else {
        return state;
      }
    },
    Remove_DownloadList: (state, action) => {
      state.downloadList = [
        ...state.downloadList.filter((movie) => movie.id !== action.payload.id),
      ];
    },
  },
});

export const { Add_DownloadList, Remove_DownloadList } = downloadSlice.actions;

export const selectDownload = (state) => state.downloadList;

export default downloadSlice.reducer;
