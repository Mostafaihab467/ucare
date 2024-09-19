let intialState = {
    update: false,
    loading: false
}







interface ActionProps {
    type: string
    payload: any
    data: any
}










const userReducer = (state = intialState, action: ActionProps) => {

    switch(action.type){




        default:
            return state
    }
}


export default userReducer