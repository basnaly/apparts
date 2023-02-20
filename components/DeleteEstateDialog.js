import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { CancelButton, DialogContentTextStyled, DialogTitleStyled, SaveButton } from '@/styles/StyledComponents';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteEstateDialog = ({ el }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDeleteDialog = () => setIsDialogOpen(true);
    const closeDeleteDialog = () => setIsDialogOpen(false);

    const deleteEstate = async () => {
        const response = await fetch(`/api/appart-data/${el.id}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        closeDeleteDialog()
    }

    return (
        <React.Fragment>
            <CancelButton
                variant={'outlined'}
                className=" mx-3"
                onClick={openDeleteDialog}>
                Delete
            </CancelButton>

            <Dialog
                open={isDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitleStyled id="modal-modal-title" variant="h6" component="h2"
                    className='pb-1 m-1'>
                    Delete estate 
                </DialogTitleStyled>

                <hr className='mx-2 my-0' />

                <DialogContent className='pb-3'>
                    <DialogContentTextStyled 
                        id="alert-dialog-slide-description"
                        className='mt-0 mb-0'
                    >
                        Are you sure you want to delete the estate at {el?.address} ?
                    </DialogContentTextStyled>
                </DialogContent>

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                    <SaveButton
                        data-testid="cancel-button-element"
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeDeleteDialog}
                    >
                        Cancel
                    </SaveButton>

                    <CancelButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={deleteEstate}
                    >
                        Delete
                    </CancelButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DeleteEstateDialog;
