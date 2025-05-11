"use client";

export default function Table({ invoices }) {
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div className="text-red-600">{error}</div>;
  // if (invoices.length === 0) return <div>No invoices found.</div>;

  return (
    <table className="m-10 w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border-b">Customer</th>
          <th className="p-2 border-b">Amount</th>
          <th className="p-2 border-b">Status</th>
          <th className="p-2 border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice._id} className="hover:bg-gray-50">
            <td className="p-2 border-b">{invoice.customer}</td>
            <td className="p-2 border-b">${invoice.amount.toFixed(2)}</td>
            <td className="p-2 border-b capitalize">{invoice.status}</td>
            <td className="p-2 border-b">
              {new Date(invoice.date).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
