import { useRef } from "react";
import { Scrollview, View, Text } from "@x.render/render-ui";
import { ScrollViewRefObject } from "@x.render/render-scrollview/build/lib/types";
import styles from "./index.module.css";
console.log(styles);

const App = () => {
  const scrollViewRef = useRef<ScrollViewRefObject>(null);
  const handleViewScroll = () => {
    scrollViewRef.current.scrollTo({ y: 100 });
  };
  const handleResetScroll = () => {
    scrollViewRef.current._nativeNode.scrollTop = 0;
  };
  const handleOnScroll = (e) => {
    console.log("滚动中", e);
  };
  const handleOnEndReached = () => {
    alert("触发onEndReached事件");
  };
  const handlePositionScroll = () => {
    scrollViewRef.current.scrollIntoView({ id: "password" });
  };
  return (
    <>
      <View className={styles.btnContainer}>
        <Text onClick={handleViewScroll}>滚动100px</Text>
        <Text onClick={handleResetScroll}>恢复滚动</Text>
        <Text onClick={handlePositionScroll}>指定滚动到的元素</Text>
      </View>
      <Scrollview
        scrollEventThrottle={200}
        onScroll={handleOnScroll}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={50}
        ref={scrollViewRef}
        className={styles.scrollView}
      >
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p id="password">滚动到指定元素</p>
        <p>测试文案</p>
        <p>测试文案</p>
        <p>测试文案</p>
      </Scrollview>
    </>
  );
};
export default App;
