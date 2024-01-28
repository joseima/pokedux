
import {Spin, Col } from 'antd';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import './App.css';


function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();


  // const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  },[]);


  return (
    <>
    <Col span={4} offset={10}>
      <img  className='pokeLogo' src={logo} alt='Pokedux' />
    </Col>
    <Col span={8} offset={8}>
      <Searcher />

    </Col>
    { loading ? (
      <Col offset={12} >
        <Spin spinning size='large' />
      </Col> ): (
      <PokemonList pokemons={pokemons} />
    )}
    </>
  );
}
// using connect 
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });


// export default connect(mapStateToProps, mapDispatchToProps) (App);
export default  (App);
