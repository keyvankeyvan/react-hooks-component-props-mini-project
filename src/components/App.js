import React from "react";
import Header from "./Header";
import About from "./About"

import blogData from "../data/blog";
import ArticleList from "./ArticleList";

// SOLUTION AT:
// https://github.com/keyvankeyvan/react-hooks-component-props-mini-project/tree/solution/src/components

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
