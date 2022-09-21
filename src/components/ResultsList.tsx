import { results } from '../content'
import type { ResultsItem } from '../content'
import { TypeFlags } from 'typescript'

export default function ResultsList() {
  
  return (
    <section className="results">
      { results.map( (i) => 
        <div className="container-small card-result">
        <p> MATCH: {i.match}</p>
        <h3> {i.title} </h3>
        <img src={i.pic.url} alt={i.title} />
        <ul>
          { i.tags.map( (tag) => <li className="preferences__pill-list__item"> { tag } </li>) }
        </ul>
        </div>
      ) }
    </section>
  )
}