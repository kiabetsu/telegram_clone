import React from 'react';

import { ChatLayout as Layout } from '../../../../components/layouts';
import { useChatLayout } from '../../hooks/useChatLayout';
import { ChatList } from '../../../../components/sidebar';

export const ChatLayout = () => {
  const { containerRef, sidebarWidth, startDrag } = useChatLayout();

  const dualChildrenProps = {
    sidebar: <ChatList />,
  };

  return (
    <Layout
      containerRef={containerRef}
      sidebarWidth={sidebarWidth}
      startDrag={startDrag}
      dualChildrenProps={dualChildrenProps}
    />
  );
};
