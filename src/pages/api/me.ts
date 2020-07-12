import { NextApiRequest, NextApiResponse } from 'next';
import myExperience from '~utils/me';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.json(myExperience);
};
