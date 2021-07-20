import { logger } from '~/utils';
import { status } from '~/constants';
import { UnAuthorizedSchema } from '~/schemas';

export const uploadData = async (req, res) => {
  const { OK, SERVER_ERROR } = status;
  try {
    if (!req.body.nic) {
      throw new Error('Invalid CNIC Number');
    }
    const data = new UnAuthorizedSchema(req.body);

    await data.save();

    return res.json({
      success: true,
      data,
    });
  } catch (e) {
    logger('error', 'Error:', e.message);
    return res.json({
      status: SERVER_ERROR,
      success: false,
      message: 'Internal Server Error',
    });
  }
};
