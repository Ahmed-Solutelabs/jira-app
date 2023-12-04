import logo from "./logo.svg";
import "./App.css";

function App() {
  const url = window.location.href.split("/");
  const domainName = url[2];
  let issueID = ""

  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('selectedIssue')) {
    issueID = searchParams.get('selectedIssue');
  }else {
    issueID = url[url.length-1];
  }

  return (
    <div className="App">
      <p>Ahmed kazi</p>
      <button
        onClick={() =>
          fetch(
            `https://${domainName}.atlassian.net/rest/api/3/issue/${issueID}`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${Buffer.from(
                  "dhruvbabariya912001@gmail.com:ATATT3xFfGF0grD_QGtfiXjWU-e_GYcZGfFW051EK7I3nQ9l7475uBrzE0WQzBJZvAglwVPyQD5Do2SI0HNWYQ8dtwgjxP4fS9vtN8OmiBQFy59wAyKfp7xg2lQFOp0KA1BiCGp3qsFz93fIb1lOKQnctbJnTO2eMCHDyuHy6X_veKenYVn1rnU=848280CE"
                ).toString("base64")}`,
                Accept: "application/json",
              },
            }
          )
            .then((response) => {
              console.log(
                `Response: ${response.status} ${response.statusText}`
              );
              return response.text();
            })
            .then((text) => console.log(text))
            .catch((err) => console.error(err))
        }
      >
        Add+
      </button>
    </div>
  );
}

export default App;
