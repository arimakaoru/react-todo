import React from 'react';

// import '../css/Form.css'

const Form = (props) => {
    return (
        <div className="form">
            <form>
                <p><input type="text" /></p>
                <p><button type="button">追加する</button></p>
            </form>
        </div>
    );
}

export default Form;