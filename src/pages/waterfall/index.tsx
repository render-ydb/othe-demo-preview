import View from "@x.render/render-view";
import Text from "@x.render/render-text";
import Waterfall from "@x.render/render-waterfall";
import { useState } from "react";

let data = [
  { height: 550, item: { title: 550 } },
  { height: 624, item: { title: 624 } },
  { height: 708, item: { title: 708 } },
  { height: 600, item: { title: 600 } },
  { height: 300, item: { title: 300 } },
  { height: 100, item: { title: 100 } },
  { height: 400, item: { title: 400 } },
  { height: 550, item: { title: 550 } },
  { height: 624, item: { title: 624 } },
  { height: 708, item: { title: 708 } },
  { height: 600, item: { title: 600 } },
  { height: 300, item: { title: 300 } },
  { height: 100, item: { title: 100 } },
  { height: 400, item: { title: 400 } },
];

const App = () => {
  const [dataSource, setDataSoruce] = useState(data);

  const loadMore = () => {
    setTimeout(() => {
      setDataSoruce(dataSource.concat(dataSource));
    }, 1000);
  };

  return (
    <View
      style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <View>滚动实现瀑布流</View>
      <Waterfall
        columnWidth={150}
        columnCount={4}
        columnGap={50}
        dataSource={dataSource}
        renderHeader={() => {
          return [
            <View
              key="1"
              style={{
                height: 50,
                backgroundColor: "yellow",
                marginBottom: 20,
              }}
            >
              自定义header1
            </View>,
            <View
              key="2"
              style={{
                height: 50,
                backgroundColor: "yellow",
                marginBottom: 20,
              }}
            >
              自定义header2
            </View>,
          ];
        }}
        renderFooter={() => {
          return (
            <View
              key="3"
              style={{
                height: 20,
                backgroundColor: "blue",
                marginTop: 20,
              }}
            >
              footer1
            </View>
          );
        }}
        renderItem={(item, index) => {
          console.log(item);
          return (
            <View
              key={index}
              style={{
                height: item.height,
                backgroundColor: "red",
                marginBottom: 20,
              }}
            >
              <Text>
                {index}
                {item.item.title}
              </Text>
            </View>
          );
        }}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default App;
