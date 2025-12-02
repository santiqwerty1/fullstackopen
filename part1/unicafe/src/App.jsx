import { useState } from 'react'

const Button = ({ feedback, onClick }) => {
  return (
    <button onClick={onClick}>{feedback}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  if (stats.all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={stats.good} />
        <StatisticLine text="neutral" value={stats.neutral} />
        <StatisticLine text="bad" value={stats.bad} />
        <StatisticLine text="all" value={stats.all} />
        <StatisticLine text="average" value={stats.average} />
        <StatisticLine text="positive" value={`${stats.positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const stats = {
    good,
    neutral,
    bad,
    all,
    // preformatted here so Statistics is 100% presentational
    average: all === 0 ? '0.0' : ((good - bad) / all).toFixed(1),
    positive: all === 0 ? '0.0' : ((100 * good) / all).toFixed(1),
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button feedback="good" onClick={() => setGood(g => g + 1)} />
      <Button feedback="neutral" onClick={() => setNeutral(n => n + 1)} />
      <Button feedback="bad" onClick={() => setBad(b => b + 1)} />

      <h1>statistics</h1>
      <Statistics stats={stats} />
    </>
  )
}

export default App
