import React from 'react';

export const useChatLayout = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(300);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const isDraggingRef = React.useRef(isDragging);
  React.useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    // Ширина sidebar = расстояние от левого края контейнера до курсора
    let newWidth = e.clientX - containerRect.left;

    // Ограничения: минимум 200, максимум 70% ширины контейнера
    const minWidth = 200;
    const maxWidth = Math.floor(containerRect.width * 0.7);

    newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
    setSidebarWidth(newWidth);
  }, []);

  const startDrag = React.useCallback((e: Event) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const stopDrag = React.useCallback(() => setIsDragging(false), []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDrag);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [isDragging, handleMouseMove, stopDrag]);

  return { sidebarWidth, startDrag, containerRef };
};
