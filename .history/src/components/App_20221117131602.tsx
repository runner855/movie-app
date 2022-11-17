import * as React from "react";
import { One } from "../components/One";
import { Two } from "../components/Two";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/one" element={<One />} />
        <Route path="/two/:data" element={<Two />} />
      </Routes>
    </Router>
  );
};

// setting up component 1
const One = () => {
  let pass = "hello";
  return (
    <div>
      <Link to={"/two/" + pass}>Click me to pass "pass"</Link>
    </div>
  );
};

// Component 2
const Two = () => {
  const { data } = useParams();
  return (
    <div>
      <h2>The data is: {data}</h2>
    </div>
  );
};

// That's all folks
