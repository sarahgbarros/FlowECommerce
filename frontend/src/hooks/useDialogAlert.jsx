import { useSnackbar } from "notistack";

const useDialogAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (props) => {
    const { message, variant, ...rest } = props;
    enqueueSnackbar(message, {
      variant,
      ...rest,
    });
  };

  return { snackbar };
};

export default useDialogAlert;