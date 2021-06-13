import Header from "./components/Header/Header";
import {Route, Switch} from 'react-router-dom';
import MoviesPage from "./components/MoviesPage/MoviesPage";
import {useEffect} from "react";
import {fetchGenres} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./common";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

function App() {

    const {loading} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [])

    return !loading ?
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <MoviesPage/>}/>
                <Route exact path={'/movie/:id'} render={({match:{params}}) => <MovieDetailsPage id={params.id} />}/>
            </Switch>
        </div>
        : <Preloader width={200}/>
}


export default App;
