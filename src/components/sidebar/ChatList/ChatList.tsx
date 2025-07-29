import React from 'react';

import styles from './ChatList.module.scss';
import { ChatItem } from '../ChatItem/ChatItem';
import ava from '../../../assets/606ea8dd44663862654c7df5f85e64ee.jpg';

export type ChatListProps = {
  children?: React.ReactNode;
};

export const ChatList = () => {
  return (
    <div className={styles.chatList}>
      <ChatItem
        image={ava}
        title="Gurev Sergei"
        lastMessage="hi! my name is Serjio 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        unreadyMessageCount="32"
        time="12:34"
      />
    </div>
  );
};
