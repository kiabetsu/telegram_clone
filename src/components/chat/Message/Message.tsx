import styles from './Message.module.scss';

type MessageProps = {
  text: string;
  isOutgoing: boolean;
  timestamp: Date;
};

export const Message = ({ text, isOutgoing, timestamp }: MessageProps) => {
  return (
    <div className={`${styles.message} ${isOutgoing ? styles.outgoing : styles.incoming}`}>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <span className={styles.time}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};
