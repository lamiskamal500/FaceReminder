export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  });
};

// const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();
