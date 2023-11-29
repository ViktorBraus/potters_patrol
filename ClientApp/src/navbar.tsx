import * as React from 'react'
import {useAuth0} from "@auth0/auth0-react"

interface UserData {
    UserContent: UserContent[];
}
var nick;
const UserName = () => {
    const { user } = useAuth0();
    nick = user?.nickname;
    return (<>
        <input hidden name="Id" value="1" />
        <input hidden className="form-control kk" type="text" name="UserName" defaultValue={nick} required />
    </>
    )
}
export class NavBar extends React.Component<{}, UserData>
{
    constructor() {
        super();
        this.state = {
            UserContent: [],
        }
        fetch('api/UserContent/Index')
            .then(response => response.json() as Promise<UserContent[]>)
            .then(data => {
                this.setState({ UserContent: data});
            });
        this.onSiteChanged = this.onSiteChanged.bind(this);
    }
    public onSiteChanged(event) {
       
    }
    public render() {
        let content = this.renderTestTable(this.state.UserContent);

        return (
            <div className='logo'>
                <input type='checkbox' id="settingsbutton" className='menucursor'></input>
                <label htmlFor="settingsbutton"></label>
                <br/>
                {content}
                <Navbar />
                <UserName />
            </div>

            )
    }
    public renderTestTable(usercontent: UserContent[])
    {
        return <>
            {usercontent.map(u => u.userName === nick ?
                <div className='tiiitle_'>
                    {console.log("nick is : " + nick)}
                    {console.log("faculty is : " + u.faculty)}
                    {u.faculty == "Слизерин" ? <div className='faculty_slyz'></div> :
                        u.faculty == "Ґрифіндор" ? <div className='faculty_gryf'></div> :
                            u.faculty == "Рейвенкло" ? <div className='faculty_rav'></div> :
                                u.faculty == "Гафелпав" ? <div className='faculty_huff'></div> :
                                    <div className='facultyimage'></div>}
                </div>
                : <div className='facultyimage'></div>)}
        </>
    }
}

const Navibar = () => {
    const auth0 = useAuth0();
    var u = new UserContent;
    fetch('api/UserContent/Index')
        .then(response => response.json() as Promise<UserContent>)
        .then(data => {
            u = data;
        });
    return(
        <>
            <div className='tiiitle'>Potter`s Patrol</div>
            <div className='list'><ul className='nav'>
                {auth0?.isAuthenticated ? (auth0?.user?.email == "korolenko.viktor@chnu.edu.ua" ? <li>
                    <a href="/Layout">
                    <button className='AdminButton'></button><br />Адмін
            </a>
                </li> : "" ): ""}
                <li><a href="/About">
              <button className='SearchButton'></button><br />About
            </a>
                </li>
                <li>{auth0?.isAuthenticated ?
                    <a href="http://potterspatrol.pythonanywhere.com/">
                        <button className='Chat_button'></button>
                        <br />Чат-Бот
                    </a> :
                <a href = "http://potterspatrol.pythonanywhere.com/">
                        <button disabled className='Chat_button'></button>
                        <br />Чат-Бот
                    </a>}
                </li>
                <li>{auth0?.isAuthenticated ?
                    <a href="/profile">
                        <button className='ProfileButton'></button>
                        <br />Профіль
                        </a> :
                    <a href="/profile">
                        <button disabled className='ProfileButton'></button>
                        <br />Профіль
                        </a>}
            </li>
                <li>{auth0?.isAuthenticated ?
                    <a href="/Forum">
                        <button className='AboutButton'></button>
                        <br />Форум
                        </a> :
                    <a href="/Forum">
                        <button disabled className='AboutButton'></button>
                        <br />Форум
                        </a>}
            </li>
                <li>
                    {auth0?.isAuthenticated ?
                        <a className='a' href="/HomeAfter">
                            <button className='HomeButton'></button>
                            <br />Головна
                            </a> :
                        <a className='a' href="/Home">
                            <button className='HomeButton'></button>
                            <br />Головна
                            </a>}
                </li>
            </ul></div>
            </>
    )
}
const Navbar = () =>
{
    return(
        <Navibar/>
    )
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
