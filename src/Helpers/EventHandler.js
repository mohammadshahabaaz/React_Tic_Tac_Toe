export function Button() {
  const response = () => {
    alert("I'm responsing");
  };

  return <button onClick={response}>Click me</button>;
}
