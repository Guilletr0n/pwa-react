import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateExperience, selectTripExperience } from './tripExperienceSlice'
import MHMcheckbox from '../MHMcheckbox'
import { Experience } from '../types';

export default function ExperienceSelect()  {

  const experiences = useAppSelector(selectTripExperience)
  const dispatch = useAppDispatch();

  function toggleCheck(envy:Experience) {
    dispatch(updateExperience(experiences.map( (e:Experience) => { return e.label === envy.label ? {label:e.label, value: !e.value} : e } )))
  }

  return (
    <section className="checks-layout">
      <ul className="check-list">
        {experiences.map((i:Experience) => 
          <li key={i.label}> 
            <MHMcheckbox 
              label={i.label} 
              selected={i.value} 
              toggleCheck={(checked)=>toggleCheck({label:i.label, value:i.value})}
              />
          </li>
        )}
      </ul>
    </section>
  );
}