import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";

import { setPizzas } from "./redux/actions/pizzas"

function App() {
  const dispatch = useDispatch();

  // window.test = ()=>{
    
  // }
  
  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas")
      .then(({ data }) => {
        dispatch(setPizzas(data))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

// class App extends React.Component {
//   componentDidMount() {

//     axios.get("http://localhost:3000//db.json")
//       .then(({ data }) => {
//         this.props.setPizzas(data.pizzas)
//       })
//   }
//   render() {
//     console.log("yyyy", this.props)
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   console.log("ite", state);

//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };

// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//     dispatch,
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;