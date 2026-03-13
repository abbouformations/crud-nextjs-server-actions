"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API = "http://localhost:8080/customers";

export async function getCustomers() {
  const res = await fetch(API, {
    cache: "no-store",
  });

  return res.json();
}

export async function getCustomer(id: number) {
  const res = await fetch(`${API}/${id}`);
  return res.json();
}

export async function addCustomer(formData: FormData) {
  const customer = {
    identityRef: formData.get("identityRef"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
  };

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  revalidatePath("/customers");
  redirect("/customers");
}

export async function updateCustomer(id: number, formData: FormData) {
  const customer = {
    identityRef: formData.get("identityRef"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
  };

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  revalidatePath("/customers");
  redirect("/customers");
}

export async function deleteCustomer(id: number) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/customers");
  redirect("/customers");
}
