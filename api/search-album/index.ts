import type { VercelRequest, VercelResponse } from '@vercel/node'

async function handler (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const deezerApi = 'https://api.deezer.com'
  const { q } = req.query

  const request = await fetch(`${deezerApi}/search/album?q=${q}`)
  const data = await request.json()

  return res.status(200).json(data)
}

export default handler