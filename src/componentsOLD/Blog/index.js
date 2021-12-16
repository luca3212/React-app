import React from "react";
import Title from "../Title";
import Text from "../Texr";

function Blog(props) {
  console.log(props);
  const {title, content} = props;
  return (
    <section>
      <Title 
       title={title}
      />
        <Text 
          content={content}
        />
    </section>
  );
}

export default Blog;
