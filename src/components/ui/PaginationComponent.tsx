"use client";

import { Pagination } from "keep-react";

export const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
}: any) => {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={totalPages}
      iconWithText={true}
      prevNextShape="circle"
      activeCurrentPageShape="circle"
    />
  );
};
