import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "isomorphic-unfetch";

const ENDPOINT = `https://api.txprice.com/v1;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { gas = "99,98,96" } = req.query;

  try {
    const response = await fetch(`${ENDPOINT}`);

    const data = await response.json();

    res.status(200);
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
}
