import { FlatList, Text } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList({search}) {
  return (
    <FlatList 
        className="w-11/12 mb-12"
        data={dumpData} 
        keyExtractor={(product) => product.id}
        renderItem={({item}) => {
          if(search === "") {
            return <ProductCard {...item}/>
          }
          if(item.title.includes(search)) {
            return <ProductCard {...item}/>
          }
        }
      }
    />
  );
}

const dumpData = [
    {
        id: 1,
        url: "https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9",
        from: "Amazon",
        title: "Apple iPhone 14 Pro Max (128 GB) - Deep Purple",
        image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
        price: 47777,
        targetedPrice: 45000,
        lastChecked: Date.now(),
        availability: true
    },
    {
        id: 3,
        url: "https://www.amazon.eg/-/en/SKM-MX-Virdrio-Plunger-Sharing-Gourmet/dp/B088QF1B37/ref=lp_21863827031_1_3",
        from: "Amazon",
        title: "SKM-MX Virdrio French Press Coffee Maker and Teapot Plunger French Press Coffee Maker for Making Coffee and Tea Better Sharing a Gourmet Coffee 350ML/12oz/1 Cup",
        image: "https://m.media-amazon.com/images/I/71CYZXoo1qL._AC_SL1001_.jpg",
        price: 102,
        targetedPrice: 80,
        lastChecked: Date.now(),
        availability: true
    },
    {
        id: 2,
        url: "https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9",
        from: "Amazon",
        title: "Android iPhone 14 Pro Max (128 GB) - Deep Purple",
        image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
        price: 47777,
        targetedPrice: 45000,
        lastChecked: Date.now(),
        availability: false
    }
]