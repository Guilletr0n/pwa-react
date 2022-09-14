import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateEnvision, selectTripEnvision } from './tripEnvisionSlice'
import MHMcheckbox from '../MHMcheckbox'
import { Envision } from '../types';

export default function EnvisionSelect()  {

  const envisions = useAppSelector(selectTripEnvision)
  const dispatch = useAppDispatch();

  function toggleCheck(envy:Envision) {
    dispatch(updateEnvision(envisions.map( (e) => { return e.label === envy.label ? {label:e.label, value: !e.value} : e } )))
  }

  return (
    <section className="checks-layout">
      <ul className="checkList">
        {envisions.map((i) => 
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