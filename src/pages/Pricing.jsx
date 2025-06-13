// pages/Pricing.jsx
import React from 'react';

function Pricing() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-100" style={{ maxWidth: '1200px' }}>
        <h2 className="text-center mb-4">Our Pricing Plans</h2>
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">$29 - One email setup</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Normal</h5>
                <p className="card-text">$59 - Up to 3 emails setup</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Premium</h5>
                <p className="card-text">$99 - Up to 10 emails + support</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-center mb-3">What’s Included</h4>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Normal</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email Setup</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Multiple Emails</td>
              <td>❌</td>
              <td>✔️ (Up to 3)</td>
              <td>✔️ (Up to 10)</td>
            </tr>
            <tr>
              <td>Customer Support</td>
              <td>❌</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pricing;
