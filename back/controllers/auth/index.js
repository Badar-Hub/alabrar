import { registerUser } from './helpers/registerUser';
import { loginUser } from './helpers/loginUser';
import { refreshSession } from './helpers/refreshSession';
import { sendCodePasswordRecovery } from './helpers/sendCodePasswordRecovery';
import { resetPassword } from './helpers/resetPassword';
import { validatorToken } from './helpers/tokenValidator';
import { userRole } from './helpers/userRole';
import { approveAccount } from './helpers/approveAccount';
import { getAllUsers } from './helpers/getAllUsers';

export const auth = {
  registerUser,
  loginUser,
  refreshSession,
  sendCodePasswordRecovery,
  resetPassword,
  validatorToken,
  userRole,
  approveAccount,
  getAllUsers,
};
