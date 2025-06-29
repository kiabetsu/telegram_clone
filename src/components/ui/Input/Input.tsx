import React, { type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: { message?: string };
  variant?: 'default' | 'outlined';
  isLoading?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, variant = 'default', className = '', isLoading = false, ...props }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${className}`}>
        <input
          ref={ref}
          placeholder=" "
          className={`${styles.input} 
          ${styles[variant]} ${error && styles.error}
          `}
          {...props}
        />
        {label && <label className={styles.label}>{label}</label>}
        {isLoading && <div className={styles.loader} />}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input'; // Для отладки в DevTools
