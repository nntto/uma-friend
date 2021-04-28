import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import React from "react";
import UploadForm from "./Form";

export default () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        投稿フォーム
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <UploadForm />
        </div>
      </Popover>
    </>
  );
};
