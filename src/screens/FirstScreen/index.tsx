import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeValue,deleteValue } from "../../store/FirstScreen/action";

interface IProps{
    value?: string;
    changeValue?: (value: string) => void;
    deleteValue?: () => void;
} 

interface InternalState{
    value: string;
}

class FirstScreen extends React.Component<IProps, InternalState> {
    public constructor(props: IProps) {
		super(props);

		this.state = {
			value: props.value || '',
		};
    }
    
    public componentDidUpdate(prevProps: IProps): void {
        if(prevProps.value !== this.props.value)
        {
            this.setState({value: this.props.value || ''});
        }
    }

    render() { 
        return (
        <div style={{textAlign:'center'}}>
            <p>Value stored:</p> 
            <p>{this.props.value}</p>
            <input onChange={(e:any) => this.setValue(e)}  value={this.state.value} />
            <button onClick={this.props.deleteValue}>Delete</button>
            <button onClick={() => this.props.changeValue && this.props.changeValue(this.state.value)}>Save</button>
        </div> 
        );
    }

    private setValue = (e:any) =>{
        this.setState({value: e.target.value})
    };
}

const mapStateToProps = (state: any): object => ({value: state.field.value});

const mapDispatchToProps = (dispatch: any): object => (bindActionCreators({changeValue, deleteValue}, dispatch));

export default connect(mapStateToProps,mapDispatchToProps)(FirstScreen);
