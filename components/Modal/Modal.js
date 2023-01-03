const Modal = ({show, onHide, children}) => {
    return (
        <>
            <div className={` ${show ? 'show' : ''}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
            {/* <div className={`modal-backdrop ${show ? 'show' : ''}`}></div> */}
        </>
    );
}

export default Modal;