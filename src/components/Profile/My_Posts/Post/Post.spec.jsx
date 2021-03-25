import React from "react";
import { create } from "react-test-renderer";
import Post from "./Post";

describe('Post Component', () => {
  test('message must be displayed', () => {
    const component = create(<Post message="Hello" likesCount={3}/>)
    const root = component.root;
    expect(root.props.message);
  });
});