import { configureStore } from '@reduxjs/toolkit'
import destinationReducer from './components/searchSelector/selectorSlice'
import tripEnvisionReducer from './components/tripEnvisionSelect/tripEnvisionSlice'
import budgetReducer from './components/budgetSelect/budgetSlice'

export const store = configureStore({
  reducer: {
    destination: destinationReducer,
    tripEnvision: tripEnvisionReducer,
    budget: budgetReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch