import UserSelection from '../components/UserSelection'
import ResultsList from '../components/ResultsList'

export default function AppResults() {
  return (
    <main className="main-selection-layout">
      <h1>See the hotels we've matched for you</h1>
      <p>You have selected:</p>
      <UserSelection />
      <ResultsList/>
    </main>
  )
}