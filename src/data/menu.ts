import { images } from './images'
import type { Dish } from '../types'

const PRICE = 'Price on request'

export const defaultMenu: Dish[] = [
  {
    id: 'seven-colour-plate',
    name: 'Seven Colour Plate',
    description:
      'The legendary Sunday plate: a protein of your choice with a side, chakalaka and complimentary salads, served in one generous feast.',
    category: 'Traditional Meals',
    priceLabel: PRICE,
    image: images.plate,
    featured: true,
  },
  {
    id: 'seven-colour-family',
    name: 'Seven Colour Family Spread',
    description:
      'A shared seven colours feast sized for gathering around the table. Confirm portions when you book.',
    category: 'Traditional Meals',
    priceLabel: PRICE,
    image: images.feast,
    featured: true,
  },
  {
    id: 'tshisanyama',
    name: 'Tshisanyama Feast',
    description:
      'Mouthwatering tshisanyama — fire-kissed braai with traditional sides. Ideal for groups and celebrations.',
    category: 'Traditional Meals',
    priceLabel: PRICE,
    image: images.braai,
    featured: true,
  },
  {
    id: 'umleqwa',
    name: 'Umleqwa (Hardbody Chicken)',
    description:
      'Free-range hardbody chicken slow-cooked in its own sauces, in the traditional Xhosa style.',
    category: 'Main Courses',
    priceLabel: PRICE,
    image: images.chicken,
    featured: true,
  },
  {
    id: 'beef-potjie',
    name: 'Isityu Senkomo (Beef Potjie)',
    description:
      'Fall-off-the-bone beef stew, slowly cooked in a cast-iron potjie until the sauce is deep and comforting.',
    category: 'Main Courses',
    priceLabel: PRICE,
    image: images.stew,
    featured: true,
  },
  {
    id: 'mogodu',
    name: 'Mogodu (Tripe)',
    description:
      'Slow-cooked tripe for guests who know this classic. A true taste of home, prepared with patience.',
    category: 'Main Courses',
    priceLabel: PRICE,
    image: images.hands,
  },
  {
    id: 'veggie-plate',
    name: 'Seven Colour Veggie Plate',
    description:
      'Two side options served with chakalaka and complimentary salads — Mzansi colour without the meat.',
    category: 'Vegetarian',
    priceLabel: PRICE,
    image: images.veg,
    featured: true,
  },
  {
    id: 'umngqusho',
    name: 'Umngqusho',
    description:
      'Savoury samp and beans, the quiet heart of many Eastern Cape Sunday tables.',
    category: 'Vegetarian',
    priceLabel: PRICE,
    image: images.rice,
  },
  {
    id: 'umfino',
    name: 'Umfino',
    description:
      'Wild-green comfort: a traditional leafy dish prepared with the day’s garden harvest.',
    category: 'Vegetarian',
    priceLabel: PRICE,
    image: images.greens,
  },
  {
    id: 'sorghum-salad',
    name: 'Sorghum Salad',
    description:
      'Nutty sorghum tossed with bright vegetables — a plant-led plate with real South African grain character.',
    category: 'Vegetarian',
    priceLabel: PRICE,
    image: images.salad,
  },
  {
    id: 'lentil-bobotie',
    name: 'Lentil Bobotie',
    description:
      'A plant-based take on the Cape classic: spiced lentils under a golden savoury custard.',
    category: 'Vegetarian',
    priceLabel: PRICE,
    image: images.spices,
  },
  {
    id: 'chakalaka',
    name: 'Bean Chakalaka',
    description:
      'Medium-spiced bean chakalaka — the relish that makes a seven colours plate sing.',
    category: 'Sides',
    priceLabel: PRICE,
    image: images.spices,
  },
  {
    id: 'beetroot',
    name: 'Pickled Beetroot',
    description:
      'Traditional pickled beetroot with a sweet and tangy kick — the red in the rainbow plate.',
    category: 'Sides',
    priceLabel: PRICE,
    image: images.salad,
  },
  {
    id: 'spinach',
    name: 'Savoury Spinach',
    description:
      'Swiss chard with whole-grain mustard, onions and peppers.',
    category: 'Sides',
    priceLabel: PRICE,
    image: images.greens,
  },
  {
    id: 'ujeqe',
    name: 'Ujeqe (Steamed Bread)',
    description:
      'Soft steamed bread, made for mopping up potjie and chakalaka.',
    category: 'Sides',
    priceLabel: PRICE,
    image: images.bread,
  },
  {
    id: 'yellow-rice',
    name: 'Turmeric Yellow Rice',
    description:
      'Sunshine-yellow rice with a gentle turmeric fragrance — a staple of the seven colours plate.',
    category: 'Sides',
    priceLabel: PRICE,
    image: images.rice,
  },
  {
    id: 'magwinya',
    name: 'Magwinya (Vetkoek)',
    description:
      'Golden fat cakes — a Waterfront favourite from the truck to the sit-down table.',
    category: 'Breakfast',
    priceLabel: PRICE,
    image: images.magwinya,
    featured: true,
  },
  {
    id: 'breakfast-spread',
    name: 'Breakfast spread',
    description:
      'Morning plates change with the kitchen. Ask the team for today’s breakfast offering when you arrive or book.',
    category: 'Breakfast',
    priceLabel: PRICE,
    image: images.breakfast,
    placeholder: true,
  },
  {
    id: 'pap-placeholder',
    name: 'Warm breakfast porridge',
    description:
      'Placeholder item — replace with the current breakfast porridge or pap special from the kitchen.',
    category: 'Breakfast',
    priceLabel: PRICE,
    image: images.coffee,
    placeholder: true,
  },
  {
    id: 'malva',
    name: 'Malva Pudding',
    description:
      'The South African pudding: sponge soaked in warm sauce, served when the kitchen has it on.',
    category: 'Desserts',
    priceLabel: PRICE,
    image: images.pudding,
    featured: true,
  },
  {
    id: 'melktert',
    name: 'Melktert',
    description:
      'Delicate milk tart with cinnamon — a Cape classic for the end of the table.',
    category: 'Desserts',
    priceLabel: PRICE,
    image: images.dessert,
  },
  {
    id: 'peppermint-tart',
    name: 'Peppermint Crisp Tart',
    description:
      'The celebration fridge tart: caramel, cream and Peppermint Crisp.',
    category: 'Desserts',
    priceLabel: PRICE,
    image: images.tart,
  },
  {
    id: 'ginger-beer',
    name: 'Homemade Ginger Beer',
    description:
      'House ginger beer — ask the team for today’s bottle size and availability.',
    category: 'Drinks',
    priceLabel: PRICE,
    image: images.drink,
  },
  {
    id: 'local-drinks',
    name: 'Local Black- and women-owned pours',
    description:
      'The drinks list leans on local brands such as HER Wines and Tolokazi. Confirm the current list with the restaurant.',
    category: 'Drinks',
    priceLabel: PRICE,
    image: images.beer,
  },
  {
    id: 'soft-drinks',
    name: 'Soft drinks & juices',
    description:
      'Placeholder for the current fridge: still water, sodas and juices. Confirm brands and sizes on site.',
    category: 'Drinks',
    priceLabel: PRICE,
    image: images.juice,
    placeholder: true,
  },
]
