import { toast } from 'react-toastify';
import { actionGenerator } from 'utils';
import { requestAction } from 'utils/request';
import { updateTokenAction } from 'store/action';

export const RESETPASSWORD_ACTION = actionGenerator('@@RESETPASSWORD_ACTION');
export const resetPasswordAction = (data) => (dispatch) =>
  dispatch(
    requestAction({
      url: '/auth/resetPassword',
      label: RESETPASSWORD_ACTION.NAME,
      method: 'POST',
      data,
      onSuccess: ({ data: res }) => {
        dispatch(updateTokenAction({ ...res }));
      },
      onError: ({ error }) => {
        toast.error(error.message);
      },
    }),
  );
