const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

//a tarves de if
const reducerIf = (state, action) => {
    if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        };
    } else {
        return {
            ...initialState,
        };
    }
};

//a traves de switch
const reducerSwitch = (state, action) => {
    switch (action.type) {
        case 'CHECK':
            return {
                ...state,
                loading: true,
            };
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }

};

// 3 forma
const reducerObject = (state) => ({
    'CHECK': {
        ...state,
        loading: true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state)[action.type];
    } else {
        state;
    }
}