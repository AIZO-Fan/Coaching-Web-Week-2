import UserCard from "./assets/component/UserCard"
import Counter from "./assets/component/counter";
import Dropdown from "./assets/component/dropdown";
import Ubahwarna from "./assets/component/ubahwarna";

const App = () => {
  return (
    <div style={{ fontSize: "20px" }}>
      <h1 style={{
      color: "white",  
      WebkitTextStroke: "2px black", 
      marginLeft:"20px",
      marginTop:"20px" 
      }}>
      <i>My Identity</i></h1> 

         <UserCard nama={"Muhammad irfan"} NPM={"2428250051"} git={"My Github"}/>
        <Dropdown/>
        <Counter/>
        <Ubahwarna/>
    </div>
  )
}
export default App;