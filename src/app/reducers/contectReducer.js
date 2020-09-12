

const initialState = {
    // fullname: '',
    // phone: '',
}

export default function contectReducer(state = initialState, action) {
    switch (action.type) {
        case 'FULL_NAME':
            return {
                ...state,
                FullName: state.fullname = action.payload
            }
        case 'PHONE':
            return {
                ...state,
                Phone: state.phone = action.payload
            }
        default:
            return state;
    }


}