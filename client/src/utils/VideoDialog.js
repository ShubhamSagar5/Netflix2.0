import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialogBox } from '../redux/MovieSlice';
import VideoBackground from '../components/VideoBackground';

export default function VideoDialog() {
  const [open, setOpen] = React.useState(false);

  const dialogBox = useSelector((store)=>store?.movie?.dialogBox)
  const dialogVideoId = useSelector((store)=>store?.movie?.dialogVideoId)
  const dispatch = useDispatch()
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(toggleDialogBox(false))
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={dialogBox}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <VideoBackground videoId={dialogVideoId} bool={true} size={true}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
