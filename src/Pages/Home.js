import "./Pages.css";
import "../Components/ContentDisplay";
import ContentDisplay from "../Components/ContentDisplay";
function Home() {
  return (
    <>
      <div className="inside-content rounded-lg text-white">
        <h1>Hello World! Welcome to my personal page.</h1>
      </div>
      <div className="inline pt-3">
        <ContentDisplay />
      </div>
    </>
  );
}
export default Home;
