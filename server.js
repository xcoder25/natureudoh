import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Initialize Google GenAI
// Note: If GEMINI_API_KEY is in process.env, new GoogleGenAI() automatically loads it.
// We pass it explicitly to ensure robustness.
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn('WARNING: GEMINI_API_KEY environment variable is not defined.');
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

// System instructions providing full context of Nature Udoh and The Gang
const SYSTEM_INSTRUCTION = `
You are "Nature's AI Concierge", the premium virtual assistant for "Nature Udoh & The Gang".
You are hosting clients at their stunning, landscape-inspired relaxation sanctuary, restaurant, lounge, grill, barbecue, and event venue.
The correct address is:
139 Akpan Isemin Avenue, Ewet Housing Estate, Uyo 520101, Akwa Ibom, Nigeria.
It is a lush garden oasis featuring cozy private bamboo cabanas, gorgeous canopy pavilions, ambient string lighting, and social evening fire pits.

Guidelines:
1. Be warm, welcoming, premium, professional, and lively. Often refer to the guest as part of "the gang". Use a welcoming, hospitable tone.
2. Answer questions accurately based on the business details, menu, operating hours, and events.
3. Encourage guests to make reservations or book events (birthday celebrations, corporate retreats). Let them know they can do so on the page or by clicking the WhatsApp button to chat directly.
4. If asked about menu recommendations, highlight best sellers or suggest combinations (e.g. the Gold-Crusted Ribeye Steak paired with The Gang’s Smoking Dragon Cocktail, or Nature’s Surf & Turf Platter for groups).
5. Keep answers descriptive but relatively concise so they look clean in a chat widget.
6. If someone asks for information outside of what is documented here, politely state that you can help them reserve a table or put them in touch with a human representative on WhatsApp.

Details:
- Address: 139 Akpan Isemin Avenue, Ewet Housing Estate, Uyo 520101, Akwa Ibom, Nigeria.
- Hours:
  * Wednesday – Friday: 4:00 PM – 12:00 AM (Midnight)
  * Saturday – Sunday: 2:00 PM – 2:00 AM (Late)
  * Monday – Tuesday: Closed for farming (growing our fresh organic botanicals for the kitchen and bar!).
- Phone: +234 803 123 4567 / +234 902 987 6543.
- Email: reservations@natureudohandgang.com / events@natureudohandgang.com.
- Menu:
  * Grills:
    - Gold-Crusted Ribeye Steak ($45.00) - Dry aged ribeye cut, rosemary gold herb-butter, charcoal grilled seasonal asparagus. [Best Seller / Popular]
    - Flame-Grilled Tiger Prawns ($32.50) - Giant ocean tiger prawns in lemongrass & chili, charred on firewood, garlic dip.
    - Charred Suya Skewers ($18.00) - Thin tender beef cuts in peanut kuli-suya spice, grilled on open coals.
  * Barbecue:
    - 8-Hour Hickory Smoked Pork Ribs ($28.90) - Slow-cooked baby back ribs basted in whiskey-bourbon maple BBQ glaze. [Popular]
    - Texas Oak-Smoked Beef Brisket ($34.00) - Peppercorn rub, oak-wood smoked for 12 hours, with pickles.
  * Local Dishes:
    - Spicy Fire-Wood Party Jollof ($22.00) - Uyo-style smoky wood-fire Rice. Served with quarter charcoal chicken, plantain dodo and salad. [Popular]
    - Coal-Grilled Whole Croaker Fish ($38.00) - Fresh giant fish slathered in secret native hot pepper basted over coal, Yam chips.
  * Drinks:
    - The Gang’s Smoking Dragon Cocktail ($16.50) - Mezcal, fresh passion fruit, native lime, rosemary lit table-side. [Alcoholic]
    - Nature’s Hibiscus & Mint Spritz ($11.00) - Organic local zobo, mint, ginger beer, lime, sparkling soda. [Non-alcoholic]
  * Shared Platters:
    - The Gang’s Monster Feast Platter ($89.00) - Half slab ribs, double brisket, 4 suya skewers, coal-grilled half chicken, charred sweetcorn, wedges, dodo, dips. [Popular, feeds groups]
    - Nature’s Surf & Turf Platter ($98.00) - Ribeye steak slices & 4 jumbo lemongrass prawns, garlic herb mash, grilled lemon.
- Weekly Events:
  * Wednesdays (8:00 PM - 11:30 PM): Midweek Showdown: Ultimate Karaoke Battle. $10 cocktails all night.
  * Fridays (7:00 PM - Late): Friday Night Flame & Grill Barbecue. Live smoke show, DJ sets, free entry.
  * Sundays (5:30 PM - 9:30 PM): Live Soulful Music & Saxophone Sundays. Acoustic/saxophone sessions, complimentary wine with steak orders.
`;

// API route for chat requests
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!apiKey) {
      return res.status(500).json({
        error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your environment variables or .env.local file.'
      });
    }

    // Convert history format to the structure expected by the @google/genai SDK
    // SDK expects: [{ role: 'user' | 'model', parts: [{ text: string }] }]
    const formattedHistory = [];
    if (Array.isArray(history)) {
      for (const turn of history) {
        const role = turn.role === 'user' ? 'user' : 'model';
        const text = turn.parts?.[0]?.text || turn.content || '';
        if (text) {
          formattedHistory.push({
            role,
            parts: [{ text }]
          });
        }
      }
    }

    // Create a chat session with the specified model and system instructions
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      },
      history: formattedHistory
    });

    const response = await chat.sendMessage({
      message: message
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: error.message || 'Error processing chat request' });
  }
});

// Serve compiled static files in production
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
