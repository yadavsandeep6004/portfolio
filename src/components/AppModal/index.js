
import Typography from '../Typography'
import React from 'react';
import './style.css';
import Modal from 'react-modal';
import { AiOutlineMenu } from 'react-icons/ai';
import MobileNav from '../MobileNav';

const customStyles = {
    content: {
        top: '0%',
        left: '10%',
        right: '0',
        height: '100vh',
        paddingTop:'50px',
        zIndex: 2000
     
        
    },
};


Modal.setAppElement('#root');



const AppModal = (props) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        props.onClick()
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        props.onClick()
        
    }



    return (
        <div className='AppModal'>

            <div className='menu' onClick={openModal}>
                <AiOutlineMenu />
            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2> */}
                <div className='AppModal-img'>
                    <div ref={(_subtitle) => (subtitle = _subtitle)}>
                        <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/logo.gif' alt='logo' />
                    </div>

                    <button onClick={closeModal}>
                        <Typography type='H5'>X</Typography>
                    </button>
                </div>
                <MobileNav onClick={closeModal}/>
            </Modal>
        </div>

    )
}

export default AppModal