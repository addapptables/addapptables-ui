
export const store = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return []
        case 'TOGGLE_TODO':
            return []
        default:
            return state
    }
}
