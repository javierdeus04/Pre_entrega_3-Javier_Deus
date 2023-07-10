
export let id = 1;

export class Product {
    constructor(id, category, title, price, url, description) {
      this.id = id;
      this.category = category;
      this.title = title;
      this.price = price;
      this.url = url;
      this.description = description;
      this.mostSell = mostSell;
    }
  }

const hardwareProducts = [
    {
        id: id++,
        title: 'hardware1',
        category: 'consoles',
        price: '21333',
        url: 'url1',
        description: '',
    },
    {   
        id: id++,
        title: 'hardware2',
        category: 'accesories',
        price: '123',
        url: 'url2',
        description: '',
    },
    {
        id: id++,
        title: 'hardware3',
        category: 'consoles',
        price: '32222',
        url: 'url3',
        description: '',
    },
    {
        id: id++,
        title: 'hardware4',
        category: 'devices',
        price: '7851',
        url: 'url4',
        description: '',
    },
];

const videogamesProducts = [
    {
        id: id++,
        title: 'videogame1',
        category: 'ps4',
        price: '1333',
        url: 'url1',
        description: '',
    },
    {
        id: id++,
        title: 'videogame2',
        category: 'ps3',
        price: '1232',
        url: 'url2',
        description: '',
    },
    {
        id: id++,
        title: 'videogame3',
        category: 'xboxone',
        price: '3222',
        url: 'url3',
        description: '',
    },
    {
        id: id++,
        title: 'videogame4',
        category: 'nintendoswitch',
        price: '1851',
        url: 'url4',
        description: '',
    },
];

const merchandinsingProducts = [
    {
        id: id++,
        title: 'merch1',
        category: 'toys',
        price: '1333',
        url: 'url1',
        description: '',
    },
    {
        id: id++,
        title: 'merch2',
        category: 'clothes',
        price: '1232',
        url: 'url2',
        description: '',
    },
    {
        id: id++,
        title: 'merch3',
        category: 'accesories',
        price: '3222',
        url: 'url3',
        description: '',
    },
    {
        id: id++,
        title: 'merch4',
        category: 'bazaar',
        price: '1851',
        url: 'url4',
        description: '',
    },
];

export function generateId() {
    return id++;
  }

export const ProductsList = [...hardwareProducts, ...merchandinsingProducts, ...videogamesProducts];

