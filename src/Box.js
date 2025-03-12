import './esFlexbox.css';

function Box({bg_color}) {
    return (
        <div className="box" style = {{ backgroundColor: bg_color }}></div>
    );
}

export default Box;
