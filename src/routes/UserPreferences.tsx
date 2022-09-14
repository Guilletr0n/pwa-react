import NavButton from "../components/buttons/NavButton";
import { useWindowDimensions, useAppSelector } from '../hooks'
import Layout from '../components/Layout'
import { selectTripEnvision  } from "../components/tripEnvisionSelect/tripEnvisionSlice";
import { selectBudget } from "../components/budgetSelect/budgetSlice";
import { selectDestination } from '../components/searchSelector/selectorSlice'

export default function UserPreferences() {
  const { height, width } = useWindowDimensions();

  const envisions = useAppSelector(selectTripEnvision)
  const budget = useAppSelector(selectBudget)
  const destination = useAppSelector(selectDestination)

  return (
    <Layout height={height} class="centered-layout">
      <main>
        <div className="container-small">
          <h3>All right,</h3>
          <h4>This are your preferences:</h4>
          <h5>Destination: {destination}</h5>
          <h5>Envisions:</h5>
          <ul>
          {envisions.map((i) =>
            <li key={i.label}>{i.value ? i.label : ''}</li>
          )}
          </ul>
          <h5>Budget: {budget}</h5>
          <p>{}</p>
        </div>
      </main>
      <footer>
        <NavButton link="/" label="Home" />
      </footer>
    </Layout>
  )
}