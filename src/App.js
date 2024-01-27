
import { Button, Col } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import PokemonList from './components/PokemonList';


function App() {
  return (
    <>
    <Col span={8} offset={8}>
      <Searcher />
      <Button type="primary">Button</Button>
    </Col>
    <PokemonList />
    </>
  );
}

export default App;
