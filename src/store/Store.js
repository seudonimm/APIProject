import { configureStore } from "@reduxjs/toolkit"
import listSlice from "./ListSlice"
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';
import ListSaga from "./sagas/ListSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['list/retrieveData'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp', 'payload.data.headers', 'payload.data.config.transformRequest.0', 'payload'],
                // Ignore these paths in the state
                ignoredPaths: ['list.value', 'payload.data.headers', 'payload.data.config.transformRequest.0'],
              },
        }).concat(logger, sagaMiddleware)
})

sagaMiddleware.run(ListSaga);

export default store;