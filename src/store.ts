import { configureStore } from '@reduxjs/toolkit'
import destinationReducer from './components/searchSelector/selectorSlice'
import tripEnvisionReducer from './components/tripEnvisionSelect/tripEnvisionSlice'
import budgetReducer from './components/budgetSelect/budgetSlice'
import kindReducer from './components/travellersKind/kindSlice'
import experienceReducer from './components/tripExperienceSelect/tripExperienceSlice'

export const store = configureStore({
  reducer: {
    destination: destinationReducer,
    tripEnvision: tripEnvisionReducer,
    budget: budgetReducer,
    travellerKind: kindReducer,
    tripExperience: experienceReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch