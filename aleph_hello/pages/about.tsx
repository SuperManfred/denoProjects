// aleph dev        served at: http://localhost:8080/about

// import useSWR from "https://esm.sh/swr";

// export default function About() {
//   const { data, error } = useSWR("/api/user", fetcher);

//   if (error) {
//     return <div>failed to load</div>;
//   }
//   if (!data) {
//     return <div>loading...</div>;
//   }
//   return <div>hello {data.name}!</div>;
// }

import React from "react";

export default function About() {
  return <h1>About</h1>;
}
