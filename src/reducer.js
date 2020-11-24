export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // debugginh
    token: "BQDwfjvH8gX75jbHey3nT9DjYm1bsKbY7vo2SnN-7mJPuje99f65B6r_BYTbGcr0J8g4eKVCPR2ZiLaYmzlrsjbFDeLMMaiZtAMz7gJD5m7mDbCefwBhdYyj4EVBJANMa8oGNXMeduXgadIOAVzk_tc3NPaERH_ucMpuSIvq-nAEGQ",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        
        default:
            return action.user
    }
}

export default reducer;