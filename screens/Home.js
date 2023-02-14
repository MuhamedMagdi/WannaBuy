import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
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
        id: 2,
        url: "https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9https://www.amazon.eg/-/en/Apple-iPhone-Pro-Max-128/dp/B0BDJ2TSZV/ref=sr_1_9?keywords=iphone+14+pro+max&qid=1676400852&sprefix=iphone%2Caps%2C149&sr=8-9",
        from: "Amazon",
        title: "Apple iPhone 14 Pro Max (128 GB) - Deep Purple",
        image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
        price: 47777,
        targetedPrice: 45000,
        lastChecked: Date.now(),
        availability: true
    }
]
