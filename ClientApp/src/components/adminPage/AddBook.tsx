import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { BookData } from './FetchBook';

interface AddBookDataState {
    title: string;
    loading: boolean;
    BookData: BookData;
    path: string;
    file: string;
    imagePreviewUrl: string | ArrayBuffer | null;
}
var s;

    export class AddBook extends React.Component<RouteComponentProps<{}>, AddBookDataState> {

    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, BookData: new BookData, file: '', imagePreviewUrl: '', path: "data:image/png;base64," };


        var bookid = this.props.match.params["bookid"];

        // This will set state for Edit employee
        if (bookid > 0) {
            fetch('/api/Book/Details/' + bookid)
                .then(response => response.json() as Promise<BookData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, BookData: data, imagePreviewUrl: data.book_Image });
                });
        }

        // This will set state for Add employee
        else {
            this.state = { title: "Create", loading: false, BookData: new BookData, path: "data:image/png;base64,", file: '', imagePreviewUrl: "" };
        }
        
        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Book : {this.state.BookData.book_Name}</h3>
            <NavLink to="/fetchbook">Повернутись до Списку книг</NavLink>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit employee.
        if (this.state.BookData.bookId) {
            fetch('/api/Book/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchbook");
                })
        }
        // POST request for Add employee.
        else {
            fetch('/api/Book/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchbook");
                })
        }
    }
    _handleImageChange(e) {
        e.preventDefault();


        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                path: "",
                file: file,
                imagePreviewUrl: reader?.result
            });
        }
        //console.log("Дані картинки при завантаженні: " + this.state.imagePreviewUrl)
        this.state.BookData.book_Image = this.state.imagePreviewUrl ? this.state.imagePreviewUrl.toString() : " ";
        reader.readAsDataURL(file)
    }
    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchbook");
    }
    fileSelectHandler = e => {
        const param = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(param);
    };
    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview;
        //<img width="200" height="auto" src="data:image/png; base64, data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAUoAAAGdCAY">
        if (imagePreviewUrl) {
            $imagePreview = (<img width="200" height="auto" src={this.state.path + imagePreviewUrl.toString()}></img>);
        }
        else {
        }
        return (

            <form style={{width: "500px"}} className='formchange form-wrapper' onSubmit={this.handleSave} >
                <div className="form-group" >
                    <input  type="hidden" name="BookId" value={this.state.BookData.bookId} />
                </div>
                <div>
                    <label htmlFor="Name">Book Name</label>
                    <div >
                        <input style={{ width: "400px" }} className="kk" type="text" name="Book_Name" defaultValue={this.state.BookData.book_Name} required />
                    </div>
                </div >
                <div>
                    <label htmlFor="Book Description">Book Description</label>
                    <div>
                        <textarea style={{ width: "400px" }} className="kk" name="Book_description" defaultValue={this.state.BookData.book_description} required />
                    </div>
                </div >
                <div className="form-group">
                    <label htmlFor="Book url" >Book url</label>
                    <div >
                        <input style={{ width: "400px" }} className="kk" type="text" name="Book_url" defaultValue={this.state.BookData.book_url} required />
                    </div>
                </div>
               <div className="form-group">
                    <label className="" htmlFor="Book image" >Book image</label>
                    <div>
                        <div >
                            {$imagePreview}
                        </div>
                        <br />
                        <input className='butaa' type="file"
                            onChange={(e) => this._handleImageChange(e)} />
                        <br />
                        <br />
                        <input
                            style={{ width: "400px" }}
                            type="text"
                            name="Book_Image"
                            defaultValue={this.state.imagePreviewUrl?.toString()} required
                        />
                        {
                            console.log("картинка після додавання на формі: " + this.state.imagePreviewUrl)}
                    </div>
                </div>
                <div className="form-group">
                    <button style={{ margin: "10px 40px 10px 10px" }} type="submit" className="btn btn-default buta">Save</button>
                    <button className="btn buta" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}