
export default function (state, action) {
    switch (action.type) {
        case 'Add_Favorite':
            var isInclude = false;
            // Burada yeni eklenecek favori zaten var mı kontrolü yapılır.
            [...state.movies].map(function (item, index) {
                (item.id == action.payload.id) ? isInclude = true : isInclude = isInclude;
            });
            if (!isInclude) {
                var newMovies = {};
                newMovies.id = action.payload.id;
                newMovies.title = action.payload.title;
                newMovies.poster_path = action.payload.poster_path;
                return { ...state, movies: [...state.movies, newMovies] }
            }
            else {
                return state;
            }
            case 'REMOVE_FAVOURITE':
                return {
                  movies: [
                    ...state.movies.filter(movie => movie !== action.payload.movies),
                  ],
                };


        default:
            return state;
    }
}
