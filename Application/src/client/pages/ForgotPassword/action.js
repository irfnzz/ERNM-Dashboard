import { toast } from 'react-toastify';
import { actionGenerator } from 'utils';
import { requestAction } from 'utils/request';
import { updateTokenAction } from 'store/action';

export const FORGOTPASSWORDREQUEST_ACTION = actionGenerator('@@FORGOTPASSWORDREQUEST_ACTION');
export const forgotPasswordRequestAction = (data) => (dispatch) =>
  dispatch(
    requestAction({
      url: '/auth/forgotPasswordRequest',
      label: FORGOTPASSWORDREQUEST_ACTION.NAME,
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
