import { logger } from '~/utils';
import { status } from '~/constants';
import { AuthorizedSchema, UnAuthorizedSchema } from '~/schemas';

export const userData = async (req, res) => {
  //Codes that we might return coming from status
  const { OK, SERVER_ERROR, UNAUTHROIZED } = status;

  //Destructuring user from the req that we added in auth middleware
  const user = req.user;

  try {
    const UnAuthorizedData = await UnAuthorizedSchema.find();
    const AuthorizedData = await AuthorizedSchema.find();

    const pendingApprovals = UnAuthorizedData.filter(
      (x) => x.user.email === user.email,
    );
    const approvedData = AuthorizedData.filter((x) => x.user.email === user.email);

    return res.json({
      success: true,
      data: {
        pending: pendingApprovals.length,
        approved: approvedData.length,
      }
    });
  } catch (e) {
    //Log in case of any abnormal crash
    logger('error', 'Error:', e.message);
    return res.json({
      success: false,
      error: {
        code: SERVER_ERROR,
        message: 'Internal Server Error',
      },
    });
  }
};
