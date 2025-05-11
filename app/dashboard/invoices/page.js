"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Table from "../components/Table";

export default function InvoicesPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const [invoices, setInvoices] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInvoices() {
      setLoading(true);
      try {
        const res = await fetch(`/api/invoices?query=${query}&page=${page}`);
        const data = await res.json();
        setInvoices(data.invoices || []);
        setTotalCount(data.totalCount || 0);
      } catch (err) {
        console.error("Failed to fetch invoices", err);
      } finally {
        setLoading(false);
      }
    }

    fetchInvoices();
  }, [query, page]);

  // 🟡 Handle search term and update URL
  function handleSearch(term) {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    params.set("page", "1"); // Always reset to first page when searching
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="p-6 space-y-6">
      <Search query={query} onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Table invoices={invoices} />
          <Pagination
            currentPage={page}
            totalCount={totalCount}
            query={query}
          />
        </>
      )}
    </div>
  );
}
