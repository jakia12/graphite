"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";
import dbConnect from "../lib/db";
import Invoice from "../lib/models/Invoice";

const invoiceFormSchema = z.object({
  customer: z.string().min(1, "Customer name is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount must be positive"),
  status: z.enum(["pending", "paid", "overdue"]),
  date: z
    .string()
    .optional()
    .transform((val) => (val ? new Date(val) : new Date())),
});
export async function createInvoice(_, formData) {
  const raw = {
    customer: formData.get("customer"),
    amount: parseFloat(formData.get("amount")),
    status: formData.get("status"),
    date: formData.get("date"),
  };

  const result = invoiceFormSchema.safeParse(raw);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  const invoiceData = result.data;

  await dbConnect();
  await Invoice.create(invoiceData);

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
