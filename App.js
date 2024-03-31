import './App.css';

function App() {
  return (
    <div className="App">
      <div className="price">
      <div className="pricecart">
        <h6>Free</h6>
        <h2>$0/month</h2>
        <ul className="pricecart2">
          <li>✔ Single User</li>
          <li>✔ 50GB Storage</li>
          <li>✔ Unlimited Public Projects</li>
          <li>✔ Community Access</li>
          <li className="hide">✖ Unlimited Private Project</li>
          <li className="hide">✖ Dedicated Phone Support</li>
          <li className="hide">✖ Free Subdomain</li>
          <li className="hide">✖ Monthly Status Report</li>
        </ul>
        <h4>
          <button className="button">Pay</button>
        </h4>
      </div>
      <div className="pricecart">
        <h6>Plus</h6>
        <h2>$9/month</h2>
        <ul className="pricecart2">
          <li>✔ 5 User</li>
          <li>✔ 50GB Storage</li>
          <li>✔ Unlimited Public Projects</li>
          <li>✔ Community Access</li>
          <li>✔ Unlimited Private Project</li>
          <li>✔ Dedicated Phone Support</li>
          <li>✔ Free Subdomain</li>
          <li className="hide">✖ Monthly Status Report</li>
        </ul>
        <h4>
          <button className="button">Pay</button>
        </h4>
      </div>
      <div className="pricecart">
        <h6>Pro</h6>
        <h2>$49/month</h2>
        <ul className="pricecart2">
          <li>✔ Unlimited User</li>
          <li>✔ 50GB Storage</li>
          <li>✔ Unlimited Public Projects</li>
          <li>✔ Community Access</li>
          <li>✔ Unlimited Private Project</li>
          <li>✔ Dedicated Phone Support</li>
          <li>✔ Free Subdomain</li>
          <li>✔ Monthly Status Report</li>
        </ul>
        <h4>
          <button className="button">Pay</button>
        </h4>
      </div>
    </div>
    </div>
  );
}

export default App;
