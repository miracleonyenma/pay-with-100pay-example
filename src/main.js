const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWith100pay, false);
function payWith100pay(e) {
  e.preventDefault();
  const email = document.getElementById("email-address").value;
  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  shop100Pay.setup({
    ref_id: "" + Math.floor(Math.random() * 1000000000 + 1),
    api_key:
      "LIVE;PK;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjYyOGIxYzdlMTlhYzUyMDAyYzU4ODQ2YSIsInVzZXJJZCI6IjYxY2VjZDNjNWU0NjM0MDAyZTg3YmU5NSIsImlhdCI6MTY1MzI4Mzk2Nn0.Y54T8kQxaAOvZjguvyRZKc7D_v2xpU0pSHBVwTNcRL8", // paste api key here
    customer: {
      user_id: "1", // optional
      name: firstName + " " + lastName,
      phone,
      email,
    },
    billing: {
      amount,
      currency: "USD", // or any other currency supported by 100pay
      description: "Test Payment",
      country: "USA",
      vat: 10, //optional
      pricing_type: "fixed_price", // or partial
    },
    metadata: {
      is_approved: "yes",
      order_id: "OR2", // optional
      charge_ref: "REF", // optionalm, you can add more fields
    },
    call_back_url: "http://localhost:8000/verifyorder/",
    onClose: (msg) => {
      alert("User closed payment modal.");
    },
    callback: (reference) => {
      alert(`Transaction successful with id: ${reference}`);
    },
    onError: (error) => {
      console.log(error);
      alert("Sorry something went wrong pls try again.");
    },
  });
}



// import { shop100Pay } from "@100pay-hq/checkout";

// const paymentForm = document.getElementById("paymentForm");
// paymentForm.addEventListener("submit", payWith100pay, false);
// function payWith100pay(e) {
//     e.preventDefault();
//     const email = document.getElementById("email-address").value;
//     const phone = document.getElementById("phone").value;
//     const amount = document.getElementById("amount").value;
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;

//     shop100Pay.setup({
//         ref_id: "" + Math.floor(Math.random() * 1000000000 + 1),
//         api_key:
//             "LIVE;PK;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjYyOGIxYzdlMTlhYzUyMDAyYzU4ODQ2YSIsInVzZXJJZCI6IjYxY2VjZDNjNWU0NjM0MDAyZTg3YmU5NSIsImlhdCI6MTY1MzI4Mzk2Nn0.Y54T8kQxaAOvZjguvyRZKc7D_v2xpU0pSHBVwTNcRL8", // paste api key here
//         customer: {
//             user_id: "1", // optional
//             name: firstName + " " + lastName,
//             phone,
//             email,
//         },
//         billing: {
//             amount,
//             currency: "USD", // or any other currency supported by 100pay
//             description: "Test Payment",
//             country: "USA",
//             vat: 10, //optional
//             pricing_type: "fixed_price", // or partial
//         },
//         metadata: {
//             is_approved: "yes",
//             order_id: "OR2", // optional
//             charge_ref: "REF", // optionalm, you can add more fields
//         },
//         call_back_url: "http://localhost:8000/verifyorder/",
//         onClose: (msg) => {
//             alert("User closed payment modal.");
//         },
//         callback: (reference) => {
//             alert(`Transaction successful with id: ${reference}`);
//         },
//         onError: (error) => {
//             console.log(error);
//             alert("Sorry something went wrong pls try again.");
//         },
//     });
// }
