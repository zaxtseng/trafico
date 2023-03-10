// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type NewType = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewType>
) {
  res.status(200).json({ name: "John Doe" });
}
