import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
  compose,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import brands from "../store/reducers/brands";
import popularCollections from "../store/reducers/popularCollections";
import popularProducts from "../store/reducers/popularProducts";
import brandProducts from "../store/reducers/brandProducts";
import menus from "../store/reducers/menus";
import collectionProducts from "../store/reducers/collectionProducts";
import product from "../store/reducers/product";
import questions from "../store/reducers/questions";
import addresses from "../store/reducers/addressReducer";
import address from "../store/slices/addressSlice"
// import cartReducer from "../store/reducers/cartReducer";
import cartReducer from "../store/slices/cartSlice";
import authReducer from "../store/slices/authSlice";
import wishlist from "../store/slices/wishlistSlice";
import { applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  brands: brands,
  popularCollections: popularCollections,
  popularProducts: popularProducts,
  brandProducts: brandProducts,
  menus: menus,
  questions: questions,
  collectionProducts: collectionProducts,
  product: product,
  addresses: addresses,
  cartReducer: cartReducer,
  wishlist: wishlist,
  address:address,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    },
    composeEnhancers(applyMiddleware(thunk))
  ),
});

export default store;
