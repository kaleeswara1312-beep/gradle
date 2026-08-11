import React, { Suspense, useState } from "react";
import useSWR from "swr";

// 2-second delayed fetcher
const fetcher = url =>
  new Promise(res =>
    setTimeout(() => res(fetch(url).then(r => r.json())), 2000)
  );

function Profile() {
  // Attempting to use suspense in React 17
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher,
    { suspense: true } // React 17 does NOT support suspense for data
  );

  return <div>Hello {data.name}</div>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button
        onClick={() => setShow(true)}
        style={{
          padding: "10px 20px",
          background: "teal",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Load Profile
      </button>

      {show && (
        <Suspense fallback={<div>Loading profile...</div>}>
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default App;
