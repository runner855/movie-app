import * as React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2/:data" element={<Component2 />} />
      </Routes>
    </Router>
  );
};

// setting up component 1
const Component1 = () => {
  let pass = "hello";
  return (
    <div>
      <Link to={"/component2/" + pass}>Click me to pass "pass"</Link>
    </div>
  );
};

// Component 2
const Component2 = () => {
  const { data } = useParams();
  return (
    <div>
      <h2>The data is: {data}</h2>
    </div>
  );
};

// That's all folks
