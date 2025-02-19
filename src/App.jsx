import styled from "styled-components";
import TaskManager from "./components/TaskManager";
import "./index.css";
import React from "react";
import { TaskManagerProvider } from './contexts/TaskManagerContext';

const Container = styled.div`
  padding: 5rem 1.25rem; // 20px 5px

  @media (min-width: 640px) {
    padding: 5rem 2.5rem; // 20px 10px
  }

  @media (min-width: 1024px) {
    padding: 5rem 5rem; // 20px 20px
  }

  @media (min-width: 1280px) {
    padding: 5rem 8rem; // 20px 32px
  }

  @media (min-width: 1536px) {
    padding: 5rem 10rem; // 20px 40px
  }
`;

function App() {
  return (
    <TaskManagerProvider>
      <Container>
        <TaskManager />
      </Container>
    </TaskManagerProvider>
  );
}

export default App;
// import styled from 'styled-components'
// import TaskManager from './components/Main-Page'
// import './index.css'
// import React from 'react';

// const Container = styled.div`
//   padding: 5rem 1.25rem; // 20px 5px

//   @media (min-width: 640px) {
//     padding: 5rem 2.5rem; // 20px 10px
//   }

//   @media (min-width: 1024px) {
//     padding: 5rem 5rem; // 20px 20px
//   }

//   @media (min-width: 1280px) {
//     padding: 5rem 8rem; // 20px 32px
//   }

//   @media (min-width: 1536px) {
//     padding: 5rem 10rem; // 20px 40px
//   }
// `

// function App() {
//   return (
//     <Container>
//       <TaskManager />
//     </Container>
//   );
// }

// export default App;
