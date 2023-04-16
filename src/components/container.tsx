"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <div className="lg:container mx-auto">{children}</div>
      </PersistGate>
    </Provider>
  );
}
