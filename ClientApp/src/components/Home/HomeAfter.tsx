import * as React from 'react';
import './HomeAfter.css';
import Notifications from 'react-notify-toast'
import ContentBlock from './ContentBlock'
import { Distribution } from './Distribution'
import { TestSection } from './TestSection';
import { RouteComponentProps } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
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

export class HomeAfter extends React.Component<RouteComponentProps<{}>> {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            testList: []
        }
    }
  render = () => {
    const content = () => {
      return (
        <div>
          <ContentBlock/>
          <div className='textstyling'>
                  Почніть ваш розподіл у світі магії та нехай <br />
                  ваше серце обере свій рідний дім
          </div>
              <Distribution/>
          <div className='textstyling'>
          Найбільш популярні тести
          </div>
              <TestSection/>
              <Notifications />
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
        </main>
      </div>
    )
  }
}