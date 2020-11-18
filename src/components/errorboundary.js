import react, {Component} from "react";



class errorBoundary extends Component{


    constructor (props){
        super(props)


        this.state ={
            hasError:false
        };
    }
    static getDerivedStateFromError(error) {
        return  {
            hasError : true
        };
    }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log (error);
        console.log (info);
    }
    render(){
        if(this.state.hasError){
            return <h1>error</h1>;
        }
        return this.props.children;
    }
}
export default errorBoundary;