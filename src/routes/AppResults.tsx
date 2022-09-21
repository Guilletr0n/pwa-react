import UserSelection from '../components/UserSelection'
import ResultsList from '../components/ResultsList'
import NavButton from "../components/buttons/NavButton";

export default function AppResults() {
  return (
    <main className="main-selection-layout">
      <h1>See the hotels we've matched for you</h1>
      <NavButton link="/" label="...or go back to home screen" />
      <h3>You have selected:</h3>
      <UserSelection />
      <ResultsList/>
    </main>
  )
}