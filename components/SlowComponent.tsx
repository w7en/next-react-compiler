"use client";

import React, { Component } from "react";

class SlowComponent extends Component {
  constructor(props: any) {
    super(props);
    this.slowFn = this.slowFn.bind(this);
  }

  componentDidMount() {
    this.slowFn();
  }

  componentDidUpdate() {
    this.slowFn();
  }

  slowFn() {
    let i = 0;
    while (i < 1_000_000_000) {
      i++;
    }
  }
  render() {
    return <div>Slow component</div>;
  }
}

export default React.memo(SlowComponent);
// export default SlowComponent;
