import styles from './MessageInput.module.scss';

export const MessageInput = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.attachmentButton}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
        </svg>
      </div>

      <input type="text" className={styles.input} placeholder="Write a message..." />

      <button className={styles.sendButton}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
};
