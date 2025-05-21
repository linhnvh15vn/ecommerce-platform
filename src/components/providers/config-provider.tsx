import type { ReactNode } from 'react';

import { ConfigProvider as AntConfigProvider } from 'antd';

type ConfigProviderProps = {
  children: ReactNode;
};

export default function ConfigProvider({ children }: ConfigProviderProps) {
  return (
    <AntConfigProvider
      theme={{
        components: {
          Anchor: {
            linkPaddingBlock: 16,
          },
        },
      }}
    >
      {children}
    </AntConfigProvider>
  );
}
