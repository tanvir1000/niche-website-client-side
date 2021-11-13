import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../../Login/LoginManager';

const ProfilePopper = () => {
    const { loggedInUser: { name, photo }, setLoggedInUser } = useContext(UserContext);

    const signOut = () => {
        initializeLoginFramework();
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
                toast.error('Logged Out!');
            })
    }

    return (
        <OverlayTrigger
            trigger="click"
            rootClose
            key="bottom"
            placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    <Popover.Content>
                        <strong className="text-center d-block">{name}</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button onClick={signOut}
                                variant="outline-danger"
                                className="py-0 px-1"
                                size="sm">Logout</Button>
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0">
                <Image
                    src={photo}
                    width="40"
                    height="40"
                    roundedCircle
                    className="d-inline-block align-top"
                    alt="Profile"
                />
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;