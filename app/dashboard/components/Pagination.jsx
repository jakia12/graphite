"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, query }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    if (query) {
      params.set("query", query);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="m-[100px]">
      <button
        className="cursor-pointer mx-[30px]"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        className="cursor-pointer mx-[30px]"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
