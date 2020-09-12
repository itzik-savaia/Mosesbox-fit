

const initialState = {
    username: '',
    password: '',
}

export default function contectReducer(state = initialState, action) {
    switch (action.type) {
        case 'USERNAME':
            return {
                ...state,
                FullName: initialState.fullname = action.payload
            }
        case 'PASSWORD':
            return {
                ...state,
                Phone: initialState.phone = action.payload
            }
        default:
            return state;
    }


}