import { NextApiRequest, NextApiResponse } from "next";

interface IdApiNextRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export default function getById(req: IdApiNextRequest, res: NextApiResponse) {
  //   res.status(200);
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(req.query.id);

  res.json({ id: req.query.id });
}
