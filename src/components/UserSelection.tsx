import NavButton from "../components/buttons/NavButton";
import { useWindowDimensions, useAppSelector } from '../hooks'
import Layout from '../components/Layout'
import { selectTripEnvision  } from "../components/tripEnvisionSelect/tripEnvisionSlice";
import { selectBudget } from "../components/budgetSelect/budgetSlice";
import { selectDestination } from '../components/searchSelector/selectorSlice'
import { selectKind } from "../components/travellersKind/kindSlice";
import { selectTripExperience } from "../components/tripExperienceSelect/tripExperienceSlice";
import { selectDate } from "../components/tripDateSelect/tripDateSlice";

export default function UserSelection() {
  const envisions = useAppSelector(selectTripEnvision)
  const budget = useAppSelector(selectBudget)
  const destination = useAppSelector(selectDestination)
  const kind = useAppSelector(selectKind)
  const experiences = useAppSelector(selectTripExperience)
  const date = useAppSelector(selectDate)

  console.log( date.getDay() + " " + date.getMonth() + " " + date.getFullYear())

  return (
    <main className="preferences">
      <div className="container-small">
        <section className="preferences__section">
          <h5>Destination</h5>
          <span className="pill">{destination}</span>
        </section>

        <section className="preferences__section --list">
          <ul className="preferences__pill-list">
          <li className="preferences__pill-list__title">
              <h5>Envisions</h5>
            </li>
            { envisions.map( 
              (i) => i.value ? 
                <li key={i.label} 
                  className="preferences__pill-list__item">
                  {i.label}
                </li>
                : null  
              ) }
          </ul>
        </section>

        <section className="preferences__section">
          <h5>Budget</h5>
          <span className="pill">{ budget }</span>
        </section>

        <section className="preferences__section">
          <h5>Who is travelling</h5>
          <p className="pill"> { kind }</p>
        </section>
        
        <section className="preferences__section">
          <h5>Date</h5>
          <span className="pill">{ date.getDate()}/{date.getMonth()+1}/{date.getFullYear() }</span>
        </section>

        <section className="preferences__section --list">
          
          <ul className="preferences__pill-list">
            <li className="preferences__pill-list__title">
              <h5>Trip Experience</h5>
            </li>
            {experiences.map(
              (i) => i.value ? 
              <li key={i.label} 
                className="preferences__pill-list__item">
                {i.label}
              </li>
              : null
            )}
        </ul>
        </section>

      </div>
    </main>
  )
}