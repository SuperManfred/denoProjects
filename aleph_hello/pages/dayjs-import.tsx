// aleph dev        served at: http://localhost:8080/dayjs-import

// react is a compulsoy import in Aleph
import React from "react";

// import the dayjs npm library using esm.sh
import dayjs from "https://esm.sh/dayjs";

// capitalize the function name so it's recognized as a React component
export default function DateImport() {
  // call the dayjs function directly to display today's date
  return <section>Hello all! Today is: {dayjs().format("DD-MM-YYYY")}</section>;
}
