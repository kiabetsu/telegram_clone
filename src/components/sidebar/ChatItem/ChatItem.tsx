import React from 'react';
import { Check } from 'lucide-react';

import styles from './ChatItem.module.scss';

export type ChatItemProps = {
  image?: string;
  title: string;
  lastMessage: string;
  time: string;
  unreadyMessageCount: string;
};

export const ChatItem = ({
  image,
  title,
  lastMessage,
  time,
  unreadyMessageCount,
}: ChatItemProps) => {
  return (
    // <div style={{ width: '300px' }}>
    <div className={styles.chatItem}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.lastMessageMeta}>
            <div className={styles.messageOutgoingStatus}></div>
            <Check size={19} color="rgb(77, 205, 94)" />
            <span className={styles.time}>{time}</span>
          </div>
        </div>
        <div className={styles.subtitle}>
          <span className={styles.lastMessage}>{lastMessage}</span>
          <div className={styles.chatBadge}>
            <span className={styles.unreadyMessageCount}>{unreadyMessageCount}</span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
