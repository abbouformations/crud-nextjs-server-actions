import { addCustomer } from "../actions";

export default function AddCustomer() {
  return (
    <form action={addCustomer}>
      <h2>Add Customer</h2>

      <div className="mb-3">
        <label>Identity</label>

        <input name="identityRef" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Firstname</label>

        <input name="firstname" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Lastname</label>

        <input name="lastname" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Username</label>

        <input name="username" className="form-control" />
      </div>

      <button className="btn btn-success">Save</button>
    </form>
  );
}
