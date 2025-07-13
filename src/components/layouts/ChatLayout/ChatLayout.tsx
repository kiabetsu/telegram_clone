import styles from './ChatLayout.module.scss';

type DualChildrenProps = {
  sidebar?: React.ReactNode;
  content?: React.ReactNode;
};

type ChatLayoutProps = {
  dualChildrenProps?: DualChildrenProps;
  containerRef?: React.Ref<HTMLDivElement>;
  sidebarWidth?: number;
  startDrag: React.MouseEventHandler<HTMLDivElement>;
};

export const ChatLayout = ({
  dualChildrenProps,
  containerRef,
  sidebarWidth,
  startDrag,
  ...props
}: ChatLayoutProps) => {
  const { sidebar, content } = dualChildrenProps || {};

  return (
    <div ref={containerRef} className={styles.chatLayout}>
      <div className={styles.sidebar} style={{ width: `${sidebarWidth}px` }}>
        {sidebar}
      </div>

      <div className={styles.divider} onMouseDown={startDrag} {...props}></div>

      <div className={styles.chatArea}>
        {/* <div className={styles.messageList}><MessageList /></div>

        <div className={styles.messageInput}>
          <MessageInput />
        </div> */}
        {content}
      </div>
    </div>
  );
};
