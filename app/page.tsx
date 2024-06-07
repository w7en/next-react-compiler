"use client";

import { Component, useState } from "react";
// import SlowComponent from "../components/SlowComponent";
import SlowFnComponent from "../components/SlowFnComponent";

type CounterState = {
  count: number;
};

class Home extends Component<{}, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div>{this.state.count}</div>
        <button
          onClick={this.increment}
          style={{ border: "1px solid #ccc", padding: "2px 8px" }}
        >
          +
        </button>
        {/* <SlowComponent /> */}
        <SlowFnComponent />
      </div>
    );
  }
}

export default Home;

// export default function Home() {
//   const [count, setCount] = useState<number>(0);
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         height: "100vh",
//       }}
//     >
//       <div>{count}</div>
//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         style={{ border: "1px solid #ccc", padding: "2px 8px" }}
//       >
//         +
//       </button>
//       <SlowFnComponent />
//     </div>
//   );
// }
