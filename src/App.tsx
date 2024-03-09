import './App.css'
import CircuitDiagram from "./Components/CircuitDesigner/CircuitDesigner.tsx";
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import {Layout} from "antd";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {ReactFlowProvider} from "reactflow";

const {Content} = Layout;


function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Sidebar/>
        <Content>
          <ReactFlowProvider>
            <CircuitDiagram/>
          </ReactFlowProvider>
        </Content>
      </Layout>
    </DndProvider>
  )
}

export default App;