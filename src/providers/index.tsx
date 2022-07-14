import EasyPeasyStoreProvider from "./storeProvider";
import { PropsWithChildren } from "react";

export default function AppProviders({ children }: PropsWithChildren<{}>) {
    return <EasyPeasyStoreProvider>{children}</EasyPeasyStoreProvider>;
}