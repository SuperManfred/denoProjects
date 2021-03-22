// aleph dev        served at: http://localhost:8080/date-import

// react is a compulsoy import in Aleph
import React from "react";

// import the format function from its URL
import { format } from "https://deno.land/std@0.88.0/datetime/mod.ts";

// capitalize the function name so it's recognized as a React component
export default function DateImport() {
  // Here, directly calling the format function works as expected.
  return <section>
    Hello all! Lets go on a date: {format(new Date(), "dd-MM-yyyy")}
  </section>;
}
