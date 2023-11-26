"use client";
import { Pagination } from "keep-react";
import { useState } from "react";

export const PaginationComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={10}
            iconWithText={true}
            prevNextShape="circle"
            activeCurrentPageShape="circle"
        />
    );
};
