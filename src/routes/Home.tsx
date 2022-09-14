import Navigation from '../components/Navigation'
import { useWindowDimensions } from '../hooks'
import Layout from '../components/Layout'

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <Layout height={height} class="centered-layout">
      <main className="centered-layout">
        <div className="container-small">
          <h3>Welcome</h3>
          <h5>This is a prototype for a web app to test Safari capabilities on iOS. Use the menu above to navigate between pages.</h5>
          <Navigation />
        </div>
      </main>
    </Layout>
  );
}