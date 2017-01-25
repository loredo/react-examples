var React = require('react');
var {Link} = require('react-router');


var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some examples</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;