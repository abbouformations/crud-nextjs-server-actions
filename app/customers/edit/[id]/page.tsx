import { getCustomer, updateCustomer } from "../../actions";

export default async function EditCustomer({ params }: any) {
  const { id } = await params;
  const customer = await getCustomer(id);

  return (
    <form action={updateCustomer.bind(null, id)}>
      <h2>Edit Customer</h2>

      <div className="mb-3">
        <label>Identity</label>

        <input
          name="identityRef"
          defaultValue={customer.identityRef}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Firstname</label>

        <input
          name="firstname"
          defaultValue={customer.firstname}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Lastname</label>

        <input
          name="lastname"
          defaultValue={customer.lastname}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Username</label>

        <input
          name="username"
          defaultValue={customer.username}
          className="form-control"
        />
      </div>

      <button className="btn btn-success">Update</button>
    </form>
  );
}
