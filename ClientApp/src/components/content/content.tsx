import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import './content.css'
import { BookData } from './Books';
import { GameData } from './Games';
import { MovieData } from './Movies';
interface ContentBookDataState {
    title: string;
    loading: boolean;
    BookData: BookData;
    MovieData: MovieData;
    GameData: GameData;
    path: string;
}
export class Content extends React.Component<RouteComponentProps<{}>, ContentBookDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, BookData: new BookData, MovieData: new MovieData, GameData: new GameData, path: "data:image/png;base64," };

        var bookid = this.props.match.params["bookid"];
        var gameid = this.props.match.params["gameid"];
        var movieid = this.props.match.params["movieid"];
        // This will set state for Edit employee
        if (bookid > 0) {
            fetch('/api/Book/Details/' + bookid)
                .then(response => response.json() as Promise<BookData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, BookData: data });
                });
        }
        if (gameid > 0) {
            fetch('/api/Game/Details/' + gameid)
                .then(response => response.json() as Promise<GameData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, GameData: data });
                });
        }
        if (movieid > 0) {
            fetch('/api/Movie/Details/' + movieid)
                .then(response => response.json() as Promise<MovieData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, MovieData: data });
                });
        }
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.BookData.bookId > 0 ? this.renderBookTable()
                : this.state.GameData.gameId > 0 ? this.renderGameTable()
                    : this.state.MovieData.movieId > 0 ? this.renderMovieTable() : "";
        
        return <div>
            <div className="linn">
                {this.state.BookData.bookId > 0 ? < NavLink to="/Books">На головну</NavLink> :
                 this.state.GameData.gameId > 0 ? < NavLink to="/Games">На головну</NavLink> :
                 this.state.MovieData.movieId > 0 ? < NavLink to="/Movies">На головну</NavLink> : ""}
            </div>
            {contents}
        </div>;

    }
    public renderBookTable() {
        return <div>
            <table className='table1'>
                <thead>
                    <th key={this.state.BookData.bookId}>
                        <td>{this.state.BookData.book_Name}</td>
                        </th>
                </thead>
            </table>
            <div className='formchange'>
                <div className="form-group col" >
                    <input type="hidden" name="BookId" value={this.state.BookData.bookId} />
                </div>
                < div className="form-group col" >
                    <label className=" control-label col-md-12" htmlFor="Name">Book Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Book_Name" defaultValue={this.state.BookData.book_Name} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Gender">Book Description</label>
                    <div className="col-md-4">
                        <textarea className="form-control" type="text" name="Book_description" defaultValue={this.state.BookData.book_description} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Book url</label>
                    <div className="col-md-4 jj">
                        <input className="form-control" type="text" name="Book_url" defaultValue={this.state.BookData.book_url} required />
                    </div>
                </div>
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Book image</label>
                    <div className="col-md-4 jj">
                        <img width="200" height="auto" alt="" src={this.state.path + this.state.BookData.book_Image} />
                    </div>
                </div>
                <br />
            </div >
        </div>;
    }
    public renderGameTable() {
        return <div>
            <table className='table1'>
                <thead>
                    <th key={this.state.GameData.gameId}>
                        <td>{this.state.GameData.game_Name}</td>
                    </th>
                </thead>
            </table>
            <div className='formchange'>
                <div className="form-group col" >
                    <input type="hidden" name="GameId" value={this.state.GameData.gameId} />
                </div>
                < div className="form-group col" >
                    <label className=" control-label col-md-12" htmlFor="Name">Game Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Game_Name" defaultValue={this.state.GameData.game_Name} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Gender">Game Description</label>
                    <div className="col-md-4">
                        <textarea className="form-control" type="text" name="Game_description" defaultValue={this.state.GameData.game_description} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Game url</label>
                    <div className="col-md-4 jj">
                        <input className="form-control" type="text" name="Game_url" defaultValue={this.state.GameData.game_url} required />
                    </div>
                </div>
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Game image</label>
                    <div className="col-md-4 jj">
                        <img width="200" height="auto" alt="" src={this.state.path + this.state.GameData.game_Image} />
                    </div>
                </div>
                <br />
            </div >
        </div>;
    }
    public renderMovieTable() {
        return <div>
            <table className='table1'>
                <thead>
                    <th key={this.state.MovieData.movieId}>
                        <td>{this.state.MovieData.movie_Name}</td>
                    </th>
                </thead>
            </table>
            <div className='formchange'>
                <div className="form-group col" >
                    <input type="hidden" name="MovieId" value={this.state.MovieData.movieId} />
                </div>
                < div className="form-group col" >
                    <label className=" control-label col-md-12" htmlFor="Name">Movie Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Movie_Name" defaultValue={this.state.MovieData.movie_Name} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Gender">Movie Description</label>
                    <div className="col-md-4">
                        <textarea className="form-control" type="text" name="Movie_description" defaultValue={this.state.MovieData.movie_description} required />
                    </div>
                </div >
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Movie url</label>
                    <div className="col-md-4 jj">
                        <input className="form-control" type="text" name="Movie_url" defaultValue={this.state.MovieData.movie_url} required />
                    </div>
                </div>
                <div className="form-group col">
                    <label className="control-label col-md-12" htmlFor="Department" >Movie image</label>
                    <div className="col-md-4 jj">
                        <img width="200" height="auto" alt="" src={this.state.path + this.state.MovieData.movie_Image} />
                    </div>
                </div>
                <br />
            </div >
        </div>;
    }
}