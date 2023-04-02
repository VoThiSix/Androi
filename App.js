import { Background } from './src/components/Background';
import { Navigation } from './src/navigation/index';
import { PlanetsContextProvider } from './src/context/planetsContext';

export default function App() {
  return (
    <PlanetsContextProvider>
      <Background>
        <Navigation/>
      </Background>
    </PlanetsContextProvider>
  );
}
