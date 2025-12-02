const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ name, count }) => (
  <p>
    {name} {count}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, count }) => (
      <Part key={name} name={name} count={count} />
    ))}
  </div>
);

const Total = ({ parts }) => (
  <p>
    Number of exercises{" "}
    {parts.reduce((sum, { count }) => sum + count, 0)}
  </p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

