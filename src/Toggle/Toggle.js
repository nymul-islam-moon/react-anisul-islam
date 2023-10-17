import React, { useState } from "react";

const Toggle = () => {

    const [toggle, setToggle] = useState( true );



    return (
    <div style={{margin:"1rem", backgroundColor:"azure", padding: "1rem"}}>
        {toggle && (<p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit velit bibendum ridiculus, ut dui tellus odio enim fusce nibh imperdiet placerat eleifend, orci urna nisi porta tincidunt turpis vulputate potenti elementum. Varius justo euismod sociosqu hac lectus a maecenas, nulla mi feugiat fringilla scelerisque dapibus himenaeos iaculis, metus duis per id augue sed. In ac blandit sem sollicitudin est sociis aliquam mattis, primis vel sodales accumsan porttitor vehicula massa dignissim rhoncus, litora lacinia montes suscipit egestas pharetra diam. Morbi ultrices senectus penatibus curabitur etiam platea hendrerit nunc posuere ornare ullamcorper nostra, fames nec eros semper sagittis pellentesque lacus phasellus condimentum purus.
        </p>)}
        <div style={{ textAlign:"center" }}>
            <button onClick={() => { setToggle( !toggle ) } }>{ toggle ? "Hide" : "Show" }</button>
        </div>
    </div>
    );
}

export default Toggle;