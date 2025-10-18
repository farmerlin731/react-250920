// 方式一：具名 Props 型別 + 傳統函式
type GreetingProps = { name: string; children?: React.ReactNode };
function Greeting({ name, children }: GreetingProps) {
  return (
    <h1>
      Hello, {name}! {children}
    </h1>
  );
}
export default Greeting;
