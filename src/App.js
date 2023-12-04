// import logo from "./logo.svg";
import "./App.css";

function App() {
  // const url = window.location.href.split("/");
  // const domainName = url[2];
  // let issueID = "";

  // const searchParams = new URLSearchParams(window.location.search);
  // if (searchParams.has("selectedIssue")) {
  //   issueID = searchParams.get("selectedIssue");
  // } else {
  //   issueID = url[url.length - 1];
  // }

  // A simple POST request which logs response in the console.
  // AP.request({
  //   url: 'https://dhruvbabariya.atlassian.net/rest/api/3/issue/DHRUV-1',
  //   type: 'GET',
  //   headers: {
  //                 Authorization: `Basic ${btoa(
  //                   "dhruvbabariya912001@gmail.com:ATATT3xFfGF0grD_QGtfiXjWU-e_GYcZGfFW051EK7I3nQ9l7475uBrzE0WQzBJZvAglwVPyQD5Do2SI0HNWYQ8dtwgjxP4fS9vtN8OmiBQFy59wAyKfp7xg2lQFOp0KA1BiCGp3qsFz93fIb1lOKQnctbJnTO2eMCHDyuHy6X_veKenYVn1rnU=848280CE"
  //                 )}`,
  //                 Accept: "application/json",
  //               },
  //   success: function(responseText){
  //     console.log(responseText);
  //   },
  //   error: function(xhr, statusText, errorThrown){
  //     console.log(arguments);
  //   }
  // });

  console.log(window.AP.request)

  return (
    <div className="App">
      <p>Ahmed kazi</p>
      <button
        onClick={() =>  window.AP.request({
    url: 'https://dhruvbabariya.atlassian.net/rest/api/3/issue/DHRUV-1',
    type: 'GET',
    headers: {
                  Authorization: `Basic ${btoa(
                    "dhruvbabariya912001@gmail.com:ATATT3xFfGF0grD_QGtfiXjWU-e_GYcZGfFW051EK7I3nQ9l7475uBrzE0WQzBJZvAglwVPyQD5Do2SI0HNWYQ8dtwgjxP4fS9vtN8OmiBQFy59wAyKfp7xg2lQFOp0KA1BiCGp3qsFz93fIb1lOKQnctbJnTO2eMCHDyuHy6X_veKenYVn1rnU=848280CE"
                  )}`,
                  Accept: "application/json",
                },
    success: function(responseText){
      console.log(responseText);
    },
    error: function(xhr, statusText, errorThrown){
      console.log(arguments);
    }
  }) }
      >
        Add+
      </button>
    </div>
  );
}

export default App;
