import './App.css';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Player } from '../components/player/Player';

export default function App() {
  return (
    <div>
      <Sidebar />
      <main>
        <Player />
      </main>
    </div>
  );
}
