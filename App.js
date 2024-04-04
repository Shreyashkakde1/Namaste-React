const heading = React.createElement(
  "h1",
  {id: "heading"},
  "Hello world from React inside it"
);
const root = document.querySelector(".root");
ReactDOM.render(heading, root);
