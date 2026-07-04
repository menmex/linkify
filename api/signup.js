export default async function handler(req, res) {
  // 1. Set up CORS headers so your HTML file can communicate with it
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle browser preflight checks
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Only allow POST requests for signing up
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vercel parses the incoming JSON body automatically
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password." });
    }

    // -----------------------------------------------------------------
    // NOTE: Your database saving logic (like MongoDB) will go right here!
    // For now, it will return a success message to verify the connection.
    // -----------------------------------------------------------------

    return res.status(200).json({ 
      success: true, 
      message: "Account connected to backend successfully!" 
    });

  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
