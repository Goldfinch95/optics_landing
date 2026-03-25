import { useState } from 'react';

export function usePagination<T>(items: T[], perPage: number) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / perPage);

  const current = items.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return {
    current,
    page,
    totalPages,
    prev,
    next,
    canPrev: page > 0,
    canNext: page < totalPages - 1,
  };
}