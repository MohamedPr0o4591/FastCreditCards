import React from "react";

function Row3() {
  return (
    <div className="inner">
      <p className="border-bottom py-4">
        <span className="text-danger">*</span>Purchased Referrals
      </p>
      <table className="w-100">
        <thead>
          <tr>
            <th>Username</th>
            <th>Registered</th>
            <th>User Earns</th>
            <th>You Got</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <p className="text-center pt-3">Nothing</p>
    </div>
  );
}

export default Row3;
