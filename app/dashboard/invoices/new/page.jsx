"use client";

import { createInvoice } from "@/app/actions/createInvoice";
import { useActionState } from "react";

const initialState = { success: false, errors: {} };

export default function CreateInvoiceForm() {
  const [state, formAction, isPending] = useActionState(
    createInvoice,
    initialState
  );

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded my-[70px]">
      <h1 className="text-2xl font-bold mb-4">Create Invoice</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block font-semibold">Customer</label>
          <input name="customer" className="w-full border px-3 py-2 rounded" />
          {state.errors?.customer && (
            <p className="text-red-500 text-sm">{state.errors.customer[0]}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Amount</label>
          <input
            name="amount"
            type="number"
            className="w-full border px-3 py-2 rounded"
          />
          {state.errors?.amount && (
            <p className="text-red-500 text-sm">{state.errors.amount[0]}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Status</label>
          <select name="status" className="w-full border px-3 py-2 rounded">
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
          </select>
          {state.errors?.status && (
            <p className="text-red-500 text-sm">{state.errors.status[0]}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Create Invoice"}
        </button>
      </form>
    </div>
  );
}
