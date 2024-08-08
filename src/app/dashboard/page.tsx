import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="p-5 my-10 w-1/2 bg-lime-400 text-white text-xl hover:bg-lime-400 h-75">
        <h1>DashBoard</h1>
        <div >
          <Link
            href="/dashboard/aboutus"
            className="p-3 my-12  w-1/3 bg-lime-600 text-white text-xl hover:bg-lime-900 block h-12 "
          >
            About Us
          </Link>

          <Link
            href="/dashboard/contact"
            className="p-3 my-7 w-1/3 bg-lime-600 text-white text-xl hover:bg-lime-900 block h-12"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="p-3 my-9 w-1/3 bg-lime-600 text-white text-xl hover:bg-lime-900 block h-12"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
