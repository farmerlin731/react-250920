import BasicForm from "./components/Form";

const formFields = [
  {
    name: "firstName",
    label: "姓氏",
    type: "text",
    rules: { required: true, maxLength: 80 },
  },
  {
    name: "lastName",
    label: "名稱",
    type: "text",
    rules: { required: true, maxLength: 80 },
  },
];

function App() {
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <BasicForm
        onSubmit={onSubmit}
        formFields={formFields}
        resetDate={{
          firstName: "test",
          lastName: "testb",
        }}
      />
    </div>
  );
}

export default App;
