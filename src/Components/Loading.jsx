import './../Styles/LoadingStyles.css'

function Loading() {
    return (
        <div className='center-container'>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="classic-1"></div>
        </div>
    );
}

export default Loading;
