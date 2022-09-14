import FeaturesList from "../components/FeaturesList";
import Content from "../content";

export default function Features() {
  return (
    <main className="main-selection-layout">
      <h2 className="title">Comming Features...</h2>
      <FeaturesList content={Content.highlevel} />
    </main>
  );
}