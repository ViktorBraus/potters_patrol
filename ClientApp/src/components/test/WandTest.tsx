import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Route } from 'react-router-dom';
import '../../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Tests } from './TestSection'
interface FetchTestDataState {
    check: boolean;
    result: string;
    Test: Tests[];
    questionList: QuestionDetail[];
    answerList: AnswerDetail[];
    resulting: TestResult[];
    User: User;
    User_: User[];
    UserContent: UserContent;
    User_Content: UserContent[];
    loading: boolean;
    path: string;
}
var u;
const UserName = () => {
    const { user } = useAuth0();
    u = user?.nickname;
    return (<>
        <input hidden name="Id" value="1" />
        <input hidden className="form-control kk" type="text" name="UserName" defaultValue={u} required />
    </>
    )
}

export class WandTest extends React.Component<RouteComponentProps<{}>, FetchTestDataState> {
    constructor() {
        super();
        this.state = {
            check: false,
            result: "",
            resulting: [],
            Test: [],
            UserContent: new UserContent,
            User_Content: [],
            answerList: [],
            questionList: [],
            User_: [],
            User: new User,
            loading: true,
            path: "data:image/png;base64,"
        };

        fetch('api/Question/Index')
            .then(response => response.json() as Promise<QuestionDetail[]>)
            .then(data => {
                this.setState({ questionList: data, loading: false });
            });
        fetch('api/Tests/TestIndex')
            .then(response => response.json() as Promise<Tests[]>)
            .then(data => {
                this.setState({ Test: data, loading: false });
            });
        fetch('api/User/Index')
            .then(response => response.json() as Promise<User>)
            .then(data => {
                this.setState({ User: data, loading: false });
            });
        fetch('api/User/Index')
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.setState({ User_: data, loading: false });
            });
        fetch('api/Result/Index')
            .then(response => response.json() as Promise<TestResult[]>)
            .then(data => {
                this.setState({ resulting: data, loading: false });
            });
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent>)
            .then(data => {
                this.setState({ UserContent: data, loading: false });
            });
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent[]>)
            .then(data => {
                this.setState({ User_Content: data, loading: false });
            });
        fetch('api/Tests/Index')
            .then(response => response.json() as Promise<Tests[]>)
            .then(data => {
                this.setState({ Test: data, loading: false });
            });
        fetch('api/Answer/AnswerIndex')
            .then(response => response.json() as Promise<AnswerDetail[]>)
            .then(data => {
                this.setState({ answerList: data, loading: false });
            });
        this.handleSave = this.handleSave.bind(this);
        // This binding is necessary to make "this" work in the callback
    }
    public handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if (this.state.UserContent.id) {
            fetch('/api/UserContent/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/result");
                })
        }
        // POST request for Add employee.
        else {
            fetch('/api/UserContent/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/result");
                })
        }
    }
    public render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> :
            this.renderTestTable(this.state.resulting, this.state.questionList, this.state.answerList, this.state.User_);

        return <div className='lolikk'>
            <label className='lolik'>Вибір чарівної палички</label>
            <p />
            {contents}
        </div>;

    }
    public renderTestTable(result: TestResult[], questionList: QuestionDetail[], answerList: AnswerDetail[], user_: User[]) {
        return <form id='11' className='form'>
            {questionList.map(q =>
                q.id > 10 && q.id <= 17 ?
                    <>
                        <div className='lol'>
                            {q.id > 10 && q.id <= 17 ?
                                <>
                                    <label className='lola'>{q.question}</label>
                                    {answerList.map(a =>
                                        <>
                                            {a.questionId == q.id ?
                                                <div className='testblock'> 
                                                <label className="radio">
                                                    <input className='radio' name={a.questionId.toString()} required type="radio" />
                                                    <div className="radio__text">{a.answer}</div>
                                                </label><p />
                                            </div> : ""}
                                        </>
                            )}
                        </>
                        : ""}
                    <br />
                </div><br /></> : null
            )}
            <form className='row-md-3 zol' onSubmit={this.handleSave}>
                {result.map(r =>
                    <>
                        {user_.map(u =>
                            this.state.result !== "" ?
                                this.state.check ?
                                    this.state.result == r.result ?
                                        <div>
                                            <input hidden type="text" name="WandImage" defaultValue={this.state.result == r.result ? r.resultImage.toString() : "bg"} />
                                            <img defaultValue={this.state.path + r.result == this.state.result ? r.resultImage : ""}
                                                width="200" height="200" src={this.state.path + (r.result == this.state.result ? r.resultImage : "")} />
                                            <input type="text" name="Id" defaultValue={u.userId.toString()} />
                                            <input className='buta' type="text" name="Wand" defaultValue={this.state.result} /><span />
                                        </div>
                                        : null
                                    : null
                                : null
                        )}
                    </>
                )}
                <UserName />
                <div className='zol'>
                    <button className='buta' type="submit">Завершити</button>
                    <button className='buta'><NavLink to='/'>Повернутись</NavLink></button>
                </div>
            </form>
        </form>;
    }
}
export class QuestionDetail {
    id: number = 0
    question_Id: number = 0
    question: string = ""
}
export class AnswerDetail {
    questionId: number = 0
    answer: string = ""
}
export class User {
    userId: number = 0;
    userName: string = "";
    password: string = "";
    email: string = "";
    profileImage: string = "";
}
export class TestResult {
    test_Id_: number = 0;
    result: string = "";
    resultImage: string = "";
}
export class UserContent {
    id: number = 0;
    userName: string = "";
    wand: string = "";
    wandImage: string = "";
    faculty: string = "";
    facultyImage: string = "";
    patronus: string = "";
    patronusImage: string = "";
}