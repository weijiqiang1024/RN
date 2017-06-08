/**
 * Created by zll on 2017/6/7.
 */
import React,{Component} from 'react';
export default class AppMaster extends Component{

    componentWillMount(){
        // console.log(this.props.children);
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}