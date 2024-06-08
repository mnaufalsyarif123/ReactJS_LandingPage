import React from 'react';
const AddressMap = () => {
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed/v1/place?q=indigospacesdk&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="1000"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>
    );
};
export default AddressMap ;