import React, { useEffect } from 'react';

const ModalComponent = ({ id, title, bodyContent }) => {
    useEffect(() => {
        const modalElement = document.getElementById(id);
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', () => {
                // Cleanup logic if needed when modal is closed
            });
        }
    }, [id]);

    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {bodyContent}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
//         <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
    );
};

export default ModalComponent;
