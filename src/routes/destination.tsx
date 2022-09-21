import SearchSelect from '../components/searchSelector/SearchSelect'
import NavButton from "../components/buttons/NavButton";
import Header from "../components/Header";


export default function destination() {
  return(
    <div className="holy-grail-layout centered-layout">
      <Header />
      <aside></aside>
      <main>
        <h2 className="title">Where do you want to travel?</h2>
        <SearchSelect/>
        
      </main>
      <aside></aside>
      <footer>
        <NavButton link="/" label="Home" direction="back"/>
        <NavButton link="/travellers" label="Who is travelling" />
      </footer>
    </div>
  )
}