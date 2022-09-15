import { SyntheticEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateKind, selectKind } from "./kindSlice";
import { TravellersKind } from '../../enums';

export default function KindSelect() {
  const kind = useAppSelector(selectKind)
  const disptach = useAppDispatch();

  const kindLabels: string[] = Object.values(TravellersKind)

  const handleChange = (evt:SyntheticEvent) => {
    disptach(updateKind((evt.target as HTMLInputElement).value))
  };

  return (
    <section className="checks-layout">
        <form>
      <ul className="check-list">
          {kindLabels.map((i) =>
            <li key={i}
              className="inputXL">
              <input
                id={i}
                type="radio"
                name="kind"
                checked = {kind === i}
                onChange={handleChange}
                value={i}/>
                <label htmlFor={i}>{i}</label>
            </li>
          )}
      </ul>
        </form>
    </section>
  )
}