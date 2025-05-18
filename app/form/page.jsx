"use client";

import { handleForm } from "@/actions/validate-form";
import { useActionState } from "react";

const initialState = { success: false, errors: {} };

export default function FormPage() {
  const [state, formAction, isPending] = useActionState(
    handleForm,
    initialState
  );

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="font-semibold block">Name</label>
          <input name="name" className="w-full border px-3 py-2 rounded" />
          {state.errors?.name && (
            <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label className="font-semibold block">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label className="font-semibold block">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
          />
          {state.errors?.password && (
            <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
