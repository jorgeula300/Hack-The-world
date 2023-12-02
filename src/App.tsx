import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './core/redux/store/index.ts';
import AppRouter from './core/routes/AppRouter';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}
