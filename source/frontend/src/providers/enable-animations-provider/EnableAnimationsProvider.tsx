'use client';

// eslint-disable-next-line @typescript-eslint/naming-convention
import { createContext, type PropsWithChildren, type ReactElement, useContext } from 'react';

const EnableAnimationsContext = createContext<boolean>(true);

export function useEnableAnimationsContext(): boolean {
  return useContext(EnableAnimationsContext);
}

type EnableAnimationsProviderProps = {
  value?: boolean;
};

export function EnableAnimationsProvider({
  value = true,
  children,
}: PropsWithChildren<EnableAnimationsProviderProps>): ReactElement {
  return (
    <EnableAnimationsContext.Provider value={value}>{children}</EnableAnimationsContext.Provider>
  );
}
