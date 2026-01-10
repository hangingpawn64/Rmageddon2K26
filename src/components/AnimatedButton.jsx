import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick }) => {
    return (
        <button className="animated-btn" onClick={onClick}>
            {text}
            <div className="animated-btn-clip">
                <div className="animated-btn-corner animated-btn-leftTop"></div>
                <div className="animated-btn-corner animated-btn-rightBottom"></div>
                <div className="animated-btn-corner animated-btn-rightTop"></div>
                <div className="animated-btn-corner animated-btn-leftBottom"></div>
            </div>
            <span className="animated-btn-arrow animated-btn-rightArrow"></span>
            <span className="animated-btn-arrow animated-btn-leftArrow"></span>
        </button>
    );
};

export default AnimatedButton;
