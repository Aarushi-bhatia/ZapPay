import Dashboard from "../components/Dashboard"
import SendMoney from "../components/SendMoney"
import Signin from "../components/Signin"
import Signup from "../components/Signup"

function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
