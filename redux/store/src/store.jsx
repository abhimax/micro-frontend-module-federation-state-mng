import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1
      },
      clear: (state, action) => {
        state.count = 0
      },
    },
  })

  // Action creators are generated for each case reducer function
const { increment, clear } = counterSlice.actions

export const store = configureStore({
    reducer: {
        counter : counterSlice.reducer
    },
  })

  export function useStore(){
    const count = useSelector( (state) => state.counter.count);
    const dispatch = useDispatch();
    return {
        count,
        increment: ()=> dispatch(increment()),
        clear: () => dispatch(clear())
    }
  }
  export function StoreProvider({children}){
    return <Provider store={store}>{children}</Provider>
  }
