import * as React from 'react';

export class Distribution extends React.Component {
    constructor() {
        super();
    }
    Distribution1 = () => {
        return (
            <div className='distribution'>
                <a href='/wand'>
                    <img
                        className='imga'
                        alt="" />
                </a>
                <a href="/patronus">
                    <img className='imga1'
                        alt="" /></a>
                <a href="/faculty">
                    <img className='imga2'
                        alt="" />
                </a>
            </div>
        )
    }
    render() {
        return this.Distribution1();
    }
}