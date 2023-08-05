import Nav from "../../nav";
function HelloWorld() {
  const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};
  console.log(alice.salary)
 return (
   <div>
     <Nav/>
     <h1>Hello World!</h1>

   </div>
 );
}
export default HelloWorld;
