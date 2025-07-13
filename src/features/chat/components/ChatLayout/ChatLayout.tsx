import React from 'react';

import { ChatLayout as Layout } from '../../../../components/layouts';
import { useChatLayout } from '../../hooks/useChatLayout';

export const ChatLayout = () => {
  const { containerRef, sidebarWidth, startDrag } = useChatLayout();

  return <Layout containerRef={containerRef} sidebarWidth={sidebarWidth} startDrag={startDrag} />;
};
