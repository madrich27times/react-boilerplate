export const APP_LOADING = 'app/APP_LOADING';
export const APP_LOAD_SUCCESS = 'app/APP_LOAD_SUCCESS';

export const appLoading = () => ({
    type: APP_LOADING,
});

export const appLoaded = () => ({
    type: APP_LOAD_SUCCESS,
});
