import React from 'react';
import { Pencil } from 'lucide-react';

import styles from './AuthLayout.module.scss';
import { isPhoneNumber, useEditPhoneNumber } from '../../../hooks/useAuthPage';

export type AuthLayoutProps = {
  children: React.ReactNode;
  logo?: React.ReactNode;
  title?: string;
  note?: string;
};

export const AuthLayout = ({ children, logo, title, note }: AuthLayoutProps) => {
  const { editPhoneNumber } = useEditPhoneNumber();

  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        {logo && <div className={styles.logo}>{logo}</div>}
        {title && (
          <h1 className={styles.title}>
            {title}
            {title && isPhoneNumber(title) && (
              <Pencil onClick={() => editPhoneNumber()} size={20} className={styles.editButton} />
            )}
          </h1>
        )}
        {note && <p className={styles.note}>{note}</p>}
        {children}
      </div>
    </div>
  );
};
