import React from 'react'
import { FacultyTest } from './FacultyTest'
import { PatronusTest }from './PatronusTest'
import { WandTest } from './WandTest'
const s = 1;
class MainTest extends React.Component {
    MainTestBlock = () => {
        return (
            <div>
                {
                    s == 1 ? <FacultyTest /> :
                        s == 2 ? <PatronusTest /> :
                            <WandTest />
                }
            </div>
        )
    }
    render()
    {
        return this.MainTestBlock()
    }
}
export default MainTest;