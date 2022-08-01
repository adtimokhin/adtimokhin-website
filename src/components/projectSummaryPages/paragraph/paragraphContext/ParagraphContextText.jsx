function ParagraphContextText(props){
    return(<p className="text-xl p-4 group-hover:text-gray-600 transition-all duration-700 ease-linear">
        &nbsp; {props.text}
    </p>);
}

export default ParagraphContextText