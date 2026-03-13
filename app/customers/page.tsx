import { deleteCustomer, getCustomers } from "./actions";
import Link from "next/link";

export default async function CustomersPage() {
  const customers = await getCustomers();
  return (
    <div>
      <h2>Customers</h2>

      <Link href="/customers/add" className="btn btn-primary mb-3">
        Add Customer
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Identity</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.identityRef}</td>
              <td>{c.firstname}</td>
              <td>{c.lastname}</td>
              <td>{c.username}</td>

              <td>
                <Link
                  href={`/customers/edit/${c.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <form
                  action={deleteCustomer.bind(null, c.id)}
                  style={{ display: "inline" }}
                >
                  <button className="btn btn-danger btn-sm">Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
