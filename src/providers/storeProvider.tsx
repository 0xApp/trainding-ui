import React, { PropsWithChildren } from "react";
import { StoreProvider } from "easy-peasy";
import { store } from "../store";

type Props = StoreProvider["props"] & { children: React.ReactNode };


const StoreProviderCasted =
  StoreProvider as unknown as React.ComponentType<Props>;


const EasyPeasyStoreProvider: React.FunctionComponent<
  PropsWithChildren<{}>
> = ({ children }) => {  
  return <StoreProviderCasted store={store}>{children}</StoreProviderCasted>;
};

export default EasyPeasyStoreProvider;
