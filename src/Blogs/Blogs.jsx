import "./Blogs.css";

export const Blogs = () => {
  const Blogs = [
    {
      heading: "Scripts : async and defer in Javascript",
      link: "https://medium.com/@radheshyamnitj/scripts-async-and-defer-in-javascript-aaa65e564051",
      details:
        " In this article you will get to know about async and defer script attributes, what are they and why we use them",
    },
    {
      heading: "Currying in Javascript",
      link: "https://medium.com/@radheshyamnitj/currying-in-javascript-af39c28bcf31",
      details:
        " The currying is nothing but a technique to evaluate the function which is taking multiple arguments,into a sequence of functions which will take single argument. ",
    },
    {
      heading: "Enumerability of Properties of an Object in Javascript",
      link: "https://medium.com/@radheshyamnitj/enumerability-of-properties-of-an-object-in-javascript-2e1001d85d90",
      details:
        "When we create an object then we set the properties and their values. These properties have several internal attributes like value, writable, enumerable and configurable.",
    },
    {
      heading:
        "Function statement, function declaration, function expression in JavaScript",
      link: "https://medium.com/@radheshyamnitj/function-statemaent-function-declaration-function-expression-in-javascript-37cb5a166467",
      details:
        "A function statement or function declaration is made of function keyword, followed by function name, parameters in parenthesis (para1,..paraN) and a pair of curly braces {…..} to delimits the body code.",
    },
    {
      heading: "The function map() in Javascript",
      link: "https://medium.com/@radheshyamnitj/the-function-map-in-javascript-9317531e2488",
      details:
        " The map() , filter() and reduce() are the essential and well known functions in javascript that run provided callback on each element of an array. The map() method is generally used to iterate over an array and calling function on every element of array.",
    },
  ];

  return (
    <>
      <center style={{ marginBottom: "10px" }}>
        <h2>Blogs</h2>
      </center>
      <div className="blogs-container">
        {Blogs.map((blog) => {
          return (
            <div className="blog-wrapper">
              <div className="blog-heading">{blog.heading}</div>
              <div className="blog-details">{blog.details}</div>
              <div>
                <a href={blog.link}>
                  <button className="read-more-btn">Read More</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
