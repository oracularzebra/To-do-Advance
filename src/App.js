import Tasks_list_panel from "./components/tasks_list_panel";
import Tasks_Panel from "./components/tasks_panel";

function App() {


  return (
    <div className="flex ">
      <Tasks_list_panel/>
      <Tasks_Panel/>
    </div>
  );
}

export default App;