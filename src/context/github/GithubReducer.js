const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            }

        case 'SET_LOADING':
            const payload = action.payload === undefined ? true : action.payload
            return {
                ...state,
                loading: payload,
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }

        default:
            return state
    }
}

export default githubReducer