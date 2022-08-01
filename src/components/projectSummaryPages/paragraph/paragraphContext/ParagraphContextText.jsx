function ParagraphContextText(props){
    const colourScheme = props.colourScheme;
    
    return(<p className={`text-xl p-4 group-hover:text-${colourScheme}-800 transition-all duration-700 ease-linear`}>
        &nbsp; {props.text}
    </p>);
}

export default ParagraphContextText