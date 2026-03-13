import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 fw-bold">
        Welcome to CRUD Application using "Server actions"
      </h1>

      <p className="lead mt-3">
        Application développée avec Next.js 16, Bootstrap et Actions Server (TP
        n°2)
      </p>

      <div className="mt-4">
        <Link href="/customers" className="btn btn-primary me-3">
          View Customers
        </Link>

        <Link href="/customers/add" className="btn btn-success">
          Add Customer
        </Link>
      </div>
    </div>
  );
}
